/*
 * Copyright (c) 2014
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */
if (!OCA.Documents) {
	/**
	 * @namespace OCA.Documents
	 */
	OCA.Documents = {};
}

OCA.Documents.App = {
	_initialized: false,

	initialize: function($el) {
		if (this._initialized) {
			return;
		}
		this._initialized = true;
		var urlParams = OC.Util.History.parseUrlQuery();
		this.fileList = new OCA.Documents.FileList(
			$('#app-content-documents'), {
				scrollContainer: $('#app-content'),
				fileActions: this._createFileActions(),
				detailsViewEnabled: true,
				scrollTo: urlParams.scrollto,
				config: OCA.Files.App.getFilesConfig()
			}
		);
	},

	_createFileActions: function() {
		var fileActions = new OCA.Files.FileActions();
		fileActions.register('dir', 'Open', OC.PERMISSION_READ, '', function (filename, context) {
			var dir = context.fileList.getCurrentDirectory();
			context.fileList.changeDirectory(OC.joinPaths(dir, filename));
		});

		fileActions.setDefault('dir', 'Open');

		fileActions.registerAction({
			name: 'Delete',
			displayName: t('files', 'Delete'),
			mime: 'all',
			permissions: OC.PERMISSION_READ,
			iconClass: 'icon-delete',
			render: function(actionSpec, isDefault, context) {
				var $actionLink = fileActions._makeActionLink(actionSpec, context);
				$actionLink.attr('original-title', t('files_documents', 'Delete permanently'));
				$actionLink.children('img').attr('alt', t('files_documents', 'Delete permanently'));
				context.$file.find('td:last').append($actionLink);
				return $actionLink;
			},
			actionHandler: function(filename, context) {
				var fileList = context.fileList;
				$('.tipsy').remove();
				var tr = fileList.findFileEl(filename);
				var deleteAction = tr.children("td.date").children(".action.delete");
				deleteAction.removeClass('icon-delete').addClass('icon-loading-small');
				fileList.disableActions();
				$.post(OC.filePath('files_documents', 'ajax', 'delete.php'), {
						files: JSON.stringify([filename]),
						dir: fileList.getCurrentDirectory()
					},
					_.bind(fileList._removeCallback, fileList)
				);
			}
		});
		return fileActions;
	}
};


(function() {
	/**
	 * @class OCA.Documents.FileList
	 * @augments OCA.Files.FileList
	 * @classdesc List of Documents
	 *
	 * @param $el container element with existing markup for the #controls
	 * and a table
	 * @param [options] map of options
	 */
	var FileList = function($el, options) {
		this.initialize($el, options);
	};
	FileList.prototype = _.extend({}, OCA.Files.FileList.prototype,
		/** @lends OCA.Documents.FileList.prototype */ {
			id: 'documents',
			appName: t('documents', 'Documents'),

			/**
			 * @private
			 */
			initialize: function() {
				var result = OCA.Files.FileList.prototype.initialize.apply(this, arguments);

				this.setSort('mtime', 'desc');
				/**
				 * Override crumb making to add "Documents" entry
				 */
				this.breadcrumb._makeCrumbs = function() {
					var parts = OCA.Files.BreadCrumb.prototype._makeCrumbs.apply(this, arguments);
					return parts;
				};

				OC.Plugins.attach('OCA.Documents.FileList', this);
				this.setupUploadEvents();
				return result;
			},

			/**
			 * Override to only return read permissions
			 */
			getDirectoryPermissions: function() {
				return OC.PERMISSION_READ | OC.PERMISSION_DELETE;
			},

			_setCurrentDir: function(targetDir) {
				OCA.Files.FileList.prototype._setCurrentDir.apply(this, arguments);

				var baseDir = OC.basename(targetDir);
				if (baseDir !== '') {
					this.setPageTitle(baseDir);
				}
			},

			getAjaxUrl: function(action, params) {
				var q = '';
				if (params) {
					q = '?' + OC.buildQueryString(params);
				}
				return OC.filePath('documents', 'ajax', action + '.php') + q;
			},

			linkTo: function(dir){
				return OC.linkTo('files', 'index.php')+"?view=documents&dir="+ encodeURIComponent(dir).replace(/%2F/g, '/');
			},

			updateEmptyContent: function(){
				var exists = this.$fileList.find('tr:first').exists();
				this.$el.find('#emptycontent').toggleClass('hidden', exists);
				this.$el.find('#filestable th').toggleClass('hidden', !exists);
			},

			_removeCallback: function(result) {
				if (result.status !== 'success') {
					OC.dialogs.alert(result.data.message, t('documents', 'Error'));
				}

				var files = result.data.success;
				var $el;
				for (var i = 0; i < files.length; i++) {
					$el = this.remove(OC.basename(files[i].filename), {updateSummary: false});
					this.fileSummary.remove({type: $el.attr('data-type'), size: $el.attr('data-size')});
				}
				this.fileSummary.update();
				this.updateEmptyContent();
				this.enableActions();
			},

			enableActions: function() {
				this.$el.find('.action').css('display', 'inline');
				this.$el.find('input:checkbox').removeClass('u-hidden');
			},

			disableActions: function() {
				this.$el.find('.action').css('display', 'none');
				this.$el.find('input:checkbox').addClass('u-hidden');
			},

			updateStorageStatistics: function() {
				// no op because the documents doesn't have
				// storage info like free space / used space
			},

			isSelectedDeletable: function() {
				return true;
			},

			/**
			 * Reloads the file list using ajax call
			 *
			 * @return ajax call object
			 */
			reload: function() {
				this._selectedFiles = {};
				this._selectionSummary.clear();
				this.$el.find('.select-all').prop('checked', false);
				this.showMask();
				if (this._reloadCall) {
					this._reloadCall.abort();
				}
				this._reloadCall = $.ajax({
					url: OC.generateUrl('apps/documents/ajax/documents/list'),
					data: {
						dir : this.getCurrentDirectory(),
						sort: this._sort,
						sortdirection: this._sortDirection
					}
				});
				var callBack = this.reloadCallback.bind(this);
				return this._reloadCall.then(callBack, callBack);
			},
			reloadCallback: function(result) {
				delete this._reloadCall;
				this.hideMask();

				if (!result || result.status === 'error') {
					// if the error is not related to folder we're trying to load, reload the page to handle logout etc
					if (result.data.error === 'authentication_error' ||
						result.data.error === 'token_expired' ||
						result.data.error === 'application_not_enabled'
					) {
						OC.redirect(OC.generateUrl('apps/files'));
					}
					OC.Notification.show(result.data.message);
					return false;
				}

				if (result.status === 401) {
					return false;
				}

				// Firewall Blocked request?
				if (result.status === 403) {
					// Go home
					this.changeDirectory('/');
					OC.Notification.show(t('files', 'This operation is forbidden'));
					return false;
				}

				// Did share service die or something else fail?
				if (result.status === 500) {
					// Go home
					this.changeDirectory('/');
					OC.Notification.show(t('files', 'This directory is unavailable, please check the logs or contact the administrator'));
					return false;
				}

				if (result.status === 404) {
					// go back home
					this.changeDirectory('/');
					return false;
				}
				// aborted ?
				if (result.status === 0){
					return true;
				}

				this.setFiles(result.data.files);
				return true;
			}
		});

	OCA.Documents.FileList = FileList;
})();

$(document).ready(function() {
	$('#app-content-documents').one('show', function() {
		var App = OCA.Documents.App;
		App.initialize($('#app-content-documents'));
	});
});
<?php

/**
 * ownCloud - Documents App
 *
 * @author Victor Dubiniuk
 * @copyright 2013 Victor Dubiniuk victor.dubiniuk@gmail.com
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later.
 */

namespace OCA\Documents;

class DocumentController extends Controller{
	const ODT_TEMPLATE = 'UEsDBBQAAAgAAC6aLENexjIMJwAAACcAAAAIAAAAbWltZXR5cGVhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHRQSwMEFAAACAAALposQ9dwh9LYAgAA2AIAABgAAABUaHVtYm5haWxzL3RodW1ibmFpbC5wbmeJUE5HDQoaCgAAAA1JSERSAAAAxgAAAQAIAgAAAGc/nhcAAAKfSURBVHic7dKxCQAwDMCwDvn/5fQJQ6FIF3jw7O6BzrwO4DeWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYpYiZililiJmKWKWImYpYheoVwb+sqPDzwAAAABJRU5ErkJgglBLAwQUAAgICAAumixDAAAAAAAAAAAAAAAACwAAAGNvbnRlbnQueG1s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bj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPG9mZmljZTpkb2N1bWVudC1tZXRhIHhtbG5zOm9mZmljZT0idXJuOm9hc2lzOm5hbWVzOnRjOm9wZW5kb2N1bWVudDp4bWxuczpvZmZpY2U6MS4wIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczptZXRhPSJ1cm46b2FzaXM6bmFtZXM6dGM6b3BlbmRvY3VtZW50OnhtbG5zOm1ldGE6MS4wIiB4bWxuczptYXRoPSJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MIiB4bWxuczpmb3JtPSJ1cm46b2FzaXM6bmFtZXM6dGM6b3BlbmRvY3VtZW50OnhtbG5zOmZvcm06MS4wIiB4bWxuczpvb289Imh0dHA6Ly9vcGVub2ZmaWNlLm9yZy8yMDA0L29mZmljZSIgeG1sbnM6Z3JkZGw9Imh0dHA6Ly93d3cudzMub3JnLzIwMDMvZy9kYXRhLXZpZXcjIiBvZmZpY2U6dmVyc2lvbj0iMS4yIj48b2ZmaWNlOm1ldGE+PG1ldGE6aW5pdGlhbC1jcmVhdG9yPlZpY3RvciBEdWJpbml1azwvbWV0YTppbml0aWFsLWNyZWF0b3I+PG1ldGE6Y3JlYXRpb24tZGF0ZT4yMDEzLTA5LTEyVDIyOjE3OjAzPC9tZXRhOmNyZWF0aW9uLWRhdGU+PG1ldGE6ZG9jdW1lbnQtc3RhdGlzdGljIG1ldGE6dGFibGUtY291bnQ9IjAiIG1ldGE6aW1hZ2UtY291bnQ9IjAiIG1ldGE6b2JqZWN0LWNvdW50PSIwIiBtZXRhOnBhZ2UtY291bnQ9IjEiIG1ldGE6cGFyYWdyYXBoLWNvdW50PSIwIiBtZXRhOndvcmQtY291bnQ9IjAiIG1ldGE6Y2hhcmFjdGVyLWNvdW50PSIwIiBtZXRhOm5vbi13aGl0ZXNwYWNlLWNoYXJhY3Rlci1jb3VudD0iMCIvPjxtZXRhOmdlbmVyYXRvcj5MaWJyZU9mZmljZS8zLjYkTGludXhfWDg2XzY0IExpYnJlT2ZmaWNlX3Byb2pl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';
	
	public static function create($args){
		$uid = self::preDispatch();
		
		$view = new \OC\Files\View('/' . $uid . '/files');
		
		$dir = \OCP\Config::getUserValue(\OCP\User::getUser(), 'documents', 'save_path', '/');
		if (!$view->is_dir($dir)){
			$dir = '/';
		}
		$path = Helper::getNewFileName($view, $dir . '/New Document.odt');
		
		$content = base64_decode(self::ODT_TEMPLATE);
		if (class_exists('\OC\Files\Type\TemplateManager')){
			$manager = \OC_Helper::getFileTemplateManager();
			$templateContent = $manager->getTemplate(Storage::MIMETYPE_LIBREOFFICE_WORDPROCESSOR);
			if ($templateContent){
				$content = $templateContent;
			}
		}
		
		if ($view->file_put_contents($path, $content)){
			$info = $view->getFileInfo($path);
			\OCP\JSON::success(array ('fileid' => $info['fileid']) );
		} else {
			\OCP\JSON::error(
					array ('message' => Config::getL10n()->t('Can\'t create document'))
			);
		}
	}


	/**
	 * Process partial/complete file download
	 * @param array $args - array containing session id as an element with a key es_id 
	 */
	public static function serve($args){
		$session = new Db_Session();
		$session->load(@$args['es_id']);
			
		self::preDispatchGuest();
		
		$filename = $session->getGenesisUrl() ? $session->getGenesisUrl() : '';
		$download = new Download($session->getOwner(), $filename);
		$download->sendResponse();
	}
	

	public static function rename($args){
		self::preDispatch();
		
		$fileId = intval(Helper::getArrayValueByKey($args, 'file_id', 0));
		$name = Helper::getArrayValueByKey($_POST, 'name');

		$view = \OC\Files\Filesystem::getView();
		$path = $view->getPath($fileId);

		if (isset($name) && $view->is_file($path) && $view->isUpdatable($path)) {
			$newPath = dirname($path) . '/' . $name;
			if ($view->rename($path, $newPath)) {
				\OCP\JSON::success();
				return;
			}
		}
		\OCP\JSON::error(array(
			'message' => Config::getL10n()->t('You don\'t have permission to rename this document')
		));
	}
	
	public static function canReview($args){
		self::preDispatch();
		$fileId = intval(Helper::getArrayValueByKey($args, 'file_id', 0));
		$shareWith = Helper::getArrayValueByKey($_POST, 'share_with');
		\OCP\JSON::success(array('canReview'=> Db_Review::canReview($fileId, $shareWith)));
	}
	
	public static function updateReview($args){
		self::preDispatch();
		$fileId = intval(Helper::getArrayValueByKey($args, 'file_id', 0));
		$shareWith = Helper::getArrayValueByKey($_POST, 'share_with');
		$reviewAllowed = (bool) intval(Helper::getArrayValueByKey($_POST, 'can_review', 0));
		
		if ($reviewAllowed){
			Db_Review::addEntry($fileId, $shareWith);
		} else {
			Db_Review::removeEntry($fileId, $shareWith);
		}
		\OCP\JSON::success(array('canReview'=> Db_Review::canReview($fileId, $shareWith)));
	}

	/**
	 * lists the documents the user has access to (including shared files, once the code in core has been fixed)
	 * also adds session and member info for these files
	 */
	public static function listAll(){
		self::preDispatch();
		
		$found = Storage::getDocuments();

		$fileIds = array();
		$documents = array();
		foreach ($found as $key=>$document) {
			if (is_object($document)){
				$documents[] = $document->getData();
			} else {
				$documents[$key] = $document;
			}
			$documents[$key]['icon'] = preg_replace('/\.png$/', '.svg', \OC_Helper::mimetypeIcon($document['mimetype']));
			$fileIds[] = $document['fileid'];
		}

		usort($documents, function($a, $b){
			return @$b['mtime']-@$a['mtime'];
		});
		
		$session = new Db_Session();
		$sessions = $session->getCollectionBy('file_id', $fileIds);

		$members = array();
		$member = new Db_Member();
		foreach ($sessions as $session) {			
			$members[$session['es_id']] = $member->getActiveCollection($session['es_id']);
		}

		\OCP\JSON::success(array('documents' => $documents,'sessions' => $sessions,'members' => $members));
	}
}

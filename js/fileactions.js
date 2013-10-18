$(document).ready(function() {
	"use strict";
	
	// add file action to file list, if available
	if(typeof FileActions!=='undefined'){
		var supportedMimes = [
			'application/vnd.oasis.opendocument.text'
		];
		for (var i = 0; i < supportedMimes.length; ++i){
			var mime = supportedMimes[i];
			FileActions.register(mime,'View',OC.PERMISSION_UPDATE,'',function(filename){
				var dir = $('#dir').val().replace(/%2F/g, '/');
				window.location = OC.linkTo('documents', 'index.php') + '?file=' + encodeURIComponent(dir + '/' + filename);
			});
			FileActions.setDefault(mime,'View');
		}
	}
});

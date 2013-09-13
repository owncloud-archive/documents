<?php

/**
 * ownCloud - Documents App
 *
 * @author Frank Karlitschek
 * @copyright 2011 Frank Karlitschek karlitschek@kde.org
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either 
 * version 3 of the License, or any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *  
 * You should have received a copy of the GNU Lesser General Public 
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */


namespace OCA\Documents;

\OCP\User::checkLoggedIn();
\OCP\JSON::checkAppEnabled('documents');
\OCP\App::setActiveNavigationEntry( 'documents_index' );

\OCP\Util::addStyle( 'documents', 'style' );
\OCP\Util::addStyle( 'documents', 'dojo-app' );
\OCP\Util::addStyle( 'documents', 'editor' );
\OCP\Util::addScript('documents', 'documents');

\OCP\Util::addScript('files', 'file-upload');
\OCP\Util::addScript('files', 'jquery.iframe-transport');
\OCP\Util::addScript('files', 'jquery.fileupload');


$tmpl = new \OCP\Template('documents', 'documents', 'user');
$maxUploadFilesize = \OCP\Util::maxUploadFilesize("/");
$tmpl->assign('uploadMaxFilesize', $maxUploadFilesize);
$tmpl->assign('uploadMaxHumanFilesize', \OCP\Util::humanFileSize($maxUploadFilesize));

$tmpl->printPage();

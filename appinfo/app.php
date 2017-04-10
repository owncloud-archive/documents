<?php

/**
 * ownCloud - Documents App
 *
 * @author Frank Karlitschek
 * @copyright 2013-2014 Frank Karlitschek karlitschek@kde.org
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
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Documents\AppInfo;

use OCA\Documents\Filter\Office;
use OCA\Documents\Config;

$app = new Application();
$c = $app->getContainer();

\OCP\App::registerAdmin('documents', 'admin');
\OCP\App::registerPersonal('documents', 'personal');

$navigationEntry = function () use ($c) {
	return [
		'id' => 'documents_index',
		'order' => 2,
		'href' => $c->query('ServerContainer')->getURLGenerator()->linkToRoute('documents.document.index'),
		'icon' => $c->query('ServerContainer')->getURLGenerator()->imagePath('documents', 'documents.svg'),
		'name' => $c->query('L10N')->t('Documents')
	];
};
$c->getServer()->getNavigationManager()->add($navigationEntry);

//Script for registering file actions
$eventDispatcher = \OC::$server->getEventDispatcher();
$eventDispatcher->addListener(
	'OCA\Files::loadAdditionalScripts',
	function() {
		\OCP\Util::addStyle('documents', 'style');
		\OCP\Util::addScript('documents', 'viewer/viewer');
		\OCP\Util::addScript('documents', 'filelist');
	}
);

if ($c->query('AppConfig')->isConverterEnabled()){
	new Office(
		[
			'read' =>
				[
					'target' => 'application/vnd.oasis.opendocument.text',
					'format' => 'odt:writer8',
					'extension' => 'odt'
				],
			'write' => 
				[
					'target' => 'application/msword',
					'format' => 'doc',
					'extension' => 'doc'
				]
		]
	);

	new Office(
		[
			'read' =>
				[
					'target' => 'application/vnd.oasis.opendocument.text',
					'format' => 'odt:writer8',
					'extension' => 'odt'
				],
			'write' =>
				[
					'target' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
					'format' => 'docx',
					'extension' => 'docx'
				]
		]
	);
}

\OCA\Files\App::getNavigationManager()->add(
	[
		"id" => 'documents',
		"appname" => 'documents',
		"script" => 'list.php',
		"order" => 10,
		"name" => \OC::$server->getL10N('documents')->t('Documents')
	]
);

//Listen to delete file signal
\OCP\Util::connectHook('OC_Filesystem', 'delete', "OCA\Documents\Storage", "onDelete");

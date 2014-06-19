<?php

/**
 * ownCloud - Documents App
 *
 * @author Victor Dubiniuk
 * @copyright 2014 Victor Dubiniuk victor.dubiniuk@gmail.com
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later.
 */

namespace OCA\Documents;

class Db_Review extends Db{

	const DB_TABLE = '`*PREFIX*documents_review`';
	
	protected $tableName  = '`*PREFIX*documents_review`';

	protected $insertStatement  = 'INSERT INTO `*PREFIX*documents_review` (`share_id`) VALUES (?)';
	
	protected $loadStatement = 'SELECT * FROM `*PREFIX*documents_review` WHERE `share_id`= ?';

}

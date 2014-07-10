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

	public static function canReview($fileId, $sharedWith){
		$canReview = 0;
		$shareId = self::getShareId($fileId, $sharedWith);
		if ($shareId){
			$reviewModel = new Db_Review();
			$reviewModel -> load($shareId);
			$canReview = intval($reviewModel->hasData());
		}
		
		return $canReview;
	}
	
	public static function addEntry($fileId, $sharedWith){
		$shareId = self::getShareId($fileId, $sharedWith);
		if ($shareId){
			$reviewModel = new Db_Review();
			$reviewModel->load($shareId);
			if (!$reviewModel->hasData()){
				$newReview = new Db_Review(array($shareId));
				$newReview->insert();
			}
		}
	}
	
	public static function removeEntry($fileId, $sharedWith){
		$shareId = self::getShareId($fileId, $sharedWith);
		if ($shareId){
			$reviewModel = new Db_Review();
			$reviewModel->deleteBy('share_id', $shareId);
		}
	}
	
	protected static function getShareId($fileId, $sharedWith){
		$shareId = 0;
		if (!$fileId){
			return $shareId;
		}
		$shareData = \OCP\Share::getItemShared('file', (string) $fileId);
		if ($shareData){
			foreach ($shareData as $id=>$item){
				if (isset($item['share_with']) && $item['share_with'] == $sharedWith){
					$shareId = $id;
					break;
				}
			}
		}
		return $shareId;
	}
}

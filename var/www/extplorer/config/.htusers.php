<?php
/** @version $Id: .htusers.php 135 2009-01-27 21:57:15Z ryu_ms $ */
/** ensure this file is being included by a parent file */
if( !defined( '_JEXEC' ) && !defined( '_VALID_MOS' ) ) die( 'Restricted access' );

$GLOBALS["users"]=array(
	array("admin","$2a$08$EIGV7Q1M8RE.vmsBd/WjY.g2sXri9CeAtevf7cOWSOdfGMy/uceCC",empty($_SERVER['DOCUMENT_ROOT'])?realpath(dirname(__FILE__).'/..'):$_SERVER['DOCUMENT_ROOT'],"http://localhost",1,"",7,1),
); ?>

<?php
//Sample Database Connection Syntax for PHP and MySQL.

//Connect To Database

$hostname="colvin.chillan.ubiobio.cl/phpMyAdmin/";
$username="fmunozv";
$password="XKUoD5C1FYlb";
$dbname="fmunozv";
$usertable="cuentas";
$yourfield = "your_field";

mysql_connect($hostname,$username, $password) or die ("<html><script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)</script></html>");
mysql_select_db($dbname);

# Check If Record Exists

$query = "insert into $usertable values";

$result = mysql_query($query);

if($result)
{
  while($row = mysql_fetch_array($result))
  {
    $name = $row["$yourfield"];
    echo "Name: ".$name."<br>";
  }
}
?>
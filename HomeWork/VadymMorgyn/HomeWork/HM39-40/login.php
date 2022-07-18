<?php

$login = trim($_GET["login"]);
$pass = trim($_Get["pass"]);



if($login == "" || $pass == ""){
	echo "Помилка. Заповніть поля";
	return;
} else if($login != 'login' || $pass != '123'){
	echo "Такий користувач не знайден";
	return;
}else{
	echo "Вітаю в кабінеті";
};









/*$action = $_GET['action'];

if($action == 'book'){
	echo book();
}

function book(){
	$arrayName = array('1' => "King", "2" => "Avtor2", "3" => "Avtor3");
	return json_encode($arrayName);
}
*/


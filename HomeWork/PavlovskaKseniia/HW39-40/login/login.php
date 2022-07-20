<?php

$login = trim($_GET["login"]);
$pass = trim($_Get["pass"]);



if($login == "" || $pass == ""){
	echo "Ви не заповнили поля. Спробуйте ще";
	return;
} else if($login != 'login' || $pass != '123'){
	echo "Такий користувач не знайден";
	return;
}else{
	echo "Ласкаво просимо";
};



<?php

$recepient = "example@gmail.com";
$sitename = "Обратный звонок";

$name = trim($_POST["name-callback"]);
$phone = trim($_POST["phone-callback"]);
$time = trim($_POST["time-callback"]);
$message = "Имя: $name \nТелефон: $phone \nВремя: $time";

$pagetitle = "Цветы \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
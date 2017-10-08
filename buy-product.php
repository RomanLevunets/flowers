<?php

$recepient = "example@gmail.com";
$sitename = "Купить в один клик";
$name = trim($_POST["name-buy"]);
$phone = trim($_POST["phone-buy"]);
$time = trim($_POST["time-buy"]);
$productName = trim($_POST["product-name"]);
$message = "Имя: $name \nТелефон: $phone \nВремя: $time \nНазвание букета: $productName";

$pagetitle = "Цветы: \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
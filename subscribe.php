<?php

$recepient = "example@gmail.com";
$sitename = "Подписка";

$email = trim($_POST["email"]);
$message = "Email: $email";

$pagetitle = "Цветы \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
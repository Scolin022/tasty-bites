<?php

// credential variables
$host = "localhost";
$databaseName = "tasty_bites";
$username = "root";
$password = "root";

// set up DSN
$dsn = "mysql:host=$host;dbname=$databaseName";

// try-catch block, make sure successful.
try {
    $pdo = new PDO($dsn, $username, $password);
        // echo "Connection successful!";
} catch (PDOException $error) {
    if($error->getCode() == 1045) {
        echo "Connection failed due to incorrect login details.";
    } else {
        echo "Connection failed with error code" . $error->getCode();
    }
}
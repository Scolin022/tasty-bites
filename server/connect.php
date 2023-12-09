<?php
// (3a) Make credential variables for connection
$host = "localhost";
$databaseName = "tasty_bites";
$username = "root";
$password = "root";

// (3b) Set up the DSN. $dsn is the data source name. It's a string that has info about
// the database like it's type(MySQL here), host, database name, username, etc.
$dsn = "mysql:host=$host;dbname=$databaseName";

// (3c) Use a try-catch block to catch any errors and make sure that the connection is
// successful.
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
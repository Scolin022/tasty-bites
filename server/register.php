<?php

header("Access-Control-Allow-Origin: *");

var_dump($_POST);

require_once('connect.php');

try {
    // table if it doesn't exist
    $sql = "CREATE TABLE IF NOT EXISTS users (
      UserID INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      Username VARCHAR(30) NOT NULL,
      Email VARCHAR(50),
      PasswordHash VARCHAR(50)
    )";
    $pdo->exec($sql);

    // data from form into table
    $userName = $_POST["username"]; // $_POST should match htmlFor on form
    $userEmail = $_POST["email"];
    $userPassword = $_POST["password"];

    $sql = "INSERT INTO users (Username, Email, PasswordHash) VALUES (?, ?, ?)";

    // prepare and execute
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$userName, $userEmail, $userPassword]);

    echo "New record created successfully";
    
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// connection end
$pdo = null;
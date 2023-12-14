<?php

session_start();

// need add code to the beginning of each protected page:
//     session_start();
    
//     if (!isset($_SESSION['user'])) {
                    // User is not logged in
                    // Redirect to login page or show an error
    //     header("Location: login.php");
    //     exit;
    // }

require_once('connect.php');

$username = $_POST['username'];
$password = $_POST['password'];
$honeypot = $_POST['honeypot'];

if (!empty($honeypot)) {
    // probably bot, log it
    logBotAttempt($_SERVER['REMOTE_ADDR'], $_POST);
    exit;
    
    // if wanted can send a fake success
    // echo json_encode(["success" => false]);
}

// validation for credentials
function loginUser($username, $password, $pdo) {
    // SQL statement for SQL injection
    $stmt = $pdo->prepare("SELECT PasswordHash FROM Users WHERE Username = :username");
    $stmt->execute(['username' => $username]);

    if ($stmt->rowCount() > 0) {
        // user found, verify password
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $user['PasswordHash'])) {
            return true;
        }
    }
    return false;
}

$isLoggedIn = loginUser($username, $password, $pdo);

if ($isLoggedIn) {
    $_SESSION['user'] = $username; // stores in session variable
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}
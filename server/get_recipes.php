<?php

// CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// connection
require_once('connect.php');

try {
    // prepare statement
    $stmt = $pdo->prepare("SELECT * FROM recipes");
    $stmt->execute();

    // fetch data
    $recipes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // data to JSON and output
    echo json_encode($recipes);

} catch(PDOException $e) {
    // exception
    echo 'Error: ' . $e->getMessage();
}
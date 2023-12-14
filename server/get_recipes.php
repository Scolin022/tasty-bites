<?php

// CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// connection
require('connect.php');

try {
    // Preparing statement
    $stmt = $pdo->prepare("SELECT * FROM recipes");
    $stmt->execute();

    // getting data
    $recipes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // make JSON and show
    echo json_encode($recipes);

} catch(PDOException $e) {
    // exceptions
    echo 'Error: ' . $e->getMessage();
}
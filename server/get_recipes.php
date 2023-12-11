<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Create connection
require_once('connect.php');

try {
    // Prepare the statement
    $stmt = $pdo->prepare("SELECT * FROM recipes");
    $stmt->execute();

    // Fetch the data
    $recipes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Convert data to JSON and output
    echo json_encode($recipes);

} catch(PDOException $e) {
    // Handle exception
    echo 'Error: ' . $e->getMessage();
}
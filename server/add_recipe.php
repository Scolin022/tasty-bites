<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");

var_dump($_POST);

// Create connection
require_once('connect.php');

try {
    // Create table if it doesn't exist
    $sql = "CREATE TABLE IF NOT EXISTS recipes (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
        author_id INT(11) DEFAULT NULL,
        title VARCHAR(100) DEFAULT NULL,
        image VARCHAR(255) DEFAULT NULL,
        description TEXT,
        servings INT(11) DEFAULT NULL,
        prep_time TEXT NOT NULL,
        cook_time TEXT NOT NULL
    )";
    $pdo->exec($sql);

    // Insert data from form into table
    $recipeName = $_POST["title"]; // $_POST should match htmlFor on form
    $recipeImage = $_POST["image"];
    $recipeDescription = $_POST["description"];
    $recipeServings = $_POST["servings"];
    $recipeCookTime = $_POST["prep-time"];
    $recipePrepTime = $_POST["cook-time"];

    $sql = "INSERT INTO recipes (title, image, description, servings, prep_time, cook_time) VALUES (?, ?, ?, ?, ?, ?)";

    // Prepare and execute the query
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$recipeName, $recipeImage, $recipeDescription, $recipeServings, $recipeCookTime, $recipePrepTime]);

    echo "New recipe sucessfully added!";
    
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Close connection
$pdo = null;
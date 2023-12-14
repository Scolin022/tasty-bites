<?php
require 'connect.php';

// CORS block restrictions
header("Access-Control-Allow-Origin: *");

$uploadOk = 1;
$image = $_FILES['image'];
$target_dir = "uploads/";
$target_file = $target_dir . basename($image['name']);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if (isset($_FILES['image'])) {
    // if image file is an actual image or fake image
    $check = getimagesize($image["tmp_name"]);
    if ($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    // image file is an actual image or fake image
    if (isset($_POST["submit"])) {
        $check = getimagesize($image["tmp_name"]);
        if ($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }

    // file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }

    // file size
    if ($image['size'] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // file formats
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif") {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
        exit; // script execution if image upload fails
    } else {
        if (!move_uploaded_file($image["tmp_name"], $target_file)) {
            echo "The file " . basename($_FILES['image']['name']) . " has been uploaded.";
            $sql = "CREATE TABLE IF NOT EXISTS recipes (
                id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
                author_id INT(11) DEFAULT NULL,
                title VARCHAR(100) DEFAULT NULL,
                image LONGBLOB NOT NULL,,
                description TEXT,
                servings INT(11) DEFAULT NULL,
                prep_time TEXT NOT NULL,
                cook_time TEXT NOT NULL
            )";
            $pdo->exec($sql);
            
            // SQL query to insert both recipe data & image path
            $sql = "INSERT INTO recipes (title, image, description, servings, prep_time, cook_time) VALUES (?, ?, ?, ?, ?, ?)";
            
            $recipeName = $_POST["title"];
            $recipeImage = $target_file;
            $recipeDescription = $_POST["description"];
            $recipeServings = $_POST["servings"];
            $recipePrepTime = $_POST["prep-time"];
            $recipeCookTime = $_POST["cook-time"];
            
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$recipeName, $recipeImage, $recipeDescription, $recipeServings, $recipePrepTime, $recipeCookTime]);
            
            echo "The image and recipe was added successfully";
            
            
            $pdo = null; // end connection
        } else {
            echo "Sorry, there was an error uploading your file.";
            exit;
        }
    }
}
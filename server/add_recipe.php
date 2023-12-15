<?php
include 'connect.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Enable CORS
header("Access-Control-Allow-Origin: *");

// $uploadOk = 1;
// Image Upload Logic
$target_dir = "uploads/";
$image = $_FILES['image']['name'];
$target_file = $target_dir . basename($image);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// if (isset($_FILES['image']) && !empty($_FILES['image']['name'])) {
//     // Check if image file is an actual image or fake image
//     $check = getimagesize($image["tmp_name"]);
//     if ($check !== false) {
//         echo "File is an image - " . $check["mime"] . ".";
//         $uploadOk = 1;
//     } else {
//         echo "File is not an image.";
//         $uploadOk = 0;
//     }

//     // Check if image file is an actual image or fake image
//     if (isset($_POST["submit"])) {
//         $check = getimagesize($image["tmp_name"]);
//         if ($check !== false) {
//             echo "File is an image - " . $check["mime"] . ".";
//             $uploadOk = 1;
//         } else {
//             echo "File is not an image.";
//             $uploadOk = 0;
//         }
//     }

//     // Check if file already exists
//     if (file_exists($target_file)) {
//         echo "Sorry, file already exists.";
//         $uploadOk = 0;
//     }

//     // Check file size
//     if ($image['size'] > 500000) {
//         echo "Sorry, your file is too large.";
//         $uploadOk = 0;
//     }

//     // Allow certain file formats
//     if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
//     && $imageFileType != "gif") {
//         echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
//         $uploadOk = 0;
//     }

//     if ($uploadOk == 0) {
//         echo "Sorry, your file was not uploaded.";
//         exit; // Stop script execution if image upload fails
//     } else {
//         if (!move_uploaded_file(['image']['tmp_name'], $target_file)) {
//             echo "Sorry, there was an error uploading your file.";
//             exit; // Stop script execution if file move fails
//         }
//     }
// }

if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
    // File is successfully uploaded
} else {
    echo "Sorry, there was an error uploading your file.";
    exit;
}

// Assuming image upload was successful, proceed with recipe data handling
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

    // Prepare SQL query to insert both recipe data and image path
    $sql = "INSERT INTO recipes (title, image, description, servings, prep_time, cook_time) VALUES (?, ?, ?, ?, ?, ?)";

    $recipeName = $_POST["title"];
    $recipeImage = $image;
    $recipeDescription = $_POST["description"];
    $recipeServings = $_POST["servings"];
    $recipePrepTime = $_POST["prep-time"];
    $recipeCookTime = $_POST["cook-time"];

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$recipeName, $recipeImage, $recipeDescription, $recipeServings, $recipePrepTime, $recipeCookTime]);

$pdo = null; // Close connection
<?php
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $image = $_FILES['image'];

    // where the image will be saved
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($image['name']);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

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

    // if $uploadOk is set to 0
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload
    } else {
        if (move_uploaded_file($image["tmp_name"], $target_file)) {
            // SQL query to insert file path into database
            $query = "INSERT INTO your_table_name (image_column) VALUES (?)";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("s", $target_file);

            // execute
            if ($stmt->execute()) {
                echo json_encode(["message" => "Image uploaded successfully"]);
            } else {
                echo json_encode(["error" => "Failed to insert image path into database"]);
            }

            $stmt->close();
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
    $conn->close();
}
?>
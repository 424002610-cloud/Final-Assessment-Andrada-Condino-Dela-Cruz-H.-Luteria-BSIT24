<?php
header('Content-Type: application/json');
$storageFile = 'comments_db.json';

// Handle incoming feedback submissions
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = trim($_POST['fullName'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');
    $artist  = trim($_POST['selectedArtist'] ?? 'General');

    // Strict validation check matching client constraints
    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($subject) || strlen($message) < 20) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Validation failed. Ensure message is at least 20 characters."]);
        exit();
    }

    $currentData = [];
    if (file_exists($storageFile)) {
        $currentData = json_decode(file_get_contents($storageFile), true) ?? [];
    }

    // Prepare structural database record
    $newComment = [
        "name" => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
        "email" => htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
        "subject" => htmlspecialchars($subject, ENT_QUOTES, 'UTF-8'),
        "message" => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
        "artist" => htmlspecialchars($artist, ENT_QUOTES, 'UTF-8'),
        "timestamp" => date("Y-m-d H:i:s")
    ];

    array_unshift($currentData, $newComment);

    if (file_put_contents($storageFile, json_encode($currentData, JSON_PRETTY_PRINT))) {
        echo json_encode(["status" => "success", "message" => "Comment saved successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to write onto local storage registry file."]);
    }
    exit();
}

// Handle GET requests to load logged data
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (file_exists($storageFile)) {
        echo file_get_contents($storageFile);
    } else {
        echo json_encode([]);
    }
    exit();
}
?>
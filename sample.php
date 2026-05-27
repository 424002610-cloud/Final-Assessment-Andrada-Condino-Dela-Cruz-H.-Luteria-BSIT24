<?php
header('Content-Type: application/json');
$storageFile = 'comments_db.json';

// --- 1. HANDLE SAVE OPERATION (POST) ---
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = trim($_POST['fullName'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');
    $artist  = trim($_POST['selectedArtist'] ?? 'General');

    // Server-Side Strict Validation
    if (
        empty($name) || 
        empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || 
        empty($subject) || 
        empty($message) || strlen($message) < 20
    ) {
        http_response_code(400);
        echo json_encode([
            "status" => "error", 
            "message" => "Server validation failed. Ensure email is valid and message is at least 20 characters."
        ]);
        exit();
    }

    // Load existing database records or instantiate an empty array
    $currentData = [];
    if (file_exists($storageFile)) {
        $currentData = json_decode(file_get_contents($storageFile), true) ?? [];
    }

    // Sanitize data payload for XSS mitigation
    $newComment = [
        "name"      => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
        "email"     => htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
        "subject"   => htmlspecialchars($subject, ENT_QUOTES, 'UTF-8'),
        "message"   => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
        "artist"    => htmlspecialchars($artist, ENT_QUOTES, 'UTF-8'),
        "timestamp" => date("Y-m-d H:i:s")
    ];

    // Prepend the new record so latest comments appear first
    array_unshift($currentData, $newComment);

    // Save update back to storage file
    if (file_put_contents($storageFile, json_encode($currentData, JSON_PRETTY_PRINT))) {
        echo json_encode(["status" => "success", "message" => "Comment saved successfully!", "data" => $newComment]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to write data onto the disk server store."]);
    }
    exit();
}

// --- 2. HANDLE READ OPERATION (GET) ---
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (file_exists($storageFile)) {
        echo file_get_contents($storageFile);
    } else {
        echo json_encode([]);
    }
    exit();
}

// Redirect if accessed directly via wrong method
header("Location: sample.html");
exit();
?>
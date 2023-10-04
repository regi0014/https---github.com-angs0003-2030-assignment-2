<?php
require_once "inc/dbconn.inc.php";

if (isset($_GET["id"])) {
    $taskId = $_GET["id"];
    $sql = "UPDATE Task SET completed = 1, updated = NOW() WHERE id = ?";
    $statement = mysqli_stmt_init($conn);
    
    if (mysqli_stmt_prepare($statement, $sql)) {
        mysqli_stmt_bind_param($statement, 'i', $taskId);
        
        if (mysqli_stmt_execute($statement)) {
            header("location: index.php");
            exit();
        } else {
            echo "Error: " . mysqli_error($conn);
        }
        
        mysqli_stmt_close($statement);
    } else {
        echo "Error: Statement preparation failed.";
    }
    
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Practical 3: History</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Edwin" />
    <script src="scripts/script.js" defer></script>
    <link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body>
    <?php require_once "inc/menu.inc.php"; ?> 
    <h1>Completed Tasks</h1>
    <?php
    require_once "inc/dbconn.inc.php";

    $sql = "SELECT name FROM Task WHERE completed = 1 ORDER BY updated DESC";

    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        echo "<ul>";
        while ($row = mysqli_fetch_assoc($result)) {
            echo '<li>' . $row["name"] . '</li>';
        }
        echo "</ul>";

        mysqli_free_result($result);
        mysqli_close($conn);
    } else {
        echo "No completed tasks found.";
    }
    ?>
</body>
</html>

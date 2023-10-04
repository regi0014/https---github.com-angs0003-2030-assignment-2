<!DOCTYPE html>
<html lang="en">
<head>
    <title>Practical 3: Add</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Edwin" />
    <link rel="stylesheet" href="styles/style.css" />
    <script src="scripts/script.js" defer></script>
</head>  
<body>
    <?php require_once "inc/menu.inc.php"; ?>
    <h1>Add a new task</h1>
    <form action="add-task.php" method="POST">
        <label for="task-name">Task Name:</label>
        <input type="text" id="task-name" name="task-name" required>
        <button type="submit">Add Task</button>
    </form>

</body>
</html>
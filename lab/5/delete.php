<?php
//including the database connection file
include("config.php");
//getting id of the data from url
$empid = $_GET['empid'];
//deleting the row from table
$result = mysqli_query($mysqli, "DELETE FROM empdetails WHERE empid=$empid"); //redirecting to the display page (index.php in our case)
header("Location:index.php");
?> 
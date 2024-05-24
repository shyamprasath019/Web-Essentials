<html>
<head>
 <title>Add Employee Details</title>
</head>
<body>
<?php
//including the database connection file
 include_once("config.php");
 $empid = $_POST['empid'];
 $ename = $_POST['ename'];
 $desig = $_POST['desig'];
 $dept = $_POST['dept'];
 $doj = $_POST['doj'];
 $salary = $_POST['salary'];
 if(isset($_POST['Submit'])) {
 //insert data to database
 $result = mysqli_query($mysqli, "INSERT INTO empdetails values ($empid, '$ename','$desig','$dept','$doj',$salary)");
 //display success message
 echo "<h1 align='center'>Add Employee Details</h1>";  echo "<hr />";
 echo "<font color='green'>Data added successfully.";  echo "<br/><a href='index.php'>View Result</a>";
 }
 ?>
</body>
</html> 
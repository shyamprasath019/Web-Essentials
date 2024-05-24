<?php
//including the database connection file
include_once("config.php");
//fetching data in descending order (lastest entry first)
$result=mysqli_query($mysqli, "SELECT * FROM empdetails ORDER BY empid DESC"); ?>
<html>
<head>
 <title>Homepage</title>
</head>
<body>
 <h1 align="center">Employee Details</h1>
 <hr />
<a href="add.html">Add New Data</a><br/><br/>
 <table width='100%' border=0>
 <tr bgcolor='#CCCCCC'>
 <td>Employee Id.</td>
<td>Name</td>
<td>Designation</td>
<td>Department</td>
<td>DOJ</td>
<td>Salary</td>
<td>Edit / Delete</td>

 </tr>
<?php
 while($res = mysqli_fetch_array($result)) {
 echo "<tr>";
 echo "<td>".$res['empid']."</td>";
 echo "<td>".$res['ename']."</td>";
 echo "<td>".$res['desig']."</td>";
 echo "<td>".$res['dept']."</td>";
 echo "<td>".$res['doj']."</td>";
 echo "<td>".$res['salary']."</td>";
 echo "<td><a href='edit.php?empid=$res[empid]'>Edit</a>";  echo " | <a href='delete.php?empid=$res[empid]'>Delete</a></td>";  echo "</tr>";
 }
 ?>
</table>
</body>
</html>
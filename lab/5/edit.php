<?php
 // including the database connection file
 include_once("config.php");
 if(isset($_POST['update']))
 {
 $empid = $_POST['empid'];
 $ename = $_POST['ename'];
 $desig = $_POST['desig'];
 $dept = $_POST['dept'];
 $doj = $_POST['doj'];
 $salary = $_POST['salary'];

 //updating the table
 $result = mysqli_query($mysqli, "UPDATE empdetails SET ename='$ename', desig='$desig',dept='$dept',doj='$doj',salary=$salary WHERE empid=$empid");
 //redirectig to the display page. In our case, it is index.php header("Location: index.php");
 }
?>
<?php
 echo "<h1 align='center'>Edit Employee Details</h1>";
 echo "<hr />";
 //getting id from url
 $empid = $_GET['empid'];
 //selecting data associated with this particular eid
 $result = mysqli_query($mysqli, "SELECT * FROM empdetails WHERE empid=$empid");
 while($res = mysqli_fetch_array($result))
 {
 $empid = $res['empid'];
 $ename = $res['ename'];
 $desig = $res['desig'];
 $dept = $res['dept'];
 $doj = $res['doj'];
 $salary = $res['salary'];
 }
?>
<html>
<head>
 <title>Edit Employee Details</title>
</head>
<body>
 <a href="index.php">Home</a>
 <br/><br/>
<form name="empform" method="post" action="edit.php">
 <table border="0">
 <tr>
<td>Name : </td>
<td><input type="text" name="ename" value="<?php echo $ename;?>"></td> </tr>
<tr>
<tr>
<td>Designation : </td>
<td><input type="text" name="desig" value="<?php echo $desig;?>"></td> </tr>
<tr>
<td>Department : </td>
<td><input type="text" name="dept" value="<?php echo $dept;?>"></td> </tr>
<td>DOJ : </td>
<td><input type="text" name="doj" value="<?php echo $doj;?>"></td> </tr>
<tr>
<td>Salary</td>
<td><input type="text" name="salary" value="<?php echo $salary;?>"></td> </tr>
<tr>
<td><input type="hidden" name="empid" value=<?php echo $_GET['empid'];?>></td> <td><input type="submit" name="update" value="Update"></td> </tr>
</table>
</form>
</body>
</html> 
<!DOCTYPE HTML>  
<html>
<head>
<style>
        .button {
            background-color: cornflowerblue; /* Green */
            border: none;
            color: white;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            transition-duration: 1s;
            margin: 5px;
            border-radius: 5px;
            /*box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);*/
        }
        .button:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            color: dodgerblue;
            background-color: white;
            padding: 15px;
        }
</style>
</head>
<body style="font-family:Verdana;">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>  
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" style="border-radius:10px;background-color:lightgrey;padding:10px;color:white;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);//margin-bottom:1000px;">
        Email: <input type="email" name="Email" style="border:none;background-color:white;" required><br>
		Username: <input type="text" name="Username" style="border:none;background-color:white;" required><br>
        Password: <input type="password" name="Password" style="border:none;background-color:white;filter:blur(2px);" id="blurpas" required><br>
        <input type="submit"value="Sign Up" class="button">
    </form>
	<!--<div style= "background-color:red;color:white;padding:10px;//margin-bottom:1000px;">
	<script>
	//$(this).css("filter", "blur(2px)");
	//$(document).ready(function(){
    //$("#blurpas").focus(function(){
     //   $(this).css("filter", "blur(2px)");
    //});
    //$("#blurpas").blur(function(){
    //    $(this).css("filter", "blur(0px)");
    //});
//    });
</script>
<?php
echo "Ignore anything that says 'Notice:' below this line.";
?>
</div>-->
<div style="color:white;">
<?php
$servername = "fdb12.atspace.me"; 
$username = "2270049_dan"; 
$password = "LCA124816"; 
$dbname = "2270049_dan";
$fEmail = $_POST['Email'];
$fUsername = $_POST['Username'];
$fPassword = $_POST['Password'];
$correct = "false";
$correct2 = "false";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
echo "failure";
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully ";
//$sql = 'INSERT INTO login (username, password)
//VALUES ("usr", "psa")';
//$row["usr"] = $fUsername;

	                        	  $sql = '';

$sql2 = "SELECT username, password FROM login";
$result = $conn->query($sql2);
    while($row = $result->fetch_assoc()) {
	  if($fUsername == $row["username"]) {
          $correct = "true";
	}
	}
	$sql3 = "SELECT email FROM login";
$result = $conn->query($sql3);
    while($row = $result->fetch_assoc()) {
	  if($fEmail == $row["email"]) {
          $correct2 = "true";
	}
	}
	if($correct == "false" && $correct2 == "false") {
	  echo '<p style="color:green;">Creating...</div>';
	  $sql = 'INSERT INTO login (username, password, ip, email, history)
                                  VALUES ("' . $fUsername . '", "' . $fPassword . '", "' . $_SERVER['REMOTE_ADDR'] . '", "'.$fEmail.'", "not yet created.")';
	//  writeMsg();
	} else {
	if($correct == "true") {
	  echo '<p style="color:red;">The username "<b>' . $fUsername . '</b>" has already been taken.</p>';
	  }
	  	if($correct2 == "true") {
	  echo '<p style="color:red;">The Email "<b>' . $fEmail . '</b>" has already been taken.</p>';
	  }
//	$sql = 'INSERT INTO login (ip)
//    VALUES ("' . $_SERVER['REMOTE_ADDR'] . '")';
	//  writeMsg2();
	}

if ($conn->query($sql) === TRUE) {
  echo '<p style="color:green;">Account Successfully Created. You can now log in by pressing here: <a class="button"style="float:right;padding-top:5px;padding-bottom:5px;background-color:#ff6a00" href="Login.html"target="_blank" onclick="//Login()">Log In</a></div>';
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
//$myfile = fopen("signup.php", "a+") or die("Unable to open file!");
//echo fread($myfile,filesize("signup.php"));
?>
</div>
</body>
</html>

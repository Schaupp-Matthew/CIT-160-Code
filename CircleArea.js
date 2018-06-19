<!DOCTYPE HTML>
<html lang="en-us">
<head>
<meta charset="utf-8">
<title>Compute Area of Circle</title>
<script type="text/javascript">
/* Defining Table
 * Input: User inputs radius of a circle
 *Processing: Calculate the area of the circle, rounds to the nearest 100th
 *Output: The calculated value is printed to the screen
 */
 function CircleArea() {
	
	//Convert users input into a number
	var radius = parseFloat(document.getElementById('radiusInputBox').value);
	
	//Calculate area of circle
	var area = Math.PI * (radius * radius);
	
	//Round the area to the nearest 100th
	var digits = 2;
	var multiplier = Math.pow(10, digits);
	area = Math.round(area * multiplier) / multiplier;
	
	//Print the converted value to the user
	document.getElementById('outputDiv').innerHTML = area;
}
</script>
</head>

<body>
Please enter the radius of a circle:<br>
	<input type="text" id='radiusInputBox'>
	<button type="button" onclick="CircleArea()">Calculate</button>
	<br>
	<p>Area = </p>
	<div id='outputDiv'></div>
</body>
</html>
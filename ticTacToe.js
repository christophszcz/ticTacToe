 <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tic Tac Toe</title>

</head>
<body>
	<script type="text/javascript"></script>
<table>
	<tr>
		<td id ="1"></td>
		<td id ="2"></td>
		<td id ="3"></td>	
	</tr>
	<tr>
		<td id ="4"></td>
		<td id ="5"></td>
		<td id ="6"></td>
	</tr>
	<tr>
		<td id ="7"></td>
		<td id ="8"></td>
		<td id ="9"></td>
	</tr>
</table>
<script type="text/ticTacToe.js">
$(documment).ready(function)(){
	var turn = 1;
	$('td').on('click', function(){
		var self = $(this);

		if(turn % 2 === 0) {
			self.text("O");
		} else {
			self.text("X");
		}
		console.log(turn);
		turn++;
		self.off('click');
	});
});	

function checkin() {

}
</script>

</body>
</html>
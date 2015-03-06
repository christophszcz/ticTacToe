$(document).ready(function(){
	var turn = 1;
	$('td').on('click', function(){
		
		var self = $(this);

		if(turn % 2 === 0) {
			self.text("O");
			self.addClass("O");
			possibleWinOs();

		} else {
			self.text("X");
			self.addClass("X");
			possibleWinXs();

		}

		console.log(turn);
		turn++;
		self.off('click');
	});
});	

function possibleWinXs() {
 if ($("#1").hasClass("X") && $("#2").hasClass("X") && $("#3").hasClass("X") || 
 $("#4").hasClass("X") && $("#5").hasClass("X") && $("#6").hasClass("X") ||
 $("#7").hasClass("X") && $("#8").hasClass("X") && $("#9").hasClass("X") ||
 $("#1").hasClass("X") && $("#4").hasClass("X") && $("#7").hasClass("X") ||
 $("#2").hasClass("X") && $("#5").hasClass("X") && $("#8").hasClass("X") ||
 $("#3").hasClass("X") && $("#6").hasClass("X") && $("#9").hasClass("X") || 
 $("#1").hasClass("X") && $("#5").hasClass("X") && $("#9").hasClass("X") ||
 $("#3").hasClass("X") && $("#5").hasClass("X") && $("#7").hasClass("X") ){
 alert("Player 1 wins!");
 } 
};

function possibleWinOs() {
 if ($("#1").hasClass("O") && $("#2").hasClass("O") && $("#3").hasClass("O") || 
 $("#4").hasClass("O") && $("#5").hasClass("O") && $("#6").hasClass("O") ||
 $("#7").hasClass("O") && $("#8").hasClass("O") && $("#9").hasClass("O") ||
 $("#1").hasClass("O") && $("#4").hasClass("O") && $("#7").hasClass("O") ||
 $("#2").hasClass("O") && $("#5").hasClass("O") && $("#8").hasClass("O") ||
 $("#3").hasClass("O") && $("#6").hasClass("O") && $("#9").hasClass("O") || 
 $("#1").hasClass("O") && $("#5").hasClass("O") && $("#9").hasClass("O") ||
 $("#3").hasClass("O") && $("#5").hasClass("O") && $("#7").hasClass("O") ){
 alert("Player 2 wins!");
 } 
};




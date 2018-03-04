function rollDice() {
	var total = 0;
	var roll = Math.floor(Math.random() * 6) + 1;
	if (roll != 1) {
		total = total + roll;


		//var roll1 = document.getElementById('roll1');
		//var roll2 = document.getElementById('roll2');
		///////var status = document.getElementById('status');
		//var status2 = document.getElementById('status');
		//var diceTotal = roll1 + roll2;
		roll1.innerhtml = roll1
		roll2.innerhtml = roll2
	}
	return total;

}
$(document).ready(function() {
			$("#roll1").click(function(e) {
				e.preventDefault();
				console.log("roll1");
				$(".result").text(rollDice());

				$("#roll2").click(function(e) {
					e.preventDefault();
					console.log("roll1");
					$(".Result").text(rollDice());


				});
			})
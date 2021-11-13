var doing = false;

function doSlot()
{
	if (doing){return null;}
	doing = true;
	var numChanges = randomInt(1,4)*7
	var numeberSlot1 = numChanges+randomInt(1,7)
	var numeberSlot2 = numChanges+3*7+randomInt(1,7)
	var numeberSlot3 = numChanges+5*7+randomInt(1,7)

	var i1 = 0;
	var i2 = 0;
	var i3 = 0;
    document.getElementById('status').innerHTML = "SPINNING"
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			
			clearInterval(slot1);
			return null;
            
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
			
			clearInterval(slot2);
			return null;
           
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numeberSlot3){
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}
let score = 10;
var winTimes = 0;
var gameBtn = document.getElementById('game');
function gameOver() {
	gameBtn.disabled = true;
	gameBtn.style.cursor = "not-allowed";
	gameBtn.style.cursor = "none";
}

function testWin(){
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className
    
	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||
		(slot1 == slot2 && slot1 == "a7") ||
		(slot1 == slot3 && slot1 == "a7") ||
		(slot2 == slot3 && slot2 == "a7") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a7")){
        document.getElementById('status').innerHTML = "YOU WIN!";
        document.getElementById('score').innerHTML = "Spins left: "+ (score = score + 10) +"</br>You won: "+ (winTimes = winTimes + 1) +" times";
	}
	else{
        document.getElementById('status').innerHTML = "YOU LOSE!";
        score--;
        document.getElementById('score').innerHTML = "Spins left: "+ (score) +"</br>You won: "+ winTimes +" times";
		if (score == 0){
			if (score == 0)
			{
				alert("Game Over!\nYou loose");
			}
			gameOver();		
		}
	}
	doing = false;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

//Preload
document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
			setTimeout(function() 
            {
				preloader.classList.add('hide');
			}, 500);
		}
	}, 500);
}

"use strict";

var memoryArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D' ,'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;	

Array.prototype.memoryTileShuffle = function () {
	var i = this.length, j, temp; //j is the random number generated in loop and it is stored in variable temp
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j]; //grabs array position of random number
		this[j] = this[i];
		this[i] = temp;
	}
}

function newBoard() {
	tilesFlipped = 0;
	var output = '';
	memoryArray.memoryTileShuffle();
	for (var i = 0; i < memoryArray.length; i++) {
		output += '<div id="tile_'+ i +'" onclick="memoryFlipTile(this,\''+ memoryArray[i] + '\')"></div>';	
	}
	document.getElementById('memory_board').innerHTML = output;	
}

function memoryFlipTile(tile, val) {
	if (tile.innerHTML == "" && memoryValues.length < 2) {
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if (memoryValues.length == 0) {
			memoryValues.push(val);
			memoryTileIds.push(tile.id);
		} else if (memoryValues.length == 1) {
			memoryValues.push(val);
			memoryTileIds.push(tile.id);
		} if (memoryValues[0] == memoryValues[1]) {
			tilesFlipped +=2;
			memoryValues = [];
			memoryTileIds = [];
			if (tilesFlipped == memoryArray.length) {
				alert("You Win! It's time for a new game!");
				document.getElementById('memory_board').innerHTML = "";
				newBoard();
			}
		} else {
			function flipToBack() {
				var tile_1 = document.getElementById(memoryTileIds[0]);
				var tile_2 = document.getElementById(memoryTileIds[1]);
				tile_1.style.background = "url('/img/capesanblas.jpeg') no-repeat";
				tile_1.innerHTML = "";
				tile_2.style.background = "url('/img/capesanblas.jpeg') no-repeat";
				tile_2.innerHTML = "";
				memoryValues = [];
				memoryTileIds = [];
			}
			setTimeout(flipToBack, 2000);
		}

	}
}
$(document).ready(function() {
	console.log("document loaded");
	newBoard();

})

			
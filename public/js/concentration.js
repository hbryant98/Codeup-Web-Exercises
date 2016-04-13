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
// window.addEventListener(newBoard());
$(document).ready(function() {
	console.log("document loaded");
	newBoard();

})

			
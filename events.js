

events = {
	setListeners : function(){
		document.getElementById("btnTest").addEventListener("click", test1);
		document.getElementById("btnSetNextChord").addEventListener("click", gameloop.setNextChord);
		document.getElementById("btnPlayChordVer").addEventListener("click", gameloop.playCurrnetChordWhole);
		document.getElementById("btnPlayChordHor").addEventListener("click", gameloop.playCurrnetChordBroken);
		document.getElementById("btnShowNextChord").addEventListener("click", gameloop.showCurrentChordType);

		//document.getElementById("btnSetNextChord").addEventListener("click", testNextChord);
	}
}
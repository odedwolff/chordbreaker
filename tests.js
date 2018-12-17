function test1(){
	testPlayLine();
	//testNextChord();
	//testTriads();
	// testOffset();	
	//simpleBeep();
	//testChord();
	// testChordOld();
	// CPst();
}


function testOffset(){
	console.log(freqFromRoot(440, -1));
	console.log(freqFromRoot(440, -2));
	console.log(freqFromRoot(440, -3));
}

function testTriads(){
	var baseFreq  = synth.randRoot(250,350);
	
	window.setTimeout(function(){synth.playChord(1000, synth.chordTypeToFnc.keyChordTypeTriadMaj(baseFreq))}, 0);
	window.setTimeout(function(){synth.playChord(1000, synth.chordTypeToFnc.keyChordTypeTriadMin(baseFreq))}, 1500);
	window.setTimeout(function(){synth.playChord(1000, synth.chordTypeToFnc.keyChordTypeTriadAug(baseFreq))}, 3000);
	window.setTimeout(function(){synth.playChord(1000, synth.chordTypeToFnc.keyChordTypeTriadDim(baseFreq))}, 4500);;

}

function testPlayLine(){
	var root =220;
	notes = [root, synth.freqFromRoot(root,5), synth.freqFromRoot(root,4), root];
	synth.playLine(notes, 700);
}


function testNextChord(){
	params = {
		"includedChordTypes": ["keyChordTypeTriadAug", "keyChordTypeTriadMaj", "keyChordTypeTriadMin"]
	};
	_setNextChord(params);
}



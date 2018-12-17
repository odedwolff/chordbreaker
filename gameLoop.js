
gameloop = {
	setNextChord: function(){
		parmas={
			includedChordTypes: _avaliableChordTypes()
		}
		_setNextChord(params);
	}
}

var currentRoot;

var currentChord;

var includedChords;

var minFreq = 150;

var maxFreq = 250;

//



function _startPlayngLoop(params){
	
}

function _avaliableChordTypes(){
	//a mock up - to be deived from GUI controls
	return ["keyChordTypeTriadMaj", "keyChordTypeTriadMin"];
}

//a single Q-A perios 
function _setNextChord(params){
	currentRoot = synth.randRoot(minFreq, maxFreq);
	//calculate chords frequencies 
	var rndIdx = Math.floor((Math.random() * params["includedChordTypes"].length));
	var chordType = params["includedChordTypes"][rndIdx]
	currentChord = synth["chordTypeToFnc"][chordType](currentRoot);

}




gameloop = {
	setNextChord: function(){
		params={
			includedChordTypes: _avaliableChordTypes()
		};
		_setNextChord(params);

		document.getElementById("lblChordType").innerHTML="";
	},

	playCurrnetChordWhole: function (){
		synth.playChord(chordLenMs, currentChord);
	},
	playCurrnetChordBroken: function(){
		synth.playLine(singleNoteLenMs, currentChord);
	},
	showCurrentChordType: function(){
		document.getElementById("lblChordType").innerHTML=currentChrodTypeName;
	},
	setNextRoot : function(){
		currentRoot = synth.randRoot(minFreq, maxFreq);
	},
	playRoot: _playRoot,

	playMajorArpegio: _playMajorArpegio,
	playMinorArpegio: _playMinorArpegio,
	playAugArpegio: _playAugArpegio,
	playDimArpegio: _playDimArpegio,
}

var currentRoot;

var currentChord;

var includedChords;

var minFreq = 150;

var maxFreq = 250;

var chordLenMs = 2000;

var singleNoteLenMs=700;

var currentChrodTypeName;
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
	//currentChrodTypeName = synth.chordTypeNames.chordType; 
	currentChrodTypeName = synth.chordTypeNames[chordType]; 

	console.log("set up next chords:" + currentChord);
}


function playArpeg(chordType){
	const chord = synth["chordTypeToFnc"][chordType](currentRoot);
	synth.playLine(singleNoteLenMs, chord);
}


function _playRoot(){
	//play a single note "chords"
	synth.playChord(1000, [currentRoot]);
}

function _playMajorArpegio(){
	playArpeg("keyChordTypeTriadMaj");
}
function _playMinorArpegio(){
	playArpeg("keyChordTypeTriadMin");
}
function _playAugArpegio(){
	playArpeg("keyChordTypeTriadAug");
}
function _playDimArpegio(){
	playArpeg("keyChordTypeTriadDim");
}
 



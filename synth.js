
function _randRoot(bottomFreq, topFreq){
		return (topFreq - bottomFreq) * Math.random() + bottomFreq;
	}


function _triadMajor(freq){
		return [freq, synth.freqFromRoot(freq,4), synth.freqFromRoot(freq,7)]; 
	}

function _triadMinor(freq){
		return [freq, synth.freqFromRoot(freq,3), synth.freqFromRoot(freq,7)]; 
	}

function _triadDim(freq){
		return [freq, synth.freqFromRoot(freq,3), synth.freqFromRoot(freq,6)]; 
	}

function _triadAug(freq){
		return [freq, synth.freqFromRoot(freq,4), synth.freqFromRoot(freq,8)]; 
	}




synth={
	
	beep: function (freq, lenMs){
		var context = new AudioContext();
		beepIn(freq, lenMs,context);
		window.setTimeout(function(){
			p=context.close();
			p.then(
				function(val){console.log(val);},
				function(rsn){console.log(rsn);}
			).catch(function(err){console.log(err);})

		}, lenMs);
	},

	playChord: function (durationMs, freqs){
		AudioContexts = [];
		var cntxt;
		for (i in freqs){
			cntxt = new AudioContext();
			window.setTimeout(beepIn.bind(null,freqs[i],durationMs,cntxt),100);
			window.setTimeout(closeAudioContext.bind(null, cntxt), durationMs * 1.5);
		}
	},

	playLine: function(noteLenMs, notes){
		//beginTime = 0;
		cntxt = new AudioContext();
		for (i in notes){
			window.setTimeout(beepIn.bind(null,notes[i],noteLenMs,cntxt), i * noteLenMs );
		}
		window.setTimeout(closeAudioContext.bind(null, cntxt), noteLenMs * notes.length);
	},

	randRoot: function (bottomFreq, topFreq){
		return (topFreq - bottomFreq) * Math.random() + bottomFreq;
	},


	chordTypeToFnc : {
		keyChordTypeTriadAug : _triadAug,
		keyChordTypeTriadDim : _triadDim,
		keyChordTypeTriadMin : _triadMinor,
		keyChordTypeTriadMaj : _triadMajor
	},

	chordTypeNames : {
		keyChordTypeTriadAug : "augmented",
		keyChordTypeTriadDim : "dimihished",
		keyChordTypeTriadMin : "minor",
		keyChordTypeTriadMaj : "major"
	}, 

	freqFromRoot : function (rootFreq, offsetInHalfSteps){
		return rootFreq * Math.pow(2, offsetInHalfSteps/12);
	}

}














function beepIn(freq, lenMs,context){
	var o = context.createOscillator();
	o.frequency.setValueAtTime(freq, context.currentTime);
	o.type="triangle";
	//o.type="square";
	var  g = context.createGain();
	o.connect(g);
	o.start(0);
	g.gain.value = 0.01;
	g.connect(context.destination);
	g.gain.linearRampToValueAtTime(.25, context.currentTime + 0.05);
	//g.gain.linearRampToValueAtTime(0.0001, context.currentTime + lenMs/1000);
	g.gain.linearRampToValueAtTime(0.0001, context.currentTime + lenMs/1000);

	o.stop(context.currentTime + lenMs/1000);
}




function closeAudioContext(cntxt){
	cntxt.close().catch(function(err){console.log(err);});
}





// function freqFromRoot(rootFreq, offsetInHalfSteps){
// 	return rootFreq * Math.pow(2, offsetInHalfSteps/12);
// }



function CPst(){
	
}







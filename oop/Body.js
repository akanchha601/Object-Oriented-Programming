/*
 * Body class
 */

'use strict';

// TODO Add the class to show an instance of Input and Output

/**
 * Instructions class
 * 
 * This is a sample class
 */

'use strict';

function Body() {
	//instantiated Input class
    this.inputProcess = function() {
        var input = new Input();
        input.createInpputBox();
        input.createButton(this.callOutput);
    }
    //Body class passes the value from the input callback to the output's 'url' property
    this.callOutput = function() {
        let url = document.getElementById('inputText').value;
		//instantiated Output class
        let output = new Output(url);
        if(url){
            output.makeCall();
        } 
    }
}

var body = new Body();
body.inputProcess();
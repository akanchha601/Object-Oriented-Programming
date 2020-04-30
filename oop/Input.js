/*
 * Input class
 */

'use strict';

// TODO Add the class to get the input
function Input() {
    //create an input box
    this.createInpputBox = function() {
        var inputBox = document.createElement("input");
        inputBox.setAttribute("type", "url");
        inputBox.setAttribute("value","https://reqres.in/api/users?page-2");
        inputBox.setAttribute("name", "inputBox");
        inputBox.setAttribute("class", "input");
        inputBox.id = "inputText";
        var content = document.getElementById("controls");
        content.appendChild(inputBox);
    }
	// create a button
    this.createButton = function(callback) {
        var but = document.createElement("input");
        but.setAttribute('type', 'button');
        but.setAttribute('value', 'Display Data');
        but.onclick=callback;
        var content = document.getElementById("controls");
        content.appendChild(but);
        
    }
    
}
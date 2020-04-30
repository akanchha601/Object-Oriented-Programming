/**
 * Instructions class
 * 
 * This is a sample class
 */

'use strict';

korcode.oopchal.Instructions = function(init)
{
	var self  = $('<section>', {class:'korcode-oopchal-instructions'});
	var title = $('<h2>', {text:'Instructions'});
	var p1    = $('<p>', {text:'This OOP challenge requires:'});
	var reqs  = $('<ul>');
	var req1  = $('<li>', {text:'3 classes be created: Body; Input; Output. The classes need to go in their corresponding files: Body.js; Input.js; Output.js.'});
	var req2  = $('<li>', {text:'The Body class needs to instantiate Input class and Output class, and connect Input to Output'});
	var req3  = $('<li>', {text:'The Input class needs to create an input box and a button. The input should be an URL and it should pass it to a callback when the user clicks the button'});
	var req4  = $('<li>', {text:"The Output class needs to have an 'url' property that when set, will asynchronously XMLHttpRequest/AJAX the URL and set the contents to the <code> tag."});
	var req5  = $('<li>', {text:"The Body class needs to pass the value from the input callback to the output's 'url' property"});
	var req6  = $('<li>', {text:'The code tag text needs to be purple by using a CSS class.'});
	var p2    = $('<p>', {text:'This challenge is framed in jquery, but jquery usage is not a requirement. This Instructions class can be used as an example on how to create a class. ajax.txt is included to be used with the ajax call. Chrome has issues with AJAXing local files, better to use FireFox.'});
	
	reqs.append([req1, req2, req3, req4, req5, req6]);
	self.append([title, p1, reqs, p2]);
	
	return self;
}
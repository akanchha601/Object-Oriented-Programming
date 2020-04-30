/*
 * Output class
 */

'use strict';

// TODO Add the class to display the output
function Output(url) {
    this.url = url;
    //asynchronously XMLHttpRequest/AJAX the URL
    this.makeCall = function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("code").innerHTML = this.responseText;
          }
		  else{
            document.getElementById("code").innerHTML = "Please enter valid url";
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}
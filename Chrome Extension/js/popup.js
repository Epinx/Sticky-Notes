window.onload = function(e){   
  chrome.windows.getCurrent(function(w)  
  {  
      load_color();
	  
  });  
}  

function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
	var val = document.getElementById('txt').value;		
	//console.log(val);
	save_color(val);
	// close the popup when the background finishes processing request
    });
}

 


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('txt').addEventListener('keydown', clickHandler);
})


function save_color(val) {
    var white = val;
                             //key    value   callback
    chrome.storage.sync.set({"white": white}, function() {
        console.log("The value stored was: " + white);
    });
}


var something;

function load_color() {
    var color = "white";
                  //key   callback
    
	chrome.storage.sync.get(color, function(val) {
	//console.log(typeof val.white);
		if (typeof val.white != 'undefined'){
		//console.log('a');
			document.getElementById('txt').value=val.white;
		}
		else {
		var textt="\nStep 1: Click here & start typing\n\nStep 2: Delete all this \n\nStep 3: Please rate us at\nepinx.com/sticky";
		chrome.storage.sync.set({"white": textt}, function() {
		});
		document.getElementById('txt').val=textt;
		//console.log(document.getElementById('txt').val);
		}
		
    });
	
}

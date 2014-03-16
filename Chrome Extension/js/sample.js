window.onload = function(e){   
  chrome.windows.getCurrent(function(w)  
  {  
      var button=document.getElementById("button");
	  button.innerHTML="<button onclick='saveChanges()'>Click me</button>";
  });  
}  





function saveChanges() {
  // Get a value saved in a form.
  var theValue = textarea.value;
  // Check that there's some code there.
  if (!theValue) {
    message('Error: No value specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'value': theValue}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
}
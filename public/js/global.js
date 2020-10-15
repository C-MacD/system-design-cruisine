function globScr(){

	function menuCompress() {
	  var x = document.getElementById("navMenu");
	  if (x.className === "nav_menu") {
	    x.className += " responsive";
	  } else {
	    x.className = "nav_menu";
	  }
	}

	document.getElementById("navMenu").addEventListener("click", menuCompress); 

	
};

window.addEventListener("load", globScr); // execute the global script and initialize all functions when page fully loads.
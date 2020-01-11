function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("main").style.marginTop = "100%";
}


function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("main").style.marginTop = "0";
}

//function openNav() {
//  document.getElementById("mySidenav").style.height = "100%";
//}
//
///* Close/hide the sidenav */
//function closeNav() {
//  document.getElementById("mySidenav").style.height = "0";
//}

$(window).load(function() {
		// Animate loader off screen
		$(".loader").delay(10000).fadeTo("slow", 0);;
	});
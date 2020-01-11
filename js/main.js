//function openNav() {
//  document.getElementById("mySidenav").style.width = "250px";
//  document.getElementById("main").style.marginLeft = "250px";
//}
//
//
//function closeNav() {
//  document.getElementById("mySidenav").style.width = "0";
//  document.getElementById("main").style.marginLeft = "0";
//}

function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}

$(window).load(function() {
		// Animate loader off screen
		$(".loader").delay(10000).fadeTo("slow", 0);;
	});
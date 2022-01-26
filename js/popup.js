// JavaScript Document 
for (let i = 0; i < 3; i++) {
	console.log(".popup-overlay-" + i)
$(document).ready(function(){
// Appends an "active" class to .popup-overlay and .popup-content when the "Open" button is clicked.  If popup is already open, allows you to close popup by clicking image.
$(".image").on("click", function() {
	if ($(".popup-overlay-" + i).hasClass("active")) {
		$(".popup-overlay-" + i).removeClass("active");
		$(".popup-content-" + i).removeClass("active");
	} else {
		$(".popup-overlay-" + i).addClass("active");
		$(".popup-content-" + i).addClass("active");
	}
	
});	
	
});

$(document).on("click", function(event){
	var $trigger = $(".image").eq(i);
	// On click: If click is outside of dropdown, slide everything up
	if($trigger !== event.target && !$trigger.has(event.target).length){
		$(".popup-overlay-" + i).removeClass("active");
		$(".popup-content-" + i).removeClass("active");
	}
	});
	
}

/*
$(document).ready(function(){
// Appends an "active" class to .popup-overlay and .popup-content when the "Open" button is clicked.  If popup is already open, allows you to close popup by clicking image.
$(".image").on("click", function() {
	if ($(".popup-overlay-1").hasClass("active")) {
		$(".popup-overlay-1, .popup-content-1").removeClass("active");
	} else {
		$(".popup-overlay-1, .popup-content-1").addClass("active");
	}
	
});	
	
});

$(document).on("click", function(event){
	var $trigger = $(".image").eq(0);
	// On click: If click is outside of dropdown, slide everything up
	if($trigger !== event.target && !$trigger.has(event.target).length){
		$(".popup-overlay-1, .popup-content-1").removeClass("active");
		}
	});
	
*/
// JavaScript Document 
for (let i = 0; i < 3; i++) {
	$(document).ready(function(){
	// Appends an "active" class to .popup-overlay and .popup-content when the "Open" button is clicked.  If popup is already open, allows you to close popup by clicking image.
	$(".image").eq(i).on("click", function() {
		if ($("[class ^= 'popup-overlay-']").hasClass("active-2")) {
			$(".active-2").removeClass("active-2");
		} else {
			$(".popup-overlay-" + i).addClass("active-2");
			$(".popup-content-" + i).addClass("active-2");
		}

	});	

	});

	$(document).on("click", function(event){
		var $trigger = $(".image").eq(i);
		// On click: If click is outside of dropdown, slide everything up
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$(".popup-overlay-" + i).removeClass("active-2");
			$(".popup-content-" + i).removeClass("active-2");
		}
		});
	
}
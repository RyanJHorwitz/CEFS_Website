// MENU INTERACTIONS

	$(document).ready(function(){
		$(".dropdown").click(function(){
			// On click: if all dropdowns are collapsed, expand new dropdown
			// OR if dropdown is expanded and click is on new dropdown, collapse visible dropdown, and expand new dropdown
			if(!$(this).find(".secLevelMenu").is(":visible")){
				$(".secLevelMenu").slideUp("fast");
				$(this).find(".secLevelMenu").slideToggle("fast");
			}
			// On click: If dropdown is already expanded and click is on same dropdown, collapse edpanded dropdown.
			else{
				$(".secLevelMenu").slideUp("fast");
			}
		});
	});

	
	$(document).on("click", function(event){
		var $trigger = $(".dropdown");
		// On click: If click is outside of dropdown, slide everything up
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$(".secLevelMenu").slideUp("fast");
			$(this).find(".secLevelMenu").hide;
		}
	});

// Expand menu code adapted from https://stackoverflow.com/questions/52573874/how-to-handle-show-hide-of-multiple-dropdown-menu
// Adapted by Ryan J. Horwitz


/* OLD VERSION */
// Expand menu on click
/*
$(document).ready(function(){

$(".dropdown").click(function(){
	$(this).find(".secLevelMenu").slideToggle("fast");
		});
});
$(document).on("click", function(event){
	var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-menu").slideUp("fast");
    }
});

// Close menu when click outside of it
$(document).click(function(event) { 
  var $target = $(event.target);
  if(!$target.closest('.dropdown').length && 
  $('.dropdown').is(":visible")) {
    $('.secLevelMenu').slideUp("fast");
  }        
}); */
$(document).ready(function(){

// Expand menu on click
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
});
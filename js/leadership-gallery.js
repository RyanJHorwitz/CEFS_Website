// Javascript Document
$(document).ready(function(){

	$('.category').click(function(){

		$(this).addClass('active').siblings().removeClass('active');

		let filter = $(this).attr('data-filter');

		if(filter == 'all'){
			$('.image').show(500);
		}
		else{
			$('.image').not('.'+filter).hide(400);
			$('.image').filter('.'+filter).show(500);
		}
	});
});

// Code pulled from coder-coder.com/responsive-navigation-bar-flexbox-vs-css-grid/
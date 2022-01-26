// Javascript Document
$(document).ready(function(){

	$('.category').click(function(){

		$(this).addClass('active').siblings().removeClass('active');

		let filter = $(this).attr('data-filter');

		if(filter == 'all'){
			$('.image').show(0);
		}
		else{
			$('.image').not('.'+filter).hide(0);
			$('.image').filter('.'+filter).show(0);
		}
	});
});

// Code pulled from coder-coder.com/responsive-navigation-bar-flexbox-vs-css-grid/
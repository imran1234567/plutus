$(document).ready(function(){
//======================================
	//========== Portfolio Filter ==========
	//======================================
	$('.portfolio-grid').imagesLoaded( function() {
		var Container = $('#portfolio-area');
		
			var portfolio = $('.portfolio-menu');
			portfolio.on('click', 'button', function () {
				$(this).addClass('active').siblings().removeClass('active');
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
			var $grid = $('.portfolio-grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-sizer'
				}
		});
    });
    
});
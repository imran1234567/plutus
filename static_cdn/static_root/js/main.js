
(function ($) {
    "use strict";

	$(document).ready(function(){
		//======================================
		//============== Accordian =============
		//======================================
		$('.collapse').on('shown.bs.collapse', function () {
			$(this).prev().addClass('active');
		});
		$('.collapse').on('hidden.bs.collapse', function () {
			$(this).prev().removeClass('active');
		});

		//=======================================
		//==============  testimonial =========== 
		//========================================
		var testimonialCarousel = $('.testimonial-carousel');
			testimonialCarousel.owlCarousel({
			loop:true,
			dots:true,
			nav:false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 1
				},
				960 : {
					items: 1
				},
				1200 : {
					items: 1
				},
				1920 : {
					items: 1
				}
			}
		}); 


		//========================================
		//============  portfolio-slider ========= 
		//========================================
		var portfolioCarousel = $('.portfolio-slider');
				portfolioCarousel.owlCarousel({
				loop:true,
				dots:false,
				nav:true,
				navText: ['<i class="icofont-rounded-left"></i>','<i class="icofont-rounded-right"></i>'],
				responsive : {
					0 : {
						items: 1
					},
					768 : {
						items: 1
					},
					960 : {
						items: 1
					},
					1200 : {
						items: 1
					},
					1920 : {
						items: 1
					}
				}
			}); 

		$(function(){
			$('.responsive-menu-button').on('click', function(){
				$('.main-menu').toggle(300);
			})
		});


		
		$(function(){
			
			$(document).on('click', 'a[href="#choosing-reason"]', function(event) {
				event.preventDefault();
				var sHeight = $('#choosing-reason').offset().top;
				$('html, body').animate({
					scrollTop: sHeight
				});
			})

		})

	});

	$(window).on('load',function(){
		/*-----------------
			preloader
		------------------*/
		var preLoder = $(".preloader");
		preLoder.fadeOut(1000);
	
	}); 

}(jQuery));







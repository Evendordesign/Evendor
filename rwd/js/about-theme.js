;(function($){
    
	
	
    function testimonials_slider(){
        if ( $('.t_slider').length ){
            $('.t_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
				animateOut: 'slideOutUp',
  				animateIn: 'slideInUp',
                dots:true, 
				navContainer: '.testimonials_area',
                navText: ['<i class="fa fa-caret-up" aria-hidden="true"></i>','<i class="fa fa-caret-down" aria-hidden="true"></i>'],
                responsiveClass: true,
//                responsive: {
//                    0: {
//                        items: 1,
//                    },
//                    400: {
//                        items: 2,
//                    },
//                    575: {
//                        items: 3,
//                    },
//                    768: {
//                        items: 4,
//                    },
//                    1199: {
//                        items: 5,
//                    }
//                }
            })
        }
    }
    testimonials_slider();
	
    
   

})(jQuery)
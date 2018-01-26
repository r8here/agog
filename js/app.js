$(window).scroll(function () {
	if ($(window).scrollTop() > 160) {
	  $('#stickyNav').addClass('isFixed');
	  $('body').css({'padding-top': '80px'});
	}
	if ($(window).scrollTop() < 161) {
	  $('#stickyNav').removeClass('isFixed');
	  $('body').css({'padding-top': '0'});
	}
});

$(function(){
	// testimonial carousel
	// $(".owl-carousel").owlCarousel({
	// 	loop:true,
	// 	margin: 20,
	// 	nav:true,
	// 	navText: ["<i class='fa fa-fw fa-angle-left'></i>","<i class='fa fa-fw fa-angle-right'></i>"],
	// 	stagePadding:10,
	// 	autoHeight: false,
	// 	responsiveClass:true,
	// 		responsive:{
	//         0:{
	//             items:1,
	//             nav:true
	//         },
	//         1000:{
	//             items:2,
	//             nav:true,
	//             loop:false
	//         }
	//     },
	// });

	// Animation
	$('.btn').attr('data-aos','flip-up');
	$('[class*="display-"]').attr('data-aos','zoom-in-right');
	AOS.init({
		offset: 200,
	    duration: 600,
	    easing: 'ease-out-back',
	    delay: 350,
	    once: true,
	    disable: 'mobile'
	});
	//
});
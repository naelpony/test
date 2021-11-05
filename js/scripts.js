$(document).ready(function () {
	$('.main').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,
		variableWidth: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}],
		appendArrows: $('.header__arrow')
	});
});
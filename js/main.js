document.querySelector( "#nav-toggle" )
	.addEventListener( "click", function() {
	this.classList.toggle( "active" );
});


$(document).ready(function() {
	$(".flag").lettering();
	new WOW().init();
	$('#mainNav').affix({
		offset: {
			top: 100
		}
	});
	var s,
			spanizeLetters = {
				settings: {
					letters: $('.js-spanize'),
				},
				init: function() {
					s = this.settings;
					this.bindEvents();
				},
				bindEvents: function(){
					s.letters.html(function (i, el) {
						//spanizeLetters.joinChars();
						var spanizer = $.trim(el).split("");
						return '<span>' + spanizer.join('</span><span>') + '</span>';
					});
				},
			};
	spanizeLetters.init();
});
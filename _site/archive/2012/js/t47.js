/* Uses superfish to animate side menu */
$(document).ready(function() {
	
	
	$('#sideMenu li.sub ul').css('display','block');  // allows superfish to function, css toggles submenu if no javascript				   
	$("ul.sf-menu").superfish({ 
    	animation: {height:'show'},   // slide-down effect without fade-in
		autoArrows:  false,
    	delay:     400               
    });
	
	if (window.lightBox) {
		$('.gallery a').lightBox();			// any images in a .gallery tag will run in jquery lightbox
	};
	
	
	$('.paliBlock img').hide();
	$('#slideViewer').css('margin-top','300px').hide();
	$('.paliGroup').addClass('acrossTen');
	$('.paliBlock').toggle(
		function () {
			$('.paliBlock img').hide();
				$('#slideViewer').slideDown('slow');
			$(this).children('img').addClass('phover');
			$(this).children('img').fadeIn('slow');
		},
		function() {
			$(this).children('img').fadeOut();
			$('#slideViewer').slideUp('slow');
			$(this).removeClass('phover');
		}
	);
});


		 


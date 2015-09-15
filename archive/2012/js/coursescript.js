function makeCourseLinks (target,hoverClass){
	// make big links, with animation
	// take a div class of target, find it's inner link and apply to the div
	// define hoverClass in css and apply during hover
	// could be combined with makeBigLinks()
	$(target).each(function() { // Big Clickable Links
		$(this).hoverIntent(
			function() {				
				$(this).addClass(hoverClass);
				status=$(this).find('a').attr('href');
				
				$(this).animate(
					{ 	marginLeft : 10,
					 	borderRadius: 27}, 
					500,
					'swing',
					function(){
						//animation complete
				});				
			},
			function() {
				$(this).removeClass(hoverClass);
				status='';
				
				$(this).animate(
					{ marginLeft : 0,
					  borderRadius: 0 }, 
					500,
					'swing',
					function(){
						//animation complete
				});
				
			});
		$(this).click(function() {
			location = $(this).find('a').attr('href');
		});
		$(this).css('cursor','pointer');
	});
}
		

$(document).ready(function() {

	var target = '.course-link';
	var hoverClass = 'courseHover';

	makeCourseLinks(target,hoverClass); 

});



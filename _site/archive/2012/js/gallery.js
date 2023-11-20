
	// basic jquery swap for gallery images
	// <div ID="image">large image show up here</div>
	// 
	// v1.1
$(document).ready(function() { 
	
		// preload images
	var preload=[], imgs=[];
	$('#gallery .gallery-links a').each( function( ){
		preload.push($(this).attr('href'));		
	});
	for (var i=0;i<preload.length;i++) {
		imgs[i]= new Image();
		imgs[i].src = preload[i];
	}
		// swap images on click
	$('#gallery .gallery-links a').click(function(evt) {	
		evt.preventDefault();
		var imgPath = $(this).attr('href');
		var oldImage = $('#photo img');
		
		if (imgPath == oldImage.attr('src')) return;
		else {
			var newImage = $('<img src="' + imgPath +'">');
			newImage.hide();
			$('#photo').prepend(newImage);
			newImage.fadeIn(1000);
			oldImage.fadeOut(1000,function(){
		    	$(this).remove();
			});
		};
	}); // end click
	$('#gallery a:first').click();	
}); // end ready
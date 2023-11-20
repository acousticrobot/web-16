function prestige(slideSpeed) {	// v1.0
	$('.slide:first-child').clone().hide().appendTo('#carousel');
	$('.slide:first-child').animate(
		{ width: 0 }, 
		slideSpeed,
		'swing',
		function(){
			$(this).remove();
			$('.slide').fadeIn(slideSpeed);
	});
}

function deprestige(slideSpeed) {	//v1.0
	$('.slide:last-child').clone().width(0).prependTo('#carousel');
	$('.slide:first-child').animate(
		{ width: 241 }, 
		slideSpeed,
		'swing',
		function(){
			$('.slide:last-child').remove();
			$('.slide').fadeIn(slideSpeed);
	});
}

function makeBigLinks (target,hoverClass){
	// take a div class of target, find it's inner link and apply to the div
	// define hoverClass in css and apply during hover
	$(target).each(function() { // Big Clickable Links
		$(this).hover(
			function() {				
				$(this).addClass(hoverClass);
				status=$(this).find('a').attr('href');
			},
			function() {
				$(this).removeClass(hoverClass);
				status='';
			});
		$(this).click(function() {
			location = $(this).find('a').attr('href');
		});
		$(this).css('cursor','pointer');
	});
}
		

$(document).ready(function() {
	
// News panel with scroll pane functions:
	
	var element = $('.scroll-pane').jScrollPane({trackClickSpeed:15});
	var api = element.data('jsp');
	
	$('#news').bind(
		'click',
		function(){
			api.scrollTo(0,0);
		}
	);

// the Prestige carousel:
	
	var slideSpeed = 1500;
	var target = '.slide';
	var hoverClass = 'slideHover';
		
		// 1st is hidden behing screen so unwind one
	$('.slide:last-child').clone().prependTo('#carousel'); 
	$('.slide:last-child').remove();
	
	makeBigLinks(target,hoverClass); 
	
	$('#rightArrow').click(function() {
		prestige(slideSpeed);
		makeBigLinks(target,hoverClass);
	});
	
	$('#leftArrow').click(function() {
		deprestige(slideSpeed);
		makeBigLinks(target,hoverClass);
	});

//  flypaper animation:
		
	var canvas = document.getElementById('homeCanvas');
	paper.setup(canvas);
	fly.init({width:610,height:377});
	fly.debug = false;
	
	paper.view.onFrame = function(event) {
		fly.eventCtrlr.publish("frame",event);
		paper.view.draw();
	};
	
	var myFly = new fly.BobBee(
		{	name:"Bee",handle:[300,150,200,120],
			selectable:false,
			dragable: true,
		});
		
});



window.onload = function() {
	
	var canvas = document.getElementById('ctx');
	paper.setup(canvas);
	fly.init({width : 700, height : 500, colorPalette : "monotone"});
	fly.debug = true;
	
	fly.color.background("#2A5176");
	
	paper.view.onFrame = function(event) {
		fly.eventCtrlr.publish("frame",event);
		paper.view.draw();
	};

	var myFly = new fly.BobBee(
		{	name:"Bee",handle:[300,150,200,120],
			selectable:false,
			dragable: true,
			style: {
				body: {
					fillColor: fly.color.green[1]
				}
			}
			
		});
};
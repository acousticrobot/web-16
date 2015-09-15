view.viewSize = new Size(800,800); 	// create a viewing box		
	rect = new Rectangle(300, 200, 200, 200); // create bounds for shape
	
	rectArray = [ 
		new Point(rect.topLeft),       new Point(rect.topLeft  		-(20,20))* Point.random(),
		new Point(rect.topRight),      new Point(rect.topRight     	-(20,20))* Point.random(),
		new Point(rect.bottomRight),   new Point(rect.bottomRight  	-(20,20))* Point.random(),
		new Point(rect.bottomLeft),    new Point(rect.bottomLeft   	-(20,20))* Point.random(),
		new Point(rect.topCenter),     new Point(rect.topCenter    	-(20,20))* Point.random(),
		new Point(rect.rightCenter),   new Point(rect.rightCenter  	-(20,20))* Point.random(),
		new Point(rect.bottomCenter),  new Point(rect.bottomCenter 	-(20,20))* Point.random(),
		new Point(rect.leftCenter),    new Point(rect.leftCenter   	-(20,20))* Point.random(),
		new Point(rect.center),        new Point(rect.center  	   	-(20,20))* Point.random()
	];	

	path = new Path(rectArray);
	path.strokeColor = 'red';
	path.strokeWidth = 5;	
	var sPath = path.clone();
	sPath.strokeColor = 'green';
	sPath.strokeWidth = 5;
	sPath.opacity = 0.5;
	sPath.smooth();
	function onFrame(event){
		for(i=0;i<rectArray.length;i++) {
			var segment = path.segments[i];
			var smoothSegment = sPath.segments[i];
			segment.point.y = segment.point.y*1.0003;
			smoothSegment.point.y = smoothSegment.point.y*1.0003;
			path.strokeColor.hue += .001;
			sPath.strokeColor.hue += .001;
			sPath.strokeWidth += .001;
			sPath.opacity -= 0.00001;
			if (sPath.opacity < .1) {
				sPath.opacity = .1;
			}
		
		}
}

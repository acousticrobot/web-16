//	----------------	LIBRARY FUNCTIONS		----------------//

function Grid(val1,val2,val3) {
	// 	v0.1
	//  Grid ( [rectangle] , [ cols, ( rows ) ])
	// 	default values: viewsize, 8, 8	
		
	if (typeof(val1) != "number") { 
		bounds = val1; 
		col = val2; 
		row = val3;
	} else {
		col = val1; 
		row = val2;
	}							
	bounds = typeof(bounds) != 'undefined' ? bounds : view.bounds;
	col = typeof(col) != 'undefined' ? col : 8;
	row = typeof(row) != 'undefined' ? row : col;
	
	var cellSize = new Size(bounds.width/col, bounds.height/row);

	var grid = {		
		bounds: bounds,
		$c: col,
		$r: row,
		$mC: col*8,
		$mR: row*8,
		$p: 0, //  cell padding
		points: [],
		visible: true,
		visibleCells: true,
		visiblePoints: true,
		staggered: false,
		solid: true,		
		cell: cellSize,
		style: { 		// could be arrays solid[],stroke[]...
			solid1: {
				fillColor: '#9BCAE1',
			},
			solid2: {
				fillColor: '#373531'
			},
			stroke1: {
				strokeColor: '#373531',
				strokeWidth: 1,
				dashArray: [1,11]
			},
			points: {
				fillColor: '#FFB444'
			}
		},
		lastShape: 'rect',					
		
		get padding() { return this.$p },
		set padding(p) {
				// also performs a check for padding @ resize events
			p = typeof(p) != 'undefined' ? p : this.$p;
			this.$p = p;
			this.checkPadding();
			this.draw();
		},
		
		get columns() {	return this.$c },
		set columns(c) {
			if ((this.$c - c) % 1 == 0) c = Math.round(c);
			this.$c = (c > 0 && c <= this.maxCols) ? c : this.$c;	
			this.set();
			this.draw();
		},
				
		get rows() { return this.$r },
		set rows(r) {
			if ((this.$r - r) % 1 == 0) r = Math.round(r);
			this.$r = (r > 0 && r <= this.maxRows) ? r : this.$r;	
			this.set();
			this.draw();
		},

		get maxCols() { return this.$mC },
		
		get maxRows() { return this.$mR },

		setPaths: function() {
			if (this.paths) {
				this.paths.removeChildren();
			} else this.paths = new Group();
		},

		checkPadding: function() {
			this.$p = (this.$p > 0) ? this.$p : 0;
			this.$p = (this.$p < this.cell.width/4) ?
							this.$p : this.cell.width/4;
			this.$p = (this.$p < this.cell.height/4) ?
							this.$p : this.cell.height/4;				
		},

		resize: function(b,constrain) {
			constrain = typeof(constrain) != 'undefined' ? constrain : false;
			if (constrain) {
				this.columns = this.columns * b.width / this.bounds.width;
				this.rows = this.rows * b.height / this.bounds.height;
			}
			this.bounds = b;
			this.set();
			this.draw();
		},	

		draw: function(shape) {
			shape = typeof(shape) != 'undefined' ? shape : this.lastShape;
			this.lastShape = shape;
			this.setPaths();
			for (x=0;x<this.columns+1;x++) {
				for (y=0;y<this.rows+1;y++) {
					if (this.visibleCells) this.drawCell(x,y);
					if (this.visiblePoints) this.drawPoint(x,y);
				}
			}
			this.paths.visible = this.visible;
		},
		
		drawCell: function(x, y) {
			var top = new Size(grid.padding,grid.padding);
			var bottom = new Size(2*grid.padding, 2*grid.padding);
			var rect = new Path.Rectangle(this.points[x][y] + top, this.cell - bottom);
			if (!grid.solid) {
				rect.style = this.style.stroke1;
			}  else if (x % 2 == y % 2) {
				rect.style = this.style.solid1;
			} else rect.style = this.style.solid2;
			this.paths.addChild(rect);				
		},
		
		drawPoint: function(x, y) {	
			var dot = new Path.Circle(this.points[x][y], 2);
			dot.style = grid.style['points'];
			grid.paths.addChild(dot);
		},
		
		set: function() {
			this.cell.width = this.bounds.width / this.columns;
			this.cell.height = this.bounds.height / this.rows;
			this.checkPadding();
			for (x=0;x<this.maxCols; x++) {
				for (y=0;y<this.maxRows; y++) {
					var point = new Point(	this.bounds.x + x*this.cell.width,
						 					this.bounds.y + y*this.cell.height);
					if ((this.staggered) && (y%2==0)) {
							point -= new Point(this.cell.width/2,0);
					}
					this.points[x][y] = new Point(point);				
				}
			}	
		},
		
		initPtArray: function() {
			for (i=0;i<this.maxCols;i++) { 
				this.points[i] = [];
			}
		}
				
	} // end of grid object literal

	grid.initPtArray();
	grid.set();
	return grid;
		
} // end of Grid()

function addControlMembers(controlBox, name, value, memberType) {
	if (memberType == 'key') {
		var members = controlBox.key;
		var values = controlBox.kVal;
		var color1 = "green";
		var color2 = "black";
	} else if (memberType == 'var') {
		members = controlBox.variable;
		values = controlBox.vVal;
		var color1 = "black";
		var color2 = "red";
		
	} else { throw "not a valid member value ['key','var']";}
	
	var newMem = new PointText();
	newMem.content = name;
	newMem.characterStyle.fontSize = 10;
	newMem.paragraphStyle.justification = 'right';
	newMem.characterStyle.fillColor = color1;
	members.push(newMem);

	var newVal = new PointText();
	newVal.content = value;
	newVal.characterStyle.fontSize = 10;
	newVal.paragraphStyle.justification = 'left';
	newVal.characterStyle.fillColor = color2;
	values.push(newVal);	
	controlBox.size.height += controlBox.lnHght;
}
	
function drawControlMembers(controlBox, memberType) {
	if (memberType == 'key') {
		members = controlBox.key;
		values = controlBox.kVal;
		var gutter = 50;
	} else if (memberType == 'var') {
		members = controlBox.variable;
		values = controlBox.vVal;
		var gutter = 80;
	} else { throw "not a valid member value ['key','var']";}
	for (var i=0; i < members.length; i++) {
		controlBox.contents.addChild(members[i]);
		controlBox.contents.addChild(values[i]);
		members[i].position.x = controlBox.origin.x + gutter;
		members[i].position.y = controlBox.nxtLn;
		values[i].position.x = controlBox.origin.x + gutter + 10;
		values[i].position.y = controlBox.nxtLn;
		controlBox.nxtLn += controlBox.lnHght;
	};
}

function drawControlBox(controlBox) {
	controlBox.bounds = new Path.RoundRectangle(
						new Rectangle(controlBox.origin, controlBox.size), 
						new Size(4, 4)
						);
	controlBox.bounds.style = {
		strokeColor: "black",
		fillColor: "#EEEEEE",
		strokeWidth: 2
	}				
	controlBox.contents = new Group ([controlBox.bounds]);

	controlBox.nxtLn = controlBox.origin.y + 20;		
	drawControlMembers(controlBox, 'key');
	controlBox.nxtLn += controlBox.lnHght/2;		
	drawControlMembers(controlBox, 'var');
}

function initControlBox(keyObj, varObj) { // keyObj & varObj are name/value pairs

	var controlBox = {
		key: [],
		kVal: [],
		variable: [],
		vVal: [],
		size: new Size(200,30),
		lnHght: 18, 
		origin: new Point(25,25),
		handle: new Point(0,0), // for smooth dragging
		moving: false,
		visible: true,	
		reset: function() {
			this.contents.position = this.origin + (this.size/2);
		}
	}

	for (keyName in keyObj) {
		addControlMembers(controlBox, keyName, keyObj[keyName], 'key');
	}
	for (varName in varObj) {
		addControlMembers(controlBox, varName, varObj[varName], 'var');
	}
	drawControlBox(controlBox);		
	return controlBox;
}

//	----------------	THIS-PAGE FUNCTIONS		----------------//
	
//	----------------	PAPER-EVENT FUNCTIONS	----------------//

function onFrame(event) {
	cBox.vVal[0].content = cBox.testVar;
	var i = 0;
		// How to maintain values as *references* to these variables?
	variables['Cols/Max']   = Math.round(theGrid.col*100)/100 + " / " + theGrid.maxCols;
	variables['Rows/Max']   = Math.round(theGrid.row*100)/100 + " / " + theGrid.maxRows;
	variables['padding']= Math.round(theGrid.padding);
	variables['cell-w'] = Math.round(theGrid.cell.width*100)/100;
	variables['cell-h'] = Math.round(theGrid.cell.height*100)/100;
	//variables['Flux']   = Math.round('gFlux');
	variables['height'] = Math.round(view.viewSize.height);
	variables['width']  = Math.round(view.viewSize.width);
	
	for (varName in variables) {
		cBox.vVal[i++].content = variables[varName];
	}			
}

function onResize() {	
	cBox.reset();
}

function onMouseDown(event) {
	if (cBox.bounds.hitTest(event.point)) {
		cBox.handle = event.point - cBox.contents.position;
		cBox.moving = true;
	}
}

function onMouseDrag(event) {
	if (cBox.moving) {
		cBox.contents.position = (event.point - cBox.handle);
	}
	cBox.testVar = event.point.x;
}

function onMouseUp(event) {
	if (cBox.moving) {
		cBox.moving = false;
	}
}	

function onKeyDown(event) {
	switch(event.key) {
		case 'up': 		
			theGrid.rows += 1;
			if(event.modifiers.shift){
				theGrid.columns += 1;
 			}
			break;				
		case 'down':
			theGrid.rows -= 1;
			if(event.modifiers.shift){
				theGrid.columns -= 1;
			}
			break;				
		case 'left':
			theGrid.columns += 1;
			if(event.modifiers.shift){
				theGrid.rows += 1;
			}
			break;				
		case 'right':
			theGrid.columns -= 1;
			if(event.modifiers.shift){
				theGrid.rows -= 1;
			}
			break;
		case 'd':
			gFlux--;
			break;
		case 'f':
			gFlux++;
			break;
		case 'g':
			theGrid.visible = !theGrid.visible;
			theGrid.draw();
			break;
		case 'i': 
			cBox.contents.visible = !cBox.contents.visible;
			break;
		case 'k':
			theGrid.solid = !theGrid.solid;
			theGrid.draw();
			break;
		case 'o':
			theGrid.padding -= 1;
			break;
		case 'p':
			theGrid.padding += 1;
			break;
		case 'r':
			if(event.modifiers.shift){
				gridVis = false;
				gFlux = 1; 
				theGrid.paths.removeChildren();
				theGrid = Grid();
				theGrid.draw();
			}
			break;
		case 's':
			theGrid.staggered =  !theGrid.staggered;
			theGrid.set();
			theGrid.draw();
			break;
		case 'v':
			(fullscreen)? 
				view.viewSize = new Size(gWidth,gHeight) :
				view.viewSize = new Size($(window).width(),$(window).height());
			fullscreen = !fullscreen;
			if(event.modifiers.shift) {
				theGrid.resize(view.bounds,true);
			} else { 
				theGrid.resize(view.bounds);
			}				
			$('#ctx').toggleClass('fullscreen');
			$('#pageWrap').toggleClass('fullscreen');
			$('#contentWrap').toggleClass('fullscreen');
			$('#innerWrapper').toggleClass('fullscreen');
		
			$('header').toggleClass('fullscreen');
			$('#badge').toggleClass('fullscreen');
			$('div.tags').toggleClass('fullscreen');			
			$('footer').toggleClass('fullscreen');
			break;
		case ';':
			theGrid.visiblePoints = !theGrid.visiblePoints;
			theGrid.draw();
			break;
	}
}

//	----------------		BEGIN SCRIPT		----------------//			

// create a viewing box	
const gWidth = 800;
const gHeight = 800;
view.viewSize = new Size(gWidth,gHeight);
var fullscreen = false;
var gridLayer = project.activeLayer;
var theGrid = new Grid();
theGrid.draw();

var infoLayer = new Layer();
var controls = {
	'I'				: 'toggle info Box',
	'V'				: 'toggle full window',
	'\u21E7 V'		: '& keep cell size',	
	'R'				: 'Refresh',
	'\u21E7 R'		: 'Reset variables',
	'\u2190 \u2192'	: 'add/del column',
	'\u2191 \u2193'	: 'add/del row',
	'+ [\u21E7]'	: 'both column and row',
	'G'				: 'toggle Grid visibility',
	'K'				: 'toggle fill / outline',
	'\u003B'		: 'toggle points',
	'S'				: 'shift alternate grid rows',
	'P'				: 'add cell padding',
	'O'				: 'decrease cell padding'		
}
var variables = {
	'Cols/Max'		: theGrid.columns,               
	'Rows/Max'		: theGrid.rows,
	'padding'		: theGrid.padding,
	'cell-w'		: theGrid.cell.width,
	'cell-h'		: theGrid.cell.height,	
	'height'		: view.viewSize.height,
	'width'			: view.viewSize.width
}

cBox = initControlBox(controls,variables);

gridLayer.activate();
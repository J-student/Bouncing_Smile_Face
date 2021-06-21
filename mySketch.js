let X = 201;
let XS = 2;
let XD = 0;
let Y = 201;
let YS = 2;
let YD = 0; // X and Y potion, speed,derection 

let BC1 = 255;
let BC2 = 255;
let BC3 = 255
let FC1 = 240;
let FC2 = 255;
let FC3 = 0;
let MC1 = 0
let MC2 = 0
let MC3 = 0
let LEC1 = 255
let LEC2 = 255
let LEC3 = 255
let REC1 = 255
let REC2 = 255
let REC3 = 255
let TC1 = 255
let TC2 = 255
let TC3 = 255
let LPC1 = 0
let LPC2 = 0
let LPC3 = 0
let RPC1 = 0
let RPC2 = 0
let RPC3 = 0 //colours

const W = 87;
const A = 65;
const S = 83;
const D = 68;
const SPACE = 32; //key comands
function setup() {
	createCanvas(windowWidth, windowHeight);
}



function draw() {
	frameRate(60);



	background(BC1, BC2, BC3); //changes background colour

	if (mouseIsPressed && 200 < mouseX && mouseX < (width - 200) && 200 < mouseY && mouseY < (height - 200)) {
		(X = mouseX);
		(Y = mouseY);
	} //follows mouse

	if (keyIsPressed) {
		if (keyCode == W) {
			if (Y > 205) {
				Y -= 5;
			}
			YD = -1;
			XD = 0;
			XS = 0;
			if (YS == 0) {
				YS = 1;
			}
		} else if (keyCode == S) {
			if (Y < windowHeight - 205) {
				Y += 5;
			}
			YD = +1;
			XD = 0;
			XS = 0;
			if (YS == 0) {
				YS = -1;
			}
		} else if (keyCode == A) {
			if (X > 205) {
				X -= 5;
			}
			YD = 0;
			XD = -1;
			YS = 0;
			if (XS == 0) {
				XS = 1;
			}
		} else if (keyCode == D) {
			if (X < windowWidth - 205) {
				X += 5;
			}
			YD = 0;
			XD = +1;
			YS = 0;
			if (XS == 0) {
				XS = -1;
			}
		}
	} //face follows WADS derections
	if (X >= windowWidth - 200 || X <= 200) {
		if (YS == 0) {
			YS = 1;
		}
		XS = XS * -1;
		XD = 0
		YD = 0
	}
	if (Y >= windowHeight - 200 || Y <= 200) {
		if (XS == 0) {
			XS = 1;
		}
		YS = YS * -1;
		XD = 0
		YD = 0
	} //bounce off walls
 
	strokeWeight(5); 
	stroke(0, 0, 0);
	fill(FC1, FC2, FC3);
	ellipse(X, Y, 400, 400); //Face
	X += XS
	Y += YS

	stroke(0, 0, 0);
	fill(MC1, MC2, MC3);
	arc(X, Y + 20, 300, 300, 0, PI, CHORD); //mouth


	stroke(0, 0, 0);
	fill(LEC1, LEC2, LEC3);
	ellipse(X - 75, Y - 60, 100, 100); //left eye
	stroke(0, 0, 0);
	fill(REC1, REC2, REC3);
	ellipse(X + 75, Y - 60, 100, 100); //right eye
	stroke(0, 0, 0);
	fill(TC1, TC2, TC3);
	rect(X - 144, Y + 20, 290, 10); //teeth
strokeWeight(1);
	stroke(255, 255, 255);
	fill(LPC1, LPC2, LPC3);
	if (XD == 0 && YD == 0) {
		ellipse(X - 75 + 2.5 * XS, Y - 60 + 2.5 * YS, 70, 70);
		stroke(255, 255, 255);
		fill(RPC1,RPC2, RPC3);
		ellipse(X + 75 + 2.5 * XS, Y - 60 + 2.5 * YS, 70, 70);
	} else {
		ellipse(X - 75 + 5 * XD, Y - 60 + 5 * YD, 70, 70)
		ellipse(X + 75 + 5 * XD, Y - 60 + 5 * YD, 70, 70)
	}

	text("Jayedn Young", windowWidth, windowHeight)
	textAlign(RIGHT, BOTTOM)
}

function keyPressed() {
	if (keyCode == SPACE) {
		BC1 = int(random(256));
		BC2 = int(random(256));
		BC3 = int(random(256));
	}
	if (keyCode == 49) {
		FC1 = int(random(256));
		FC2 = int(random(256));
		FC3 = int(random(256));

	}
	if (keyCode == 50) {
		MC1 = int(random(256));
		MC2 = int(random(256));
		MC3 = int(random(256));
	}
	if (keyCode == 51) {
		LEC1 = int(random(256));
		LEC2 = int(random(256));
		LEC3 = int(random(256));
	}
	if (keyCode == 52) {
		REC1 = int(random(256));
		REC2 = int(random(256));
		REC3 = int(random(256));
	}
	if (keyCode == 53) {
		TC1 = int(random(256))
		TC2 = int(random(256))
		TC3 = int(random(256))
	}
	if (keyCode == 54) {
		LPC1 = int(random(256))
		LPC2 = int(random(256))
		LPC3 = int(random(256))
	}
	if (keyCode == 55) {
		RPC1 = int(random(256))
		RPC2 = int(random(256))
		RPC3 = int(random(256))
	}
	if (keyCode == 82) {
		BC1 = 255;//B=background,C=Colour
		BC2 = 255;
		BC3 = 255;
		FC1 = 240;//F=Face
		FC2 = 255;
		FC3 = 0;
		MC1 = 0; //M=Mouth
		MC2 = 0;
		MC3 = 0;
		LEC1 = 255;//L=left,E=eye
		LEC2 = 255;
		LEC3 = 255;
		REC1 = 255;//R=right
		REC2 = 255;
		REC3 = 255;
		TC1 = 255;//T=teeth
		TC2 = 255;
		TC3 = 255;
		LPC1 = 0;//P=Pupil 
		LPC2 = 0;
		LPC3 = 0;
		RPC1 = 0;
		RPC2 = 0;
		RPC3 = 0;
	}
}

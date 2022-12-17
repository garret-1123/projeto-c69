canv =  document.getElementById("canv")
ctx = canv.getContext("2d")
carw = 75
carh = 100

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

carx = 5
cary = 225

function add() {
	bgImage = new Image;
	bgImage.onload = uploadBackground;
	bgImage.src = backgroundImage

	carImage = new Image;
	carImage.onload = uploadGreenCar;
	carImage.src = greencarImage
}

function uploadBackground() {
	ctx.drawImage(bgImage, 0,0,canv.width,canv.height)

}

function uploadGreenCar() {
	ctx.drawImage(carImage, carx,cary,carw,carh)

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary > 0) cary-=3
	uploadBackground()
	uploadGreenCar()
}

function down()
{
	if (cary < canv.height) cary+=3
	uploadBackground()
	uploadGreenCar()
}

function left()
{
	if (carx > 0 )carx-=3
	uploadBackground()
	uploadGreenCar()
}

function right()
{
	if (carx < canv.width) carx+=3
	uploadBackground()
	uploadGreenCar()
}

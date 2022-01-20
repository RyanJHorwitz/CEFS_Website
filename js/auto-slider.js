// AUTO/MANUAL MOVING CAROUSEL

// Automatic counter
var counter = 1;
setInterval(function(){
	document.getElementById('radio-' + counter).checked = true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
 }, 4000); 

// Manual click overrides counter number and slideshow begins at new counter
var override = function()
{
    counter = parseInt(this.id.charAt(this.id.length - 1));
}

document.getElementById('radio-1').onclick = override;
document.getElementById('radio-2').onclick = override;
document.getElementById('radio-3').onclick = override;
document.getElementById('radio-4').onclick = override;

// Lines 3-11 of code pulled from: 
// https://www.codingsnow.com/2021/01/image-slider-with-auto-play-manual.html

// Remainder added by Ryan J. Horwitz
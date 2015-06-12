function gotClick(thisElement, sound){
	var origClass = thisElement.className;
	thisElement.className="black block";
	setTimeout(function() {thisElement.className=origClass;}, 200);
	var beep = new Audio(sound);
	beep.play();
}

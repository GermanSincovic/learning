class Carousel {
	constructor(){
		const carousel = this;
		this.block = document.getElementById("carousel");
		this.imgList = this.block.firstElementChild.getElementsByTagName('img');
		this.maxPos = this.imgList.length-1;
		this.leftButton = this.block.getElementsByClassName('left')[0];
		this.rightButton = this.block.getElementsByClassName('right')[0];
		this.position = 0;

		this.leftButton.addEventListener('click', function(){ carousel.turnleft() } );
		this.rightButton.addEventListener('click', function(){ carousel.turnright() } );
		this.itervalID = setInterval( function(){ carousel.turnright() }, 3000 );
	}
	

	turnleft(){
		this.position <= 0 ? this.position = this.maxPos : this.position--;
		for (var i = 0; i < this.imgList.length; i++) {
			this.imgList[i].style.left = this.position*(-100) + "%";
		}
	}

	turnright(){
		this.position >= this.maxPos ? this.position = 0 : this.position++;
		for (var i = 0; i < this.imgList.length; i++) {
			this.imgList[i].style.left = this.position*(-100) + "%";
		}
	}



}
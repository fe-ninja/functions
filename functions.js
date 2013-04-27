	/**
	@param ele  Dom,
	@param pro  String,
	@return pro  String
	*/
	function getStyle(ele,pro){

		if(ele.currentStyle){
			return ele.currentStyle[pro];
		}
		else if(window.getComputedStyle||document.getDefaultView.getComputedStyle){
			return (window.getComputedStyle||document.getDefaultView.getComputedStyle)[pro];
		}
		else{
			return ele.style[pro];
		}
	}


	function getByClass(){

	}

	function addEvent(){
		
	}
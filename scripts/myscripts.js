$(document).ready(function(){

		$(".guess_box").click(checkForCode);
		//code to highlight box on which mouse hovers
		$(".guess_box").hover(
			function () {
			// this is the mouseenter event handler
			$(this).addClass("my_hover");
			},
			function () {
			// this is the mouseleave event handler
			$(this).removeClass("my_hover");
			
		});
			// code to generate random number
			function getRandom(num){
				var my_val= Math.floor(Math.random()*num);
				//alert (my_val);
				return my_val;

			}
			// code to hide discount in different box
			var hideCode= function(){
				var numRand= getRandom(5);
				$(".guess_box").each(function(index,value){
					if(numRand == index)
					{
						$(this).append("<span id='has_discount'></span>");
						return false;
					}
				});
			}
			hideCode();

			// code to check discount code
			function checkForCode() {
			var discount;
			if($.contains(this, document.getElementById("has_discount") ) )
			{
				var my_num=getRandom(100);
				discount = "<p>Your Code: CODE"+my_num+"</p>" ;
				
			}else{
				discount= "<p>Sorry no discount this time!!</p>";
			}
			//code to unbind all events and highlight box having discount
			$(".guess_box").each(function(){
			if($.contains(this, document.getElementById("has_discount")))
			{
				$(this).addClass("discount");
			}
			else
			{
			$(this).addClass("no_discount");
			}
			$(this).unbind();

			});
			// code to append result to span element 
			$("#result").append(discount);
			}	
});


$(document).ready(function(){
	//animation
	var effect = "animate__backInDown";
	var effectEnd = "animationend oanimationend webkitanimationend mozanimationend"
	$("").hover(function(){
		$(this).addClass(effect).one(effectEnd,function(){
			$(this).removeClass(effect);
		});
	});
});
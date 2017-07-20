$(function(){
	function box(p,ul,li,p2){
		$(p).click(function(){
			$(ul).slideToggle(true);
		})
		$(p).blur(function(){
			$(ul).css("display","none");
		})
		$(li).click(function(){
			var a=$(this).children("span").html();
			$(p2).html(parseInt(a));
			$(ul).css("display","none");
		})
		
	}
	box($("#p1"),$("#ul"),$("#ul li"),$("#p2"));
	box($("#p3"),$("#ul1"),$("#ul1 li"),$("#p4"));
})

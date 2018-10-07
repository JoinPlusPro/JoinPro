$(function(){
//	$(".delete,.update").mouseenter(function(){           //图标的变化
//		$(this).css({
//			"opacity":"1",
//		})
//	})
//	$(".delete,.update").mouseleave(function(){
//		$(this).css({
//			"opacity":"0.5",
//		})
//	})
//	$(".delete,.update").mousemove(function(){
//		$(this).css({
//			"opacity":"1",
//		})
//	})	
	$(function(){
	$("#sidebar ul li:nth-child(5) a").hover(function(){
		$(this).css({
			"background-color":"rgb(78,84,101)"
		});
	},function(){
		$(this).css({
			"background-color":"rgb(78,84,101)"
		});
	});
})

})
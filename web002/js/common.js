$(window).load(function(){
	$(".loading").fadeOut("slow");
});

$(document).ready(function(){
	//page scroll =============================
	var z_num =1;
	var state = "p1";

	$(window).scroll(function(){
		
		var window_top = $(this).scrollTop();
		var window_height = $(window).height();//=100vh
		var window_bottom = window_top + window_height;

		//文字視窗元件
		var element_height = $(".info").outerHeight();
		var element_top = $(".info").offset().top;
		var element_bottom = (element_top + element_height);
		//計算各頁位置
		var pagecover_top = $(".page-cover").offset().top;
		var pagecover_bottom = pagecover_top + window_height;

		var pageabout_top = $(".page-about").offset().top;
		var pageabout_bottom = pageabout_top + window_height;

		var pagedetail_top = $(".page-detail").offset().top;
		var pagedetail_bottom = pagedetail_top + window_height;

		var pageart_top = $(".page-art").offset().top;
		var pageart_bottom = pageart_top + window_height;

		//contect-box
		var contectbox_top = $(".contect-box").offset().top;

		//debug use
		//$("#test").text("state:"+state+",window_top:"+window_top+",window_bottom:"+window_bottom+",window_height:"+window_height+",element_height:"+element_height+",element_top:"+element_top+",element_bottom:"+element_bottom);
		//$("#test2").text("pagecover_top:"+pagecover_top+",pagecover_bottom:"+pagecover_bottom+",pageabout_top:"+pageabout_top+",pageabout_bottom"+pageabout_bottom+",pagedetail_top:"+pagedetail_top+",pagedetail_bottom:"+pagedetail_bottom+",pageart_top:"+pageart_top+",pageart_bottom:"+pageart_bottom);
		
		//dwon
		if(element_top > pageabout_top && state == "p1")
		{
			$(".info_about").css("height","0");
			$(".info_about").css("z-index",z_num).animate({height:"100%"},"slow");
			z_num ++;
			state="p2";
		}
		if(element_top > pagedetail_top && state == "p2")
		{
			$(".info_detail").css("height","0");
			$(".info_detail").css("z-index",z_num).animate({height:"100%"},"slow");
			z_num ++;
			state="p3"
		}
		if(element_top > pageart_top && state == "p3")
		{
			$(".info_art").css("height","0");
			$(".info_art").css("z-index",z_num).animate({height:"100%"},"slow");
			z_num ++;
			state="p4";
		}


		//up
		if(element_bottom < pageabout_top && state == "p2")
		{
			$(".info_cover").css("height","0");
			$(".info_cover").css("z-index",z_num).animate({height:"100%"},"slow");
			z_num ++;
			state="p1";
		}
		if(element_bottom < pagedetail_top && state == "p3")
		{
			$(".info_about").css("height","0");
			$(".info_about").css("z-index",z_num).animate({height:"100%"},"slow");
			z_num ++;
			state="p2";
		}
		if(element_bottom < pageart_top && state == "p4")
		{
			$(".info_detail").css("height","0");
			$(".info_detail").css("z-index",z_num).animate({height:"100%"},"slow");
			z_num ++;
			state="p3";
		}		

		// 超過滑動範圍 固定位置
		if(state == "p4" && element_bottom > contectbox_top)
		{
			$(".info-box").css({"position":"absolute","top":pageart_top,"height":element_height});
			state = "p5";
		}
		if(state == "p5" && window_top < element_top && window_bottom < pageart_bottom)
		{
			$(".info-box").css({"position":"fixed","top":"calc(50vh - 30%)","height":"60%"});
			state ="p4";
		}
		
	});//page scroll =============================


	var flag="false";
	//burger menu btn==========================
	$("#tagline text").click(function(){
			if(flag == "false")
			{
				$("#footer-set").addClass("footer-menu-setting");
				$(".burger-menu-btn").addClass("open");
				flag = "true";
			}else{
				$("#footer-set").removeClass("footer-menu-setting");
				$(".burger-menu-btn").removeClass("open");
				flag = "false";

			}
		});
	//burger menu btn==========================

});
	

	



	

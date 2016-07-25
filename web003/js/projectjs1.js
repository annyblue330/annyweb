$(window).load(function(){
	$(".loading").fadeOut("slow");
	$("nav").css("display","none");
});

$(document).ready(function(){
	$("nav").css("display","block");
	var flag="p1";

	$(".touch").click(function(){
		$("#navbar-ul").removeClass("in");
	});

	$(document).scroll(function(){
		scroll_position = $(this).scrollTop();
		var window_top = $(this).scrollTop();
		var window_height = $(window).height();//=100vh
		var window_bottom = window_top + window_height;

		//計算各頁位置
		var pagecover_top = $("#page-title").offset().top;
		var pagecover_bottom = pagecover_top + window_height;

		var pageabout_top = $("#page-about").offset().top;
		var pageabout_bottom = pageabout_top + window_height;

		var pageskill_top = $("#page-skill").offset().top;
		var pageskill_bottom = pageskill_top + window_height;

		var pageworks_top = $("#page-works").offset().top;
		var pageworks_bottom = pageworks_top + window_height;



		//down
		if(flag=="p1" && window_bottom > pageabout_top)
		{
			$( "body" ).animate({backgroundColor: "#00bfff"}, 1000 );//blue
			flag = "p2";
		}

		if(flag == "p2" && window_bottom > pageskill_top)
		{
			$( "body" ).animate({backgroundColor: "#ffbb33"}, 1000 );//orange
			flag = "p3";
		}
		if(flag =="p3" && window_bottom > pageworks_top)
		{
			$( "body" ).animate({backgroundColor: "#66cc66"}, 1000 ); //green
			
			flag = "p4";
		}
		

		if(flag == "p4" && window_bottom <= pageskill_bottom)
		{
			$( "body" ).animate({backgroundColor: "#ffbb33"}, 1000 );//orange
			flag = "p3";
		}
		if(flag == "p3" && window_bottom <= pageabout_bottom)
		{
			$( "body" ).animate({backgroundColor: "#00bfff"}, 1000 );//blue
			flag = "p2";
		}
		if(flag == "p2" && window_bottom <= pagecover_bottom)
		{
			flag = "p1";
			$( "body" ).animate({backgroundColor: "#61cdb8"}, 1000 );
		}

	$("#test").text("flag:"+flag+"pagecover_bottom:"+pagecover_bottom+"window_top:"+window_top+"window_bottom"+window_bottom +"pageabout_top"+pageabout_top);
	});


	$( function() {
    var state = true;
    $( "#imgbtn" ).on( "click", function() {
      if ( state ) {
        $( "body" ).animate({
          backgroundColor: "#aa0000"}, 1000 );
      } else {
        $( "body" ).animate({
          backgroundColor: "#ff9966"}, 1000 );
      }
      state = !state;
    });
  } );


	$("#ui01-img").click(function(){
		$("#show_img").attr("src","img/ui001-air.png");
		$("#show_img").css("height","90%");
		$("#show_img2").css("display","none");
		$("#img_title").text("航空公司ＡＰＰ");
		$("#img_text").text("使用Sketch製作");
		$("#img_model").show();
	});

	$("#ui04-img").click(function(){
		$("#show_img").attr("src","img/ui004prototype.gif");
		$("#show_img").css("height","90%");
		$("#show_img2").css("display","none");
		$("#img_title").text("星座ＡＰＰ");
		$("#img_text").text("使用Sketch製作，Prototype使用hype3");
		$("#img_model").show();
	});

	$("#ui02-img").click(function(){
		$("#show_img").attr("src","img/ui002-health.jpg");
		$("#show_img").css("max-width","90%");
		$("#show_img").css("height","auto");
		$("#img_title").text("健康小幫手ＡＰＰ");
		$("#img_text").text("使用Sketch製作");
		$("#img_model").show();
	});

	$("#ui03-img").click(function(){
		$("#show_img").attr("src","img/ui003-food-mockup.jpg");
		$("#show_img2").attr("src","img/d4-fast_food-gif.gif");
		$("#show_img2").css("display","block");
		$("#show_img").css("max-width","90%");
		$("#show_img").css("height","auto");
		$("#img_title").text("速食店點餐ＡＰＰ");
		$("#img_text").text("使用Sketch製作，Prototype使用hype3");
		$("#img_model").show();
	});

	 $("#close").click(function(){
	 	$("#img_model").hide();
	 });


});

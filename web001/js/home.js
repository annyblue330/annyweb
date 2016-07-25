$(document).ready(function(){

	/*user menu =======================*/
	$(".img").mouseenter(function(){
		$(this).animate({
			width:'+=5px',
			height:'+=3px'
		},"slow"),
		$(this).animate({
			width:'-=5px',
			height:'-=3px'
		},"slow");
	});	



	$("#mobile_menu").hide();
	$("#mobile_menu_icon").click(function(){ /*in small size use*/
		var menu_icon = $(this).attr("src");

		if(menu_icon == "img/more-icon.png")
		{
			$(this).hide("slow",function(){
				$(this).attr("src","img/cross-icon.png");
			});
			$(this).show("slow");
			$("#mobile_bg").attr("class","mobile_bg_set");
		}
		else{
			$(this).hide("slow",function(){
				$(this).attr("src","img/more-icon.png");	
			});
			$(this).show("slow");
			$("#mobile_bg").attr("class","aaa");
		}

			$("#mobile_menu").slideToggle();
	});

	/*user menu =======================*/


	/*about page use*/
	/*default state*/
	$("#profile2").hide();
	$("#profile3").hide();
	$("#profile_img_p1").css({"opacity": "1" , "box-shadow": "10px 6px 7px gray"});/*預設選擇第一個人*/

	$(".profile_img").click(function(){
		var id = $(this).attr("id");
		
		if(id == "profile_img_p1")
		{
			$("#profile_img_p1").css({"opacity": "1" , "box-shadow": "10px 6px 7px gray"});
			$("#profile_img_p2").css({"opacity": "0.7" , "box-shadow": "0px 0px 7px gray"});
			$("#profile_img_p3").css({"opacity": "0.7" , "box-shadow": "0px 0px 7px gray"});
			$("#profile1").show("slow");
			$("#profile2").hide("1000");
			$("#profile3").hide("1000");
		
		}
		else if(id == "profile_img_p2")
		{
			$("#profile_img_p1").css({"opacity": "0.7" , "box-shadow": "0px 0px 7px gray"});
			$("#profile_img_p2").css({"opacity": "1" , "box-shadow": "10px 6px 7px gray"});
			$("#profile_img_p3").css({"opacity": "0.7" , "box-shadow": "0px 0px 7px gray"});
			$("#profile1").hide("1000");
			$("#profile2").show("slow");
			$("#profile3").hide("1000");
		}
		else
		{
			$("#profile_img_p1").css({"opacity": "0.7" , "box-shadow": "0px 0px 7px gray"});
			$("#profile_img_p2").css({"opacity": "0.7" , "box-shadow": "0px 0px 7px gray"});
			$("#profile_img_p3").css({"opacity": "1" , "box-shadow": "10px 6px 7px gray"});
			$("#profile1").hide("1000");
			$("#profile2").hide("1000");
			$("#profile3").show("slow");
		}
		
	});

	 /*product page use*/
	 /*$("#img_model").hide();hide img model*/
	 $(".product_img").click(function(){
	 	var src = $(this).attr("src");/*src:img/product01-s.jpg*/
	 	var bigimg_src = src.substr(0,13)+".jpg";/*src:img/product01.jpg*/
		/*alert("src:"+src+",after src:"+bigimg_src);*/
	 	$("#show_img").attr("src", bigimg_src);
	 	var title = $(this).attr("alt");
	 	$("#img_title").text(title);
	 	var detal = $(this).attr("detal");
	 	$("#img_text").text(detal);
	 	$("#img_model").show();/*$("#img_model").css("display","block");*/
	 });

	 $("#close").click(function(){
	 	/*$("#img_model").css("display","none");*/
	 	$("#img_model").hide();
	 });

});

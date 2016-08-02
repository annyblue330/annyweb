

$(document).ready(function(){

	setTimeout(
		function() 
		{ 
				if(NProgress.done())
				{
					$(".title-cover").fadeOut("1000");

					//ＬＯＧＯ動畫結束後 首頁圖片才開始
					 $("#c1").addClass("c-bg");
					 initialInterval();
					 
				}; 
				
		}
		, 6000);//after 5s (title animate)

		$("#nav-menu").addClass("navdefault");//藏在右側
 		//burger btn event
 		$(".burger circle").click(function(){
 			$("#nav-menu").addClass("push-left");
 			$("#nav-menu").removeClass("navdefault");
 			$(".page").addClass("push-body-left");
 			$(".page").removeClass("push-body-right");
 			$("#cover-div").css("display","block");
 		}
 		);

 		$("#close").click(function(){
 			$("#nav-menu").removeClass("push-left");
 			$("#nav-menu").addClass("navdefault");
 			$(".page").addClass("push-body-right");
 			$(".page").removeClass("push-body-left");
 			$("#cover-div").css("display","none");
 		}
 		);


		$("#icon-left").click(function(){
			clickChangePage(-1);
		});
		$("#icon-right").click(function(){
			clickChangePage(1);
		}); 

		//不ＤＲＹ
		$("#c1").click(function(){
			bottonClickChangePage(1);
		});
		$("#c2").click(function(){
			bottonClickChangePage(2);
		});
		$("#c3").click(function(){
			bottonClickChangePage(3);
		});
		$("#c4").click(function(){
			bottonClickChangePage(4);
		});
});

var minPages = 1;
var maxPages = 4;
var interval;

function initialInterval()
{
	clearInterval(interval);
	interval = setInterval(function(){ changePage(); }, 5000);
}

function initialPage()
{
	for(var i = 1;i<= maxPages ;i++)
	{
		 if (document.getElementById("p"+i).style.zIndex == "1")
		 { 
		 	$("#p"+i).hide(); 
		 	$("#c"+i).removeClass("c-bg");
		 }
	}
}

//頁面動畫設定
function animate_showpage(pg){
	$("#p"+pg).show();
	document.getElementById("p"+pg).style.zIndex = "4";
	$("#p"+pg).addClass( "fadein" );
	$("#c"+pg).addClass("c-bg");
	$("#t"+pg).addClass("jump");
	$("#tp"+pg).addClass("opacityiani");
}
function animate_hidepage(pg){
	document.getElementById("p"+pg).style.zIndex = "1";
	$( "#p"+pg).removeClass( "fadein" ); 
	$("#c"+pg).removeClass("c-bg");
	$("#t"+pg).removeClass("jump");
	$("#tp"+pg).removeClass("opacityiani");
}

// 自動切換
function changePage()
{
	initialPage();

	for(var i = 1;i<= maxPages ;i++)
	{
		 if (document.getElementById("p"+i).style.zIndex == "4")
		 {
			animate_hidepage(i);//先把現在畫面上的移除

			 if(i==maxPages)
			 {//若以到最大頁數 將顯示第一頁
				  animate_showpage(minPages);
			 }
			 else
			 {//一般情況 下一頁出現
				  animate_showpage(i+1);
			 } 
			 	break;
		 }
	}
}

//左右箭頭按鈕
function clickChangePage(pageCount)
{
	initialPage();
	initialInterval();
	for(var i = 1;i<= maxPages ;i++)
	{
		 if (document.getElementById("p"+i).style.zIndex == "4")
		 {
			 animate_hidepage(i);

			 if(i==maxPages && pageCount == 1)//最大頁數要下一頁
			 {
				  animate_showpage(minPages);
			 }
			 else if(i==minPages && pageCount == -1)//最小頁數要上一頁
			 {
			 	animate_showpage(maxPages);
			 }
			 else
			 {
			 	animate_showpage(i+pageCount);
			 } 
			 break;
		 } 
	}
}

//小圈圈控制鈕
function bottonClickChangePage(pageCount2)
{
	initialPage();
	initialInterval();
	for(var i = 1;i<= maxPages ;i++)//先把最上面的變成一
	{
		 if (document.getElementById("p"+i).style.zIndex == "4")
		 {
			animate_hidepage(i);
	 	} 	
	}
	//debugger;	 
	animate_showpage(pageCount2);
}
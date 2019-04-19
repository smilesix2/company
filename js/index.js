$(document).ready(function() {
// define  var
// plan
	var corePlan=[542,272];
	var spansPlan=$("#plan span").not(":last");
	var divsPlan=$("#plan div");
	var imgPlan=$("#plan img");
	var arrPlan0=[
		{'left':50,"top":0},
		{'left':50,"top":269},
		{'left':50,"top":540},
		{'left':542,"top":0},
		{'left':1028,"top":540},
		{'left':542,"top":540},
		{'left':1028,"top":0},
		{'left':1028,"top":269}
	];			
	var arrPlan1=[
		{'left':50,"top":0},
		{'left':183,"top":269},
		{'left':50,"top":444},
		{'left':542,"top":503},
		{'left':866,"top":0},
		{'left':860,"top":270},
		{'left':858,"top":443}
	];

// define fn
// plan
	function initPlanImg(obj){
		obj.css({
			"width":0,
			"height":0,
			"top":"340px",
			"left":"606px",
			"opacity":0
		});
	}
	function initPlan(obj,arr){
		obj.each(function(i,v){
			$(v).css({
				"left":arr[0]+"px",
				"top":arr[1]+"px",
				"opacity":0
			});
			$(v).removeClass("act");
		});
	}
	function changePlanImg(obj,time,fn){
		obj.animate({
			width:"494px",
			height:"299px",
			left:"371px",
			top:"186px",
			opacity:1
		},time,'easeOutQuad',fn);
	}
	function changePlan(obj,arr,time,fn){
		obj.each(function(i,v){
			$(v).animate({
				left:arr[i]["left"]+"px",
				top:arr[i]["top"]+"px",
				opacity:1
			},time,'easeOutQuad',fn);
		});
	}	
	function sumPlanInit(){
		initPlan(spansPlan,corePlan);		
		initPlan(divsPlan,corePlan);
		initPlanImg(imgPlan);
	}
	function sumPlanChange(){
		changePlanImg(imgPlan,600);
		changePlan(divsPlan,arrPlan1,600,function(){
			changePlan(spansPlan,arrPlan0,80,function(){
				divsPlan.each(function(i,v){
					$(v).addClass("act");
				});
				spansPlan.each(function(i,v){
					$(v).addClass("act");
				});
			});
		});
	}

// solution
	function upIcon(i,objs,fn){
		if(i>0){
			$(objs[i]).stop(true).animate({'opacity':1},200,function(){
				upIcon(i-1,objs,fn);
			});
		}else{
			$(objs[0]).stop(true).animate({'opacity':1},200,function(){
				fn();
			});
		}
	}
	function downIcon(i,objs,fn){
		if(i<objs.length-1){
			$(objs[i]).stop(true).animate({'opacity':0.5},200,function(){
				downIcon(i+1,objs,fn);
			});
		}else{
			$(objs[objs.length-1]).stop(true).animate({'opacity':0.5},200,function(){
				fn();						
			});
		}
	}

// act
// slide
	// num change
	function numChange(){
	    var options = {
	      useEasing : true, 
	      useGrouping : true, 
	      separator : ',', 
	      decimal : '.',
	      prefix : '', 
	      suffix : '' 
	    };
	    var banLeftNum = new CountUp("banLeft", 106000, 106498, 0, 2, options);
	        banLeftNum.start();
	    var banRightNum = new CountUp("banRight", 157903000, 157903718, 0, 2, options);
	        banRightNum.start();
	}
	function resizeBan(){
		$("#slidesWrap,#slidesWrap .slideWrap").css({
			width:$(window).width()+"px",
			height:$(window).height()+"px"
		});
	}
	resizeBan();
	$(window).resize(function() {
		resizeBan();
	});
    var timer = null;
    var cur = 0;
    var len = $("#slidesWrap li").length;
    function actMove(){
    	$("#slidesWrap .slideWrap").eq(cur).siblings(".slideWrap").css({"z-index": 1}).fadeOut(300,"easeInBack");
        $("#slidesWrap .slideWrap").eq(cur).css({"z-index": 2}).fadeIn(300,"easeInOutBack");
    }
    $("#slidesWrap").hover(function(){
        clearInterval(timer);
        $("#pre,#next").css("display","block");
    },function(){
        showImg();
        $("#pre,#next").css("display","none");
    });
    $("#slidesWrap li").click(function(){
        clearInterval(timer);
        cur = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");	        	  
		actMove();
        if (cur===4) {
        	numChange();
        }
    });

    $("#pre").click(function(){
    	cur--;
    	if( cur<0 ){ cur=len-1; }
        $("#slidesWrap li").eq(cur).addClass("active").siblings().removeClass("active");
        actMove();
    });
    $("#next").click(function(){
     	cur++;
    	if( cur>=len ){ cur=0; }
        $("#slidesWrap li").eq(cur).addClass("active").siblings().removeClass("active");  
        actMove(); 	
    });

    function showImg(){
    	clearInterval(timer);
        timer = setInterval(function(){		            
        	cur++;       
            if( cur>=len ){ cur=0; }
            $("#slidesWrap li").eq(cur).addClass("active").siblings().removeClass("active");
            actMove();
            if (cur===4) {
	        	numChange();
	        }
        },2500);
    }
    $("#slidesWrap .slideWrap").eq(0).css({"z-index": 2});
    setTimeout(function(){    	
    	showImg();
    },1000);

// solution	
	$("#iconSolu dd").each(function(i,v){
		$(v).css("opacity",0.5);
	});



	$("#iconSolu dt").each(function(i,v){
		var dds=$(v).parent().find("dd");
		setInterval(function(){
			upIcon(dds.length-1,dds,function(){
				downIcon(0,dds,function(){
					
				});
			});	
		},1500);
	});


	// $("#iconSolu dt").mouseover(function(){
	// 	var that=this;
	// 	var dds=$(that).parent().find("dd");
	// 	upIcon(dds.length-1,dds,function(){
	// 		// $(that).removeClass("small");
	// 		// $(that).addClass("big");
	// 	});
	// });
	// $("#iconSolu dt").mouseout(function(){
	// 	var that=this;
	// 	var dds=$(that).parent().find("dd");
	// 	// $(that).removeClass("big");
	// 	// $(that).addClass("small");
	// 	downIcon(0,dds,function(){
	// 		// $(that).css("transform","scale(1,1)");
	// 	});
	// });

// fullpage
// init
	sumPlanInit();
	// var pageColor=['#1d89ed','#0795f1','#2cb5e8','#001c5d','#f2f4f8','#f2f4f8'];
	var pageColor=['transparent','#0795f1','#2cb5e8','#001c5d','#f2f4f8','#f2f4f8'];
	$('#fullpage').fullpage({
		slidesColor: pageColor,
		autoScrolling: true,
		navigation:true,   
		slidesNavigation:true,           
		// navigationPosition:'right', 
		controlArrows: false,  
          // autoScrolling:false
        // afterLoad:function(anchorLink,index){
        // 	$("nav img").attr("src","img/logo.png");
        // 	$(".navbar-inverse .navbar-nav>li>a").css("color","#f4f8fe");
      		// $(".navbar-inverse .navbar-nav>.active>a").css({
      		// 	"color":"#fff",
      		// 	"border-bottom-color":"#fff"
      		// });
        //   	$("nav .col-md-2,nav .col-md-9,nav .col-md-offset-1,.navbar-header,.navbar-inverse,nav .container,.navbar-collapse").css({
        //   		"background-color":pageColor[index-1],
        //   		"border-color":pageColor[index-1]
        //   	});
        //   	if (index>=5) {
        //   		$("nav img").attr("src","img/logo2.png");
        //   		$(".navbar-inverse .navbar-nav>li>a").css("color","#333");
        //   		$(".navbar-inverse .navbar-nav>.active>a").css({
        //   			"color":"#097ccb",
        //   			"border-bottom-color":"#097ccb"
        //   		});
        //   	};
        //   	if(index===3){
        //   		sumPlanChange();
        //   	}else{
        //   		sumPlanInit(); 
        //   	};
        // }
        onLeave:function(index,nextIndex,direction ){
        	$("nav img").attr("src","img/logo.png");
        	$(".navbar-inverse .navbar-nav>li>a").css("color","#f4f8fe");
      		$(".navbar-inverse .navbar-nav>.active>a").css({
      			"color":"#fff",
      			"border-bottom-color":"#fff"
      		});
          	$("nav .col-md-2,nav .col-md-9,nav .col-md-offset-1,.navbar-header,.navbar-inverse,nav .container,.navbar-collapse").css({
          		"background-color":pageColor[nextIndex-1],
          		"border-color":pageColor[nextIndex-1]
          	});
          	if (nextIndex>=5) {
          		$("nav img").attr("src","img/logo2.png");
          		$(".navbar-inverse .navbar-nav>li>a").css("color","#333");
          		$(".navbar-inverse .navbar-nav>.active>a").css({
          			"color":"#097ccb",
          			"border-bottom-color":"#097ccb"
          		});
          		$("nav .col-md-2, nav .col-md-9, nav .col-md-offset-1, .navbar-header, .navbar-inverse, nav .container, .navbar-collapse").css({
					"backgroundColor":"#fff",
					"borderBottomColor":"#ddd"
				});
          	};
          	if(nextIndex===3){
          		sumPlanChange();
          	}else{
          		sumPlanInit(); 
          	};
        }
    }); 

// partner img change color
   var imgPartner0=[
	   "img/partner2.png","img/partner1.png","img/partner3.png","img/partner4.png","img/partner5.png",
	   "img/partner6.png","img/partner7.png","img/partner8.png","img/partner9.png","img/partner10.png"
   ];
   var imgPartner1=[
	   "img/partner2a.png","img/partner1a.png","img/partner3a.png","img/partner4a.png","img/partner5a.png",
	   "img/partner6a.png","img/partner7a.png","img/partner8a.png","img/partner9a.png","img/partner10a.png"
   ];
   $(".partner li").eq(0).find("img").each(function(i,v){
   	$(v).attr("index",$(this).index());
   });
   $(".partner li").eq(1).find("img").each(function(i,v){
   	$(v).attr("index",$(this).index()+5);
   });
   $(".partner img").each(function(i,v){
	   	$(v).mouseover(function(){
	   		$(this).attr("src",imgPartner1[$(this).attr("index")]);
	   	});
	   	$(v).mouseout(function(){
	   		$(this).attr("src",imgPartner0[$(this).attr("index")]);
	   	});
   });


});
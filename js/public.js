function navChange(obj){
	var top=obj.offset().top;
	var top2=$(window).scrollTop();
	if(top2>=top-$("nav").height()){	
		$("nav .col-md-2, nav .col-md-9, nav .col-md-offset-1, .navbar-header, .navbar-inverse, nav .container, .navbar-collapse").css({
			"backgroundColor":"#fff",
			"borderBottomColor":"#ddd"
		});
		$(".navbar-inverse .navbar-nav>li>a").css({
			"color":"#333"
		});
		$(".navbar-inverse .navbar-nav>.active>a").css({
			"color":"#097CCB",
			"borderBottomColor":"#097CCB"
		});
		$("nav img").attr("src","img/logo2.png");
	}else{
		$("nav .col-md-2, nav .col-md-9, nav .col-md-offset-1, .navbar-header, .navbar-inverse, nav .container, .navbar-collapse").css({
			"backgroundColor":"transparent",
			"borderBottomColor":"transparent"
		});
		$(".navbar-inverse .navbar-nav>li>a").css({
			"color":"#abaec5"
		});
		$(".navbar-inverse .navbar-nav>.active>a").css({
			"borderBottomColor":"#fff"
		});
		$("nav img").attr("src","img/logo.png");
	};	
}

// baidu statistics
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2380ebb08357a1db6341e6a3c9bff1d3";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
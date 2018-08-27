var bodyWidth=window.screen.availWidth;
var loadScript = document.createElement("link");
loadScript.rel = "stylesheet";
loadScript.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(loadScript);

var currentHref=window.location.href;
if(bodyWidth>1200){
	if(currentHref.indexOf("preSale.html")>-1){
		loadScript.href = "dynamic/preSale.css?v="+randomStr;
	}else if(currentHref.indexOf("intro.html")>-1){
    loadScript.href = "dynamic/intro.css?v="+randomStr;
  }else if(currentHref.indexOf("news.html")>-1){
        loadScript.href = "dynamic/news.css?v="+randomStr;
	}else if(currentHref.indexOf("newsDetail.html")>-1){
        loadScript.href = "dynamic/newsDetail.css?v="+randomStr;
    }else{
        loadScript.href = "dynamic/main.css?v="+randomStr;
	}
	
//	loadScript.href = "css/main.css";
}
else{
    $(document).ready(function(){
        $(".logo-box img").attr('src','img/logoMb.png');
    });
    if(currentHref.indexOf("preSale.html")>-1){
		loadScript.href = "dynamic/preSaleMb.css?v="+randomStr;
	}else if(currentHref.indexOf("intro.html")>-1){
      loadScript.href = "dynamic/introMb.css?v="+randomStr;
    }else if(currentHref.indexOf("news.html")>-1){
        loadScript.href = "dynamic/newsMb.css?v="+randomStr;
    }else if(currentHref.indexOf("newsDetail.html")>-1){
        loadScript.href = "dynamic/newsDeMb.css?v="+randomStr;
    }else{
        loadScript.href = "dynamic/mainMb.css?v="+randomStr;
	}
}
/*刷新时避免失去样式的html页面的显示*/
loadScript.onload=function(){
	loadScript.onload=null;
	/*document.getElementById("bodyBox").style.opacity=1;*/
}
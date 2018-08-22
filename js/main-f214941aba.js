//将浏览器语言设置为常量
//var newClass=function(){
//	var currenctLang;
//	if(navigator.language){
//		currenctLang=navigator.language;
//	}
//	else{
//		currenctLang=navigator.browserLanguage;
//	}
//	var constObj={
//		language:currenctLang,
//		word:{
//			"en":"EN",
//			"zh-CN":"中文",
//		},
//		img:{
//			"en":"./img/EN.png",
//			"zh-CN":"./img/ZH.png",
//		}
//	}
//	this.getConst=function(name){
//		return constObj[name];
//	}
//}
//var languageObj=new newClass();

/**
 * 获取存储的语言设置
 */
//window.onload=function(){
//	var languageType=localStorage.getItem('lang');
//	var languageWord=languageObj.getConst("word");
//	var languageImg=languageObj.getConst("img");
////	console.log(navigator.language);
//	if(languageType=='en'){
//		loadJs("i18n/language_en.js",'lang');
//		var bodyWidth=window.screen.availWidth;
//		loadCss('dynamic/main-en.css');
//		$(".language .langWord").text(languageWord[languageType]);
//		$(".language .langImg").attr("src",languageImg[languageType]);
//	}
//	else if(languageType=='zh-CN'){
//		/*无语言设置或中文*/
//		loadJs("i18n/language_zh-CN.js",'lang');
//		$(".language .langWord").text(languageWord[languageType]);
//		$(".language .langImg").attr("src",languageImg[languageType]);
//	}
//	else{
//		/*无语言存储设置,根据语言环境选择显示*/
//		var langName=languageObj.getConst("language");
//		loadJs("i18n/language_"+langName+".js",'lang');
//		$(".language .langImg").attr("src",languageImg[langName]);
//		$(".language .langWord").text(languageWord[langName]);
//	}
//}


//function langSet(type){
//	var languageImg=languageObj.getConst("img");
//	if(type=='en'){
//		$(".language .langWord").text("EN");
//		$(".language .langImg").attr("src",languageImg["en"]);
//		localStorage.setItem("lang","en");
////		loadJs("i18n/language_en.js",'lang');
//	}
//	else{
//		$(".language .langWord").text("中文");
//		$(".language .langImg").attr("src",languageImg["zh-CN"]);
//		localStorage.setItem("lang","zh-CN");
////		loadJs("i18n/language_zh-CN.js",'lang');
//	}
//}


$(document).ready(function () {
//	var bodyWidth=window.screen.availWidth;
//	if(bodyWidth<1200){
//		$(".nav-icon").on('click',function(){
//			var state=$(".nav-box").css("display");
//			if(state=='block'){
//				$(".nav-box").css("display","none");
//			}
//			else{
//				$(".nav-box").css("display","block");
//			}
//		});
//		$(".nav-box li").on('click',function(){
//			$(".nav-box").css("display","none");	
//		})
//	}


  /*点击语言切换按钮，点击英文变中文，其余同理，暂时弃用*/
//	$(".language").on('click',function(){
//		var type=localStorage.getItem('lang');
//		if(type=="en"){
//			langSet();
//		}
//		else if(type=="zh-CN"){
//			langSet('en');
//		}
//		else{
//			var langName=languageObj.getConst("language");
//			if(langName=="en"){
//				langSet();
//			}
//			else if(langName=="zh-CN"){
//				langSet('en');
//			}
//		}
//		//保证轮播正常更新，需刷新页面
//		window.location.reload();
//	})	

//	$(".language").on('click',function(){
//		var state=$(".language-list").css("display");
//		console.log(state);
//		if(state=='block'){
//			$(".language-list").css("display","none");
//		}
//		else{
//			$(".language-list").css("display","block");
//		}
//	})

//	$(".language-list").on('click',"li",function(){
//		var type=$(this).data("langtype");
//		if(type=="en"){
//			langSet(type);
//		}
//		else if(type=="zh-CN"){
//			langSet(type);
//		}
//		else{
//			var langName=languageObj.getConst("language");
//			langSet(type);
//		}
//		$(".language-list").hide();
//		//保证轮播正常更新，需刷新页面
//		window.location.reload();
//	})

  /*判断是否需要弹窗*/
//	var maskShow=sessionStorage.getItem("mask");
//	if(!maskShow){
//		$(".mask-box").show();
//		sessionStorage.setItem("mask",true);
//	}
//	$(".close-btn").click(function(){
//		$(".mask-box").hide();
//	})
  /*需要跳转的部分*/
  $("#hadax").on("click",function(){
    window.open("http://www.hadax.com/");
  });
  $("#tinghua").on("click", function () {
    window.open("http://www.tinghua.net.cn/");
  });
  $("#mytoken").on("click", function () {
    window.open("http://app.mytoken.io/index/search");
  });
  $("#bitgo").on("click", function () {
    window.open("https://bitgo.cc");
  });
  $("#fxh").on("click", function () {
    window.open("https://www.feixiaohao.com/");
  });
  $("#gd").on("click",function(){
    window.open("http://www.guodunc.com/");
  });
  $("#hitbtc").on("click", function () {
    window.open("https://www.hitbtc.com/");
  });
  $("#bitbitx").on("click", function () {
    window.open("https://www.bitbitx.com/");
  });
  $("#bswcoin").on("click", function () {
    window.open("https://www.bswcoin.com/");
  });
  $("#bige").on("click", function () {
    window.open("https://bige.top/");
  });
  $("#bihuex").on("click", function () {
    window.open("https://www.bihuex.com/");
  });
  $("#paperBtn").on('click', function () {
    window.open("http://yuanorg.oss-ap-southeast-1.aliyuncs.com/yuan_introduction.pdf");
  });
  $("#reddit").on('click', function () {
    location.href = "https://www.reddit.com/user/yuanchain/";
  });
  $("#bitCoin").on('click', function () {
    location.href = "https://bitcointalk.org/index.php?topic=2741373.msg28028807#msg28028807";
  });
  $("#8btc").on('click', function () {
    location.href = "http://www.8btc.com/";
  })
  $("#report").on('click', function () {
    location.href = "https://t.me/yccorg";
  });
  $(".twitter").on('click', function () {
    location.href = "https://twitter.com/yuanchain";
  });

  $(".contact-us li").on("mouseenter", function () {
    $(this).find(".hover-box").show();
  });
  $(".contact-us li").on("mouseleave", function () {
    $(this).find(".hover-box").hide();
  })

  /*pc端导航点击,样式修改*/
  $(".nav-box li").on('click', function () {
    $(".nav-box li").removeClass("active");
    $(this).addClass("active");
  })

  /*锚链接跳转动画*/
  var rootDom = $("html,body");
  $(".nav-box li a").on('click', function (event) {
    var idWord = $(this).attr("id");
    var href = $(this).attr("href");
    if (idWord != "paperLink" && idWord != "cloud" && idWord != "news" && idWord != "intro") {
      event.preventDefault();
      if (href.indexOf("#") !== -1) {
        if (href === '#') {
          rootDom.animate({scrollTop: 0}, 0);
          window.location.hash = href;
        } else {
          var pos = $(href).offset().top;
          rootDom.animate({scrollTop: pos}, 600);
          window.location.hash = href;
        }
      }
    }
  })

  /*pc应用场景操作*/
  var iconList = $(".big-part .icon-list");
  iconList.html("");
  var iconLi = $(".big-part .icon-list li");
  var htmlDom = '';
  var newUrl
  for (var i = 1; i < 11; i++) {
    var string = "img/application/";
    if (i === 1) {
      newUrl = string + 9 + '.png';
    } else if (i === 2) {
      newUrl = string + 10 + '.png';
    } else {
      var j = i - 2;
      newUrl = string + j + '.png';
    }
    if (i === 3) {
      htmlDom += "<li class='active' data-id='" + i + "'><img src=" + newUrl + " /></li>"
    }
    else {
      htmlDom += "<li data-id='" + i + "'><img src=" + newUrl + " /></li>"
    }
  }
  iconList.html(htmlDom);
  var textIndex;
  $(".big-part .icon-list li img").hover(function(e){
    textIndex = $(this).parent().index()-2;
    if(textIndex === -1){
      textIndex = 9;
    }else if(textIndex === -2){
      textIndex = 8;
    }
    $("#sceneTitle").text(languageSet.applictionWord[textIndex].title);
    $("#sceneWord").text(languageSet.applictionWord[textIndex].word);
  },function(e){
    $(".big-part .icon-list li").each(function () {
      if($(this).hasClass("active")){
        textIndex = $(this).index()-2;
      }
    });
    if(textIndex === -1){
      textIndex = 9;
    }else if(textIndex === -2){
      textIndex = 8;
    }
    $("#sceneTitle").text(languageSet.applictionWord[textIndex].title);
    $("#sceneWord").text(languageSet.applictionWord[textIndex].word);
  });
  $(".big-part .icon-list").on('click', "li", function () {
    var idNum = $(this).data("id");
    var idName = $(this).parent().attr("id");
    var distance = 0;
    distance = -240 * (idNum - 3);
    if (distance === 240) {
      distance = -2160;
      $(".big-part .icon-list li").removeClass('active');
      $("#secondList li").eq(idNum - 1).addClass('active');
    } else if (distance === 480) {
      distance = -1920;
      $(".big-part .icon-list li").removeClass('active');
      $("#secondList li").eq(idNum - 1).addClass('active');
    } else {
      $(".big-part .icon-list li").removeClass('active');
      $(".big-part .icon-list li").eq(idNum - 1).addClass('active');
    }
    $(".big-part .icon-list").css("left", distance);
    $(".big-part .icon-list").addClass("ease-out");
    if (idNum === 1) {
      $("#sceneTitle").text(languageSet.applictionWord[8].title);
      $("#sceneWord").text(languageSet.applictionWord[8].word);
    } else if (idNum === 2) {
      $("#sceneTitle").text(languageSet.applictionWord[9].title);
      $("#sceneWord").text(languageSet.applictionWord[9].word);
    } else {
      $("#sceneTitle").text(languageSet.applictionWord[idNum - 3].title);
      $("#sceneWord").text(languageSet.applictionWord[idNum - 3].word);
    }
  })

  /*首页弹窗显示*/
  //隐藏滚动条禁止滚动
  var H = $('html');
  w1 = $(window).width();
  H.addClass('fancybox-lock-test');
  w2 = $(window).width();
  $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");

  /*var modalBox = $(".modal-box");

  function modalHide() {
    H.removeClass('fancybox-lock-test');
    H.removeClass('fancybox-margin');
    modalBox.css("display", "none");
    sessionStorage.setItem("isModalShow", "1");
  }

  var t1 = setTimeout(modalHide, 10000);
  if (sessionStorage.getItem("isModalShow")) {
    H.removeClass('fancybox-lock-test');
    H.removeClass('fancybox-margin');
  } else {
    H.addClass('fancybox-margin');
    var bodyWidth = window.screen.availWidth;
    if (bodyWidth > 1200) {
      modalBox.css("display", "block");
    }
  }

  $(".modal-box .modal-close").on('click', function () {
    modalHide();
    clearTimeout(t1);
  });
  $(".modal-box .modal-img").on('click', function () {
    modalHide();
    clearTimeout(t1);
    document.location = './preSale.html';
  });*/
})

///*填充对应的中英文*/
//function fillWord(){
////	console.log($("[data-meta]")[0]);
//	var i18n=$("[data-i18n]");
//	var imgGroup=$("[data-img]");
//	var metaGroup=$("[data-meta]");
//	i18n.each(function(){
//		$(this).text("");
//		$(this).text(languageSet[$(this).attr("data-i18n")]);				
//	})
//	imgGroup.each(function(){
//		$(this).attr("src",languageSet[$(this).attr("data-img")]);
//	})
//	metaGroup.each(function(){
//		$(this).attr("content",languageSet[$(this).attr("data-meta")]);
//	})
//	if(window.screen.availWidth<1200){
//		var str=$(".topTitle").text();
//		str=str.replace("Yuan Chain -- ","");
//		$(".topTitle").text(str);
//	}
//}


function getTeamMsg() {
  var s1 = "";
  var s2 = "";
  var s3 = "";
  for (var i = 0; i < 2; i++) {
    s1 += "<li><h6>" + languageSet.teamMember[i].name + "</h6><p>" + languageSet.teamMember[i].introduce + "</p></li>";
  }
  for (var i = 0; i < languageSet.adviserMember.length; i++) {
    s2 += "<li><h6>" + languageSet.adviserMember[i].name + "</h6><p>" + languageSet.adviserMember[i].introduce + "</p></li>";
  }
  for (var i = 2; i < languageSet.teamMember.length; i++) {
    s3 += "<li><h6>" + languageSet.teamMember[i].name + "</h6><p>" + languageSet.teamMember[i].introduce + "</p></li>";
  }
  $(".adviserPart").html(s2);
  $(".teamPart0").html(s1);
  $(".teamPart1").html(s3);
}

function getBannerMsg() {
  var wrap = $("#banner-wrapper .swiper-wrapper");
  wrap.html("");
  var s1 = "";
  for (var i = 0; i < BannerMsg.length; i++) {
    s1 += '<div class="swiper-slide">' +
      '<div class="banner-logo">' +
      '<img src=' + BannerMsg[i].imgUrl + ' />' +
      '</div>' +
      '<h1 class="topTitle" data-i18n="topTitle">' + languageSet.BannerMsg[i].title + '</h1>' +
      '<h4 data-i18n="subTitle">' + languageSet.BannerMsg[i].subTitle + '</h4>' +
      '<div class="qrcode-box">' +
      '<img data-img="wxImg" src=' + BannerMsg[i].qrcodeImg + ' alt="" />' +
      '<img data-img="qqImg" src=' + BannerMsg[i].qrcodeImg2 + ' alt="" />' +
      '</div>' +
      '</div>';
  }
  wrap.html(s1);
//  var mySwiper = new Swiper ('#banner-wrapper',{
//      loop:true,
//      autoplay:{
//          delay:3000,
//          disableOnInteraction: false,
//      },
//      pagination: {
//          el: '.swiper-pagination',
//          clickable :true,
//      },
////	   observer:true,
////	   observeParents:true,
//  });
}

function getTechnicalMsg() {
  var wrap = $("#technical .swiper-wrapper");
  wrap.html("");
  var s1 = "";
  for (var i = 0; i < TechnicalMsg.length; i++) {
    s1 += '<div class="swiper-slide">' +
      '<div class="img-part">' +
      '<img src=' + TechnicalMsg[i].imgUrl + ' />' +
      '</div>' +
      '<div class="word-part">' +
      '<h5>' + languageSet.TechnicalMsg[i].tip + '</h5>' +
      '<p>' + languageSet.TechnicalMsg[i].word + '</p>' +
      '</div>' +
      '</div>';
  }
  wrap.html(s1);
  var mySwiper = new Swiper('#technical', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
//	   observer:true,
//	   observeParents:true,
  });
}

function getAppliction() {
  var wrap = $("#application2 .swiper-wrapper");
  wrap.html("");
  var s1 = "";
  for (var i = 0; i < languageSet.applictionWord.length; i++) {
    var num = i + 1;
    s1 += '<div class="swiper-slide">' +
      '<div class="application-content">' +
      '<h3 data-i18n="scene"></h3>' +
      '<div class="scene-block">' +
      '<img src="img/application/' + num + '.png" />' +
      '</div>' +
      '<div class="bottom-word">' +
      '<h4>' + languageSet.applictionWord[i].title + '</h4>' +
      '<p>' + languageSet.applictionWord[i].word + '</p>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
  wrap.html(s1);
  $('[data-i18n="scene"]').text(languageSet.scene);
  var mySwiper = new Swiper('#application2', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
//	   observer:true,
//	   observeParents:true,
  });
}

var BannerMsg = [
  {
    "imgUrl": "img/bannerlogo.png",
    "qrcodeImg": "img/wxGroup.png",
    "qrcodeImg2": "img/qqGroup.png",
  }
];

var TechnicalMsg = [
  {
    "imgUrl": "img/features/flexible.png",
  },
  {
    "imgUrl": "img/features/isomerism.png",
  },
  {
    "imgUrl": "img/features/security.png",
  },
  {
    "imgUrl": "img/features/green.png",
  },
  {
    "imgUrl": "img/features/charging.png",
  },
  {
    "imgUrl": "img/features/cross-chain.png",
  },
  {
    "imgUrl": "img/features/low-latency.png",
  },
  {
    "imgUrl": "img/features/high-concurrency.png",
  },
];




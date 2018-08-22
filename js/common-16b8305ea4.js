function randomGet(n) {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g"];
  var str = "";
  for (var i = 0; i < n; i++) {
    str += arr[Math.ceil(Math.random() * 16)];
  }
  return str;
}

var randomStr = randomGet(8);
console.log(randomGet(8));
var randomStr = "ea8cf2cb";//手动为动态添加的css,js增加版本号

//flag:是否切換英文
function loadJs(url, type, flag) {
  loadScript = document.createElement("script");
  loadScript.src = url + "?v=" + randomStr;
  document.getElementsByTagName("head")[0].appendChild(loadScript);
  loadScript.onload = function () {
    if (type === 'lang') {
      fillWord(flag);
      if (window.location.href.indexOf("preSale.html") > -1) {
        $(".word-box h4").text(languageSet.advMsg[0].title);
        $(".word-box p").text(languageSet.advMsg[0].msg);
        getTechnicalMsg();
      } else if (window.location.href.indexOf("news.html") > -1) {
        //console.log('news');
      } else if (window.location.href.indexOf("newsDetail.html") > -1) {
        //console.log('newsDetail');
      } else if (window.location.href.indexOf("intro.html") > -1) {
        //console.log('newsDetail');
      } else {
        //首页或者根域名情况下
        //getBannerMsg();
        getTechnicalMsg();
        getTeamMsg();
        getAppliction();
        $("#sceneTitle").text(languageSet.applictionWord[0].title);
        $("#sceneWord").text(languageSet.applictionWord[0].word);
      }
			//document.getElementById("bodyBox").style.opacity=1;
    }
    document.getElementById("bodyBox").style.opacity=1;
  };
}

function loadCss(url) {
  var loadScript = document.createElement("link");
  loadScript.rel = "stylesheet";
  loadScript.type = "text/css";
  loadScript.href = url + "?v=" + randomStr;
  document.getElementsByTagName("head")[0].appendChild(loadScript);
}

$(document).ready(function () {
  var bodyWidth = document.body.offsetWidth;
//	手机端导航栏操作
  if (bodyWidth < 1200) {
    $(".nav-icon").on('click', function () {
      var state = $(".nav-box").css("display");
      if (state == 'block') {
        $(".nav-box").css("display", "none");
      }
      else {
        $(".nav-box").css("display", "block");
      }
    });
    /*$("body").on('click', ".nav-icon", function () {
      alert(2)
      var state = $(".nav-box").css("display");
      if (state == 'block') {
        $(".nav-box").css("display", "none");
      }
      else {
        $(".nav-box").css("display", "block");
        alert(2333)
      }
    });*/

    $(".nav-box li").on('click', function () {
      $(".nav-box").css("display", "none");
    })
  }

  $(".language").on('click', function () {
    var state = $(".language-list").css("display");
    console.log(state);
    if (state == 'block') {
      $(".language-list").css("display", "none");
    }
    else {
      $(".language-list").css("display", "block");
    }
  })

  $(".language-list").on('click', "li", function () {
    var type = $(this).data("langtype");
    if (type == "en") {
      langSet(type);
    }
    else if (type == "zh-CN") {
      langSet(type);
    }
    else {
      var langName = languageObj.getConst("language");
      langSet(type);
    }
    $(".language-list").hide();
    //保证轮播正常更新，需刷新页面
    window.location.reload();
  })
})

/*将浏览器语言设置为常量*/
var newClass = function () {
  var currenctLang;
  if (navigator.language) {
    currenctLang = navigator.language;
  }
  else {
    currenctLang = navigator.browserLanguage;
  }
  var constObj = {
    language: currenctLang,
    word: {
      "en": "EN",
      "zh-CN": "中文",
    },
    img: {
      "en": "./img/EN.png",
      "zh-CN": "./img/ZH.png",
    }
  }
  this.getConst = function (name) {
    return constObj[name];
  }
}
var languageObj = new newClass();

/**
 * 获取存储的语言设置
 */
window.onload = function () {
  var languageType = localStorage.getItem('lang');
  var languageWord = languageObj.getConst("word");
  var languageImg = languageObj.getConst("img");
//	console.log(navigator.language);
  if (languageType === 'en') {
    loadJs("i18n/language_en.js", 'lang',true);
    var bodyWidth = window.screen.availWidth;
    if (window.location.href.indexOf("index.html") > -1) {
      loadCss('dynamic/main-en.css');
    }else if (window.location.href.indexOf("intro.html") > -1) {
      loadCss('dynamic/intro-en.css');
    } else if (window.location.href.indexOf("preSale.html") > -1) {
      loadCss('dynamic/pre-en.css');
    } else if (window.location.href.indexOf("news.html") > -1) {
      loadCss('dynamic/news-en.css');
    }else if (window.location.href.indexOf("newsDetail.html") > -1) {
      loadCss('dynamic/newsDe-en.css');
    }else{
      //根目录即index.html
      loadCss('dynamic/main-en.css');
    }

    $(".language .langWord").text(languageWord[languageType]);
    $(".language .langImg").attr("src", languageImg[languageType]);
  }
  else if (languageType === 'zh-CN') {
    /*中文*/
    loadJs("i18n/language_zh-CN.js", 'lang');
    $(".language .langWord").text(languageWord[languageType]);
    $(".language .langImg").attr("src", languageImg[languageType]);
  }
  else {
    /*无语言存储设置,根据语言环境选择显示*/
    var langName = languageObj.getConst("language");
    if(langName === 'en'){
      loadJs("i18n/language_" + langName + ".js", 'lang',true);
    }else if(langName === 'zh-CN'){
      loadJs("i18n/language_" + langName + ".js", 'lang');
    }else{
      loadJs("i18n/language_zh-CN.js", 'lang');
    }
    $(".language .langImg").attr("src", languageImg[langName]);
    $(".language .langWord").text(languageWord[langName]);
  }
}

function langSet(type) {
  var languageImg = languageObj.getConst("img");
  if (type == 'en') {
    $(".language .langWord").text("EN");
    $(".language .langImg").attr("src", languageImg["en"]);
    localStorage.setItem("lang", "en");
//		loadJs("i18n/language_en.js",'lang');
  }
  else {
    $(".language .langWord").text("中文");
    $(".language .langImg").attr("src", languageImg["zh-CN"]);
    localStorage.setItem("lang", "zh-CN");
//		loadJs("i18n/language_zh-CN.js",'lang');
  }
}

/*填充对应的中英文*/
function fillWord(flag) {
//	console.log($("[data-meta]")[0]);
  var i18n = $("[data-i18n]");
  var imgGroup = $("[data-img]");
  var metaGroup = $("[data-meta]");
  var htmlIn = $("[data-html]");
  i18n.each(function () {
    $(this).text("");
    $(this).text(languageSet[$(this).attr("data-i18n")]);
  })
  htmlIn.each(function () {
    $(this).html("");
    $(this).html(languageSet[$(this).attr("data-html")]);
  })
  //flag:是否切换英文图片
  if(flag){
    imgGroup.each(function () {
      $(this).attr("src", languageSet[$(this).attr("data-img")]);
    })
  }
  metaGroup.each(function () {
    $(this).attr("content", languageSet[$(this).attr("data-meta")]);
  })

  if (window.screen.availWidth < 1200) {
    var str = $(".topTitle").text();
    str = str.replace("Yuan Chain -- ", "");
    $(".topTitle").text(str);
    var str2 = $(".modelKey").text();
    str2 = str2.replace("矿机", "");
    $(".modelKey").text(str2);
    var str3 = $(".annualKey").text();
    str3 = str3.replace("预期", "");
    $(".annualKey").text(str3);
    var str4 = $(".annualKey").text();
    str4 = str4.replace("Expected Annual", "");
    $(".annualKey").text(str4);
  }
  /*document.getElementById("bodyBox").style.opacity=1;*/
}
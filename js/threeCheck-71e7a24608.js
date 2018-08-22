function _addLoadEvent(func)
{
  var oldonload=window.onload;
  if(typeof window.onload != 'function')
  {
    window.onload=func;
  }
  else
  {
    window.onload=function()
    {
      oldonload();
      func();
    }
  }
}

function drawCanvas() {
  var boxWidth=window.screen.availWidth;
  var loadScriptThree;
  if(boxWidth>1200){
    loadScriptThree=document.createElement("script");
    loadScriptThree.src="dynamic/three.min.js";
    document.body.appendChild(loadScriptThree);
    loadScriptThree.onload=function(){
      loadJs("dynamic/animate.js");
      loadScript.onload=null;
    }
  }
}

_addLoadEvent(drawCanvas);
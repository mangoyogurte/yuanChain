var advMsg=[
	{
		"imgUrl":"img/circle-box/1.png",
	},
	{
		"imgUrl":"img/circle-box/2.png",
	},
	{
		"imgUrl":"img/circle-box/3.png",
	},
	{
		"imgUrl":"img/circle-box/4.png",
	},
	{
		"imgUrl":"img/circle-box/5.png",
	},
	{
		"imgUrl":"img/circle-box/6.png",
	},
];

var wordMsg=[
	{
		"title":"公司实力强 团队专业",
		"msg":"50多项全球专利 5年运营经验 与多家世界500强有应用项目"
	},
	{
		"title":"安全可靠 升值空间大",
		"msg":"原链YCC项目落地 企业级应用龙头 前景光明 未来升值空间大"
	},
	{
		"title":"矿机算力稳定 回报高",
		"msg":"矿机挖矿算力一直维持稳定不变 预期综合年产率13%-43%"
	},
	{
		"title":"选择灵活 门槛低",
		"msg":"30-360天多种选择 门槛不再高 1000元起"
	},
	{
		"title":"全程托管 一键挖矿",
		"msg":"零设备 零电费投入 不占空间 无需维护 一键挖矿 省时省力省心"
	},
	{
		"title":"部署块 费用低",
		"msg":"购买成功后马上部署开始挖矿当天计算收益 0充值费用 0提现费用"
	},
];

var millMsg;

$(document).ready(function(){
	$(".circle-out .circle").mouseenter(function(){
		var index=$(this).data("num");
		$(".word-box h4").text(languageSet.advMsg[index].title);
		$(".word-box p").text(languageSet.advMsg[index].msg);
	})
//	getTechnicalMsg();
	getBoxMsg();
//	fillMillMsg();
})

function getTechnicalMsg(){
	var wrap=$("#technical .swiper-wrapper");
	wrap.html("");
	var s1="";
	for(var i=0;i<advMsg.length;i++){
		s1+='<div class="swiper-slide">'+
				'<div class="img-part">'+
	        		'<img src='+advMsg[i].imgUrl+' />'+
	        	'</div>'+
	        	'<div class="word-part">'+
	        		'<h5>'+languageSet.advMsg[i].title+'</h5>'+
					'<p>'+languageSet.advMsg[i].msg+'</p>'+		
	        	'</div>'+
	        '</div>';
	}
	wrap.html(s1);
	var mySwiper = new Swiper ('#technical',{
		loop:true,
		autoplay:{
			delay:3000,
			disableOnInteraction: false,
		},
		pagination: {
	      el: '.swiper-pagination',
	      clickable :true,
	   },
	   observer:true,
	   observeParents:true,
	});
}

function getBoxMsg(){
	$.getJSON("../data/pre-cloud-miner.json",function(data){
		millMsg = data;
		fillMillMsg();
	})
}

function fillMillMsg(){
	var msg=millMsg.green_hand;
	var index;
	for(var i=0;i<msg.length;i++){
		if(msg[i].name=="N030"){
			index=i;
		}
	}
	for(var x in msg[index]){
		$(".mill_"+x).text(msg[index][x]);
	}
	var sumNum=Number(msg[index]["basic_yield"])+Number(msg[index]["presented_yield"]);
	$(".mill_sum").text(sumNum);
//	$(".mill_name").text(msg[index].name);
//	$(".mill_annual_yield").text(msg[index].annual_yield);
//	$(".mill_copies_coin").text(msg[index].copies_coin);
//	$(".mill_basic_yield").text(msg[index].basic_yield);
//	$(".mill_presented_yield").text(msg[index].presented_yield);
//	$(".mill_copies_amount").text(msg[index].copies_amount);
}



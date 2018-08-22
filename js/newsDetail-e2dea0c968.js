var newDetail = {};

function getNewDetail(){
    var newId = location.search.split("=")[1];
    console.log(newId);
    $.ajax({
        url:"https://public.licai.cn/web/api/v1/article/view?id="+newId,
        type:"get",
        dataType:"json",
        success:function(data){
            newDetail=data;
            fillNewDetail();
        }
    })
}

function fillNewDetail(){
    $(".downloadTip").css("display","none");
    $(".bread-title").text(newDetail.title);
    $(".title").text(newDetail.title);
    $(".author").text('作者:'+newDetail.author);
    $(".time").text(newDetail.published_time);
    $(".new-main").html(newDetail.content);
}

$(document).ready(function(){
    getNewDetail();
    /*newDetail={
        errcode: 0,
        errmsg: "ok",
        id: 10,
        title: "西湖区副区长和金融办考察33复杂美，交流产业政策支持",
        category: "原链公告",
        is_top: 1,
        key_word: "test",
        source: "",
        abstract: "It&#39;s a test.",
        cover: "",
        author: "admin",
        published_time: "2018-05-23 18:23",
        seo_title: "",
        seo_keywords: "",
        seo_description: "",
        content: "<p>&nbsp; &nbsp; 5月22日，西湖区委常委，常务副区长叶泽和西湖区金融办副主任余世刚一行人来访33复杂美，调研西湖区区块链企业的发展，33复杂美CEO吴思进和叶泽常务副区长等一行针对西湖区可以如何从政策面扶植区块链企业蓬勃发展，深入交流，交换了许多意见。</p><p>&nbsp;</p><p style=\"text-align:center\"><img src=\"http://news.33.cn/data/upload/ueditor/20180523/5b053ec7ec11f.jpg\" title=\"1.jpg\" alt=\"1.jpg\" width=\"686\" height=\"488\" style=\"width: 686px; height: 488px;\"></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style=\"font-size: 12px;\">西湖区委常委，常务副区长叶泽（中）和西湖区金融办副主任余世刚（左）和33复杂美CEO吴思进（右）于复杂美总部合影</span></p><p>&nbsp; &nbsp;&nbsp;</p><p>&nbsp; &nbsp; 叶泽常务副区长指出，33复杂美和多家世界500强企业合作，实现跨行业的区块链落地应用，技术实力值得肯定，未来可以结合两到三个不同行业的龙头代表，连结不同产业的产业链，打通技术、产品和市场，全面布局。</p><p>&nbsp;</p><p>&nbsp; &nbsp; 叶泽常务副区长肯定区块链技术的颠覆性，但也指出区块链可能带来的挑战：”区块链会加速金融应用，淘汰掉许多企业，这是现阶段还无法被解决的问题。”</p><p>&nbsp;</p><p>&nbsp; &nbsp; 吴思进指出，区块链现阶段普遍存在估值偏低，融资不易的问题，各区块链企业都在冲刺落地应用场景，尚未实现盈利，同时间又需要大量人才，企业发展速度受限。另一方面，优秀的毕业生对大企业依然较有兴趣，即使开出较高工资，区块链初创企业依然不受青睐。</p><p>&nbsp;</p><p style=\"text-align:center\"><img src=\"http://news.33.cn/data/upload/ueditor/20180523/5b053fc908ae9.jpg\" title=\"2.jpg\" alt=\"2.jpg\" width=\"673\" height=\"441\" style=\"width: 673px; height: 441px;\"></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style=\"font-size: 12px;\">33复杂美CEO吴思进为叶泽常务副区长一行领导简介复杂美的发展历史</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p>&nbsp; &nbsp; 叶泽常务副区长认为，无论是办公补贴、专利申请补贴和人才政策，西湖区都有相关政策在研拟当中，只要清楚说明财务状况，考虑企业贡献度，即可申请相关补助；西湖区鼓励优质区块链企业发展，未来将会阶段性出台相关政策，给予人才、办公等各方面的补贴。</p><p>&nbsp;</p><p>&nbsp; &nbsp; 33复杂美成立于2008年，现有近250名员工，总部设于杭州，在南京和上海设有分部，专注于区块链底层技术研发和行业应用，区块链企业专利数排名全球前十，目前已累计申请了50多项区块链技术的发明专利，其中有2项已经获得授权。</p></div>"
    };
    fillNewDetail();*/
});
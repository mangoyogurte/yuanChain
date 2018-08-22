var newsList = [];

function getNewsList() {
    $.ajax({
        url: "https://public.licai.cn/web/api/v1/article/index?cid=8",
        type: "get",
        dataType: "json",
        success: function (data) {
            newsList = data.rows;
            fillNewsMsg();
        }
    })
}

function fillNewsMsg() {
    $(".tip").css("display","none");
    var s1 = '';
    newsList.forEach(function (item, index) {
        s1 += '<div class="news-item">' +
                '<div class="item-img">' +
                    '<img src='+item.cover+ '>'+
                '</div>' +
                '<div class="item-main">' +
                    '<h2 class="item-title">' +item.title+ '</h2>'+
                    '<p class="item-content">'+item.abstract+ '</p>'+
                '</div>'+
            '</div>';
    });
    $(".news-container").html(s1);
    $(".news-item").each(function (index,item) {
        $(this).on("click",function(){
            window.open("newsDetail.html?newId="+newsList[index].id,'_self');
        });
    });
}

$(document).ready(function(){
    getNewsList();
    /*newsList = [{"id":10,"title":"西湖区副区长和金融办考察33复杂美，交流产业政策支持","is_top":1,"abstract":"\n" +
        "        5月22日，西湖区委常委，常务副区长叶泽和西湖区金融办副主任余世刚一行人来访33复杂美，调研西湖区区块链企业的发展，33复杂美CEO吴思进和叶泽常务副区长等...\n" +
        "      ","cover":"https://news.33.cn/data/upload/20180523/5b0540b418729.jpg","published_time":"2018-05-23 18:23"},{"id":10,"title":"test article","is_top":1,"abstract":"It&#39;s a test.","cover":"img/logo.png","published_time":"2018-05-23 18:23"},
        {"id":10,"title":"test article","is_top":1,"abstract":"It&#39;s a test.","cover":"img/logo.png","published_time":"2018-05-23 18:23"},{"id":10,"title":"test article","is_top":1,"abstract":"It&#39;s a test.","cover":"img/logo.png","published_time":"2018-05-23 18:23"},
        {"id":10,"title":"test article","is_top":1,"abstract":"It&#39;s a test.","cover":"img/logo.png","published_time":"2018-05-23 18:23"},{"id":10,"title":"test article","is_top":1,"abstract":"It&#39;s a test.啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊","cover":"img/logo.png","published_time":"2018-05-23 18:23"}]
    fillNewsMsg();*/

});
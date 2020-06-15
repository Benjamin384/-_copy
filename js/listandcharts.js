$(function(){
    var origin=[];
    var origin2=[];
    var addjson1=[];
    var addjson2=[];
    var global_confirmed_number=0;
    var global_active_number=0;
    var global_cure_number=0;
    var global_death_number=0;
    var global_add_number=0;
    var curve_confirmed=[];
    var curve_add=[];
    var confirmed_option={};
    var add_option={};
    var data_copy=[];
    var items=[];
    var myechart;
    var p=1;      //用来控制字体颜色变化，1代表现有，2代表新增，3代表治愈，4代表死亡
    var p2=1;     //控制曲线的显示，1代表累计，2代表新增
//map screen confirmed click event
$("#confirmed").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#active").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//map screen active click event
$("#active").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#confirmed").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//upright add click event
$("#rise").click(function(){
    p=2;
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#act").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#cure").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#death").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    //从origin获得数据并排序
    var origin_orderbyadd=[];
    var test4;
    test4=JSON.parse(JSON.stringify(addjson1));
    if(test4 instanceof Array==false){
        origin_orderbyadd.push(test4);
    }
    else{
        origin_orderbyadd=test4;
    }
    for(i=0;i<origin_orderbyadd.length-1;i++){
        for(j=origin_orderbyadd.length-1;j>0;j--){
             //现有确诊排序
            if(parseInt(origin_orderbyadd[j].add)>parseInt(origin_orderbyadd[j-1].add)){
                var t1=origin_orderbyadd[j];
                origin_orderbyadd[j]=origin_orderbyadd[j-1];
                origin_orderbyadd[j-1]=t1;
            } 
        }
    }
    $("#fourtype").find("tr").remove();
    //添加到table
    for(i=0;i<origin_orderbyadd.length;i++){
        var newtr="<tr class='fourtype_tr'><th class='fourtype_add_th'>"+origin_orderbyadd[i].add+"</th><th>"+origin_orderbyadd[i].countryname+"</th></tr>"; 
        $("#fourtype").append(newtr);
    }
    $("#fournumber").html(global_add_number);
    $("#fournumber").css("color","red");
    $("#title3").html("新增确诊");
});

//upright act click event
$("#act").click(function(){
    p=1;
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#rise").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#cure").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#death").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});

    //从origin获得数据并排序
    var origin_orderbyact=[];
    var test1;
    test1=JSON.parse(JSON.stringify(origin));
    if(test1 instanceof Array==false){
        origin_orderbyact.push(test1);
    }
    else{
        origin_orderbyact=test1;
    }
    for(i=0;i<origin_orderbyact.length-1;i++){
        for(j=origin_orderbyact.length-1;j>0;j--){
             //现有确诊排序
            if(parseInt(origin_orderbyact[j].country_active)>parseInt(origin_orderbyact[j-1].country_active)){
                var t1=origin_orderbyact[j];
                origin_orderbyact[j]=origin_orderbyact[j-1];
                origin_orderbyact[j-1]=t1;
            } 
        }
    }
    $("#fourtype").find("tr").remove();
    //添加到table
    for(i=0;i<origin_orderbyact.length;i++){
        var newtr="<tr class='fourtype_tr'><th class='fourtype_active_th'>"+origin_orderbyact[i].country_active+"</th><th>"+origin_orderbyact[i].country_region+"</th></tr>"; 
        $("#fourtype").append(newtr);
    }
    $("#fournumber").html(global_active_number);
    $("#fournumber").css("color","red");
    $("#title3").html("现有确诊");
});

//upright cure click event
$("#cure").click(function(){
    p=3;
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#rise").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#act").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#death").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    //从origin获得数据并排序
    var origin_orderbycure=[];
    var test2;
    test2=JSON.parse(JSON.stringify(origin));
    if(test2 instanceof Array==false){
        origin_orderbycure.push(test2);
    }
    else{
        origin_orderbycure=test2;
    }
    for(i=0;i<origin_orderbycure.length-1;i++){
        for(j=origin_orderbycure.length-1;j>0;j--){
             //现有确诊排序
            if(parseInt(origin_orderbycure[j].country_recovered)>parseInt(origin_orderbycure[j-1].country_recovered)){
                var t1=origin_orderbycure[j];
                origin_orderbycure[j]=origin_orderbycure[j-1];
                origin_orderbycure[j-1]=t1;
            } 
        }
    }
    $("#fourtype").find("tr").remove();
    //添加到table
    for(i=0;i<origin_orderbycure.length;i++){
        var newtr="<tr class='fourtype_tr'><th class='fourtype_cure_th'>"+origin_orderbycure[i].country_recovered+"</th><th>"+origin_orderbycure[i].country_region+"</th></tr>"; 
        $("#fourtype").append(newtr);
    }
    $("#fournumber").html(global_cure_number);
    $("#fournumber").css("color","rgb(18, 216, 18)");
    $("#title3").html("治愈人数");
});

//upright death click event
$("#death").click(function(){
    p=4;
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#rise").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#act").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#cure").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    //从origin获得数据并排序
    var origin_orderbydeath=[];
    var test3;
    test3=JSON.parse(JSON.stringify(origin));
    if(test3 instanceof Array==false){
        origin_orderbydeath.push(test3);
    }
    else{
        origin_orderbydeath=test3;
    }
    for(i=0;i<origin_orderbydeath.length-1;i++){
        for(j=origin_orderbydeath.length-1;j>0;j--){
             //现有确诊排序
            if(parseInt(origin_orderbydeath[j].country_deaths)>parseInt(origin_orderbydeath[j-1].country_deaths)){
                var t1=origin_orderbydeath[j];
                origin_orderbydeath[j]=origin_orderbydeath[j-1];
                origin_orderbydeath[j-1]=t1;
            } 
        }
    }
    $("#fourtype").find("tr").remove();
    //添加到table
    for(i=0;i<origin_orderbydeath.length;i++){
        var newtr="<tr class='fourtype_tr'><th class='fourtype_death_th'>"+origin_orderbydeath[i].country_deaths+"</th><th>"+origin_orderbydeath[i].country_region+"</th></tr>"; 
        $("#fourtype").append(newtr);
    }
    $("#fournumber").html(global_death_number);
    $("#fournumber").css("color","rgb(201, 179, 179)");
    $("#title3").html("死亡人数");
});

//charts confirmed click event
$("#confir").click(function(){
    p2=1;
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#add").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    myechart=echarts.init($(".cruve")[0]);
    myechart.clear();
    myechart.setOption(confirmed_option);
});

//charts add click event
$("#add").click(function(){
    p2=2;
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#confir").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    myechart=echarts.init($(".cruve")[0]);
    myechart.clear();
    myechart.setOption(add_option);
});

//加载页面的时候向服务器请求数据
$("#mapbody").ready(function(){
    Ajax1();
    Ajax2();
    Ajax3();
})

//请求每日疫情数据
function Ajax1(){
        //这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
 $.ajax({
    url : "/load",// 获取自己系统后台用户信息接口
    type : "GET",
    dataType: "json",
    success : function(data) {
        origin=JSON.parse(JSON.stringify(data));
        origin2=JSON.parse(JSON.stringify(data));
        var origin_orderbyact=[];
        origin_orderbyact=JSON.parse(JSON.stringify(data));
        //排序
        for(i=0;i<data.length-1;i++){
            for(j=data.length-1;j>0;j--){
                 //现有确诊排序
                if(parseInt(origin_orderbyact[j].country_active)>parseInt(origin_orderbyact[j-1].country_active)){
                    var t1=origin_orderbyact[j];
                    origin_orderbyact[j]=origin_orderbyact[j-1];
                    origin_orderbyact[j-1]=t1;
                } 
            }
        }
        for(i=0;i<data.length;i++){
            global_confirmed_number+=parseInt(data[i].country_confirmed);
            global_active_number+=parseInt(data[i].country_active);
            global_cure_number+=parseInt(data[i].country_recovered);
            global_death_number+=parseInt(data[i].country_deaths);
            //缺一个add_global
            var newtr1="<tr id='"+data[i].country_region+"' class='confirmed_tr'><th class='confirmed_th'>"+data[i].country_confirmed+"</th><th>"+data[i].country_region+"</th></tr>";
            var newtr2="<tr class='fourtype_tr'><th class='fourtype_active_th'>"+origin_orderbyact[i].country_active+"</th><th>"+origin_orderbyact[i].country_region+"</th></tr>"; 
            $("#countrynumber").append(newtr1);
            $("#fourtype").append(newtr2);
        }
        $("#globalnumber").html(global_confirmed_number);
        $("#fournumber").html(global_active_number);
        

        },
        error : function(data){
            alert("没有接收到每天疫情数据!");
        }
});
}
//请求时间序列数据
function Ajax2(){
    $.ajax({
       url : "/time_series",// 获取自己系统后台用户信息接口
       type : "GET",
       dataType: "json",
       success : function(data){
           data_copy=data;
           console.log(data);
           items = Object.keys(data[0]);
           console.log(items);
           //提取出新增确诊人数数据
           var addjson=[];
           for(i=0;i<data.length;i++){
               var j={};
               j.countryname=data[i].tcountry_region;
               j.add=parseInt(data[i][items[items.length-1]])-parseInt(data[i][items[items.length-2]]);
               global_add_number=global_add_number+j.add;
               addjson.push(j);
           }
           addjson1=JSON.parse(JSON.stringify(addjson));
           addjson2=JSON.parse(JSON.stringify(addjson));

           //绘制全球累计确诊时间序列曲线图
           var startdate="Wed Jan 22 2020 23:45:17 GMT+0800 (中国标准时间)";  //开始时间
           startdate=Date.parse(startdate);
           var time_range=[];
           time_range=get_dateList(items.length-1,startdate);  //产生开始时间到昨天的时间数组
           console.log(time_range);
           //计算全球每天的确诊人数总和
           for(i=1;i<items.length;i++){
               var t=0;
               for(j=0;j<data.length;j++){
                   t+=parseInt(data[j][items[i]]);
               }
               curve_confirmed.push(t);
           }

           confirmed_option={
               title:{
                   text:'累计确诊 趋势'
               },
               tooltip:{
                   trigger:'axis'
               },
               legend:{
                   data:['累计确诊']
               },
               grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
               },
               toolbox: {
                   feature: {
                    saveAsImage: {}
                   }
                },
                xAxis:{
                    type: 'category',
                    boundaryGap: false,
                    data:time_range
                },
                yAxis:{
                    type:'value'
                },
                series:[
                    {
                        name:'累计确诊',
                        type:'line',
                        data:curve_confirmed,
                        smooth:true
                    }
                ]
           };
           myechart=echarts.init($(".cruve")[0]);
           myechart.setOption(confirmed_option);

           //绘制全球新增确诊时间序列图
           var startdate2="Thu Jan 23 2020 23:45:17 GMT+0800 (中国标准时间)";  //开始时间
           startdate2=Date.parse(startdate2);
           var time_range2=[];
           time_range2=get_dateList(items.length-2,startdate2);  //产生开始时间到昨天的时间数组
           //计算全球每天的新增人数总和
           for(i=2;i<items.length;i++){
            var t=0;
            for(j=0;j<data.length;j++){
                t+=parseInt(data[j][items[i]])-parseInt(data[j][items[i-1]]);
            }
            curve_add.push(t);
          }
          add_option={
            title:{
                text:'新增确诊 趋势'
            },
            tooltip:{
                trigger:'axis'
            },
            legend:{
                data:['新增确诊']
            },
            grid: {
             left: '3%',
             right: '4%',
             bottom: '3%',
             containLabel: true
            },
            toolbox: {
                feature: {
                 saveAsImage: {}
                }
             },
             xAxis:{
                 type: 'category',
                 boundaryGap: false,
                 data:time_range2
             },
             yAxis:{
                 type:'value'
             },
             series:[
                 {
                     name:'新增确诊',
                     type:'line',
                     data:curve_add,
                     smooth:true
                 }
             ]
        };
        /* var myechart=echarts.init($(".cruve")[0]);
        myechart.setOption(add_option); */

       },
       error : function(data){
        alert("没有接收到时间序列数据!");
    }
    })
}
//请求更新时间
function Ajax3(){
    $.ajax({
       url : "/updatetime",// 获取自己系统后台用户信息接口
       type : "GET",
       dataType: "json",
       success : function(data){
           var str="Last Updated at:"+data[0]["last_update"]+"(加上8个小时后为中国时间)";
           $("#lastupdate").css({"font-weight": "300","font-size": "12px","line-height":"10px"})
           $("#lastupdate").html(str);


       },
       error : function(data){
        alert("没有接收到数据更新时间!");
       }
    })
}

$("#countrynumber").on("click","tr",function(){
    $("#countrynumber").children("tr").css("background-color","white");
    $(this).css("background-color","blue");
    $("#globalnumber").html($(this).children("th").eq(0).text());
    var selectcountry=$(this).attr("id");
    for(i=0;i<origin2.length;i++){
        if(origin2[i].country_region==selectcountry){
            origin=origin2[i];
            console.log(origin);
            break;
        }
    }
    for(i=0;i<addjson2.length;i++){
        if(addjson2[i].countryname==selectcountry){
            addjson1=addjson2[i];
            break;
        }
    }
    global_add_number=parseInt(addjson1.add);
    global_cure_number=parseInt(origin.country_recovered);
    global_death_number=parseInt(origin.country_deaths);
    global_active_number=parseInt(origin.country_active);
    $("#fourtype").find("tr").remove();
    switch(p){
        case 2:
            var newtr="<tr class='fourtype_tr'><th class='fourtype_add_th'>"+addjson1.add+"</th><th>"+addjson1.countryname+"</th></tr>"; 
            $("#fourtype").append(newtr);
            $("#fournumber").html(addjson1.add);
            $("#fournumber").css("color","red");
            $("#title3").html("新增确诊");
            break;
        case 3:
            var newtr="<tr class='fourtype_tr'><th class='fourtype_cure_th'>"+origin.country_recovered+"</th><th>"+origin.country_region+"</th></tr>"; 
            $("#fourtype").append(newtr);
            $("#fournumber").html(origin.country_recovered);
            $("#fournumber").css("color","rgb(18, 216, 18)");
            $("#title3").html("治愈人数");
            break;
        case 4:
            var newtr="<tr class='fourtype_tr'><th class='fourtype_death_th'>"+origin.country_deaths+"</th><th>"+origin.country_region+"</th></tr>"; 
            $("#fourtype").append(newtr);
            $("#fournumber").html(origin.country_deaths);
            $("#fournumber").css("color","rgb(201, 179, 179)");
            $("#title3").html("死亡人数");
            break;
        default:
            var newtr="<tr class='fourtype_tr'><th class='fourtype_active_th'>"+origin.country_active+"</th><th>"+origin.country_region+"</th></tr>"; 
            $("#fourtype").append(newtr);
            $("#fournumber").html(origin.country_active);
            $("#fournumber").css("color","red");
            $("#title3").html("现有确诊");
    }

    //绘制以国家为单位的曲线图

    //提取所选取国家的累计确诊时间序列数据和新增确诊时间序列数据
    var curve_confirmed_country=[];
    var curve_add_country=[];
    for(i=0;i<data_copy.length;i++){
        if(data_copy[i][items[0]]==selectcountry){
            var t=0;
            for(j=1;j<items.length;j++){
                t=parseInt(data_copy[i][items[j]]);
                curve_confirmed_country.push(t);
            }
            var t2=0;
            for(k=2;k<items.length;k++){
                t2=parseInt(data_copy[i][items[k]])-parseInt(data_copy[i][items[k-1]]);
                curve_add_country.push(t2);
            }
            break;
        }
    }
    add_option.series[0].data=curve_add_country;
    confirmed_option.series[0].data=curve_confirmed_country;
    switch(p2){
        case 2:
            myechart=echarts.init($(".cruve")[0]);
            myechart.clear();
            myechart.setOption(add_option);
            break;
        default:
            myechart=echarts.init($(".cruve")[0]);
            myechart.clear();
            myechart.setOption(confirmed_option);
    }



    

})

$("#fourtype").on("click","tr",function(){
    $("#fourtype").children("tr").css("background-color","white");
    $(this).css("background-color","blue");
    $("#fournumber").html($(this).children("th").eq(0).text());
    var selectcountry=$(this).children("th").eq(1).text();
    for(i=0;i<origin2.length;i++){
        if(origin2[i].country_region==selectcountry){
            origin=origin2[i];
            console.log(origin);
            break;
        }
    }
    for(i=0;i<addjson2.length;i++){
        if(addjson2[i].countryname==selectcountry){
            addjson1=addjson2[i];
            break;
        }
    }
    $("#globalnumber").html(parseInt(origin.country_confirmed));
    global_add_number=parseInt(addjson1.add);
    global_cure_number=parseInt(origin.country_recovered);
    global_death_number=parseInt(origin.country_deaths);
    global_active_number=parseInt(origin.country_active);
})

//获取累计确诊曲线图横轴时间数组
function get_dateList(length, time_stamp, step) {
    // 获取日期列表，
    var length = length || '3';
    var time_stamp = time_stamp || Date.parse(new Date());
    var date_list = [];
    var step = step || '1'; // 跨度
    for (var i = 0; i < length; i++) {
        date_list.push((new Date(time_stamp + i *
            86400000 * step).getMonth() + 1) + '.' + new Date(time_stamp + i * 86400000 * step).getDate());
    }
    return date_list;
}





});




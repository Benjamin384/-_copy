//验证表单是否为空，若为空则将焦点聚焦在input表单上，否则表单通过，登录成功
function check(form){
    var accountName = $("#accountName"),password = $("#password");
    var accountName = accountName.val(),password = password.val();
    if(!accountName || accountName == ""){
        showMsg("请输入用户名");
        form.accountName.focus ();
        return false;
    }
    if(!password || password == ""){
        showMsg("请输入密码");
        form.password.focus ();
        return false;
    }
    
//这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
 $.ajax({
    url : "/login",// 获取自己系统后台用户信息接口 http://localhost:8080/index
    data :{password:password,accountName:accountName},
    type : "GET",
    dataType: "json",
    success : function(data) {
        if (data.length==1){
            if(data[0].password==password){
                    setTimeout(function () {//做延时以便显示登录状态值
                       showMsg("正在登录中...");
                       console.log(data);
                       window.location.href =  "map.html";//指向登录的页面地址
                   },100)
                }
                else{
                    showMsg("密码错误");
                }
            }
            else{
                showMsg("该用户不存在");
            }
        },
        error : function(data){
            showMsg("后台查询失败");
        }
});  
}

//错误信息提醒
function showMsg(msg){
    $("#CheckMsg").text(msg);
}

//监听回车键提交
$(function(){
    document.onkeydown=keyDownSearch;
    function keyDownSearch(e) {
        // 兼容FF和IE和Opera
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            $('#submit').click();//具体处理函数
            return false;
        }
        return true;
    }
});

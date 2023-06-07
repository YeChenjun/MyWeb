
//监听加载状态改变
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        $("#loading").hide();
    }
}



// setTimeout(yc,2500)
// function yc() {
//     $("#loading").hide();
// }







// var photo = $(".photo");
// var div = $("#all").find("div");
// for (let i=0;i<photo.length;i++){
//     photo[i].onmouseover = function () {
//         div[i].className = "lunkuo";
//     }
//     photo[i].onmouseleave = function () {
//         div[i].className = "";
//     }}






/*
$(function () {
        var biankuang1 = document.getElementById("div1");
        var tupian = document.getElementById("bili");
        biankuang1.className = "hidden";
        tupian.onmouseover = function () {
            biankuang1.className = "show";
        }
        tupian.onmouseleave = function () {
            biankuang1.className = "hidden";
        }

        var biankuang2 = document.getElementById("div2");
        var tupian = document.getElementById("weibo");
        biankuang2.className = "hidden";
        tupian.onmouseover = function () {
            biankuang2.className = "show";
        }
        tupian.onmouseleave = function () {
            biankuang2.className = "hidden";
        }
        }
    })
*/









    var biaoge1 = document.getElementById('biao1');
    var biaoge2 = document.getElementById('biao2');
    var biaoge3 = document.getElementById('biao3');

    biaoge1.className = "hidden";
    biaoge2.className = "hidden";
    biaoge3.className = "hidden";

    $("#sel").click(function () {
        var obj =$("select>option:selected");
        if (obj.val()==='scj'){
            biaoge1.className = "show"
        }else{
            biaoge1.className = 'hidden'
        }
        if (obj.val()==='tubiao'){
            biaoge2.className = 'show'
        }else{
            biaoge2.className = 'hidden'
        }
        if (obj.val()==='lianjie'){
            biaoge3.className = 'show'
        }else{
            biaoge3.className = 'hidden'
        }
    });


    // var wrap = document.getElementById('wrap');
    // wrap.className = "hidden";
    // let psum = 0;
    // $(".playerbg").click(function () {
    //     wrap.className = "show";
    //     if(psum%2 == 1){
    //         wrap.className = "hidden";
    //     }
    //     ++psum;
    // });









    $('#tijiao1').click(function () {
        if ($('#wangzhi1').val().length !=0) {
            $('#bili').attr('src', $('#wangzhi1').val());}
    })



    $('#tijiao2').click(function () {
        if ($('#wangzhi2').val().length !=0) {
            $('#weibo').attr('src',$('#wangzhi2').val());}
    })



    $('#tijiao3').click(function () {
        if ($('#wangzhi3').val().length !=0) {
            $('#chaoxing').attr('src',$('#wangzhi3').val());}
    })



    $('#tijiao4').click(function () {
        if ($('#wangzhi4').val().length !=0) {
            $('#tianmao').attr('src',$('#wangzhi4').val());}
    })



    $('#tijiao5').click(function () {
        if ($('#wangzhi5').val().length !=0) {
            $('#bj').attr('src',$('#wangzhi5').val());}
    })




    $('#tijiao6').click(function () {
        if ($('#wangzhi6').val().length !=0) {
            $('#lianjie1').attr('href',$('#wangzhi6').val());}
    })




    $('#tijiao7').click(function () {
        if ($('#wangzhi7').val().length !=0) {
            $('#lianjie2').attr('href',$('#wangzhi7').val());}
    })



    $('#tijiao8').click(function () {
        if ($('#wangzhi8').val().length !=0) {
            $('#lianjie3').attr('href',$('#wangzhi8').val());}
    })



    $('#tijiao9').click(function () {
        if ($('#wangzhi9').val().length !=0) {
            $('#lianjie4').attr('href',$('#wangzhi9').val());}
    })



    $('#tijiao10').click(function () {
        var old=$('#myMusic').attr('src')
        var now =old.replace('29829683',$('#wangzhi10').val())
        if ($('#wangzhi10').val().length !=0) {
            $('#myMusic').attr('src',now);}
    })





var btn = document.getElementsByClassName("play")[0];
// let myaudio = document.getElementsByClassName("myaudio")[0];
var myMusic = document.getElementById("myMusic");

var mark = true;
    myMusic.volume = 0.1;

let btn_control = function (){
    if(mark){
        btn.className += " rotate"; //定义多个类名用空格隔开
        myMusic.play();
        $("#bofang").attr("src","images/zanting.png");
        mark = false
    }else{
        btn.className = "play"
        myMusic.pause();
        $("#bofang").attr("src","images/bofang.png");
        mark = true
    }
}
btn.onclick = btn_control;

$(".playerbg").click(function () {
    axios.get("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json").then(function
            (content){
            console.log(content.data.data);
            let songData = content.data.data;

            btn.setAttribute("src",songData.picurl);
            myMusic.setAttribute("src",songData.url);

            let res = songData.name;
            $("#songName").html(res);

              btn_control();
        }
    )
});


    var oyc1 = document.getElementById("yc1");
    window.onload=function (){
    var scrollTop = $(window).scrollTop();
    var clientHeight = $(window).height();
    var actTop = scrollTop + (clientHeight-oyc1.offsetHeight)/2;
    actTop1(actTop)}
    window.onscroll=function () {
        var scrollTop = $(window).scrollTop();
        var clientHeight = $(window).height();
        var actTop = scrollTop + (clientHeight-oyc1.offsetHeight)/2;
        actTop1(actTop);
    }
    $(window).resize(function () {
        var scrollTop = $(window).scrollTop();
        var clientHeight = $(window).height();
        var actTop = scrollTop + (clientHeight-oyc1.offsetHeight)/2;
        actTop1(actTop);
    })

    var actLeft = 0;

    $('#yc1').mouseover(function () {
        hidmov(actLeft)
    })
    $('#yc1').mouseleave(function () {
        hidmov(-150)
    })


    var time;
    function hidmov(actLeft) {
        clearInterval(time);
        time = setInterval(function () {
            var speed = (actLeft - oyc1.offsetLeft)/4;
            speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
            if (actLeft===oyc1.offsetLeft){
                clearInterval(time)
            }else{
                oyc1.style.left = oyc1.offsetLeft+speed+"px";
            }
        },30)
    }



    var timer;
    function actTop1(actTop) {
        clearInterval(timer);
        timer = setInterval(function () {
            var speed =  (actTop - oyc1.offsetTop)/4;
            //speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);  top不能化整
            if (oyc1.offsetTop===actTop){
                clearInterval(timer);
            }else{
                oyc1.style.top = oyc1.offsetTop+speed+'px';
            }
        },30)
    }





let tk = document.getElementById('tk')
let tk2 = document.getElementById('tk2')
var body = document.getElementById('body');
var sum = 0;
$('#bjbtn').click(function () {
    body.className="hei";
    tk.style.display='none';
    tk2.style.display='inherit';
    $('#bj').attr('src','picture/feiji.png');
    $('#taiyang').attr("src",'picture/yueliangs.png');
    if (sum%2===1){
        body.className="bai";
        $('#bj').attr('src','picture/flowerm.png');
        $('#taiyang').attr("src",'picture/太阳.png');
        tk.style.display='inherit';
        tk2.style.display='none';
    }
    sum+=1;
})



let box = document.getElementById('box');
var sum2 = 0;
$('#mfbtn').click(function () {
    box.style.display="none";
    if (sum2%2===1){
        box.style.display= "inherit"
    }
    sum2+=1;
})


let lbj = document.getElementById('lbj');
var sum3 = 0;
$('#lbbtn').click(function () {
    lbj.style.display="none";
    if (sum3%2===1){
        lbj.style.display= "inherit"   //父系继承
    }
    sum3+=1;
})

$(function () {
    let wrap = document.getElementById('wrap');
    let sum4 = 0;
    $('#playerbtn').click(function () {
        wrap.style.display="inherit";
        if (sum4%2===1){
            wrap.style.display= "none"   //父系继承
        }
        sum4+=1;
    })
})

$(function () {
let jsb = document.getElementById('jishiben');
let sum5 = 0;
$('#jsbbtn').click(function () {
    jsb.style.display="inherit";
    if (sum5%2===1){
       jsb.style.display= "none"   //父系继承
    }
    sum5+=1;
})
})



// $('#box').mousedown(function(e){
//     // console.log(e.pageX + ", " + e.pageY)
//     var bWidth=$('body').width()/360;
//     var bHeight=$('body').height()/360;
//     var roateY=e.pageX/bWidth;
//     var roateX=e.pageY/bHeight;
//     // console.log(roateY)
//     // console.log(roateX)
//     $('.box').css('transform',"rotateX("+roateX+"deg) rotateY("+roateY+"deg)")
// });


let drag = document.querySelector("#box");//获取操作元素
drag.onmousedown = function (e) {//鼠标按下触发
    var disx = e.pageX - drag.offsetLeft;//获取鼠标相对元素距离
    var disy = e.pageY - drag.offsetTop;
    // console.log(e.pageX);
    // console.log(drag.offsetLeft);
    document.onmousemove = function (e) {//鼠标移动触发事件，元素移到对应为位置
        drag.style.left = e.pageX - disx + 'px';
        drag.style.top = e.pageY - disy + 'px';
    }
    document.onmouseup = function(){//鼠标抬起，清除绑定的事件，元素放置在对应的位置
        document.onmousemove = null;
        document.onmousedown = null;
    };
    e.preventDefault();//阻止浏览器的默认事件
};



    var i = 1;
    var lbphoto = $('.lbphoto');

    function lb() {
        for (var u= 0;u<lbphoto.length;u++){
            lbphoto[u].style.display= 'none'
        }
        if (i===0){
            lbphoto[0].style.display='block'
        }
        if (i===1){
            lbphoto[1].style.display='block';
        }
        if (i===2){
            lbphoto[2].style.display='block'
        }
        i+=1;
        if (i===3){i=0}
    }
    setInterval(lb,6000);
    var lbtn0 = $("#lbtn0");
    var lbtn1 = $("#lbtn1");
    var lbtn2 = $("#lbtn2");

    lbtn0.click(function () {
        for (var u = 0; u < lbphoto.length; u++) {
            lbphoto[u].style.display = 'none'
        }
        lbphoto[0].style.display = "block"
    })
    lbtn1.click(function () {
        for (var u = 0; u < lbphoto.length; u++) {
            lbphoto[u].style.display = 'none'
        }
        lbphoto[1].style.display = "block"
    })
    lbtn2.click(function () {
        for (var u = 0; u < lbphoto.length; u++) {
            lbphoto[u].style.display = 'none'
        }
        lbphoto[2].style.display = "block"
    })





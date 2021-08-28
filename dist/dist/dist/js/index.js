/**
* @Title：轮播图
* @author huang
* @date 2021/08/23
* @Description
*/
    var banner_img=document.querySelector('.banner_img');
    var btn_left=document.querySelector('.btn_left');
    var btn_right=document.querySelector('.btn_right');
    var banner_img=document.querySelector('.banner_img');
    var cir_btn=document.querySelectorAll('.cir_btn li');
    var timeStatus=null;
    var index=0;

    function autoPlay(){
        timeStatus=setInterval(function(){
            move_left()
        },3000)
    };
    autoPlay();

    //鼠标移动到banner上
    banner_img.onmouseover=function(){
        clearInterval(timeStatus);
    };
    banner_img.onmouseout=function(){
        autoPlay(); 
    };

    //底部原点点击事件
    for(var i= 0; i< cir_btn.length; i ++){
       (function(liIndex){
        cir_btn[liIndex].onclick=function(e){
            var self=this;
            var siblings = self.parentNode.children;
            index = liIndex;
            for(var i = 0; i < siblings.length; i++) {
                siblings[i].className="";
                self.setAttribute('class','active');
            }
            banner_img.style.left=parseInt(-index*1920)+'px'
         };
       })(i)
    }


    function move_left(){
        var moveleft;
        index++;
        if(index>3) index=0;
        var cir_btnNow = cir_btn[index].parentNode.children;
        console.log( cir_btnNow)
        for(var i = 0; i < cir_btnNow.length; i++) {
            cir_btnNow[i].className="";
            cir_btn[index].setAttribute('class','active');
        }
        if(banner_img.style.left=='-3840px'){
            moveleft=0;
        }else{
            moveleft = parseInt( banner_img.style.left)-1920;
        }
        banner_img.style.left=moveleft+'px'
    };




    //左右箭头移动
    // btn_left.onclick = function(){
    //     move_left();
    // };
    // btn_right.onclick=function(){
    //     move_right();
    // };
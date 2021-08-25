/**
* @Title：订单确认
* @author huang
* @date 2021/08/24
* @Description
*/
    var del_btn=document.querySelector('.del_btn');
    var add_adress=document.querySelector('.add_adress');
    var bg_b=document.querySelector('.bg_b');

    del_btn.onclick=function(){
        bg_b.style.display='none'
     };

     add_adress.onclick=function(){
        bg_b.style.display='block'
     };
    


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
/**
* @Title：订单确认
* @author huang
* @date 2021/08/24
* @Description
*/
   var del_btn=document.querySelector('.del_btn');
   var add_adress=document.querySelector('.add_adress');
   var set_btn=document.querySelector('.set_btn');
   var bg_b=document.querySelector('.bg_b');

   del_btn.onclick=function(){
      bg_b.style.display='none'
   };

   add_adress.onclick=function(){
      bg_b.style.display='block'
   };

   set_btn.onclick=function(){
      window.location.href='./order_detail.html'
   };
    

  
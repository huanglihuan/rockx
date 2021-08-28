/**
* @Title：头部搜索
* @author huang
* @date 2021/08/23
* @Description
*/

    var serch_bg = document.querySelector('.serch_bg');
    var serch_btn=document.querySelector('.serch_btn');
    var close_btn=document.querySelector('.close');

    /**
     * serch_btn 点击事件
     */ 
     serch_btn.onclick=function(){
         document.documentElement.style.overflow = 'hidden';
         serch_bg.style.display='block';
     }

     close_btn.onclick=function(){
        serch_bg.style.display='none';
        document.documentElement.style.overflow = ''; 
    }
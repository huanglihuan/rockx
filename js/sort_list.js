/**
* @Title：搜索列表
* @author huang
* @date 2021/08/24
* @Description
*/
   var sort_list_detail=document.querySelector('.sort_list_detail');
   /**
    * 商品列表返回对象
    * data为商品列表数据
    */
   var closeData={
      data:[
         {
            img:'./images/cloth_1.png',
            imgTwo:'./images/cloth_2.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥10.00'
         },{
            img:'./images/cloth_2.png',
            imgTwo:'./images/cloth_3.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥20.00'
         },{
            img:'./images/cloth_3.png',
            imgTwo:'./images/cloth_4.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥30.00'
         },{
            img:'./images/cloth_4.png',
            imgTwo:'./images/cloth_1.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥40.00'
         },{
            img:'./images/cloth_2.png',
            imgTwo:'./images/cloth_4.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥50.00'
         },{
            img:'./images/cloth_1.png',
            imgTwo:'./images/cloth_3.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥60.00'
         }
      ],
      status:1,
      desc: "Success"
   }


   var data_List='',
      clothes_data=closeData.data;

   for(var i=0;i<clothes_data.length;i++){
      data_List+=' <div class="serch_con serch_con_top">'+
      ' <img src='+clothes_data[i].img+' />'+
      '<h4>'+clothes_data[i].proname+'</h4>'+
      ' <h4>'+clothes_data[i].price+'</h4>'+
      '</div>';

      sort_list_detail.innerHTML = data_List;
      bindClick();
   }

   function bindClick() {
      for(var i=0;i<getClass('serch_con_top').length;i++){
         (function(index){//保存索引需要用到闭包
            getClass('serch_con_top')[index].onclick=function () {
               window.location.href='./pro_details.html'
            }
            getClass('serch_con_top')[index].onmouseover=function(){
               console.log(clothes_data[index])
               this.firstChild.nextSibling.setAttribute('src',clothes_data[index].imgTwo)
               
           };
           getClass('serch_con_top')[index].onmouseout=function(){
            this.firstChild.nextSibling.setAttribute('src',clothes_data[index].img)
           };
         })(i)
      }
   }

   function getClass(classname) {
     return document.getElementsByClassName(classname);
   }

   
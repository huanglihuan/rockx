/**
* @Title：搜索列表
* @author huang
* @date 2021/08/24
* @Description
*/
   var serch_list_detail=document.querySelector('.serch_list_detail');

   /**
    * 搜索商品返回对象
    * data为商品列表数据
    */
   var closeData={
      data:[
         {
            img:'./images/cloth_1.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥10.00'
         },{
            img:'./images/cloth_1.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥20.00'
         },{
            img:'./images/cloth_1.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥30.00'
         },{
            img:'./images/cloth_1.png',
            proname:'STARSHIP CREW T桖衫',
            price:'¥40.00'
         }
      ],
      status:1,
      desc: "Success"
   }


   var serch_List='',
      clothes_data=closeData.data;

   for(var i=0;i<clothes_data.length;i++){
      serch_List+=' <div class="serch_con">'+
      ' <img src='+clothes_data[i].img+' />'+
      '<h4>'+clothes_data[i].proname+'</h4>'+
      ' <h4>'+clothes_data[i].price+'</h4>'+
      '</div>'
   }

   serch_list_detail.innerHTML=serch_List;
/**
* @Title：搜索列表
* @author huang
* @date 2021/08/24
* @Description
*/
var sel_list=document.querySelectorAll('.sel_list a');
var more_btn=document.querySelector('.more_btn');

   /**
    * 商品详情
    * 
    */
    for(var i= 0; i< sel_list.length; i ++){
      (function(liIndex){
         sel_list[liIndex].onclick=function(e){
           var self=this;
           var siblings = self.parentNode.children;
           index = liIndex;
           for(var i = 0; i < siblings.length; i++) {
               siblings[i].className="";
               self.setAttribute('class','sel_active');
           }
        };
      })(i)
   }

   // 方式2
//    if (node.className.indexOf('test') > -1) {
//       console.log('包含 test 这个class');   
//   }
   more_btn.onclick=function(){
      var self=this;
      var className = self.parentNode.nextSibling.nextSibling.className.indexOf('size_status');
      if(className>-1){
         self.parentNode.nextSibling.nextSibling.className="";
      }else{
         self.parentNode.nextSibling.nextSibling.setAttribute('class','size_status');
      }
      console.log(className)
      //self.parentNode.nextSibling.nextSibling.
   }
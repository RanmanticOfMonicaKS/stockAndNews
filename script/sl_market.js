// 1.渲染牛股部分
const marketRedStock =() => {
   let tempData = $api.getStorage('stockInfo') || {};
   
   tempData = tempData.filter(item => parseInt(item.id) < 5 )
   console.log(JSON.stringify(tempData)+'=======Market数据');
   sl_temp('redStock_bd',tempData);
}


// 2.为牛股部分添加点击事件 
const clickRedStockInfo = () => {
    $('.redStock').on('click','.sl_redStock_item',function(){

      let id =   $(this).data('index');
      console.log(JSON.stringify(id));   
      toDetailStock(id);
    })
}


// 3. 点击更多跳转到更多牛股页面
const toMoreRedStock = () => {
  api.openWin({
    name: 'sl_redStockMore',
    url: 'sl_redStockMore.html',
    bounces: false,
  });
}

// 4. 热门股票渲染
const marketHotStock =() => {
  let tempData = $api.getStorage('stockInfo') || [];
   if(tempData.length === 0) {
     return api.toast({
       msg: '网络出错~',
       duration: 2000,
       location: 'bottom'
     });
   }
  console.log(JSON.stringify(tempData)+'=======Market数据');
  sl_temp('hotStock_bd',tempData);
}

// 5. 点击热门股票跳转
const clickHotStockInfo = () => {
  $('.hotStock_bd').on('click','.hotStock_item',function(){

    let id =   $(this).data('index');
    console.log(JSON.stringify(id));   
    toDetailStock(id);
  })
}
// 1. const 渲染模板
const redStockMore = () => {
    let tempData = $api.getStorage('stockInfo') || [];
    if(tempData.length === 0) {
        return api.alert({
            title: '暂无数据', 
            msg: '网络出错~'
        });
    }
    sl_temp('redStockMore',tempData);
}

const clickToStockInfo = () => {
    $('.redStockMore').on('click','.sl_redStock_item',function(){
      let id =   $(this).data('index');
      console.log(JSON.stringify(id));   
      toDetailStock(id);
    })
}

// 1.页面渲染股模块
const homeStock = async () => {
    let url = 'shuangli/getStockInfo.sl';
    data = {
        body:{
            ks_param:{
                
            }
        }
    }
    // 只推荐4个
    try {
        
        let tempData = await myAjax(url,data);
        console.log(JSON.stringify(tempData)+'------后台数据');
        if(tempData.success && tempData.success.ks_param.total>0) {
            tempData = tempData.success.ks_param.records
        } else {
            alert('网络出错或数据不存在~')
        }
        $api.setStorage('stockInfo',tempData);
        tempData = tempData.filter(item => parseInt(item.id) < 5 )
    
        console.log(JSON.stringify(tempData)+'-----模板数据');
    
        sl_temp('stock_info_simple',tempData);
        console.log('---------------渲染完毕');
        
    } catch (error) {
        api.toast({
            msg: '网络错误~',
            duration: 2000,
            location: 'bottom'
        });
    }
}

// 2. 新闻部分 渲染 
const homeNews =async () => {
    let url = 'shuangli/getNewsInfo.sl';
    data = {
        body:{
            ks_param:{
          
            }
        }
    }
    try {
       
        
        let tempData = await myAjax(url,data);
        console.log(JSON.stringify(tempData)+'------后台数据');
        if(tempData.success && tempData.success.ks_param.count>0) {
            tempData = tempData.success.ks_param.records
        } else {
            alert('网络出错或数据不存在~')
        }
        console.log(JSON.stringify(tempData)+'-----模板数据');
        $api.setStorage('newsInfo',tempData);
        sl_temp('sl_news_template',tempData);
        console.log('---------------渲染完毕');

    } catch (error) {
        api.toast({
            msg: '网络错误~',
            duration: 2000,
            location: 'bottom'
        });
    }    
}
//1. 点击图标，进入user页面
const sl_user  = () => {
    api.openWin({
        name: 'sl_user',
        url: 'sl_user.html',
        bounces: false,
    });
}

// 2. 点击搜索进入搜索界面 
const home_search = () => {
    $('.sl_search').on('click',function(e){
        api.openWin({
            name: 'home_search',
            url: 'home_search.html',
            bounces: false,
            pageParam: {key : 'value'}
        });
        return false;
    })
    
}

// 3.为股票简报部分添加点击事件 应为自选部分
const clickSimpleStockInfo = () => {
    $('.stock_info_simple').on('click','.stock_info_item',function(){

      let id =   $(this).data('index');
      console.log(JSON.stringify(id));   
      toDetailStock(id);
    })
}

// 4. 点击进入新闻详情 
const clickToNewsDetail = () => {
    $('.sl_news_template').on('click','.sl_news_item',function(){
        let id  =  $(this).data('index');
        console.log(JSON.stringify(id));
        
        toDetailNews(id);
       
    })
}

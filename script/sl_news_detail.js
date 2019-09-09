// .1 获取数据渲染模板
const newsDetail =async () => {
    let id = api.pageParam.id;
    console.log(JSON.stringify(api.pageParam));
    let url =  '/shuangli/getNewsInfo.sl';
    let data = {
        body: {
            ks_param:{
                id,
            }
        }
    }
    try {
        
        let tempData = await myAjax(url,data);
        console.log(JSON.stringify(tempData));
        if(tempData.success && tempData.success.ks_param.count > 0) {
            tempData = tempData.success.ks_param.records[0];
        } else {
            return api.toast({
                msg: '网络出错',
                duration: 2000,
                location: 'bottom'
            });
        }
        if(tempData.newscontent) {
            tempData.newscontent = tempData.newscontent.replace(' ','<br>');
        }
        console.log(JSON.stringify(tempData)+'===========模板数据');
        
        sl_temp('news_detail_content',tempData);
    } catch (error) {
        api.toast({
            msg: '网络出错~',
            duration: 2000,
            location: 'bottom'
        });
    }
}
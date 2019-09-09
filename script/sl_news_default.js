//1.获取数据渲染 新闻部分

const newDefault = () => {
    let tempData = $api.getStorage('newsInfo');
    console.log(JSON.stringify(tempData));
    sl_temp('news_template',tempData);
   
}
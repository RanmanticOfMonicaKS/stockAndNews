// 1打开framegroup
const openFg =() => {
    api.setFrameGroupAttr({
        name: 'sl_group',
        hidden: true
    });
    let headerH  = $api.getStorage('headerH');
    let footerH  = $api.getStorage('footerH');
    console.log(JSON.stringify(headerH)+'----'+JSON.stringify(footerH));
   api.openFrame({
       name: 'sl_news_default',
       url: 'sl_news_default.html',
       bounces: false,
       rect: {
           x: 0,
           y:  headerH +2 ,
           w: 'auto',
           h:'auto'
       }
   });

}
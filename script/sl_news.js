
// 2. 切换tab栏
const swithNewsGroup = () => {
    $('.sl_header>li').on('click',function(){
        let index =$(this).index();
        console.log(JSON.stringify(index));
        
        $(this).addClass('active').siblings('li').removeClass('active');
        openwhichFm(index);
})
}

// 3. 打开第N个页面
const openwhichFm =(index) => {
    let headerH  = $api.getStorage('headerH') || 78;
    let footerH  = $api.getStorage('footerH') || 54;
   let fg = ['sl_news_default','sl_news_fast_fm','sl_news_mine'];
   console.log(JSON.stringify(footerH) + '====='+JSON.stringify(headerH));
   
   api.openFrame({
       name: fg[index],
       url: fg[index] + '.html',
       rect: {
           x: 0,
           y: parseInt(headerH) +2,
           w: 'auto',
           marginBottom:footerH,
       },
       reload:true,
   });
   // 改变现实顺序
}
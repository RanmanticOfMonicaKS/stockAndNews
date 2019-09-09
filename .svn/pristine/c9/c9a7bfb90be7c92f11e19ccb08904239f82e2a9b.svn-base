
let baseUrl = 'http://192.168.3.206:8080/';

// 1. root窗口，监听keyback 提示退出应用;
const rootToEixt = () => {
    // a. 设置可以退出时间段 
    var ableToOut = null;
    api.addEventListener({
        name: 'keyback'
    }, function(ret, err){
        if(!ableToOut) {
            ableToOut  = { timeout:3000 };
            return api.toast({
                msg: api.appName+' ：3s内再次点击退出应用',
                duration: 2000,
                location: 'bottom'
            });
        } else {
            setTimeout(() => {
                ableToOut = null;
            }, ableToOut.timeout);
            api.closeWidget({
               slient:true
            });
        }
    });
}
// 2. 封装ajax为async 函数
const myAjax =  (url,data) => {
    
    const promise = new Promise((resolve,reject) => {        
        api.ajax({
            url:baseUrl+ url, // 只适用于本项目，baseurl没有抽离
            method:'post',
            timeout:'15',
            dataType:'json',
            returnAll:false,
            data,
        },function(ret,err){
            api.hideProgress();
            if (ret) {
                // TODO 
                console.log(JSON.stringify(ret));
                resolve({ success:ret } ) ;
            } else {
                reject({ failure:err });
            };
        });

    })
   return promise;
}

// 3. 封装官方的偏好，方法 设置偏好
const _setPrefs = (key,value) =>{
    value = JSON.stringify(value);
    api.setPrefs({
        key,
        value,
    });
}

// 4. 封装官方同步获取偏好方法，

const _syncPrefs = (key) => {
  let a =  api.getPrefs({
        key,
        sync:true,
    });
    return a;
}


// 4. 判断用户是否登录 
const LoginOrNot = ()=> {
    //同步返回结果：

    let sl_uInfo = $api.getStorage('sl_uInfo') || {} ;
    console.log(JSON.stringify(sl_uInfo));
    
    let bool = sl_uInfo.sl_uname ? true : false;
    return bool;
}

// 5. 手动适配main高度 省去写win ，fm 的麻烦 
const fixMainH = () => {
    let headerH = $api.offset($api.dom('.sl_header')).h;
    console.log(JSON.stringify(headerH)+'==========='+JSON.stringify(api.frameHeight));
    
    $('main').height(api.frameHeight - headerH -20);
}           




// 7. 关闭窗口win
const closeWin = (param) => {
    param = param || {};
    if(typeof param !== 'object') {
        throw new Error('the winName is not exist!');
    }
    api.closeWin(param);
}

// 8. 手机号码验证，
const checkPhone = (phoneNum) => {
    if(!phoneNum || !(/^1[34578]\d{9}$/.test(phoneNum))) return false;
    return true;
}

// 9. 封装根绝数据渲染模块的函数

const sl_temp =  (temp_id,data) => {
    const tempText = doT.template($('#'+temp_id).text()); // 返回一个函数
    let str = tempText(data);
    $("."+temp_id).html(str);
} 

// 封装根据id进入详情页的函数
const toDetailStock =  (id) => {
    id = id || '1';
    api.openWin({
        name: 'sl_stock_detail',
        url: 'sl_stock_detail.html',
        bounces: false,
        pageParam: {id}
    });
}

// 根据新闻id进入新闻业
const toDetailNews =  (id) => {
    id = id || '1';
    api.openWin({
        name: 'sl_news_detail',
        url: 'sl_news_detail.html',
        bounces: false,
        pageParam: {id}
    });
}


    


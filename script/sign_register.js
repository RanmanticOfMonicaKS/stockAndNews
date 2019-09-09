// 1. 登录按钮函数

const sl_login = () => {
    api.openWin({
        name: 'sl_sign',
        url: 'sl_sign.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        }
    });

    // ------------后续逻辑
} 

// 2. 注册按钮跳转的页面
const sl_register = () => {
    api.openWin({
        name: 'sl_register',
        url: 'sl_register.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        pageParam:{type:'注册账号'},
    });
    // -----手续逻辑
}
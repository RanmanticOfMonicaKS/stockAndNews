
// 2. 根据登录状况，进入主页还是起始页
const goToWhere = () => {

} 

// 3. 跳转到主页 

const goToMain =  () => {
    api.openWin({
        name: 'main',
        url: './html/sl_main.html',
    });
    // --------- 添加后续逻辑 --------------------

} 

// 4. 跳转到起始页 ( 注：选择等还是注册的页面 )

const goToSign_login = () => {
    api.openFrame({
        name: 'sign_login',
        url: './html/sl_sign_register.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
    });
    // --------- 添加后续逻辑 --------------------

    // --------------------------
}





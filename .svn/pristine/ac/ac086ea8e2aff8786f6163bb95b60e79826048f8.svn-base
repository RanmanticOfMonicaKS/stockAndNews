//1. 渲染用户信息
const userEdit =() => {
    // 获取用户信息
   let tempData = $api.getStorage('sl_uInfo') || {};
   console.log(JSON.stringify(tempData));
   let sl_uname = tempData.sl_uname;
   splitStr  = sl_uname.substr(3,4);
   sl_uname = sl_uname.split(splitStr).join('****');
   tempData.sl_uname =sl_uname;
   let date = new Date();
   console.log(JSON.stringify(date));
   let h = date.getHours();
   console.log(JSON.stringify(h));
   let hiText = '';
   if(h>0 && h<=11) {
       hiText = 'Hi,早上好';
   } else if(h>11 && h<=13) {
       hiText = 'Hi,中午好'
   } else if(h >13 && h<=17) {
       hiText ='Hi,下午好'
   } else if(h>17 && h<= 24) {
       hiText ='Hi,晚上好'
   }
   tempData.hiText = hiText;
   sl_temp('sl_user_bgi',tempData);

}


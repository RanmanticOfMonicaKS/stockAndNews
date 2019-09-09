// 1. 渲染数据
const mineStock =async () => {
    //a. 获取用户信息
    let sl_uInfo = $api.getStorage('sl_uInfo') || {};
    let id = sl_uInfo.id || '1';
    console.log(JSON.stringify(sl_uInfo));
    //b. 根据用户id 查询收藏的stock
    let url = 'shuangli/getOwnerStockInfo.sl';
    let data = {
        body : {
            ks_param:{
                userId:id
            }
        }
    }
    try {
        let tempData = await myAjax(url,data);
        if(tempData.success && tempData.success.ks_param.total>0) {
            tempData = tempData.success.ks_param.records
        }else {
            alert('暂无数据~')
        }
        console.log(JSON.stringify(tempData));
        sl_temp('stcok_content',tempData)
        
    } catch (error) {
        alert('网络出错~')
    }
}

//2. 点击编辑操作
const handleStock = () => {
    if(!flag1) {
        $('.handlebar').show();
        flag1 = true;
    } else {
        $('.handlebar').hide();
        flag1 = false;
    }
}

// 3. 点击选框，添加对号
const toChoose = () => { 
    $('.stcok_content').on('click','i.fa',function (){
        console.log(JSON.stringify(flag));
        if(!flag) {

            $(this).addClass('fa-check')
            flag =true;
        } else {
            $(this).removeClass('fa-check')
            flag =false;
        }
    })
}

// 4.点击删除按钮逻辑
const ClickdeletStock = () => {
    $('.stcok_content').on('click','.handlebar>span',function() {
        let self = this;
        let index = $(this).index();
        console.log(JSON.stringify(index));
        let checkbox = $(this).siblings('i');
        if(checkbox.hasClass('fa-check')) {
            dialog.alert({
                title:'是否确定删除该条自选股',
                msg:'',
                buttons: ['取消','确定'],
                input:false
            },function(ret){
                let buttonIndex = ret.buttonIndex;
                console.log(JSON.stringify(buttonIndex)+'个按钮被点击了======');
                if(buttonIndex === 2) {
                  $(self).parents('li').remove();
                  toast.success({
                    title:'删除成功！'
                })
                }
                
            })
        } else {
            return toast.warning({
                title:'请先勾选您要删除的自选股...'
            })
        }
        
    })
}
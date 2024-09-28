(function (w, d, e, x) {
    w[e] = function () {
        w.cbk = w.cbk || []
        w.cbk.push(arguments);
    }
    x = d.createElement('script');
    x.async = true;
    x.id = 'zhichiScript';
    x.className = 'service_bind',
    x.src = 'https://smzdm.soboten.com/chat/frame/v6/entrance.js?sysnum=b00a7712533142fe89f4dcb5ef606f8b';
    // x.src = 'https://chat.sobot.com/chat/frame/v2/entrance.js?sysnum=4c349791a07b46c1a70b8ac88aa23257';
    d.body.appendChild(x);
})(window, document, 'zc');

zc('config', {
    custom: true,
    channelid: 2,
    anchor: true,
    color: 'F86868',
    top_bar_flag: '1', // 是否显示聊天页面顶部返回栏 仅H5 1开启 0关闭
    title_flag: '2', // 显示1到30字符的固定文案
    custom_title: '在线客服', // top_bar_flag=1时,需结合title_flag使用,控制聊天页面顶部返回栏title和网页title显示的自定义文案；
})

// 1 七鱼客服
// 2 智齿客服 
var GLOBAL_SERVICE_SWITCH = 2;

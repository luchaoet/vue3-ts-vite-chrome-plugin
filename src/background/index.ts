// 监听指定
/**
 * 指令集
 * 格式{order:xxx,data}
 * order='xxx'用于备注是什么指定
 * 
 */

window.chrome.extension.onMessage.addListener(function (request: any, _sender: any, callback: any) {
  var {
    order
  } = request;
  var data = {};

  switch (order) {
    case 'devtools': {
      data = {
        msg: `我是background，我已经收到${order}信息了`
      }
    }
      break;
    default:
      break;
  }

  console.log("getorder:", order);
  console.log("tgetData:", data);
  callback({
    code: 1,
    request,
    data
  });
});
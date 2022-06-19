/*CMD
  command: buy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let my = Libs.ResourcesLib.userRes("my");
var coin = my.value()
var byid = 'buy' + user.id
var cod = Bot.getProperty(byid)

Bot.sendInlineKeyboard([ {title: "شراء ✅", command: "buyok" }, {title: "الغاء ❌ ", command: "gs" }, ], "text")




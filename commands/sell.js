/*CMD
  command: sell
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: حسنا . حدد السعر الان 💸

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ");
var coin = myArray[0]
var id = user.telegramid
var cod = Bot.getProperty("sell" + id)
let list = new List({ name: "car", user_id: user.id })

let props = list.get();
var key = cod.cod
var text1 = "هل تريد بيع " + props[key].value.type + " بسعر " + coin + " 💵 " 
Bot.sendInlineKeyboard([ {title: "الغاء ❌" , command: "gs" }, {title: "بيع ✅" , command: "sellok" }, ],  text1)

Bot.setProperty({
  name: "sellcoin" + idd ,
  value: { coin: coin},
  type: "json",
  
  
});


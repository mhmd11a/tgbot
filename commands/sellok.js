/*CMD
  command: sellok
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
حسنا , ارسل مفتاح الحساب مع اي دي الحساب الذي قرر شرائها 
بلشكل الاتي  (مفتاح-ايدي)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split("-");
var to = myArray[0]
var to2 = myArray[1]
var id = user.telegramid

var cod = Bot.getProperty("sell" + id)

var coin = Bot.getProperty("sellcoin" + id)

let list = new List({ name: "car", user_id: user.id })

let props = list.get();
var text1 = "يريد `" + id + "` بيع " + props[cod.cod].value.type + " مقابل " + coin.coin
Bot.sendInlineKeyboardToChatWithId(to2 ,[ {title: "الغاء ❌" , command: "gs" }, {title: "شراء ✅" , command: "buy" }, ],  text1)

Bot.setProperty({
  name: "buy" + to ,
  value: { coin: coin.coin, type: props[cod.cod].value.type, by: id, by2: to2},
  type: "json",
  user_id: to
  });



/*CMD
  command: معلومات
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Cars
  answer: 
  keyboard: 
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ")
var oflist = myArray[2]
let list = new List({ name: "car", user_id: user.id })
let options = { reply_to_message_id: request.message_id }
var id = user.telegramid

let props = list.get()
var matches = props[oflist].value.type.match(/(\d+)/)

var text1 =
  user.first_name +
  " " +
  " هاي سياراتك 🏎 !!" +
  "\n\n" +
  "⇜ نوعها " +
  props[oflist].value.type.replace(matches[0], "") +
  " 🏎️ \n" +
  "⇜ رقمها " +
  matches[0] +
  " 🔢 " +
  "\n" +
  "⇜ اشتريتها به 💰 " +
  props[oflist].value.coin.toLocaleString() +
  " دولار 💸 "

Bot.sendMessage("*" + text1 + "*")


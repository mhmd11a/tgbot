/*CMD
  command: سيارة
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Cars

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ")
var oflist = myArray[1]
var to = myArray[3]
var sellnum = myArray[5]
let options = { reply_to_message_id: request.message_id }
if (oflist === undefined) {
  Bot.sendMessage("⇜ التنسيق خاطء ⚠️", options)
  return
}
if (sellnum === undefined) {
  Bot.sendMessage("⇜ التنسيق خاطء ⚠️", options)
  return
}

if (to === undefined) {
  Bot.sendMessage("⇜ التنسيق خاطء ⚠️", options)
  return
}
if (isNaN(oflist)) {
  Bot.sendMessage("⇜ التنسيق خاطء ⚠️", options)
  return
}
if (isNaN(to)) {
  Bot.sendMessage("⇜ التنسيق خاطء ⚠️", options)
  return
}
if (isNaN(sellnum)) {
  Bot.sendMessage("⇜ التنسيق خاطء ⚠️", options)
  return
}
let list = new List({ name: "car", user_id: user.id })
let props = list.get()
var matches = props[oflist].value.type.match(/(\d+)/)
var id = user.telegramid

var text1 =
  "*⇜ بيع سيارة 💰 !!*" +
  "\n\n" +
  "⇜ السعر " +
  Number(sellnum).toLocaleString() +
  " دولار 💵 " +
  "\n" +
  "⇜ نوعها " +
  props[oflist].value.type.replace(matches[0], "") +
  " 🏎️ \n" +
  "⇜ رقمها " +
  matches[0] +
  " 🔢 " +
  "\n" +
  "⇜ الى " +
  to +
  " 🪪"

var com =
  "sell " +
  oflist +
  " الى " +
  to +
  " " +
  id +
  " " +
  user.id +
  " " +
  sellnum +
  " " +
  user.username
Bot.sendInlineKeyboard(
  [
    { title: "الغاء ❌", command: "tustus" },
    { title: "بيع ✅", command: com }
  ],
  text1,
  options
)


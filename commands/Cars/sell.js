/*CMD
  command: sell
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
var by = myArray[4]
var byid = myArray[5]
var usena = myArray[7]
let list = new List({ name: "car", user_id: user.id })
let options = { reply_to_message_id: request.message_id }
var optionss = { reply_to_message_id: request.message_id }
var id = user.telegramid
var sellnum = myArray[6]
if (Number(by) === id) {
  let props = list.get()
  var matches = props[oflist].value.type.match(/(\d+)/)
  var text1 =
    "*" +
    user.first_name +
    "*" +
    "* يريد بيع سيارة لك 🏎 !!*" +
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
    "sell2 " +
    oflist +
    " to " +
    to +
    " " +
    id +
    " " +
    byid +
    " " +
    sellnum +
    " " +
    usena +
    " " +
    request.message.message_id
  Bot.editInlineKeyboard(
    [{ title: "يتم البيع الان", command: "ش" }],
    request.message.message_id,
    chat.id
  )
  Bot.sendInlineKeyboard(
    [
      { title: "الغاء ❌", command: "tustus" },
      { title: "شراء ✅", command: com }
    ],
    text1,
    options
  )
} else {
  Bot.sendMessage("⇜ يحاول @" + user.username + " افساد الصفقة ❌🙊", options)
}


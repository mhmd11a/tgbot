/*CMD
  command: slfa142
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

var id = user.telegramid
var text = message
const myArray = text.split(" ")
var to = "صندوق∴السلفة∴الدولي∞"
let slfa = Libs.ResourcesLib.anotherUserRes("my", "سلفه")
let mycoin = Number(slfa.value())
let my = Libs.ResourcesLib.userRes("my")

if (slfa.value() === undefined) {
  Bot.sendMessage("⇜ تحويل X الى ID ⚠️")
  return
}
if (my.value() < mycoin) {
  Bot.sendMessage("رصيدك ما يكفي ! ")
  return
}

if (to === undefined) {
  Bot.sendMessage("⇜ تحويل X الى ID ⚠️")
  return
}

if (isNaN(slfa.value())) {
  Bot.sendMessage("⇜ تحويل X الى ID ⚠️")
  return
}

let too = Libs.ResourcesLib.anotherUserRes("my", to)

too.add(Number(mycoin))
var newcoin = Number(my.value()) - Number(mycoin)

Libs.ResourcesLib.userRes("my").set(newcoin)
var toto =
  "تم تحويل " +
  Number(mycoin).toLocaleString() +
  " $ بنجاح ✅" +
  "\n\n" +
  "⇜ معلومات الحوالة ℹ️" +
  "\n" +
  "⇜ المبلغ ↢ ( " +
  mycoin.toLocaleString() +
  " دولار 💸 )" +
  "\n" +
  "⇜ الـــــى ↢ ( " +
  to +
  " ) \n" +
  "⇜ فلوسك الان ↢ ( " +
  newcoin.toLocaleString() +
  " دولار 💸 )"
let options = { reply_to_message_id: request.message_id }

Bot.sendMessage(toto, options)


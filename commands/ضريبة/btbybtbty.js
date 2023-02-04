/*CMD
  command: btbybtbty
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ضريبة
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = user.telegramid
var text = message
const myArray = text.split(" ")
var to = myArray[3]
let mycoin = Number(myArray[1])
let my = Libs.ResourcesLib.userRes("my")

let options = { reply_to_message_id: request.message_id }
if (myArray[1] === undefined) {
  Bot.sendMessage("⇜ تحويل X الى ID ⚠️", options)
  return
}
if (my.value() < mycoin) {
  Bot.sendMessage("رصيدك ما يكفي ! ", options)
  return
}

if (to === undefined) {
  Bot.sendMessage("⇜ تحويل X الى ID ⚠️", options)
  return
}

if (isNaN(myArray[1])) {
  Bot.sendMessage("⇜ تحويل X الى ID ⚠️", options)
  return
}

let too = Libs.ResourcesLib.anotherUserRes("my", to)

too.add(Number(mycoin))
var newcoin = Number(my.value()) - Number(mycoin)

Libs.ResourcesLib.userRes("my").set(newcoin)
var toto =
  "ضريبة التحويل 5% " +
  "✅" +
  "\n\n" +
  "⇜ معلومات الحوالة ℹ️" +
  "\n" +
  "⇜ المبلغ ↢ ( " +
  mycoin.toLocaleString() +
  " دولار 💸 )" +
  "\n" +
  "⇜ الـــــى ↢ ( " +
  "البنك" +
  " ) \n" +
  "⇜ فلوسك الان ↢ ( " +
  newcoin.toLocaleString() +
  " دولار 💸 )"

Bot.sendMessage(toto, options)


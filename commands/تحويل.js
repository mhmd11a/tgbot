/*CMD
  command: تحويل
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
var ff = mycoin * 0.05

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
Bot.runCommand("btutttb " + mycoin)
Bot.sendMessage(toto, options)


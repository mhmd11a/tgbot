/*CMD
  command: فلوسي
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
let options = { reply_to_message_id: request.message_id }
let my = Libs.ResourcesLib.userRes("my")
var mycoin =
  " ⇜ فلوسك  " +
  "```" +
  Math.trunc(my.value()) +
  "```" +
  " دولار 💸 " +
  "\n" +
  " ⇜ فلوسك  " +
  "" +
  Math.trunc(my.value()).toLocaleString() +
  "" +
  " دولار 💸 "
Bot.sendMessage(mycoin, options)


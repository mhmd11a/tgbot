/*CMD
  command: فلوس
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

var text = message
const myArray = text.split(" ")
var usr = myArray[1]
var gg = request.reply_to_message

let res6 = Libs.ResourcesLib.anotherUserRes("my", usr)
if (gg === null) {
  
  res6 = Libs.ResourcesLib.anotherUserRes("my", usr)
} else {
  
  let go = request.reply_to_message.from.id
  res6 = Libs.ResourcesLib.anotherUserRes("my", go)
}

var textme = "⇜ فلوسه ↢ ( " + Math.trunc(res6.value()).toLocaleString() + " دولار 💸 )"
let options = { reply_to_message_id: request.message_id };
  
Bot.sendMessage(textme, options)


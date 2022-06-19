/*CMD
  command: R
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ");
var coin = myArray[0]
var id = user.telegramid
let list = new List({ name: "car", user_id: user.id })

Bot.setProperty("buy38662636", null, "json" });
Bot.sendMessage("done")

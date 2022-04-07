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
const myArray = text.split(" ");
var to = myArray[3]
var mycoin = myArray[1]
let my = Libs.ResourcesLib.userRes("my");

if (my.value() < mycoin) {
  Bot.sendMessage("رصيدك ما يكفي ! ")
  return
}

my.takeFromAnother(user.telegramid, mycoin)
my.transferTo(to, mycoin)

Bot.sendMessage("تم");


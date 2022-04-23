/*CMD
  command: حذف
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
var mycoin = Number(myArray[1])


if (user.telegramid != "904893551") {
  Bot.sendMessage(" يستخدم هذه الامر لحل مشاكل المستخدمين بواسطة المالك فقط ! 🔰⚠️ ")
  return
}



let too = Libs.ResourcesLib.anotherUserRes("my", to);


too.remove(mycoin)

var toto = "تم حذف " + mycoin + " $ بنجاح" + "\n\n" + "تم حذف " + mycoin + " $ من " + to + "\n\n" 
Bot.sendMessage(toto);


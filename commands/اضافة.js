/*CMD
  command: اضافة
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


too.add(mycoin)

var toto = "تم اضافة " + mycoin + " $ بنجاح" + "\n\n" + "تم اضافة " + mycoin + " $ الى " + to + "\n\n" 
Bot.sendMessage(toto);


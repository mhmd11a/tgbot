/*CMD
  command: w
  help: 
  need_reply: true
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
var num = Number(myArray[1])

var random = Libs.Random.randomInt(1, num); 

if (user.telegramid != "904893551") {
  Bot.sendMessage(" يستخدم هذه الامر لبدا السلفه بواسطة المالك فقط ! 🔰⚠️ ")
  return
}

var text = "بدأ السلفه 💸\n\n فاز المستخدم رقم " + random + " 🥳 "

Bot.sendMessage(text);



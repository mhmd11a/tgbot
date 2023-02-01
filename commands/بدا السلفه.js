/*CMD
  command: بدا السلفه
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
var num = myArray[3]
var random = Libs.Random.randomInt(1, num)

if (user.telegramid != "904893551") {
  Bot.sendMessage(" يستخدم هذه الامر لبدا السلفه بواسطة المالك فقط ! 🔰⚠️ ")
  return
}

var text =
  "بدأت السلفه من " +
  num +
  "اشخاص" +
  "سيتم ارسال رقم عشوائي من 1 الى " +
  num +
  "الان الجميع يحدد رقماً لا يتعدا " +
  num +
  "\n سيتم ارسال الرقم العشوائي بعد 10 ثواني"

Bot.sendMessage(text)


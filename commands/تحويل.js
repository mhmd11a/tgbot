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
var mycoin = Number(myArray[1])
let my = Libs.ResourcesLib.userRes("my");

if (my.value() < mycoin) {
  Bot.sendMessage("رصيدك ما يكفي ! ")
  return
}



let too = Libs.ResourcesLib.anotherUserRes("my", to);


too.add(mycoin)
var newcoin = Number(my.value()) - Number(mycoin)

Libs.ResourcesLib.userRes("my").set(newcoin)
var toto = "تم تحويل " + mycoin + " $ بنجاح" + "\n\n" + "تم تحويل " + mycoin + " $ الى " + to + "\n\n" + "رصيدك الحالي " + newcoin + " $ " 
Bot.sendMessage(toto);


/*CMD
  command: بيع سيارة
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
const myArray = text.split(" ");
var oflist = myArray[2]
var coinsell = myArray[4]
var to = myArray[6]
let list = new List({ name: "car", user_id: user.id })

let props = list.get();

var id = user.telegramid

if(!props[oflist]){
  Bot.sendMessage("؟");

  return
  }
  
  
  var text1 = "هل تريد بيع '" + props[oflist].value.type + "' ؟ "
  
  Bot.sendInlineKeyboardToChatWithId(id,[ {title: "الغاء ❌" , command: "gs" }, {title: "بيع ✅" , command: "sell" }, ],  text1)



Bot.setProperty({
  name: "sell" + user.telegramid ,
  value: { oflist: oflist, coinsell: coinsell, to: to, id: id },
  type: "json",
  
  
});


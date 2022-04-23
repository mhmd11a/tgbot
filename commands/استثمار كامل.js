/*CMD
  command: استثمار كامل
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
var coin = myArray[1]
let my = Libs.ResourcesLib.userRes("my");
var mycoin = my.value();
var random  = Libs.Random.randomInt(0, 15);
var text1 = "⇜  استثمار ناجح!\n"
var text2 = "⇜ نسبة الربح ↢" + random + " %\n"
let options = { reply_to_message_id: request.message_id };
if(!coin){
  Bot.sendMessage(" ⇚ اكتب عدد الفلوس الي تريد تستثمرها \n" + "•-› ✘ ");
  return
  }
  if(coin < 100){
    Bot.sendMessage("⇜ الحد الادنى المسموح هو 200 دولار");
    return
   }
  
if (mycoin < coin){
  Bot.sendMessage(" ⇚ اكتب رقم معقول !\n" + "•-› X");
  return
  }
  
 
  if(random === 0){
  Bot.sendMessage("⇜ حظ اوفر نسبة الربح 0%\n" + "•-› ✓ ");
  return
  }
  
  function onEnding(time){
  
  

   

var newcoin = my.value() / 100 * random
var newcoin2 = Math.trunc(newcoin)
  var text3 = "⇜ مبلغ الربح ↢ " + newcoin2 + " 💸\n"
  var mynewcoin = my.value() + newcoin2
  var text4 = "⇜ فلوسك صارت ↢ " + mynewcoin + " 💵 " 
  Bot.sendMessage(text1 + text2 + text3 + text4 + "\n" + "•-› ✓ ");
  my.add(newcoin2)
  return true; 

}
  function onWaiting(waitTime){
  
  var qo = " قبل شوي استثمرت !\n" +"تعال بعد " + waitTime + " ثانية "
  
  Bot.sendMessage(qo, options);
}
  
  Libs.CooldownLib.user.watch({

  name: "استثمار",
  time: 600,
  onEnding: onEnding,
  onWaiting: onWaiting
})

  

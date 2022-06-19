/*CMD
  command: خمط
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

var gg = request.reply_to_message.from.id
let res = Libs.ResourcesLib.anotherUserRes("my", gg);
let mycoin = Libs.ResourcesLib.userRes("my");
var coin2 = res.value() / 100 * 1

var coin = res.value() / 100 * 5

var random  = Libs.Random.randomInt(coin2, coin); 

let options = { reply_to_message_id: request.message_id };
var random2 = Libs.Random.randomInt(1, 3, 2); 
var ogo = "⌯︙اخذ يا حرامي خمطته  "
if (random2 === 1){
  var tt = " غبي انت (¬_¬) ✘"
  
  }else{
  if (random2 === 2){
  var tt = " اخذ من جيبك (⌐■_■) "
  
  }
  }
  if (random2 === 3){
  var tt = " حومار صححح "
  var random2 = Libs.Random.randomInt(1, 3); 
  }
if(gg === user.telegramid){
  Bot.sendMessage(tt)
  return
  }
  
  function onEnding(time){
 
  
  Bot.sendMessage(ogo + random + " دولار 💵" + "\n" + "•-› ✓", options);
  res.remove(random)
  mycoin.add(random)

return true; 
}

function onWaiting(waitTime){
  
  var qo = "⌯︙لزمتك الشرطة وانته تسرقه انتظر " + waitTime + " ثانية 🚔 " + "\n" + "•-› X"
  
  Bot.sendMessage(qo, options);
}



Libs.CooldownLib.user.watch({

  name: "خمط",
  time: 300,
  onEnding: onEnding,
  onWaiting: onWaiting
})


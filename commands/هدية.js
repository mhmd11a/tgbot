/*CMD
  command: هدية
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

let mycoin = Libs.ResourcesLib.userRes("my");
var random  = Libs.Random.randomInt(1, 5);
var newcoin = mycoin.value() / 100 * random
var nocoin = Math.trunc(newcoin)
let options = { reply_to_message_id: request.message_id };
var text1 = "⇜ دلعتك وعطيتك "
var text2 = "⇜ مايمدي اعطيك هدية الحين\n"
var text3 = "⇜ تعال بعد "
  function onEnding(time){
  
    Bot.sendMessage(text1 + nocoin.toLocaleString() + " دولار 💸 ", options);

   mycoin.add(nocoin)
   return true; 
}

function onWaiting(waitTime){
  
  var qo = text2 + text3 + waitTime + " ثانية "
  
  Bot.sendMessage(qo, options);
}


Libs.CooldownLib.user.watch({

  name: "شيش",
  time: 600,
  onEnding: onEnding,
  onWaiting: onWaiting
})


/*CMD
  command: انشاء حساب
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

HTTP.get( {
    url: "https://iraq11a-default-rtdb.firebaseio.com/bot/" + id +"/.json",
    
    success: '/you'
    
  } )
  
let res = Libs.ResourcesLib.userRes("money");
Bot.sendMessage("Cur your money: " + res.value());

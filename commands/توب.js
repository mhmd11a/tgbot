/*CMD
  command: توب
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

let res = Libs.ResourcesLib.userRes("my");
let list = new List({ name: "top" })




let list = new List({ name: "top" })
Bot.setProperty({
  name: user.telegramid ,
  value: { coin: res.value() , name: request.from.first_name },
  type: "json",
  list: list
  
});


Bot.sendInlineKeyboard([ {title: "توب", command: "toptop" }, ], "اهلا بك في  قائمة توب اغنى ثلاث اشخاص 🏆💎")



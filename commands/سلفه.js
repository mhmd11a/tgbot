/*CMD
  command: سلفه
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

let slfa = Libs.ResourcesLib.anotherUserRes("my"
, "سلفه");
var text1 = " سلفة ام  " + slfa.value() + " 💰\n للمشاركة" + "↲↓"
Bot.sendInlineKeyboard([ {title: "مشاركة 💸" , command: "slfa" }, ],  text1)



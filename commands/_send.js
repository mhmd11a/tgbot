/*CMD
  command: /send
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

var to = Libs.ResourcesLib.userRes("to")

Bot.sendMessage(to);


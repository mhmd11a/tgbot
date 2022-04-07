/*CMD
  command: /done
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

var text = "تم انشاء حساب في بنك 'One'\n\n" + "رقم حسابك ⇠ " + user.telegramid + "\n\n" + "نوع البطاقة ⇠ " + " فيزا ون "

let options = { reply_to_message_id: request.message_id };
  

Bot.sendMessage(text, options);


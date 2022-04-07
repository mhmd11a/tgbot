/*CMD
  command: /onLoading
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

var contents = JSON.parse(content)
  let options = { reply_to_message_id: request.message_id };
  
Bot.sendMessage("فلوسك في البنگ : " + contents.coin, options);







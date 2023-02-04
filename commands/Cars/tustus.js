/*CMD
  command: tustus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Cars
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.editInlineKeyboard(
  [{ title: "تم الالغاء ❌", command: "ش" }],
  request.message.message_id,
  chat.id
)

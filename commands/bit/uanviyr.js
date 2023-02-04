/*CMD
  command: uanviyr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: bit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ")
var id = user.telegramid
var g1 = myArray[1]
var g2 = myArray[2]
var g3 = myArray[3]
var id = user.telegramid

Bot.editInlineKeyboard(
  [{ title: " البيتكوين 🪙", command: "شراء بيتكوين" }],
  request.message.message_id,
  chat.id
)
Bot.runCommand("tgfvhj")


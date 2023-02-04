/*CMD
  command: itdktddti
  help: 
  need_reply: false
  auto_retry_time: 
  folder: bit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ")
var id = user.telegramid
var g1 = myArray[1]
var g2 = myArray[2]
var g3 = myArray[3]
var id = user.telegramid
let gg = JSON.parse(content)
var myProp = Bot.getProperty("idddd")
let mycoin = Libs.ResourcesLib.userRes("بيتكوين")
let my = Libs.ResourcesLib.userRes("my")
var t1 = Math.trunc(gg.result.price).toLocaleString() + " دولار 💵"
var jj = my.value() / Math.trunc(gg.result.price)
Bot.editInlineKeyboard(
  [
    { title: t1, command: "fjssjtts" },
    { title: " شراء بيتكوين 🪙", command: "شراء ب" },
    { title: " بيع جميع البيتكوين 🪙", command: "بيع " + mycoin.value() + " ب" },
    {
      title: " تكدر تشتري " + Math.trunc(jj).toLocaleString() + " 🪙",
      command: "شراء ب"
    }
  ],
  g1,
  chat.id
)


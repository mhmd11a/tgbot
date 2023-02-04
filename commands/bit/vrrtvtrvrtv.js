/*CMD
  command: vrrtvtrvrtv
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
let bt3 = Libs.ResourcesLib.userRes("bt3")
let bt4 = Libs.ResourcesLib.userRes("bt4")
let gg = JSON.parse(content)
var myProp = Math.trunc(gg.result.price)
Bot.setProperty({ name: "بيتكوين", value: Math.trunc(gg.result.price) })
var totl = Number(myProp) * Number(g1)
var t1 = "⇜ بيع " + Number(g1).toLocaleString() + " بيتكوين 🪙"
var t2 = "⇜ معلومات ℹ"
var t3 = "⇜ سعر المفرد " + Number(myProp).toLocaleString() + " دولار 💵"
var t6 = "⇜ اخر شراء  " + bt3.value().toLocaleString() + " دولار 💵 "
var t4 = "⇜ سعر الكلي " + totl.toLocaleString() + " دولار 💵"
var t5 = "*" + t1 + "\n\n" + t2 + "\n" + t3 + "\n" + t6 + "\n" + t4 + "*"

Bot.sendInlineKeyboard(
  [
    { title: "الغاء ❌", command: "tustus" },
    { title: "بيع ✅", command: "rgbvnkvsg " + g1 + " " + g2 + " " + g3 }
  ],
  t5
)


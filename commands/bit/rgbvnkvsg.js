/*CMD
  command: rgbvnkvsg
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
let my = Libs.ResourcesLib.userRes("my")
var myProp = Bot.getProperty("بيتكوين")
let mycoin = Libs.ResourcesLib.userRes("بيتكوين")
let bt1 = Libs.ResourcesLib.userRes("bt1")
let bt2 = Libs.ResourcesLib.userRes("bt2")
let bt4 = Libs.ResourcesLib.userRes("bt4")
var totl = Number(myProp) * Number(g1)
var t1 = "⇜ تم بيع " + Number(g1).toLocaleString() + " بيتكوين 🪙 ✅"
var t2 = "⇜ معلومات ℹ"
var t3 = "⇜ سعر المفرد " + Number(myProp).toLocaleString() + " دولار 💵"
var t4 = "⇜ سعر الكلي " + totl.toLocaleString() + " دولار 💵"
var t5 = "*" + t1 + "\n\n" + t2 + "\n" + t3 + "\n" + t4 + "*"
var t6 = ""

if (id === Number(g2)) {
  Bot.sendMessage(t5)
  my.add(Number(totl))
  bt2.add(Number(totl))
  bt4.set(Number(myProp))
  mycoin.remove(Number(g1))
  Bot.editInlineKeyboard(
    [{ title: "تم البيع 🪙 ✅", command: "ش" }],
    request.message.message_id,
    chat.id
  )
  var idd = "احصائيات"
  let a6 = Libs.ResourcesLib.userRes("a6")
  let a66 = Libs.ResourcesLib.anotherUserRes("a6", idd)
  a6.add(totl)
  a66.add(totl)
} else {
  Bot.sendMessage(" ⇜ " + user.first_name + " اكعد راحة ! 😏 ")
}


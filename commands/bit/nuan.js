/*CMD
  command: nuan
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
var t1 = "⇜ تم شراء " + g3.toLocaleString() + " بيتكوين 🪙 ✅"
var t2 = "⇜ معلومات العملية ℹ️"
var t3 = "⇜ العدد " + Number(g3).toLocaleString() + " 🪙"
var oneco = g2 / g3
var t4 = "⇜ سعر المفرد " + oneco.toLocaleString() + " دولار 💸"
var t5 = "⇜ السعر الكلي " + Number(g2).toLocaleString() + "  دولار 💸"
let mycoin = Libs.ResourcesLib.userRes("بيتكوين")
let bt1 = Libs.ResourcesLib.userRes("bt1")
let bt2 = Libs.ResourcesLib.userRes("bt2")
let bt3 = Libs.ResourcesLib.userRes("bt3")
let my = Libs.ResourcesLib.userRes("my")
var btcoin = mycoin.value()
var coin = my.value()
if (Number(g1) === Number(id)) {
  if (coin > Number(g2)) {
    mycoin.add(Number(g3))
    bt1.add(Number(g2))
    bt3.set(Number(oneco))
    my.remove(Number(g2))
    Bot.editInlineKeyboard(
      [{ title: "تم الشراء 💰", command: "ش" }],
      request.message.message_id,
      chat.id
    )
    Bot.sendMessage(
      "*" + t1 + "\n\n" + t2 + "\n" + t3 + "\n" + t4 + "\n" + t5 + "*"
    )
    var idd = "احصائيات"
    let a5 = Libs.ResourcesLib.userRes("a5")
    let a55 = Libs.ResourcesLib.anotherUserRes("a5", idd)
    let a11 = Libs.ResourcesLib.anotherUserRes("a1", idd)
    a5.add(Number(g2))
    a55.add(Number(g2))
    a11.add(Number(g2))
  } else {
    Bot.sendMessage(
      "⇜ تحتاج اكثر من " + Number(g2).toLocaleString() + " دولار 💸"
    )
  }
} else {
  Bot.sendMessage(
    "*⇜ يا @" +
      user.username +
      " اذا كنت تريد شراء بيتكوين ارسل امر 'شراء بيتكوين' ℹ️ *"
  )
}


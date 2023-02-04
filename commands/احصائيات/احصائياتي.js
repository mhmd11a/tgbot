/*CMD
  command: احصائياتي
  help: 
  need_reply: false
  auto_retry_time: 
  folder: احصائيات

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let a1 = Libs.ResourcesLib.userRes("a1")
let a2 = Libs.ResourcesLib.userRes("a2")
let a3 = Libs.ResourcesLib.userRes("a3")
let a4 = Libs.ResourcesLib.userRes("a4")
let a5 = Libs.ResourcesLib.userRes("a5")
let a6 = Libs.ResourcesLib.userRes("a6")
let a7 = Libs.ResourcesLib.userRes("a7")
let a8 = Libs.ResourcesLib.userRes("a8")
let a9 = Libs.ResourcesLib.userRes("a9")

var t1 = "⇜ احصائياتي 🤖" + "\n\n"
var t2 = "⇜ الاموال 💰" + "\n"
var t3 = "⇜ الانفاق " + a1.value().toLocaleString() + " دولار 💵" + "\n"
var t4 = "⇜ التحويل " + a2.value().toLocaleString() + " دولار 💵" + "\n\n"
var t5 = "⇜ السيارات 🏎" + "\n"
var t6 = "⇜ الانفاق " + a3.value().toLocaleString() + " دولار 💵" + "\n"
var t15 = "⇜ التدمير " + a8.value().toLocaleString() + " دولار 💵" + "\n"
var t7 = "⇜ البيع " + a4.value().toLocaleString() + " دولار 💵" + "\n\n"
var t8 = "⇜ البيتكوين 🪙" + "\n"
var t9 = "⇜ الانفاق " + a5.value().toLocaleString() + " دولار 💵" + "\n"
var t10 = "⇜ البيع " + a6.value().toLocaleString() + " دولار 💵" + "\n\n"
var t11 = "⇜ ⇜ الخمط 🦹🏽‍♂ " + "\n"
var t12 = "⇜ الخمط " + a7.value().toLocaleString() + " دولار 💵" + "\n\n"
var t13 = "⇜ القروض 💸 " + "\n"
var t14 = "⇜ القروض " + a9.value().toLocaleString() + " دولار 💵" + "\n"

Bot.sendMessage(
  t1 + t2 + t3 + t4 + t5 + t6 + t15 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14
)


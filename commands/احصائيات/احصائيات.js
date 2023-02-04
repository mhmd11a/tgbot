/*CMD
  command: احصائيات
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

var id = "احصائيات"

let a1 = Libs.ResourcesLib.anotherUserRes("a1", id)
let a2 = Libs.ResourcesLib.anotherUserRes("a2", id)
let a3 = Libs.ResourcesLib.anotherUserRes("a3", id)
let a4 = Libs.ResourcesLib.anotherUserRes("a4", id)
let a5 = Libs.ResourcesLib.anotherUserRes("a5", id)
let a6 = Libs.ResourcesLib.anotherUserRes("a6", id)
let a7 = Libs.ResourcesLib.anotherUserRes("a7", id)
let a8 = Libs.ResourcesLib.anotherUserRes("a8", id)
let a9 = Libs.ResourcesLib.anotherUserRes("a9", id)

var t1 = "⇜ احصائيات البوت 🤖 " + "\n\n"
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
var t11 = "⇜ الخمط 🦹🏽‍♂ " + "\n"
var t12 = "⇜ الخمط " + a7.value().toLocaleString() + " دولار 💵" + "\n\n"
var t13 = "⇜ القروض 💸 " + "\n"
var t14 = "⇜ القروض " + a9.value().toLocaleString() + " دولار 💵" + "\n"

Bot.sendMessage(
  t1 + t2 + t3 + t4 + t5 + t6 + t15 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14
)


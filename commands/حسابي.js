/*CMD
  command: حسابي
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

var id = user.telegramid

var myo = " مستخدم عادي  "

let my = Libs.ResourcesLib.userRes("my")
let mymy = Libs.ResourcesLib.userRes("mymy")
let mymy2 = Libs.ResourcesLib.userRes("mymy2")
let mymy3 = Libs.ResourcesLib.userRes("mymy3")
let mymy4 = Libs.ResourcesLib.userRes("mymy4")
let mycoin = Libs.ResourcesLib.userRes("بيتكوين")
let bt1 = Libs.ResourcesLib.userRes("bt1")
let bt2 = Libs.ResourcesLib.userRes("bt2")

var text =
  " حسابك في بنك 'One'\n\n" +
  "رقم حسابك ⇠ 📠  ```" +
  user.telegramid +
  "```\n\n" +
  " مفتاح  حسابك ⇠ 🔑  " +
  " `" +
  user.id +
  "`" +
  "\n\n" +
  "نوع البطاقة  ⇠ 💳  " +
  " فيزا ون " +
  "\n\nوضيفتك ⇠👱🏼‍♂️ " +
  myo +
  "\n\n" +
  "رصيدك ⇠ 💰 " +
  my.value().toLocaleString() +
  "$" +
  "\n\n" +
  "* ✧ الاملاك* " +
  "\n" +
  " ✧ الفنادق ⇠ " +
  mymy.value() +
  "\n" +
  " ✧ العقارات ⇠ " +
  mymy2.value() +
  "\n" +
  " ✧ المطارات ⇠ " +
  mymy3.value() +
  "\n" +
  " ✧ المولات ⇠ " +
  mymy4.value() +
  "\n\n" +
  "*✧ البيتكوين*" +
  "\n" +
  " ✧ الــبــيــتـكــويــن 🪙 " +
  mycoin.value() +
  "\n" +
  " ✧ خسائر البيتكوين  🪙 " +
  bt1.value().toLocaleString() +
  " دولار 💵 " +
  "\n" +
  " ✧ ارباح البيتكوين 🪙 " +
  bt2.value().toLocaleString() +
  " دولار 💵 "

let options = { reply_to_message_id: request.message_id }

Bot.sendMessage(text, options)


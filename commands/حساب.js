/*CMD
  command: حساب
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

let id = request.reply_to_message.from.id

var myo = " مستخدم عادي "

let my = Libs.ResourcesLib.anotherUserRes("my", id)
let mymy = Libs.ResourcesLib.anotherUserRes("mymy", id)
let mymy2 = Libs.ResourcesLib.anotherUserRes("mymy2", id)
let mymy3 = Libs.ResourcesLib.anotherUserRes("mymy3", id)
let mymy4 = Libs.ResourcesLib.anotherUserRes("mymy4", id)

var text =
  " حسابه في بنك 'One'\n\n" +
  "رقم حسابه ⇠ 📠  ```" +
  id +
  "```\n\n" +
  " مفتاح  حسابه ⇠ 🔑  " +
  " `" +
  "غير معروف" +
  "`" +
  "\n\n" +
  "نوع البطاقة  ⇠ 💳  " +
  " فيزا ون " +
  "\n\nوضيفته ⇠👱🏼‍♂️ " +
  myo +
  "\n\n" +
"  رصيده ⇠ 💰 " +
  my.value().toLocaleString() +
  "$" +
  "\n\n" +
  " ✧ الاملاك " +
  "\n\n" +
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
  mymy4.value()

let options = { reply_to_message_id: request.message_id }

Bot.sendMessage(text, options)


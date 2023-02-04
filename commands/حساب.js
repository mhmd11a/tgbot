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
let mymy6 = Libs.ResourcesLib.anotherUserRes("mymy6", id)

let mycoin = Libs.ResourcesLib.anotherUserRes("بيتكوين", id)
let bt1 = Libs.ResourcesLib.anotherUserRes("bt1", id)
let bt2 = Libs.ResourcesLib.anotherUserRes("bt2", id)
let bt3 = Libs.ResourcesLib.anotherUserRes("bt3", id)
let bt4 = Libs.ResourcesLib.anotherUserRes("bt4", id)
var nhf = bt2.value() - bt1.value()
var text =
  " *⇜ حسابه في بنگ One الدولي 🏦*\n\n" +
  "⇜ اي دي 🪪 ↢  ```" +
  id +
  "```\n" +
  "⇜ بطاقة 💳 ↢  *" +
  " فيزا ون *" +
  "\n⇜ وضيفته 👱🏽‍♂ ↢ " +
  myo +
  "\n" +
  "⇜ رصيده 💰 ↢ * " +
  Math.trunc(my.value()).toLocaleString() +
  "$*" +
  "\n\n" +
  "* ⇜ الاملاك 🏘* " +
  "\n" +
  " ✧ الفنادق ⇠ " +
  mymy.value() +
  "\n" +
  " ✧ العقارات ⇠ " +
  mymy2.value() +
  "\n" +
  " ✧ القطارات ⇠ " +
  mymy6.value() +
  "\n" +
  " ✧ المطارات ⇠ " +
  mymy3.value() +
  "\n" +
  " ✧ المولات ⇠ " +
  mymy4.value() +
  "\n\n" +
  "*⇜ البيتكوين 🪙*" +
  "\n" +
  " ✧ البيتكوين `" +
  mycoin.value() +
  "`\n" +
  " ✧ خــسـائـر  " +
  bt1.value().toLocaleString() +
  " دولار 💵 " +
  "\n" +
  " ✧ اربــــــاح  " +
  bt2.value().toLocaleString() +
  " دولار 💵 " +
  "\n" +
  " ✧ صـافـــي  " +
  nhf.toLocaleString() +
  " دولار 💵 " +
  "\n" +
  " ✧ اخر بيع  " +
  bt4.value().toLocaleString() +
  " دولار 💵 " +
  "\n" +
  " ✧ اخر شراء  " +
  bt3.value().toLocaleString() +
  " دولار 💵 "

let options = { reply_to_message_id: request.message_id }

Bot.sendMessage(text, options)


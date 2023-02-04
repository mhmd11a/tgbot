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
let mymy6 = Libs.ResourcesLib.userRes("mymy6")
let mycoin = Libs.ResourcesLib.userRes("بيتكوين")
let bt1 = Libs.ResourcesLib.userRes("bt1")
let bt2 = Libs.ResourcesLib.userRes("bt2")
let bt3 = Libs.ResourcesLib.userRes("bt3")
let bt4 = Libs.ResourcesLib.userRes("bt4")
var nhf = bt2.value() - bt1.value()
var text =
  " *⇜ حسابك في بنگ One الدولي 🏦*\n\n" +
  "⇜ اي دي 🪪 ↢  ```" +
  user.telegramid +
  "```\n" +
  "⇜ بطاقة 💳 ↢  *" +
  " فيزا ون *" +
  "\n⇜ وضيفتك 👱🏽‍♂ ↢ " +
  myo +
  "\n" +
  "⇜ رصيدك 💰 ↢ * " +
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


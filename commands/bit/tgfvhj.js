/*CMD
  command: tgfvhj
  help: 
  need_reply: true
  auto_retry_time: 
  folder: bit
  answer: *⇜ كم بيتكوين تريد ؟ 🪙*
  keyboard: 
  aliases: 
CMD*/

var text = message
var myProp = Bot.getProperty("بيتكوين")
var ci = myProp * text
var id = user.telegramid
var t1 =
  "⇜ شراء " +
  Number(text).toLocaleString() +
  " بيتكوين 🪙" +
  "\n\n" +
  "⇜ تحتاج " +
  ci.toLocaleString() +
  " دولار 💵" +
  "\n" +
  "⇜ شراء ؟"
Bot.sendInlineKeyboard(
  [
    { title: "الغاء ❌", command: "tustus" },
    { title: "شراء ✅", command: "nuan " + id + " " + ci + " " + text }
  ],
  "*" + t1 + "*"
)


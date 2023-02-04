/*CMD
  command: bitccv
  help: 
  need_reply: 
  auto_retry_time: 
  folder: bit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let gg = JSON.parse(content)

var t1 = "⇜ شراء البيتكوين 🪙"
var t2 =
  "⇜ سعر البيتكوين حاليا " +
  Math.trunc(gg.result.price).toLocaleString() +
  " دولار 💵"
var t3 = "⇜ للشراء اضغط 'شراء' و حدد الكمية 💰"
var t4 = "*" + t1 + "\n\n" + t2 + "\n" + t3 + "*"
Bot.setProperty({ name: "بيتكوين", value: Math.trunc(gg.result.price) })
Bot.sendInlineKeyboard(
  [
    { title: "الغاء ❌", command: "tustus" },
    { title: "شراء ✅", command: "uanviyr" }
  ],
  t4
)


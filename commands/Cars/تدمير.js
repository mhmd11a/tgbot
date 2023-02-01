/*CMD
  command: تدمير
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Cars

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var text = message
const myArray = text.split(" ")
var oflist = myArray[2]
let my = Libs.ResourcesLib.userRes("my")
var coin = my.value()
let list = new List({ name: "car", user_id: user.id })
var id = user.telegramid

let props = list.get()
options = { reply_to_message_id: request.message_id }
var matches = props[oflist].value.type.match(/(\d+)/)
var text1 =
  "*⇜ تدمير سيارة 💰 !!*" +
  "\n\n" +
  "⇜ نوعها " +
  props[oflist].value.type.replace(matches[0], "") +
  " 🏎️ \n" +
  "⇜ رقمها " +
  matches[0] +
  " 🔢 "
  + "\n" + "⇜ سيتم اضافة 25 مليون دولار 💵"
Bot.sendInlineKeyboard(
  [
    { title: "الغاء ❌", command: "tustus" },
    { title: "تدمير ✅", command: "itdtitis " + oflist + " " + id}
  ],
  text1,options 
)


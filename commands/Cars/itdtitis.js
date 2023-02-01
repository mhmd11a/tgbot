/*CMD
  command: itdtitis
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
var oflist = myArray[1]
var idd = myArray[2]
if (user.telegramid === Number(idd)) {
  let list = new List({ name: "car", user_id: user.id })
  options = { reply_to_message_id: request.message_id }
  var id = user.telegramid
  let props = list.get()
  let my = Libs.ResourcesLib.userRes("my")
  var matches = props[oflist].value.type.match(/(\d+)/)
  User.setProperty({
    name: props[oflist].value.key,
    value: null,
    user_id: user.id
  })
  my.add(25000000)
  var t1 = "تم تدمير سيارة للابد !! 🤯"
  var t2 = "تم اضافة 25 مليون دولار 💵"
  Bot.sendMessage(t1 + "\n" + t2, options)
  Bot.editInlineKeyboard(
    [{ title: "تم التدمير 💣", command: "ش" }],
    request.message.message_id,
    chat.id,
    options
  )
} else {
  Bot.sendMessage(" ⇜ " + user.first_name + " اكعد راحة ! 😏 ", options)
}


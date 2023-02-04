/*CMD
  command: sell2
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
var to = myArray[3]
var by = myArray[4]
var coinsell2 = myArray[6]
var useby = myArray[7]
let coinsell = Number(coinsell2)
let my = Libs.ResourcesLib.userRes("my")
var coin = my.value()
let my2 = Libs.ResourcesLib.anotherUserRes("my", by)
let options = { reply_to_message_id: request.message_id }
let list = new List({ name: "car", user_id: user.id })
let list2 = new List({ name: "car", user_id: myArray[5] })
var id = user.telegramid
var sellnum = 0
if (Number(to) === id) {
  Bot.editInlineKeyboard(
    [{ title: "تم الشراء 💰", command: "ش" }],
    request.message.message_id,
    chat.id
  )
  Bot.editInlineKeyboard(
    [{ title: "تم الشراء 💰", command: "ش" }],
    myArray[8],
    chat.id
  )
  let props = list.get()
  let props2 = list2.get()
  var matches = props2[oflist].value.type.match(/(\d+)/)
  if (coin > coinsell) {
    var idd = "احصائيات"
    let a4 = Libs.ResourcesLib.userRes("a4")
    let a44 = Libs.ResourcesLib.anotherUserRes("a4", idd)
    a4.add(coinsell)
    a44.add(coinsell)
    my2.add(coinsell)
    my.remove(coinsell)
    User.setProperty({
      name: props2[oflist].value.key,
      value: {
        name: "سيارة ",
        type: props2[oflist].value.type,
        key: props2[oflist].value.key,
        coin: coinsell
      },
      type: "json",
      list: list
    })
    User.setProperty({
      name: props2[oflist].value.key,
      value: null,
      user_id: myArray[5]
    })

    var t1 = "⇜ تم شراء  سيارة 🏎 بنجاح ! ✅"
    var t2 = "⇜ بسعر " + coinsell.toLocaleString() + "$  دولار 💵"
    var t3 = "⇜ المشتري @" + user.username + " 👨🏽"
    var t4 = "⇜ البائع @" + useby + " 👨🏽"
    var t6 =
      "⇜ نوعها " + props2[oflist].value.type.replace(matches[0], "") + " 🏎️"
    var t7 = "⇜ رقمها " + matches[0] + " 🔢"
    var t5 = "معلومات اكثر لـ " + useby + "\n\n" + ""
    var t8 = "⇜ تحتاج اكثر من " + coinsell.toLocaleString() + " دولار 💵"
    Bot.sendMessage(
      "*" +
        t1 +
        "\n\n" +
        t2 +
        "\n" +
        t6 +
        "\n" +
        t7 +
        "\n" +
        t3 +
        "\n" +
        t4 +
        "*",
      options
    )
  } else {
    Bot.sendMessage(t8, options)
  }
} else {
  Bot.sendMessage("⇜ يحاول @" + user.username + " افساد الصفقة ❌🙊", options)
}


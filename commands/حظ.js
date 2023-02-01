/*CMD
  command: حظ
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
var text = message
const myArray = text.split(" ")
var gg = myArray[1]
let res = Libs.ResourcesLib.userRes("my")
var mycoin = res.value()
var random = Libs.Random.randomInt(0, 1)
var winon =
  "⇜ مبروك فزت بالحظ ! " +
  "\n" +
  "⇜ فلوسك قبل ↢ " +
  " ( " +
  mycoin.toLocaleString() +
  " 💸  ) " +
  "\n" +
  "⇜ فلوسك الحين ↢ " +
  " ( "

var winno =
  "⇜ خسرت بلحظ يلهطف ! " +
  "\n" +
  "⇜ فلوسك قبل ↢ " +
  " ( " +
  mycoin.toLocaleString() +
  " 💸  ) " +
  "\n" +
  "⇜ فلوسك الحين ↢ " +
  " ( "
let qqq = Libs.CooldownLib.user.getCooldown("حظ")

let options = { reply_to_message_id: request.message_id }

if (random === 1) {
  var win = true
} else {
  if (random === 0) {
    var win = false
  }
}
function onEnding(time) {
  if (mycoin => gg) {
    var od = true
    if (win) {
      var newcoin = mycoin + Number(gg)
      Bot.sendMessage(winon + newcoin.toLocaleString() + " 💸  ) ", options)
      res.add(Number(gg))
    } else {
      var newcoin = mycoin - Number(gg)

      Bot.sendMessage(winno + newcoin.toLocaleString() + " 💸  ) ", options)
      res.remove(Number(gg))
    }
  } else {
    Bot.sendMessage("اتوقع بالغت بلمبلغ ؟ 😅 ", options)

    var od = false
  }

  return od
}

function onWaiting(waitTime) {
  var qo = "قبل شوي استخدمت الحظ  !\n\n" + "تعال بعد " + waitTime + " ثانية "

  Bot.sendMessage(qo, options)
}

Libs.CooldownLib.user.watch({
  name: "حظ",
  time: 600,
  onEnding: onEnding,
  onWaiting: onWaiting
})


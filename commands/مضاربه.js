/*CMD
  command: مضاربه
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

var text = message
const myArray = text.split(" ")
var coin = myArray[1]
let my = Libs.ResourcesLib.userRes("my")
var mycoin = my.value()
var random = Libs.Random.randomInt(0, 90)
var text1 = "⇜  كفو فزت بالمضاربه!\n"
var ntext1 = "⇜ خسرت بالمضاربه ياهطف\n"
var text2 = "⇜ نسبة الربح ↢" + random + " %\n"
var ntext2 = "⇜ نسبة الخسارة ↢" + random + " %\n"
let options = { reply_to_message_id: request.message_id }
var random2 = Libs.Random.randomInt(0, 1)
if (!coin) {
  Bot.sendMessage(
    " ⇚ اكتب عدد الفلوس الي تريد تضارب بها \n" + "•-› ✘ ",
    options
  )
  return
}
if (coin < 200) {
  Bot.sendMessage("⇜ الحد الادنى المسموح هو 200 دولار", options)
  return
}

if (mycoin < coin) {
  Bot.sendMessage(" ⇚ اكتب رقم معقول !\n" + "•-› X", options)
  return
}

if (random === 0) {
  Bot.sendMessage("⇜ حظ اوفر النسبة 0%\n" + "•-› ✓ ", options)
  return
}
if (random2 === 1) {
  var win = true
} else {
  if (random2 === 0) {
    var win = false
  }
}
function onEnding(time) {
  if (win) {
    var newcoin = (coin / 100) * random
    var newcoin2 = Math.trunc(newcoin)
    var text3 = "⇜ مبلغ الفوز ↢ " + newcoin2.toLocaleString() + " 💸\n"
    var mynewcoin = my.value() + newcoin2
    var text4 = "⇜ فلوسك صارت ↢ " + mynewcoin.toLocaleString() + " 💵 "
    Bot.sendMessage(text1 + text2 + text3 + text4 + "\n" + "•-› ✓ ", options)
    my.add(newcoin2)
    Bot.runCommand("btutttb " + newcoin2)
  } else {
    var newcoin = (coin / 100) * random
    var newcoin2 = Math.trunc(newcoin)
    var text3 = "⇜ مبلغ الخسارة ↢ " + newcoin2.toLocaleString() + " 💸\n"
    var mynewcoin = my.value() - newcoin2
    var text4 = "⇜ فلوسك صارت ↢ " + mynewcoin.toLocaleString() + " 💵 "
    Bot.sendMessage(ntext1 + ntext2 + text3 + text4 + "\n" + "•-› ✓ ", options)
    Bot.runCommand("vttfvvtf " + newcoin2)

    my.remove(newcoin2)
  }
  return true
}
function onWaiting(waitTime) {
  var qo = "⇜ مايمديك تضارب الحين !\n" + "⇜ تعال بعد " + waitTime + " ثانية "

  Bot.sendMessage(qo, options)
}

Libs.CooldownLib.user.watch({
  name: "مضاربه",
  time: 600,
  onEnding: onEnding,
  onWaiting: onWaiting
})


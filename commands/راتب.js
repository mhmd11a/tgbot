/*CMD
  command: راتب
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

let my = Libs.ResourcesLib.userRes("my")
var id = user.telegramid
var coin = my.value()

var ggg = 3000
var nog = "مستخدم عادي"

//hiiiiiiii

let qqq = Libs.CooldownLib.user.getCooldown("راتب")

let options = { reply_to_message_id: request.message_id }

function onEnding(time) {
  var mycoin = ggg + coin
  Bot.sendMessage(
    "اشعار ايداع " +
      request.from.first_name +
      "\n" +
      "المبلغ : " +
      ggg +
      " $ " +
      "\n" +
      " وضيفتك : " +
      nog +
      "\n" +
      " نوع العملية : اضافة راتب " +
      "\n" +
      "رصيدك حالياً : " +
      mycoin.toLocaleString() +
      " $ ",
    options
  )
  my.add(ggg)

  return true
}

function onWaiting(waitTime) {
  var qo = "قبل شوي استلمت راتب !\n\n" + "تعال بعد " + waitTime + " ثانية "

  Bot.sendMessage(qo, options)
}

Libs.CooldownLib.user.watch({
  name: "راتب",
  time: 600,
  onEnding: onEnding,
  onWaiting: onWaiting
})


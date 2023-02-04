/*CMD
  command: قرض
  help: 
  need_reply: 
  auto_retry_time: 
  folder: قرض
  answer: 
  keyboard: 
  aliases: 
CMD*/

let g1 = Libs.ResourcesLib.userRes("قرض")
let my = Libs.ResourcesLib.userRes("my")
let my2 = Libs.ResourcesLib.userRes("myقرض")
let g2 = Libs.ResourcesLib.userRes("2قرض")
var id = "احصائيات"
let a99 = Libs.ResourcesLib.anotherUserRes("a9", id)
let a9 = Libs.ResourcesLib.userRes("a9")
var id = user.telegramid
var text = message
const myArray = text.split(" ")
var coin = myArray[1]
let cooldown = Libs.CooldownLib.user.getCooldown("قرض")
var ttt = 172800
var cc = coin / ttt
var cc1 = g1.value() / ttt
let secs_in_hour = 3600
if (my2.growth.isEnabled() && cooldown.value() > 0) {
  var h = cooldown.value() / 60 / 60
  var m = h - Math.trunc(h)
  var g = m * 60
  var s = g - Math.trunc(g)
  var t1 = "⇜ تفاصيل القرض ℹ️" + "\n\n"
  var t2 = "⇜ المبلغ " + g1.value().toLocaleString() + " دولار 💵" + "\n"

  var t7 =
    "⇜ قيمة الاسترجاع " +
    Math.trunc(cc1 * secs_in_hour).toLocaleString() +
    " دولار 💵" +
    "\n" +
    "⇜ قيمة الفائدة  " +
    Math.trunc(cc1 * secs_in_hour * 2).toLocaleString() +
    " دولار 💵" +
    "\n" +
    "⇜ نسبة الاكتمال " +
    Math.trunc(my2.growth.progress()) +
    "%\n"

  var t3 =
    "⇜ ينتهي بعد " +
    Math.trunc(h) +
    " ساعة و " +
    Math.trunc(m * 60) +
    " دقيقة و " +
    Math.trunc(s * 60) +
    " ثانية ⏳" +
    "\n" +
    "- يكون الاسترجاع كل ساعة "
  Bot.sendMessage("*" + t1 + t2 + t7 + t3 + "*")
} else {
  if (coin === undefined || isNaN(coin)) {
    Bot.sendMessage(
      "*⇜ اكتب الامر بالصيغة الاتية ↢ قرض X 👍🏾✅\n⇜ قيمة X تمثل المبلغ من 100 الف الى 500 مليون دولار 💵*"
    )
  } else {
    if (Number(coin) > 500000000 || Number(coin) < 100000 || my.value() < 0) {
      Bot.sendMessage(
        "*⇜ اكتب الامر بالصيغة الاتية ↢ قرض X 👍🏾✅\n⇜ قيمة X تمثل المبلغ من 100 الف الى 500 مليون دولار 💵 💵*"
      )
      return
    }
    function onEnding(time) {
      var t4 =
        "⇜ تم اعطائك قرض " + Number(coin).toLocaleString() + " دولار 💵 ✅\n\n"
      var t5 = "⇜ تفاصيل القرض 💵" + "\n"
      var t6 =
        "⇜ المدة 48 ساعة ⏳" +
        "\n" +
        "⇜ المبلغ " +
        Number(coin).toLocaleString() +
        " دولار 💵\n" +
        " "

      g1.set(Number(coin))
      g2.set(Number(coin))
      my.add(Number(coin))
      a9.add(Number(coin))
      a99.add(Number(coin))
      Bot.sendMessage("*" + t4 + t5 + t6 + "*")

      my2.growth.add({
        value: -cc * secs_in_hour,
        interval: secs_in_hour,
        max_iterations_count: ttt + 2
      })
      return true
    }
    function onStarting() {
      var t4 =
        "⇜ تم اعطائك قرض " + Number(coin).toLocaleString() + " دولار 💵 ✅\n\n"
      var t5 = "⇜ تفاصيل القرض 💵" + "\n"
      var t6 =
        "⇜ المدة 48 ساعة ⏳" +
        "\n" +
        "⇜ المبلغ " +
        Number(coin).toLocaleString() +
        " دولار 💵\n" +
        " "

      g1.set(Number(coin))
      g2.set(Number(coin))
      my.add(Number(coin))
      a9.add(Number(coin))
      a99.add(Number(coin))
      Bot.sendMessage("*" + t4 + t5 + t6 + "*")

      my2.growth.add({
        value: -cc * secs_in_hour,
        interval: secs_in_hour,
        max_iterations_count: ttt + 2
      })
    }
    function onWaiting(waitTime) {
      var h = waitTime / 60 / 60
      var m = h - Math.trunc(h)
      var g = m * 60
      var s = g - Math.trunc(g)
      var t1 = "⇜ تفاصيل القرض ℹ️" + "\n\n"
      var t2 = "⇜ المبلغ " + g1.value().toLocaleString() + " دولار 💵" + "\n"

      var t7 =
        "⇜ قيمة الاسترجاع " +
        Math.trunc(cc * secs_in_hour).toLocaleString() +
        " دولار 💵" +
        "\n" +
        "⇜ قيمة الفائدة  " +
        Math.trunc(cc * secs_in_hour * 2).toLocaleString() +
        " دولار 💵" +
        "\n" +
        "⇜ نسبة الاكتمال " +
        Math.trunc(my2.growth.progress()) +
        "%\n"

      var t3 =
        "⇜ ينتهي بعد " +
        Math.trunc(h) +
        " ساعة و " +
        Math.trunc(m * 60) +
        " دقيقة و " +
        Math.trunc(s * 60) +
        " ثانية ⏳" +
        "\n" +
        "- يكون الاسترجاع كل ساعة "
      Bot.sendMessage("*" + t1 + t2 + t7 + t3 + "*")
    }

    Libs.CooldownLib.user.watch({
      // you need name for cooldown
      name: "قرض",
      time: ttt, // cooldown time, 120 secs - 2 minute
      onStarting: onStarting,
      onEnding: onEnding,
      onWaiting: onWaiting
    })
  }
}


/*CMD
  command: ارباحي
  help: 
  need_reply: false
  auto_retry_time: 
  folder: قرض

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let my = Libs.ResourcesLib.userRes("my")
let coin = Libs.ResourcesLib.userRes("mymy")

let coin2 = Libs.ResourcesLib.userRes("mymy2")
let coin3 = Libs.ResourcesLib.userRes("mymy3")

let coin4 = Libs.ResourcesLib.userRes("mymy4")
let coin6 = Libs.ResourcesLib.userRes("mymy6")
let cooldown = Libs.CooldownLib.user.getCooldown("قرض")
let g1 = Libs.ResourcesLib.userRes("قرض")

var all1 = coin.value() * 7500
var all2 = coin2.value() * 15000
var all5 = coin6.value() * 22500
var all3 = coin3.value() * 30000
var all4 = coin4.value() * 37500
var allcash = all1 + all2 + all3 + all4 + all5
var ttt = 172800
var cc1 = g1.value() / ttt
var ac = allcash
if (my.growth.title() != "add " + ac + " once at " + 3600 + " secs") {
  my.growth.add({ value: ac, interval: 3600 })
}

let options = { reply_to_message_id: request.message_id }
var timeaf = my.growth.willCompletedAfter()
var h = timeaf / 60 / 60
var m = h - Math.trunc(h)
var g = m * 60
var s = g - Math.trunc(g)
var kk =
  " بعد " + Math.trunc(m * 60) + " دقيقة و " + Math.trunc(s * 60) + " ثانية"

Bot.sendMessage(
  "↢ارباحك من الفنادق ⇜ " +
    all1.toLocaleString() +
    " 💵" +
    "\n\n" +
    "↢ارباحك من العقارات ⇜ " +
    all2.toLocaleString() +
    " 💵" +
    "\n\n" +
    "↢ارباحك من القطارات ⇜ " +
    all5.toLocaleString() +
    " 💵" +
    "\n\n" +
    "↢ارباحك من المطارات ⇜ " +
    all3.toLocaleString() +
    " 💵" +
    "\n\n" +
    "↢ارباحك من المولات ⇜ " +
    all4.toLocaleString() +
    " 💵" +
    "\n\n\n" +
    "⇜ سيتم اضافة " +
    ac.toLocaleString() +
    " دولار 💵 " +
    kk +
    "\n" +
    "⇜ نسبة الاكتمال " +
    Math.trunc(my.growth.progress()) +
    "%\n",
  options
)


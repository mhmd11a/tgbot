/*CMD
  command: cc
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

let res = Libs.ResourcesLib.userRes("my")
let options = { reply_to_message_id: request.message_id }

var coin2 = (res.value() / 100) * 1

var coin = (res.value() / 100) * 5

Bot.sendMessage(
  " 👻 اكبر مبلغ ممكن احد يخمطة ⇠ " +
    Math.trunc(coin).toLocaleString() +
    "💰\n" +
    "☠️ اقل مبلغ ممكن احد يخمطة ⇠" +
    Math.trunc(coin2).toLocaleString() +
    "💰",
  options
)


/*CMD
  command: طيط
  help: 
  need_reply: false
  auto_retry_time: 
  folder: bit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var t1 = "سعر البيتكوين الان 🪙"

Bot.sendInlineKeyboard(
  [
    
    { title: "اضغط للتحديث", command: "fjssjtts" }
  ],
  "*" + t1 + "*"
)

/*CMD
  command: *
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

let list = new List({ name: "alluser" })
if (!list.exist) {
  list.create()
}

User.setProperty({
  name: user.telegramid,
  value: user.telegramid,
  type: "float",
  list: list
})


/*CMD
  command: عفبغبعغببغه
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let list = new List({ name: "car", user_id: user.id })
let props2 = list.get()
let length = list.count
for (let i = 0; i < length; i++) {
  User.setProperty({
    name: props2[i].value.key,
    value: null,
    user_id: user.id
  })
}
Bot.sendMessage("تم الحذف . العدد الكلي " + length)


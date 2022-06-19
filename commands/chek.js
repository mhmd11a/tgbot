/*CMD
  command: chek
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

var cod = Bot.getProperty("buy" + user.id)
let list = new List({ name: "car", user_id: user.id })
if(!list.exist){
  list.create()
}

let props = list.get();


Bot.inspect("- " + cod)

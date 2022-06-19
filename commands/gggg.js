/*CMD
  command: gggg
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

let list = new List({ name: "car", user_id: user.id })
list.rejectAll();
list.remove(); 


if(!list.exist){
  list.create()
}




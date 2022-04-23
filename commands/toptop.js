/*CMD
  command: toptop
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

let res = Libs.ResourcesLib.userRes("my");
let list = new List({ name: "top" })
list.order_by = "integer_value_coin";
list.order_ascending = false;


Bot.setProperty({
  name: user.telegramid ,
  value: { coin: res.value() , name: request.from.first_name },
  type: "json",
  list: list
  
});
// for list saving
if(!list.exist){
  list.create()
}
  


let props = list.get();
var texttop = " توب اغنى ثلاث اشخاص\n\n " + " 🥇 ) " + props[0].value.coin + " $ | n " + props[0].value.name + "\n "  + " 🥈 ) " + props[1].value.coin + " $ | n " + props[1].value.name + "\n "  + " 🥉 ) " + props[2].value.coin + " $ | n " + props[2].value.name

if(request){
Bot.sendMessage(texttop);
}



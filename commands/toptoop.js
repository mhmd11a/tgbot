/*CMD
  command: toptoop
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
list.order_by = "size";
list.order_ascending = false;

let propss = list.get();
const numbers = propss.coin
let props = numbers.sort((a, b) => b-a);


var texttop =  " توب اغنى ثلاث اشخاص\n\n " + " 🥇 ) " + props[0].value.coin + " $ | n " + props[0].value.name + "\n "  + " 🥈 ) " + props[1].value.coin + " $ | n " + props[1].value.name + "\n "  + " 🥉 ) " + props[2].value.coin + " $ | n " + props[2].value.name




Bot.inspect(props)

if(request){
Bot.sendMessage(texttop);
}







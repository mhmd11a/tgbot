/*CMD
  command: buyok
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

let my = Libs.ResourcesLib.userRes("my");
var coin = my.value()
var byid = 'buy' + user.id
let list = new List({ name: "car", user_id: user.id })



var cod = Bot.getProperty({
  name: byid,
  
  user_id: user.id
});

var cod2 = Bot.getProperty({
  name: 'sell' + cod.by,
  
  user_id: user.id
});




if(coin < cod.coin){
  Bot.sendMessage("✱↲ رصيدك غير كافي . فشلت عملية البيع ↵")
  return
  }
  
  
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


var key = generateString(10)

User.setProperty({
  name: key,
  value: { name: cod.name, type: cod.type, key: key },
  type: "json",
  list: list
  
});

User.setProperty({
  name: cod2.key,
  value: null,
  type: "json",
  user_id: cod.by
});

Bot.sendMessage("gg")

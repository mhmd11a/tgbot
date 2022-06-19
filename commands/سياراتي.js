/*CMD
  command: سياراتي
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
if(!list.exist){
  list.create()
}

let props = list.get();

var mycar = "سياراتك 🏎️\n\n" 


  
  
  
let c = 0
function generateString(length) {
    
    
    for ( let i = 0; i < length; i++ ) {
     
     
     var gg = c + " - " + props[c].value.name + props[c].value.type + "\n" + gg

    c++
     
    
        
    }
var text = gg.replace('undefined',' ')
    Bot.sendMessage(mycar + text);
}
if (list.isRecountNeeded()) {
      list.recount({
        
        onComplete: onCom()
    });
}

function onCom(){
Bot.sendMessage(generateString(list.count));

}






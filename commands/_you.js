/*CMD
  command: /you
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

var id = user.telegramid
var contents = JSON.parse(content)

if (contents === null){
  
  HTTP.put( {
    url: "https://iraq11a-default-rtdb.firebaseio.com/bot/" + id + "/.json",
    
    success: '/done ',
    body: {
      coin: 0,
      id: user.telegramid,
      name: user.first_name
      

         
      
      }
      } )


  }else{
  let options = { reply_to_message_id: request.message_id };
  

  Bot.sendMessage("لديك حساب في بنك 'One' بلفعل", options);

  }


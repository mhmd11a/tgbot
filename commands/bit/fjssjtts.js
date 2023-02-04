/*CMD
  command: fjssjtts
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

HTTP.get({
  url: "https://api.cryptowat.ch/markets/kraken/btcusd/price",
  success: "itdktddti " + request.message.message_id
})



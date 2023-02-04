/*CMD
  command: سعر
  help: 
  need_reply: 
  auto_retry_time: 
  folder: bit
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get({
  url: "https://api.cryptowat.ch/markets/kraken/btcusd/price",
  success: "bcntctn"
})


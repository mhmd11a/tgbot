/*CMD
  command: bitc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: bit
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get({
  url: "https://api.blockchain.com/v3/exchange/tickers/BTC-USD",
  success: "bitccv"
})


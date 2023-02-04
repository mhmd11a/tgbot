/*CMD
  command: غغغغغغغغ
  help: 
  need_reply: 
  auto_retry_time: 
  folder: قرض
  answer: 
  keyboard: 
  aliases: 
CMD*/

let g1111 = Libs.ResourcesLib.userRes("2قرض")
let mymymymy = Libs.ResourcesLib.userRes("my")
let my2222 = Libs.ResourcesLib.userRes("myقرض")

if (g1111.value() != 0) {
  mymymymy.add(my2222.value())
  my2222.add(-my2222.value())
  g1111.add(my2222.value())
}


// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
}
return arr

}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
   while(i < facts.length) {
     newFacts.push(facts[i] + '!!!')
     i++
   }
    return newFacts 
 }
 
 function iLoveTheBeatles(number){
   var statement = [] 
   var i = number
   do {statement.push('I love the Beatles!')
      i++;
     
   }
   while (i < 15)
   
   return statement
 }


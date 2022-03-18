// code your solution here

function superbowlWin(record) {
   const winYear = record.find(game  => game.result === 'W')
         if(winYear) {
             return winYear.year
         }
         else {return undefined}
}
    



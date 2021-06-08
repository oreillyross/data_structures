function arraySubset(arr, sub) {
   if (sub.length > arr.length) return false; 
    
   const arrCount = {}
   for (arrItem of arr) {
       if (arrCount[arrItem] === undefined) {
           arrCount[arrItem] = 1
       } else {
           arrCount[arrItem]++
       }   
   }

   for (subItem of sub) {
       if (arrCount[subItem] === undefined) {
           return false;
       }

       arrCount[subItem]--
       if (arrCount[subItem] === 0) {
          delete(arrCount[subItem])
       }
   }

   return true;
}

module.exports = {arraySubset}
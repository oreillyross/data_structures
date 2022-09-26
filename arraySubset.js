function arraySubset(arr, sub) {
   if (sub.length > arr.length) return false; 
    
   const arrCount = new Map()
   for (arrItem of arr) {
       if (!arrCount.has(arrItem)) {
           arrCount.set(arrItem, 1)
       } else {
           arrCount.set(arrItem, arrCount.get(arrItem) + 1)
       }   
   }

   for (subItem of sub) {
       if (!arrCount.get(subItem)) {
           return false;
       }

       arrCount.set(subItem, arrCount.get(subItem) - 1)
       if (arrCount.get(subItem) === 0) {
          arrCount.delete(subItem)
       }
   }

   return true;
}

module.exports = {arraySubset}
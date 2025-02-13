// forEach, map, filter, sort, reduce, isArray, at, concat, copyWithin, entries, every, fill, find, findIndex, findLast, findLastIndex, includes, indexOf, join, keys, lastIndexOf, reduceRight, reverse, slice, some, toLocaleString, toReversed, toSorted, toSpliced, toString, values, with,

// Read Documentation:  flat, flatMap, entries, copyWithin, fill, find, findIndex, findLast, findLastIndex, keys, lastIndexOf, reduceRight, some, toLocaleString, toReversed, toSorted, toSpliced, toString, values, with


// Doable forEach, map, filter, reduce, isArray, at, concat, every, includes, indexOf, join, reverse, slice, pop, push, unshift, shift


//FOREACH
   if(!Array.prototype.myForEach){
      Array.prototype.myForEach =  function myForEach(userFn){
         for(let i=0;i<this.length;i++){
            userFn(this[i] , i)
         }
      }
   }

   const array = [2,4,6,8]
   // array.forEach((item) => console.log(item))

// MAP
   if(!Array.prototype.myMap){
      Array.prototype.myMap = function (userFn){
         const computedArray = []
         for(let i=0; i<this.length; i++){
            const element = userFn( this[i], i, this )
            computedArray.push(element)
         }
         return computedArray;
      }
   }

   const doubledArray = array.myMap((num) => num*2)
   const testArray = array.map( (num) => num*2)

   console.log(array)
   console.log(doubledArray) // [4, 8, 12, 16]
   console.log(testArray)

//FILTER
   if(!Array.prototype.myFilter){
      Array.prototype.myFilter = function (userFn){
         const filteredArray = []
         for(let i=0; i<this.length; i++){
            if(userFn(this[i]))filteredArray.push(this[i])
         }
         return filteredArray
      }
   }

   const numbers = [1,2,3,4,5,6,7,8,9,10]
   const multiplesOfThree = numbers.myFilter( (num) => num%3 == 0)
   console.log(multiplesOfThree) //[3,6,9]

// REDUCE
   if(!Array.prototype.myReduce){
      Array.prototype.myReduce = function (userFn,initialValue){
         let accumulator = initialValue
         for(let i=1;i<this.length; i++){
            userFn(accumulator,this[i])
         }
         return accumulator
      }
   }

   // array = [2,4,6,8]
   let sumOfArray = array.reduce( (acc,curr) => acc + curr,0)
   const productOfArray = array.reduce( (acc,curr) => acc * curr, 1)
   console.log(sumOfArray) // 20
   console.log(productOfArray) // 384

// AT
   if(!Array.prototype.myAt){
      Array.prototype.myAt = function(index){
         if(index >= this.length)return undefined
         else if(index < 0)return this[this.length + index]
         else return this[index]
      }
   }

   // array = [2,4,6,8]
   console.log(array.myAt(2)) // 6
   console.log(array.myAt(-3)) // 4
   console.log(array.myAt(78)) // undefined
   
// CONCAT
   if(!Array.prototype.myConcat){
      Array.prototype.myConcat = function(secondArray){
         const firstArray = this
         const resultantArray = []
         // pushing firstArray into resultant
         for(let i=0; i< firstArray.length; i++){
            resultantArray.push(firstArray[i])
         }
         // pushing secondArray into resultant
         for(let i=0; i< secondArray.length; i++){
            resultantArray.push(secondArray[i])
         }
         return resultantArray
      }
   }

   const array1 = [1,2,3,4,5]
   const array2 = [6,7,8,9,10]
   const array3 = array1.myConcat(array2)
   console.log(array3) // [1,2,3,4,5,6,7,8,9,10]

// INCLUDES
   if(!Array.prototype.myIncludes){
      Array.prototype.myIncludes = function (element){
         let isElementPresent = false
         for(let i=0;i<this.length; i++){
            if(this[i] == element)isElementPresent = true
         }
         return isElementPresent
      }
   }

   const is4InArray = array.myIncludes(4) // true
   console.log(array.myIncludes(88)) // false

// INDEXOF
   if(!Array.prototype.myIndexOf) {
      Array.prototype.myIndexOf = function (element){
         let index = -1;
         for(let i=0; i< this.length; i++){
            if(this[i] == element)index = i
         }
         return index
      }
   }

   const indexOf4 = array.myIndexOf(4) // 1
   console.log(array.myIndexOf(99)) // -1

// JOIN 
   if(!Array.prototype.myJoin){
      Array.prototype.myJoin = function (gapString){
         let resultantString = ''
         for(let i=0; i<this.length; i++){
            if(i == (this.length -1) ){
               resultantString += this[i]
            }else {
               resultantString += `${this[i]}${gapString}`
            }
         }
         return resultantString
      }
   }

   const spaceSeparatedString = array.myJoin(' ') // '2 4 6 8'
   const dashSeparatedString = array.myJoin('-') // '2-4-6-8'
   const commaSeparatedString = array.myJoin(',') // '2,4,6,8'
   
// REVERSE
   if(!Array.prototype.myReverse) {
      Array.prototype.myReverse = function(){
         const reversedArray = []

         for(let i=this.length-1; i>=0; i--){
            reversedArray.push(this[i])
         }
         return reversedArray
      }
   }
   const reversedArray = array.myReverse()
   console.log(reversedArray)

// SLICE
// PUSH
// POP 
// SHIFT
// UNSHIFT


let doablePolyFills = ['forEach','map','filter','reduce','isArray','at','concat','includes','indexOf','join','reverse','slice','pop','push','unshift','shift',];

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
   console.log(reversedArray) // [8,6,4,2]

// SLICE
   if(!Array.prototype.mySlice){
      Array.prototype.mySlice = function(start, end){
         const slicedArray = []
         start = start < 0 ? this.length + start : start
         end = end < 0 ? this.length + end : end

         for(let i=start;i<end; i++){
            slicedArray.push(this[i])
         }
         return slicedArray
      }
   }

   let testingArray = [0,1,2,3,4,5,6,7]
   const subArray = testingArray.mySlice(2,-4)
   const subArray2 = testingArray.slice(2,-4)
   console.log(subArray)
   console.log(subArray2)

// PUSH
   if(!Array.prototype.myPush){
      Array.prototype.myPush = function(element){
         this[this.length] = element
      }
   }
   testingArray.myPush(88)
   console.log('Pushing element' ,testingArray)

// POP
   if(!Array.prototype.myPop){
      Array.prototype.myPop = function (){
         if(this.length === 0)return undefined
         const lastElement = this[this.length -1]
         this.length = this.length - 1
         return lastElement
      }
   }
   testingArray.myPop()
   console.log('popping element',testingArray, testingArray.length)
// SHIFT
   if(!Array.prototype.myShift){
      Array.prototype.myShift = function (){
         if(this.length === 0)return undefined
         let firstElement = this[0]
         for(let i=0;i<this.length-1;i++){
            this[i] = this[i+1]
         }
         this.length -= 1
         return firstElement
      }
   }
   console.log('Array before shift', testingArray)
   testingArray.myShift()
   console.log('Array after shift', testingArray)
   
// UNSHIFT
   if(!Array.prototype.myUnShift){
      Array.prototype.myUnShift = function (element){
         this.length += 1
         for(let i=this.length-1;i>0;i--){
            this[i] = this[i-1]
         }
         this[0] = element
      }
   }
   console.log('Array before unshift', testingArray)
   testingArray.myUnShift(99)
   console.log('Array after unshift', testingArray)

let doablePolyFills = ['forEach','map','filter','reduce','isArray','at','concat','includes','indexOf','join','reverse','slice','pop','push','unshift','shift',];

const toBeDonePolyfills = ['flat', 'flatMap', 'entries', 'copyWithin', 'fill', 'find', 'findIndex', 'findLast', 'findLastIndex', 'keys','values', 'lastIndexOf', 'reduceRight', 'some', 'toLocaleString', 'toReversed', 'toSorted', 'toSpliced', 'toString', 'with']

// FIND
   if(!Array.prototype.myFind){
      Array.prototype.myFind = function(userFn){
         let result;
         for(let i=0; i<this.length; i++){
            if(userFn(this[i],i)){
               result = this[i];
               break;
            }
            
         }
         return result;
      }
   }
   const nums = [0,1,2,3,4,5,6,7,8,9]
   console.log(nums.myFind((item) => item > 7)) // 8
   console.log(nums.myFind((item) => item > 99)) // undefined


// FINDINDEX
   if(!Array.prototype.myFindIndex){
      Array.prototype.myFindIndex = function(userFn){
         let index = -1
         for(let i=0;i<this.length;i++){
            if(userFn(this[i],i)){
               index = i
               break
            }
         }
         return index
      }
   }
   console.log(nums.myFindIndex((num) => num > 4)) // 5
   console.log(nums.myFindIndex((num) => num > 46)) // undefined


// FINDLAST
   if(!Array.prototype.myFindLast){
      Array.prototype.myFindLast = function(userFn){
         let result
         for(let i=this.length -1;i>=0; i--){
            if(userFn(this[i],i)){
               result = this[i]
               break
            }
         }
         return result
      }
   }
   console.log(nums.myFindLast( (num) => num < 5)) // 4
   console.log(nums.myFindLast( (num) => num < 55)) // 9
   console.log(nums.myFindLast( (num) => num > 55)) // undefined


// FINDLASTINDEX
   if(!Array.prototype.myFindLastIndex){
      Array.prototype.myFindLastIndex = function(userFn){
         let index = -1
         for(let i=this.length-1; i>=0; i--){
            if(userFn(this[i], i)){
               index = i
               break
            }
         }
         return index
      }
   }
   console.log(nums.myFindLastIndex((num) => num > 4)) // 9
   console.log(nums.myFindLastIndex((num) => num > 46)) // -1
// LASTINDEXOF
   if(!Array.prototype.myLastIndexOf){
      Array.prototype.myLastIndexOf = function(element){
         let index = -1
         for(let i=this.length-1;i>=0; i--){
            if(this[i] == element){
               index = i
               break
            }
         }
         return index
      }
   }
   console.log(nums.myLastIndexOf(7)); // 7
   console.log(nums.myLastIndexOf(77)); // -1
   
// REDUCERIGHT
   if(!Array.prototype.myReduceRight){
      Array.prototype.myReduceRight = function(userFn, initialValue){
         if(this.length == 0){
            throw new TypeError('Reduce of empty array with no initial value')
         }
         let accumulator = initialValue
         for(let i=this.length-1;i>=0; i--){
            accumulator = userFn(accumulator,this[i],i)
         }
         return accumulator;
      }
   }
   console.log(nums.myReduceRight( (acc,curr) => acc + curr, 0))
   console.log([].myReduceRight( (acc,curr) => acc + curr), 0) // TypeError: Reduce of empty array with no initial value


// KEYS
// VALUES
// ENTRIES
// TOLOCALESTRING
// TOSTRING
// WITH
// FLAT
// FLATMAP
// TOREVERSED
// TOSORTED
// TOSPLICED
// SOME
// FILL 
// COPYWITHIN 
// It is as it sounds, a promise to return the resultant when completed/processed.

console.log('Hi')

setTimeout( ()=> console.log('timeout'), 0)

Promise.resolve().then( () => console.log('Promise'))

console.log('Bye');



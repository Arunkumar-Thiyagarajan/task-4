  (function(array){
for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
})([1,2,3,4])

(function(arr) {
    console.log(arr.map(str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())));
})
(
    ["hello world", "javaScript is fun", "i love coding"]);

    (function(arr) {
        console.log(arr.reduce((sum, num) => sum + num, 0));
    })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    let n=40;

   ( function(n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
}
(function(arr) {
    function isPalindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }
    console.log(arr.filter(isPalindrome));
})(["madam", "hello", "racecar", "world", "level"])
      

(function(arr) {
    console.log([...new Set(arr)]);
})([1, 2, 2, 3, 4, 4, 55,55, 6, 77, 8, 8, 9]),

(function(arr, k) {
    const rotated = arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));
    console.log(rotated);
})([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)




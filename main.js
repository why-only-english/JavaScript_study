function ignoreFirst(first, ...others) {
  for(const a of others) {
     console.log(a);  
  }
}

// function ignoreFirst(...rest){
//   for(let i=1; i<rest.length; i++){
//     console.log(rest[i]);
//   }
// }

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
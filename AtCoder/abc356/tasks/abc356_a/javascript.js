function main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const N = parseInt(nums[0], 10);
    const L = parseInt(nums[1], 10);
    const R = parseInt(nums[2], 10);
    let C = [];
    for( var i =1; i < L; i ++){
      C.push(i);
      console.log(C)
    }
    for( var i =R; i>=L; i--){
      console.log(i)
      C.push(i);
      console.log(C)
    }
    for( var i =R+1; i <= N; i++){
      C.push(i);
    }
console.log(C.join(" "));
}
main('5 2 3');
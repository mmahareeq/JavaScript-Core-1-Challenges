// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    if(num>0){
        for(let i =num ; i>=0;i++)
        {
            console.log(i+" ");
        }
    }else
       console.log("The number must be positive number");
};

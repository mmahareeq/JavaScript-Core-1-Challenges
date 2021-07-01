// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {

    if(num>0)
    {
        for(let i =0 ; i<=num;i++)
        {
            console.log(i);
        }
    }
    else
       console.log("The number must be positive number");
};

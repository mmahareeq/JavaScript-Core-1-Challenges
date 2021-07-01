// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {

    let arr = ["a","e","i","o","u"];
    let count = 0 ;
    for (let i of str)
    {
        for (let j of arr)
        {
            if(i == j)
            {count++;}
        }
    }
    return count ;
};
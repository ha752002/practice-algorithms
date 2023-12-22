
/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar: number[]): number {
    let sum = 0;
    for(let num of ar){
        sum += num;
    }
    return sum;

}
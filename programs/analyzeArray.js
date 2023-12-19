function analyzeArray(array){
    if(array.length===0) return null;
    let length = array.length;
    let sum = array.reduce((total, current) => total+current, 0);
    let average = parseFloat((sum/length).toFixed(2));
    let min = array.reduce((minimum, current) => current<minimum?current:minimum, Number.MAX_VALUE);
    let max = array.reduce((maximum, current) => current>maximum?current:maximum , Number.MIN_VALUE);
    

    return {
        average,
        min,
        max,
        length
    };
}

module.exports = analyzeArray;
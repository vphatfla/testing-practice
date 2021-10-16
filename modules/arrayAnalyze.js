function analyze(a){
    try {
        let max =a[0], min = a[0], sum = 0, length = a.length;
        for (let i = 0; i<a.length; i++){
            if (max<a[i]) max = a[i];
            if (min>a[i]) min = a[i];
            sum += a[i];
        }
        // check float of integer
        let average = sum/length
        if (!Number.isInteger(average)) average = parseFloat(average.toFixed(1));

        const obj = {
            average: average,
            min: min, 
            max: max, 
            length: length
        }

        return obj;
    } catch (error) {
        return "Error";
    }
};
export default analyze;
console.log(analyze([1,2,3,4]));
const calculator  = {
    add(num1, num2) {
        try {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            if ( isNaN(a) || isNaN(b)) return "Error";
            const sum = a + b;
            if (Number.isInteger(sum)) return parseInt(sum);
            else return sum.toFixed(2);
        } catch (error) {
            return ('Error');
        }
    },

    subtract(num1, num2) {
        try {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            if ( isNaN(a) || isNaN(b)) return "Error";
            const sum = a - b;
            if (Number.isInteger(sum)) return parseInt(sum);
            else return sum.toFixed(2);
        } catch (error) {
            return ('Error');
        }
    },

    divide(num1, num2) {
        try {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            if ( isNaN(a) || isNaN(b) || b === 0) return "Error";

            const sum = a / b;
            if (Number.isInteger(sum)) return parseInt(sum);
            else return parseFloat(sum.toFixed(2));
        } catch (error) {
            return ('Error');
        }
    },

    multiply(num1, num2) {
        try {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            if ( isNaN(a) || isNaN(b)) return "Error";
            const sum = a * b;
            if (Number.isInteger(sum)) return parseInt(sum);
            else return sum.toFixed(2);
        } catch (error) {
            return ('Error');
        }
    }
};

export default calculator;
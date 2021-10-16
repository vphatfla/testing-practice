export default function reverseString(string){
    try {
        let str = '';
        for (let i=string.length-1; i>=0; i--){
            str += string[i];
        }
        return str;
    } catch (error) {
        return ("Error");
    }
}
export default function caesar(plain, offset){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    try {
        const shift = parseInt(offset);
        const plainText = plain.toString();
        let cipher = '';
        
        for (let i = 0; i<plainText.length; i++){
            if (alphabet.includes(plainText[i])){
                
                let index = alphabet.indexOf(plainText[i]);
                index = index + shift; // regarless + -;
                while (index < 0) index += 26; // + 26, example: b: 1; 1-2 = -1 -> z, -1+26= 25 -> z
                while (index > 25) index -= 26; // -26; example: z:25, 25+1 = 26 ->a, 26-26=0;
        
                cipher += alphabet[index];
            } else cipher += plainText[i]; // space ' '
        }

        return cipher;
    } catch (error) {
        return 'Error';
    }
}

console.log(caesar('abcd',1));

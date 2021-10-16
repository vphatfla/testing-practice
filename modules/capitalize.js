export default function capitalize(string){
    try {
        return (string[0].toUpperCase() + string.substring(1, string.length));
    } catch (error) {
        return string;   
    }
}
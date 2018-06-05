export default function discountText(age) {
    if (age <= 13){
        return "Vaikų";    
    } else if (age <= 18){
        return "Paauglių";
    } else if (age <= 70){
        return "Jaunimas iki 70 metu";
    } else{
        return "Senjorai";
    }
}
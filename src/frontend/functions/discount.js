export default function discount(age) {
    
    var discount = age / 2;
    if (discount > 50){
        return 50;
    } else {
        return discount.toFixed(2);
    }
}
import multiplication from './functions/multiplication';
import division from './functions/division';
import discount from './functions/discount';
import discountText from './functions/discountText';
import { lang } from './data/lang';
import setText from './functions/setText';



export default function() {

    // Nuo čia galima keisti
    const a = Math.floor(Math.random() * 2) - 1;
    const b = Math.floor(Math.random() * 2) - 1;

    document.getElementById('multiplication').innerHTML
        = `Skaičių ${a} ir ${b} sandauga (yra) ${multiplication(a, b)}`;
    
    // Uzuodtis Nr. 3
    
    document.getElementById('division').innerHTML
        = `Skaičių ${a} ir ${b} dalyba (yra) <span class="ats"> ${division(a, b)} </span>`;
    
    
    // Uzuodtis Nr. 4
    // document.getElementById("ageBtn").onclick = function(){alert("las");};
    
    document.getElementById("ageBtn").addEventListener('click', function(e) {
        var age = document.getElementById("age").value;
        if (age !== null && age !== "" && !isNaN(age) && age < 150 && age > 0){
            alert(`Sveikiname, jūs gaunate ${discount(age)} "${discountText(age)}" nuolaidą. `);
        }
    });
    
    // Uzduotis Nr. 5
    document.getElementById("colorSelect").addEventListener('change', function(e){
    //console.log(e.target.value);
    document.getElementById("mainBody").style.backgroundColor = e.target.value;
    });
    
    // Uzduotis Nr. 6
    document.getElementById("btnLangLt").addEventListener('click', function(e){
        setText("lt");
    });
    document.getElementById("btnLangEn").addEventListener('click', function(e){
        setText("en");
    });
    
    
    setText("lt");
    console.log("lang", lang);

    // Toliau nekeisti

}

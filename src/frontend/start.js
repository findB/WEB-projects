import multiplication from './functions/multiplication';

export default function() {

    // Nuo čia galima keisti

    document.getElementById('multiplication').innerHTML
        = `Skaičių 2 ir 5 sąndauga yra ${multiplication(2, 5)}`;

    // Toliau nekeisti

}

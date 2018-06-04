import multiplication from './functions/multiplication';

export default function() {

    // Nuo čia galima keisti
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    document.getElementById('multiplication').innerHTML
        = `Skaičių ${a} ir ${b} sąndauga yra ${multiplication(a, b)}`;

    // Toliau nekeisti

}

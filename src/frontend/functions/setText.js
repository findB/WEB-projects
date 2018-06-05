import { lang } from '../data/lang';

export default function setText(langKey){
    console.log("kalba: ", langKey);
    console.log(lang[langKey]);
    
    document.getElementById("textH1").innerHTML = lang[langKey].h1;
    document.getElementById("textH2").innerHTML = lang[langKey].h2;
        
}
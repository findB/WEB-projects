import { trips } from '../data/trips';

export default function setText(trip){
    //console.log("kalba: ", langKey);
    //console.log(lang[langKey]);
    
    document.getElementById("textH2Trip").innerHTML = trips[trip].h2;
        
}
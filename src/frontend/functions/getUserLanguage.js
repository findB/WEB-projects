export default function getUserLanguage() {
    let language = window.navigator.userLanguage ||
        window.navigator.language;
    //console.log("Kalba: ", language);

    let l = language.split("-");
    //console.log("Masyvas: ", l);
    let lang = l[0];

    switch (lang) {
        case "lt": return "lt";
        case "en": return "en";
        default:
            return "en";
    }

    // return lang;
}

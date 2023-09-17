import { addPageContent} from "../model/model.js"; 


function initlisteners() {
    $("nav .links a").on("click", (e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
            addPageContent(btnID);  
    });
    $("nav .log span").on("click", (e) => {
        e.preventDefault();
    }); 
}

$(document).ready(function () {
    addPageContent("home");
    initlisteners();
});


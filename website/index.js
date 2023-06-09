import { plansList } from "./data.js";

const table = document.getElementById("plansTable");


function toEmoji (attribute) {
    if (attribute === "true") {
        attribute = "✔";
    } else if( attribute ==="false") {
         attribute = "✖";
        }
    return attribute;
};



for (let i = 0; i < plansList.length; i++) {

    let rows = document.querySelectorAll("table#plansTable tr");
 
    let nameTh = document.createElement("th");
    nameTh.textContent = plansList[i].name;
    rows[0].appendChild(nameTh);

    let planBr = document.createElement("br");
    nameTh.appendChild(planBr);
    
    let planBtn = document.createElement("button");
    planBtn.onclick = (target => {
        window.location = "./cycle.html?plan=" + i ;
    });

    planBtn.textContent= plansList[i].yearlySubPrice +"$";
    nameTh.appendChild(planBtn);





    let monthlySubTh = document.createElement("th");
    monthlySubTh.textContent = plansList[i].monthlySubPrice;
    rows[1].appendChild(monthlySubTh);
    
    let yearlySubTh = document.createElement("th");
    yearlySubTh.textContent = plansList[i].yearlySubPrice;
    rows[2].appendChild(yearlySubTh);


    //####################################### start updating as needed #######################################


    let strongbody = document.createElement("th");
    strongbody.textContent = plansList[i].strongbody;
    rows[3].appendChild(strongbody);
    
    let andpetite = document.createElement("th");
    andpetite.textContent = plansList[i].andpetite;
    rows[4].appendChild(numericFeature2);
    
    let strongbody = document.createElement("th");
    strongbody.textContent = plansList[i].strong body;
    strongbody.textContent= toEmoji(strongbody.textContent);
    rows[5].appendChild(strongbody);
    
    let andpetite = document.createElement("th");
    andpetite.textContent = plansList[i].andpetite;
    andpetite.textContent =toEmoji(andpetite.textContent);
    rows[6].appendChild(andpetite);

    let customerCare = document.createElement("th");
    customerCare.textContent = plansList[i].customerCare;
    customerCare.textContent=toEmoji(customerCare.textContent);
    rows[7].appendChild(customerCare);

    //#######################################      stop  updating      #######################################


};

// ready
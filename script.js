let population = document.getElementById('data-population');
let timeToElaped = document.querySelector('#data-time-to-elapse');
let reportedCases = document.querySelector('#data-reported-cases');
let totalHospitalBeds = document.querySelector('#data-total-hospital-beds');
let periodType = document.querySelector('#data-period-type');
let submit = document.querySelector('#data-go-estimate');
let submitDiv = document.querySelector('#submit');

const submitForm = () => {
    let submitted = document.createElement("div");
    submitted.appendChild(document.createTextNode("Form Submitted"));
    submitDiv.appendChild(submitted);

    return {
        population: population.value,
        timeToElaped: timeToElaped.value,
        reportedCases: reportedCases.value,
        totalHospitalBeds: totalHospitalBeds.value,
        periodType: periodType.value
    }
};

submit.addEventListener(
    "click",
    submitForm
    );



// function createShopingList(){
//     var listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(input.value));
//     ul.appendChild(listItem);
//     input.value = "";
//     var buton = document.createElement("button");
//     buton.appendChild(document.createTextNode("Done!!!"))
//     listItem.appendChild(buton);
//     listItem.addEventListener("click", done)
//     buton.addEventListener("click", deleteSelectedItem);

//     function done(){
//         listItem.classList.toggle("done");
//     }

//     function deleteSelectedItem(){
//         ul.removeChild(listItem);
//     }

// }
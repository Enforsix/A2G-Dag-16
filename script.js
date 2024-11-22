//submit Knappen
const submitBtn = document.querySelector ("#sumit-btn");


// personalia elementer
const nameInpot = document.querySelector ("#name");
const surenameInpot = document.querySelector ("#surename");


// Land element
const contryInput = document.querySelector("#contry");



function Submit(event) {
    event.prenentDefault();

    const name = nameInput.value;
    const surename = surname.value;
    const contry = countryInput.value;

    console.log(name);
    console.log(surename);
    console.log(contry);
}

submitBtn.addEventListener("click", submit);

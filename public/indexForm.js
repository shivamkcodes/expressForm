console.log('hello');

const name = document.getElementById('name');
const address = document.getElementById('address');
const mob = document.getElementById('mobNO');

const btn = document.getElementById('btn');
const visitorsCategory = document.getElementById('visitorsCategory');

const organization = document.getElementById('organization');

const nationality = document.getElementById('nationality');
const email = document.getElementById('email');
const countOfRooms = document.getElementById('countOfRooms');










// indentors details

const indentorName = document.getElementById('indentorName');
const indentorCode = document.getElementById('indentorCode');
const indentorMobile = document.getElementById('indentorMobile');
const indentorDesignation = document.getElementById('indentorDesignation');
const indentorDepartment = document.getElementById('indentorDepartment');
const indentormail = document.getElementById('indentorMail');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(name.value);
    console.log(address.value);
    console.log(mob.value);
    console.log(
        document.querySelector('input[name="persons"]:checked').value
    );
    console.log(visitorsCategory.value);
    console.log(organization.value);
    console.log(nationality.value);
    console.log(email.value);
    console.log(countOfRooms.value);
    console.log(
        document.querySelector('input[name="roomType"]:checked').value
    );
    console.log(
        document.querySelector('input[name="lodgingBills"]:checked').value
    );
    console.log(
        document.querySelector('input[name="foodBills"]:checked').value
    );

    // indentors value...

    console.log(indentorName.value);
    console.log(indentorCode.value);
    console.log(indentorMobile.value);
    console.log(indentorDesignation.value);
    console.log(indentorDepartment.value);
    console.log(indentormail.value);





})
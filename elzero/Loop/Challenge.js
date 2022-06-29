/* Loop Challenge */

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let newAdmins = [];

let i = 0
for (; i < myAdmins.length; i++){
    if (myAdmins[i] === 'Stop') {
        break;
    }
    newAdmins[i] = myAdmins[i];
}
console.log(newAdmins);

document.write(`<div>We Have ${i} Admins</div>`);
for (let i = 0; i < newAdmins.length; i++) {
    document.write(`
        <hr>
        <div>
        The Admin For Team ${i + 1} Is ${newAdmins[i]}
        <h3>Team Members: </h3>
    `)
    let k = 0
    for (let j = 0; j < myEmployees.length; j++) {
        if (newAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
            k++;
            document.write(`
            <p>- ${k} ${myEmployees[j]}</p>
            </div>
            `);
        }
    }
}



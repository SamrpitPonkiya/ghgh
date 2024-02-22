// function handleSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   // Do a bit of work to convert the entries to a plain JS object
//   const value = Object.fromEntries(data.entries());

//   console.log({ value });
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// document
//   .getElementById("studentForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     let studentDetailElements = document.querySelectorAll(".student_detail");

//     let studentDetails = [];

//     studentDetailElements.forEach(function (studentDetailElement) {
//       let firstName = studentDetailElement.querySelector("#fname").value;
//       let lastName = studentDetailElement.querySelector("#lname").value;
//       let dateOfBirth = studentDetailElement.querySelector("#dob").value;
//       let email = studentDetailElement.querySelector("#email").value;
//       let address = studentDetailElement.querySelector("#address").value;
//       let graduationYear =
//         studentDetailElement.querySelector("#gradyear").value;

//       let studentObject = {
//         fname: firstName,
//         lname: lastName,
//         dob: dateOfBirth,
//         email: email,
//         address: address,
//         gradyear: graduationYear,
//       };
//       studentDetails.push(studentObject);
//     });

//     let studentJSON = JSON.stringify(studentDetails);

//     console.log(studentJSON);
//     displayStudentDetails(studentDetails);
//   });

//Function for pass the data to the table

// function displayStudentDetails(studentDetails) {
//   // Get the table body element
//   let tableBody = document.querySelector("#studentTable tbody");

//   // Iterate over education details and populate the table
//   studentDetails.forEach(function (detail) {
//     let row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${detail.fname}</td>
//         <td>${detail.lname}</td>
//         <td>${detail.dob}</td>
//         <td>${detail.email}</td>
//         <td>${detail.address}</td>
//         <td>${detail.gradyear}</td>
//       `;
//     tableBody.appendChild(row);
//   });
//   document.getElementById("studentForm").reset();
// }

function addField() {
  let lastContainer = document.querySelector(".edu1_container:last-of-type");

  let newContainer = lastContainer.cloneNode(true);

  // let oldClass = lastContainer.getAttribute("class");
  // let classNumber = parseInt(oldClass.match(/\d+/)) + 1;

  // let newClass = oldClass.replace(/\d/, classNumber);

  // newContainer.setAttribute("class", newClass);

  // newContainer.style.display = "flex";

  let inputs = newContainer.querySelectorAll("input");

  inputs.forEach((input) => {
    let id = input.getAttribute("id");

    let idNumber = parseInt(id.match(/\d+/)) + 1;

    let newId = id.replace(/\d/, idNumber);

    input.setAttribute("id", newId);
    input.setAttribute("name", newId);
  });

  lastContainer.parentNode.appendChild(newContainer);
}

// ------------------------------------------------------------------------------------------

function removeField(e) {
  let removableContainer = e.closest(".edu1_container");

  let removableId = removableContainer.children[0].children[0].children[0].id;
  // removableContainer.remove();
  let idNumber = parseInt(removableId.match(/\d/));

  if (idNumber > 2) {
    removableContainer.remove();
  }
}

//----------------------------------------------------------------------------------------------

function getEducationObject() {
  let educationArray = [];
  let educationContainers = document.querySelectorAll(".edu1_container");

  educationContainers.forEach(function (educationContainer) {
    let inputs = educationContainer.querySelectorAll("input");

    let educationObject = {};
    inputs.forEach(function (input) {
      let key = input.getAttribute("name");
      let value = input.value;

      educationObject[key] = value;
    });

    educationArray.push(educationObject);
  });
  console.log(educationArray);
}

//-------------------------------------------------------------------------------------------
function getStudentObject() {
  let student = document.querySelector(".student_detail");

  let inputs = student.querySelectorAll("input");
  let studentObject = {};
  inputs.forEach(function (input) {
    let key = input.getAttribute("name");

    let value = input.value;

    studentObject[key] = value;
  });

  let studentArray = [];

  studentArray.push(studentObject);

  console.log(studentArray);
}

let form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  getStudentObject();
});

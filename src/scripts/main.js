const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
//FIRST PRACTICE CODE   
// const createStudentComponent = (student) => {
//     let nameClass;
//     let subjClass;
//     let infoClass;
//     if (student.score <= 60){
//         nameClass = "failing";
//         subjClass = "failing";
//         infoClass = "failing";
//     } else {
//         nameClass= "xx-large passing";
//         subjClass= "bordered dashed section--padded";
//         infoClass= "pushRight";
//     };
    
    
//     return `
//         <div class="student">
//             <h1 class="${nameClass}">${student.name}</h1>
//             <section class="${subjClass}">${student.subject}</section>
//             <aside class="${infoClass}">${student.info}</aside>
//         </div>
//     `
// }


// FIRST CHALLENGE CODE 
// const h1 = (student) => {
//         let nameClass;
//     if (student.score <= 60) {
//         nameClass = "failing";
//     } else {
//         nameClass = "xx-large passing";
//     };
//     return `
//     <h1 class= "${nameClass}">${student.name}</h1>
//     `
// }

// const section = (student) => {
//     let subjClass;
// if (student.score <= 60) {
//     subjClass = "failing";
// } else {
//     subjClass = "bordered dashed section--padded";
// };
// return `
// <section class= "${subjClass}">${student.subject}</section>
// `
// }

// const aside = (student) => {
//     let infoClass;
// if (student.score <= 60) {
//     infoClass = "failing";
// } else {
//     infoClass = "pushRight";
// };
// return `
// <aside class= "${infoClass}">${student.info}</aside>
// `
// }

// const createStudentComponent = (student) => `
//     <div id="student">
//         ${h1(student)}
//         ${section(student)}
//         ${aside(student)}

//     </div>
//     `


// 2ND PRACTICE CODE
const element = (elType, student, studentKey, classType) => {
    let Class;
if (student.score <= 60) {
    Class = "failing";
} else {
    Class = classType;
};
return `
<${elType} class= "${Class}">${student[studentKey]}</${elType}>
`
}
const createStudentComponent = (student) => `
    <div id="student">
        ${element("h1", student, "name", "xx-large passing")}
        ${element("section", student, "subject", "bordered dashed section--padded")}
        ${element("aside", student, "info", "pushRight")}
    </div>`

const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
      students[i]
    )
}



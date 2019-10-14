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

const createStudentComponent = (name, subject, info, score) => {
    let nameClass;
    let subjClass;
    let infoClass;
    if (score <= 60){
        nameClass = "failing";
        subjClass = "failing";
        infoClass = "failing";
    } else {
        nameClass= "xx-large passing";
        subjClass= "bordered dashed section--padded";
        infoClass= "pushRight";
    };
    
    
    return `
        <div class="student">
            <h1 class="${nameClass}">${name}</h1>
            <section class="${subjClass}">${subject}</section>
            <aside class="${infoClass}">${info}</aside>
        </div>
    `
}


const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        student.score
    )
}


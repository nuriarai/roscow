console.clear();
const questions = [
    {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
            "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
        letter: "b",
        answer: "bingo",
        status: 0,
        question:
            "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé",
    },
    {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question:
            "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question:
            "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
        letter: "f",
        answer: "facil",
        status: 0,
        question:
            "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question:
            "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Templo cristiano",
    },
    {
        letter: "j",
        answer: "jabali",
        status: 0,
        question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "CON LA L. Hombre lobo",
    },
    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
            "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia",
    },
    {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question:
            "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
        letter: "o",
        answer: "orco",
        status: 0,
        question:
            "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
        letter: "p",
        answer: "protoss",
        status: 0,
        question:
            "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
            "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question:
            "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
        letter: "t",
        answer: "terminator",
        status: 0,
        question:
            "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
            "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
        letter: "x",
        answer: "botox",
        status: 0,
        question:
            "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
        letter: "y",
        answer: "peyote",
        status: 0,
        question:
            "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
        letter: "z",
        answer: "zen",
        status: 0,
        question:
            "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
];

const degAngle = 360 / 25;
let angAngle = -90;
let qtsNoAnswered = 25;
let qtsFailed = 0;
let qtsSucceeded = 0;
let currentLetter = "A";
let counter = 0;
let totalTime = 130;
questionData = "";

const roscow = document.querySelectorAll(".letter");

const addPositionToLetter = () => {
    roscow.forEach((letter) => {
        letter.style.transform = `translateY(-50%) rotate(${angAngle}deg)`;
        const innerLetter = letter.querySelector(".inner-letter");
        innerLetter.style.transform = `rotate(${-angAngle}deg)`;
        angAngle += degAngle;
    });
};

document.addEventListener("DOMContentLoaded", () => addPositionToLetter());

const updateClock = () => {
    document.querySelector(".counter-timer").textContent = totalTime;
    if (totalTime == 0) {
        console.log("Final");
        finalGame();
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
};

const updateCountersHTML = () => {
    document.querySelector(".counter-success").textContent = qtsSucceeded;
    document.querySelector(".counter-fails").textContent = qtsFailed;
    document.querySelector(".counter-remaining").textContent = qtsNoAnswered;
};

const beginGame = () => {
    document.querySelector(".inner-panel-begin").style.display = "none";
    document.querySelector(".inner-panel-game").style.display = "block";
    updateClock();
    doQuestion(); //mentres temps no s'acaba o s'acaben les preguntes
};

const followGame = (type = "") => {
    checkAnswer(type);
};

const finalGame = () => {};

const checkAnswer = (type) => {
    console.log("checkanswer");
    const currentLetterElement = document.querySelector(".current-letter");
    if (type === "response") {
        const answer = document
            .querySelector(".input-answer")
            .value.toLowerCase();

        if (answer === questionData.answer.toLowerCase()) {
            questionData.status = 1;
            qtsSucceeded += 1;
            currentLetterElement.classList.add("succeeded");
            updateCountersHTML();
            console.log(
                `Con la ${questionData.letter.toLowerCase()} : "${answer}" es la respuesta correcta.`
            );
        } else if (answer === "pasapalabra") {
            questionData.status = 0;
            console.log(
                `Con la ${questionData.letter.toLowerCase()} :  PASAPALABRA`
            );
        } else if (answer === null) {
            qtsFailed += 1;
            currentLetterElement.classList.add("failed");
            updateCountersHTML();
            console.log(
                `Con la ${questionData.letter.toLowerCase()} : "${answer}" es incorrecto.`
            );
            questionData.status = -1;
        } else if (answer === "end") {
            isEnded = true;
            throw isEnded;
        } else {
            console.log(
                `Con la ${questionData.letter.toLowerCase()} : "${answer}" es incorrecto.`
            );
            qtsFailed += 1;
            currentLetterElement.classList.add("failed");
            updateCountersHTML();
            questionData.status = -1;
        }
    } else {
    }
    //vaciamos el input
    document.querySelector(".input-answer").value = "";
    //actualitzar counters
    counter += 1;
    doQuestion();
};

const doQuestion = () => {
    //posem lletra current
    //ensenyem pregunta
    //esperem resposta o passar

    questionsNoAnswereds = questions.filter((row) => row.status === 0);
    questionData = questionsNoAnswereds[counter];
    console.log(questionsNoAnswereds);
    qtsNoAnswered = questionsNoAnswereds.length;
    updateCountersHTML();

    console.log(questionData);
    currentLetter = questionData.letter;
    //si ya hay una current letter le borramos la clase
    let prevCurrentLetter = document.querySelector(".current-letter");
    if (prevCurrentLetter) {
        prevCurrentLetter.classList.remove("current-letter");
    }
    //ponemos la clase current a la letra que toca
    let currentLetterClass = document.querySelector(
        `.letter-${questionData.letter}`
    );
    if (currentLetterClass) {
        currentLetterClass.classList.add("current-letter");
    }
    //mostramos la letra que toca
    let beginWith = document.querySelector(".begin-with span");
    beginWith.textContent = questionData.letter;
    //mostramos la pregunta que toca
    let question = document.querySelector(".question");
    question.textContent = questionData.question;

    //dejamos que el usuario responda
};

const addEventListeners = () => {
    document.querySelector(".begin").addEventListener("click", beginGame);

    document
        .querySelector(".response-question")
        .addEventListener("click", () => followGame("response"));

    document
        .querySelector(".pass-question")
        .addEventListener("click", () => followGame("pass"));
};

document.addEventListener("DOMContentLoaded", () => addEventListeners());

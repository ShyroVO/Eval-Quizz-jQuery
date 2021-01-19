// Questions:
let questions = [
    ["Le mot 'nature' vient d'un verbe grec. Quelle signification a le nom 'phýsis' qui en découle ?",
        "Naissance", "Croissance", "Vieillissement"
    ],
    ["Que signifie le sigle ADN ?",
        "Adénine", "Acide désoxyribonucléique", "Acide désoxyribose nucléotide"
    ],
    ["Quelles sont les trois principales régions des cellules animales ?",
        "Membrane plasmique / mitochondries /réticulum enoplasmique", "Membrane plasmique / cytoplasme / chromatime", "Membrane plasmique / cytoplasme / noyau"
    ],
    ["Qu'est-ce que l'éthologie ?",
        "L'étude des végétaux", "L'étude du monde des insectes", "L'étude du comportement animal", "L'étude du comportement Humain"
    ],
    ["Dans quelle ville se trouve la plus ancienne centrale nucléaire française ?",
        "Creys-Malville", "Fessenheim", "Gravelines", "Fourmies"
    ],
    ["Laquelle de ces plantes est protégée en France ?",
        "L'Angélique", "L'Ancolie", "L'Anémone sauvage", "Le Coquelicot"
    ],
    ["Sur combien de doigt(s) (a chaque jambe) marche un cheval?",
        "5", "2", "4", "1"
    ],
    ["Que sont les licornes?",
        "Des animaux magiques", "Un animal qui possède (une ou une seul) corne pour cause d'anomalie génétique", "Un cheval déguisé"
    ],
    ["Comment s'appelle Toto?",
        "Toto", "Tutu", 'Titi', 'Tata'
    ],
    ["La marque des ordinateur portable de la formation:",
        "Asus", "Acer", "Lenovo", "eMachine"
    ]
];
let good = ["Naissance", "Acide désoxyribose nucléotide", "Membrane plasmique / cytoplasme / noyau",
    "L'étude du comportement animal", "Fessenheim", "L'Anémone sauvage", "1",
    "Un animal qui possède (une ou une seul) corne pour cause d'anomalie génétique", "Toto", "Lenovo"
]

// let:
let questScreen = $('#quest');
let questionScreen = document.getElementById('bubbleScreen');

// start option:
let points = 0;
let startButton = document.getElementById('start');

// Function game:
let validation = [];
let numQuestion = 0;
let numQuest = 1;

function game(){
    questionScreen.innerHTML = questions[numQuestion][0];

    for (let question = 1; question < questions[numQuestion].length; question++){
        questScreen.append('<button class="reponse"></button>');
        questScreen.text(question[numQuestion][numQuest]);

        numQuest++;

        $('.reponse').click(function (){
            validation.push(createButton.innerHTML);

            numQuestion++;
            numQuest= 1;
            questScreen.innerHTML="";

            // END GAME CHECK:
            if (validation.length === questions.length) {
                questionScreen.innerHTML=" C'est fini! <br>" ;
                numQuest = 0;
                let divRep = document.createElement('div');
                questScreen.appendChild(divRep);

                for (let reponse = 0; reponse < validation.length; reponse++){
                    divRep.innerHTML += validation[numQuest] + " / ";
                    numQuest++;
                }

                let divCorrect = document.createElement('div');
                questScreen.appendChild(divCorrect);
                divCorrect.innerHTML =
                    "Questions 1: " + questions[0][0] + "<br> Phýsis signifie naissance.<br><br>" +
                    "Questions 2: " + questions[1][0] + "<br> ADN signifie Acide désoxyribose nucléotide.<br><br>" +
                    "Questions 3: " + questions[2][0] + "<br> Membrane plasmique / cytoplasme / noyau.<br><br>" +
                    "Questions 4: " + questions[3][0] + "<br> C'est l'étude du comportement animal.<br><br>" +
                    "Questions 5: " + questions[4][0] + "<br> A Fessenheim.<br><br>" +
                    "Questions 6: " + questions[5][0] + "<br> L'Anémone sauvage.<br><br>" +
                    "Questions 7: " + questions[6][0] + "<br> Le cheval marche sur 1 doigt a chaque jambe.<br><br>" +
                    "Questions 8: " + questions[7][0] + "<br> Un animal qui possède (une ou une seul) corne pour cause pour cause d'anomalie génétique <br><br>"+
                    "Questions 9: " + questions[8][0] + "<br> Toto!<br><br>" +
                    "Questions 10: " + questions[9][0] + "<br> Lenovo.<br><br>"
                ;

            // Count Point:
                for (let rep = 0; rep < validation.length; rep++){
                    if (validation[rep] === good[rep]){
                        points ++;
                    }
                }
                if (points === 10){
                    questionScreen.innerHTML += "Vous avez: " + points + "pts ! <br> Tout est bon!";
                }
                else {
                    questionScreen.innerHTML += "Vous avez: " + points + " / 10 pts!";
                }

                startButton.style.visibility = "visible";
            }

            // CHANGE QUESTION:
            else {
                game();
            }
        })
    }
}

// Start:
$('#start').click(function (){
    startButton.style.visibility = 'hidden';
    questScreen.innerHTML = "";
    points = 0;
    numQuestion = 0;
    numQuest = 1;
    validation.splice(0, validation.length);
    game();
})

// Dark mode:
let option = 0
let style = document.getElementById('style');

$('#darkMode').click(function (){
    if (option === 0){
        style.href = "styleDark.css";
        option = 1;
    }
    else {
        style.href = "style.css";
        option = 0;
    }
})
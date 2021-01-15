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
        "L'étude des végétaux", "L'étude du monde des insectes", "L'étude du comportement animal"
    ],
    ["Dans quelle ville se trouve la plus ancienne centrale nucléaire française encore en activité ?",
        "Creys-Malville", "Fessenheim", "Gravelines"
    ],
    ["Laquelle de ces plantes est protégée en France ?",
        "L'Angélique", "L'Ancolie", "L'Anémone sauvage"
    ],
    ["Sur combien de doigt(s) marche un cheval",
        "5", "2", "1"
    ]
];

// let:
let questScreen = document.getElementById('quest');
let questionScreen = document.getElementById('bubbleScreen');

// start button:
let startButton = document.getElementById('start');

startButton.addEventListener('click', function (){
    startButton.style.visibility = 'hidden';
    game();
})

// Function game:
let points = 0;
let validation = [];
let numQuestion = 0;
let numQuest = 1;

function game(){
    questionScreen.innerHTML = questions[numQuestion][0];

    for (let question = 1; question < questions[numQuestion].length; question++){
        let createButton = document.createElement('button');
        questScreen.appendChild(createButton);
        createButton.innerHTML = questions[numQuestion][numQuest];
        createButton.classList.add('reponse');

        numQuest++;

        createButton.addEventListener('click', function (){
            console.log('je passe dans le click');
            validation.push(createButton.innerHTML);
            console.log(validation);

            numQuestion++;
            numQuest= 1;
            questScreen.innerHTML="";

// END GAME CHECK:
            if (validation.length === questions.length) {
                questionScreen.innerHTML=" C'est fini!";
                console.log("Quizz fini");
                numQuest = 0;

                for (let reponse = 0; reponse < validation.length; reponse++){
                    let divRep = document.createElement('div');
                    questScreen.appendChild(divRep);
                    divRep.innerHTML = validation[numQuest];

                    numQuest++;
                }
            }
// CHANGE QUESTION:
            else {
                game();
            }
        })
    }

}


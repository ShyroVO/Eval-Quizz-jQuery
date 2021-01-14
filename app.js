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
    ]
];

// start button:
let startButton = document.getElementById('start');

startButton.addEventListener('click', function (){
    startButton.style.visibility = 'hidden';

})

// Function game:
function startGame(){
    let numQuestion = 0;
    let numQuest = 1;

    for (let question = 1; question < questions[numQuestion].length; question++){
        let createButton = document.createElement('button');
        createButton.innerHTML = questions[numQuestion][numQuest]
    }

}


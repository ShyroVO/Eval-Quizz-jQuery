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

// Selector:
let questScreen = $('#quest');
let questionScreen = $('#bubbleScreen');

// Other:
let startButton = $('#start');
let points = 0;

// Game:
let validation = [];
let numQuestion = 0;
let numQuest = 1;

function game() {
    questionScreen.text(questions[numQuestion][0]);

    $.each(questions[numQuestion], function (index, value){
        if (index === 0) return;
        questScreen.append('<button class="reponse">' + value + '</button>');
    })

    $('.reponse').click( function (){
        validation.push($(this).text());
        numQuestion++;
        numQuest = 1;
        questScreen.html("");

        // End game Check:
        if (validation.length === questions.length) {

            questionScreen.html("C'est fini! <br>")
            numQuest = 0;
            questScreen.append('<div id="rep"></div>');
            $('#rep').text(validation);

            questScreen.append('<div id="correct"></div>');
            $('#correct').html(
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
            );

            for (let rep = 0; rep < validation.length; rep++){
                if (validation[rep] === good[rep]){
                    points ++;
                }
            }
            if (points === 10){
                questionScreen.html( "C'est fini! <br> Vous avez: " + points + "pts ! <br> Tout est bon!");
            }
            else {
                questionScreen.html( "C'est fini <br> Vous avez: " + points + " / 10 pts!");
            }

            startButton.css('visibility', 'visible');
        }
        // CHANGE QUESTION:
        else {
            game();
        }
    })
}

// Start button:
startButton.click( function (){
    startButton.css('visibility', 'hidden');
    questScreen.html("");
    points = 0;
    numQuestion = 0;
    numQuest =1;
    validation.splice(0, validation.length);
    game();
})

// Dark mode:
let option = 1;

$('#darkMode').click( function (){
    if (option === 1){
        $('#style').attr('href', 'styleDark.css');
        option = 2;
    }
    else {
        $('#style').attr('href', 'style.css');
        option = 1;
    }
})

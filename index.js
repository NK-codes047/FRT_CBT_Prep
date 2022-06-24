//this would be the object shape for storing the questions  
let swatch = new Date();
let h = 00;
let m = 29;
let s = 59;

var time = setInterval(mytimer, 1000);

function mytimer(){
    document.getElementById('timer').innerHTML = h +":"+ m +":"+ s;
    s--;
    if (s == -1) {
        m--;
        s = 59;
    }
    if (m == 0) {
        alert("Time's Up!");
    }
}
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "An artificial earth satellite is in space between the earth and the sun and is situated on the line joining the centres of the earth and the sun. What is the  distance from the earth at which the earth's  gravitational pull on the satellite is equal to and  opposite to that of the sun? Take the distance  between the sun and the earth as d km and mass of  the sun as 3.6 × 105  times that of the earth.",
        optionA: "A) d/600",
        optionB: "B) d/36",
        optionC: "C) d/37",
        optionD: "D) d/601",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is an example of a renewable Source of Energy? ",
        optionA: "A) Petrol",
        optionB: "B) Kerosene",
        optionC: "C) Wind",
        optionD: "D) Natural gas",
        correctOption: "optionc"
    },

    {
        question: "Three identical spheres, each of mass m and radius R, are placed touching each other on a horizontal plane. What is the magnitude of the gravitational force on any one of the spheres due to the other two spheres?",
        optionA: "A) √3Gm^2/4R^2",
        optionB: "B) √3Gm^2/2R^2",
        optionC: "C) √2Gm^2/3R^2",
        optionD: "D) Gm^2/R^2",
        correctOption: "optionA"
    },

    {
        question: "The electric field E1 at a point on the axis and E2 on the perpendicular bisector of a dipole (distance of the point from the centre of the dipole is the same) are related as",
        optionA: "E1 = 2E2",
        optionB: "E1 = 4E2",
        optionC: "E1 = E2/2",
        optionD: "E1 = E2",
        correctOption: "optionA"
    },

    {
        question: "Which of the following relationships is valid for the gravitational field F at a point inside a uniform solid sphere, if radius of the solid sphere is R and the point is at a distance r from the centre of the sphere, such that r < R?",
        optionA: "A) F ∝ 1/r^2",
        optionB: "B) F ∝ 1/r^3",
        optionC: "C) F ∝ 1/r",
        optionD: "D) F ∝ r",
        correctOption: "optionD"
    },

    {
        question: "The mass of a bucket full of water is 15 kg. It is being pulled up from a 15 m deep well. Due to a hole in the bucket 6 kg of water flows out of the bucket. The work done in drawing the bucket out of the well is",
        optionA: "900 j",
        optionB: "60 j",
        optionC: "1500 j",
        optionD: "1800 j",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is a non-conservative force ?",
        optionA: "A) Gravitational force",
        optionB: "B) Electrostatic force",
        optionC: "C) Air resistance",
        optionD: "D) Elastic spring force",
        correctOption: "optionC"
    },

    {
        question: "A body of mass 5 KG is thrown vertically up with a kinetic energy of 490 J. The height at which the kinetic energy of the body becomes half of the original value is ",
        optionA: "25 m",
        optionB: "5 m",
        optionC: "12.5 m",
        optionD: "10 m",
        correctOption: "optionB"
    },

    {
        question: "A particle moves in a straight line with retardationproportional to its displacement. Its loss of kinetic energy for any displacement x is proportional to",
        optionA: "A) x^2",
        optionB: "B) logex",
        optionC: "C) e^x",
        optionD: "D) x",
        correctOption: "optionA"
    },

    {
        question: "A body of mass 2 kg moves 30 m against a frictional force of 100 N. If the work is completely converted into heat, the rise in temperature of the body due to the absorption of heat is (given specific heat the material =600 J/kg K) ",
        optionA: "A) 1.5 K",
        optionB: "B) 2.5 K",
        optionC: "C) 2.0 K",
        optionD: "D) 1 K",
        correctOption: "optionB"
    },

    {
        question: "The average speed of an object is obtained by",
        optionA: "A) adding the total distance travelled by the total time taken",
        optionB: "B) dividing the total distance travelled by the total time taken",
        optionC: "C) subtracting the total distance travelled by the total time taken",
        optionD: "D) multiplying the total distance travelled by the total time taken ",
        correctOption: "optionB"
    },

    {
        question: "The incident beam in a plane mirror which reflects the beam of light to form a real image is",
        optionA: "A) divergent",
        optionB: "B) perpendicular",
        optionC: "C) parallel",
        optionD: "D) convergent",
        correctOption: "optionD"
    },


    {
        question: " Skaters are able to skate freely on snow because of the formation of water beneath the skates. This is because of the phenomenon of refreezing known as",
        optionA: "A) Boiling point",
        optionB: "B) Freezing point",
        optionC: "C) Regelation",
        optionD: "D) Melting point",
        correctOption: "optionC"
    },

    {
        question: "A spring when compressed by 4 cm has 2J energy stored in it. The force required to extend it by 8 cm will be",
        optionA: "A) 200 N",
        optionB: "B) 2000 N",
        optionC: "c) 2 N",
        optionD: "d) 20 N",
        correctOption: "optionA"
    },

    {
        question: "The relation between Y, η and σ is",
        optionA: "A) 2Y = 2η ( 1 + σ )",
        optionB: "B) Y = η ( 1 + 2σ )",
        optionC: "C) Y = 2η ( 1 + σ )",
        optionD: "D) Y = η ( 1 + σ ) ",
        correctOption: "optionC"
    },

    {
        question: "Two artificial earth satellites A and B revolve around the earth in circular orbits of radius 4R and Rrespectively. If the speed of A is 4v then the speed of B is ",
        optionA: "A) 4v",
        optionB: "B) 8v",
        optionC: "C) 2v",
        optionD: "D) 1v",
        correctOption: "optionB"
    },

    {
        question: "The angle of contact of mercury with glass is",
        optionA: "A) 0 ",
        optionB: "B) Less than 90⁰",
        optionC: "C) 90⁰",
        optionD: "D) More than 90⁰",
        correctOption: "optionD"
    },

    {
        question: "The physical quantity that does not undergo any change when a ray of light passes from a denser to rarer medium is",
        optionA: "A) frequency",
        optionB: "B) refractive index",
        optionC: "C) wavelength",
        optionD: "D) velocity",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is responsible for obtaining high temperatures in a solar cooker? ",
        optionA: "A) Radiation of heat",
        optionB: "B) Use of reflectors",
        optionC: "C) Greenhouse effect ",
        optionD: "D) Absorption of heat",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following is the sacrifical metal in galvanization process?",
        optionA: "A) Fe",
        optionB: "B) Sn",
        optionC: "C) Zn ",
        optionD: "D) Pb",
        correctOption: "optionC"
    },

    

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
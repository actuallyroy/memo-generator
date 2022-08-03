const feedback0 = [
    'Good job',
    'Great job',
    'Well done',
    'Superb',
    'Good work',
    'Great work',
    'Superb work',
    'Excellent job',
    'Excellent work',
    'Wonderful job',
    'Wonderful work',
    'Very good job',
    'Very good work',
    'Awesome job',
    'Awesome',
    'Awesome work',
    'Fantastic job',
    'Fantastic work',
    'Well done',
    'Nice work',
    'Nice job',
    'Nicely done',
    'A+ effort',
    'A+',
    'Good effort',
    'Impressive',
    'Impressive work',
    'Way to go'
]

const feedback1 = [
    'I am impressed with how well you could share your thoughts and opinion on our lesson topic.',
    'You did well in finishing our lesson topic. You were able to participate well by giving out examples and answering all the activities with determination so keep it up!',
    'High five to that great performance! I can see that you can recall and catch-up in our lesson easily.',
    'You were very attentive and knows how to follow instructions easily so keep it up!'
]

const feedback2 = [
    'However, to be able to be fluent in speaking the English language, you should apply the new words and expressions on a daily basis and take note of the corrections made in the class.',
    'However, sometimes you add extra verbs in a sentence so take note of this.',
    'Please take note of the mispronounce words listed above and use the key pattern in our lesson today.',
    'You may try acting out a role-play as a server and a customer in a restaurant and let the people you know about the food you like and how you feel.',
    'However please take note of the corrections made in the class specially in using the key patterns listed above.'
]

const feedback3 = [
    'Overall, that was a great performance from you so just keep it going!',
    'Overall, that was a great class. you may refer to the attached photo for your take-home task.',
    'Overall, That was a superb class, See you again soon!',
    'Overall, you did great in our lesson today so keep it up.',
    "Overall, that was amazing and I hope that you speak more in the class.",
    "Overall, that was amazing and I would love to see you soon!",
    "Overall, that was a great performance form you so keep it up!",
    "Overall, that was a great performance so keep it up!",
    "Overall, that was an amazing job so keep up the good work!",
    "Overall, that was pretty impressive so good job!"
]

const students = {
    "Minseo (Emma)": [
        4,
        {
            first: [
                ''
            ],
        
            second: [
                "Now that you've learned the meaning and usage of the phrasal verbs_____, you may now try these out by using them on your daily conversations. Take note as well of the corrections made in the class specially in responding to questions. Make sure to always answer in a complete sentence and practice expressing your thoughts in the class even more."
            ]
        }
    ],
    "Ethan": [
        4,
        {
            first: feedback1,
            second: feedback2
        }
    ],
    "Tahee": [
        3,
        {
            first: [
                'I can see that you were paying attention in the class. You could easily recall the words and phrases discussed in our lesson topic.',
                'You were always been very cooperative inside the class. You can comprehend the given new words and phrases by reading some context clues so keep it up!',
                "You've done your best to take part in our discussion today.",
                "You were able to finished our lesson today about \"Cindy's Timetable\". You were very prompt in answering all the activities and sharing your own timetable in the class so high five to that!",
            ],
        
            second: [
                "However, please practice the mispronounce words listed above. specially the long vowel and short vowel sound of phonic \"i\" and make use of the new words and vocabularies that we had discussed on a daily basis.",
                "However, please practice more with your pronunciation and grammar. Specially the vowel sounds /a/ and /e/.",
                "I hope that you'll be able to use the phrasal verbs in our lesson on a daily basis to get fluent using the English language in no time.",
                "However, please take note of the corrections made in the class specially, your grammar structure. Sometimes you tend to forget using some linking verbs and conjuctions such as and, therefore, like , and because when creating a sentence.",
            ],
        }
    ],
    "Jay": [
        2,
        {
            first: [
                'You are improving well in the class. Your reading and comprehension is good and you can now answer in simple sentences about the lesson topic.',
                'You were very enthusiastic and engage well in the class so keep that good attitude!',
                'You were very enthusiastic and active in answering all the activities so high five to that!'
            ],
        
            second: [
                "However, I would like you to focus more with expanding your vocabulary to be able to express yourself more. You may study the new words that you've learned in the class.",
                "However, please take note of the words that you've mispronounce and the grammar corrections. You may study as well about the story: Things That Go!",
                "However, sometimes you mispronounce the words......... so just take note of these."
            ]
        }
    ],
    "Joy": [
        4,
        {
            first: feedback1,
            second: feedback2
        }
    ],
    "Lucas": [
        2,
        {
            first: feedback1,
            second: feedback2
        }
    ],
    "Yerin/Lina": [
        3,
        {
            first: feedback1,
            second: feedback2
        }
    ],
    "Harry": [
        4,
        {
            first: feedback1,
            second: feedback2
        }
    ],
    "Amy": [
        5,
        {
            first: [
                'What I like about you is your focus and determination to participate in the class.',
                'You were very keen in answering the activities correctly.',
                'You were able to learn some useful verbs that you can use with your everyday conversations.',
                'You did very well in giving out ideas about the new words and phrases in our lesson today.',
                'You respond to questions and has a good understanding of most of the words discussed in the lesson topic.',
                "You are indeed a clever student. Keep on learning and you'll be able to build more confidence in speaking the English language.",
            ],
            second : [
                'Keep it up and ask more questions that are related to the lesson topic to expand your knowledge.',
                'However, be more confident with your response and never hesitate to ask questions and expand the lesson topic with your opinions and ideas.',
                'However, it is mandatory for you to apply your learnings as to be more fluent and gain confidence in speaking the Eglish language.',
                'Please make use of the following phrases by using it in your daily conversations.',
                'However, still needs to develop better responses by expounding answers whenever being asked inside the classroom.',
                "You may try using the new words and expressions in our lesson today so as that you'll get familiar with them, You can do it!"
            ]
        }
    ],
    "Jiyoon": [
        2,
        {
            first: feedback1,
            second: feedback2
        }
    ],
    "Sum Nah": [
        2,
        {
            first: [
                "I can see your determination to answer all the activities independently so continue this good attitude.",
                "You were very cooperative and engaged yourself even more in our class so keep that great attitude!.",
                "You were able to attentively participated in our class and answer all the activities with ease so keep it up!",
                "You were very enthusiastic and active in the class. I love how good you are when it comes to reading and spelling out new words so keep it up!",
                "You made it through our class very well. I could see that you have a lot of potentials in you. You could comprehend and actively participates in our discussion so keep it up!"
            ],
        
            second: [
                "However, please take note of the corrections in our lesson today specially with the phonics sounds /s/, /o/,and /i/.",
                "However, we still need to work on with your pronunciation and grammar structure. Pay attention to the new words and expressions in our lesson so as you could apply them with your daily conversations with others.",
                'However, sometimes you mispronounce the phonics a&e and w&y so just practice these with your parent or guardian. Take note as well the corrections made in the class specially when using plural for "s" and apply these key patterns on a daily basis to improve your vocabulary bank.',
                "However, you mispronounce some words such as Microphone, Hobbies and singer so just practice saying these words when you have spare time.",
                "However, you still need to focus on your pronunciation and vocabulary enhancement.\nPlease practice these sounds: /k/ /t/ for cat, and /ɜr/ for bird.\n"
            ]
        }
    ],
    "Jinny": [
        4,
        {
            first: feedback1,
            second: feedback2
        }
    ]
}




const studentSelecor = document.querySelector("#select-student")
const newStudentInput = document.querySelector("#new-student")
const levelText = document.querySelector(".level-text")
const dateInput = document.getElementById("date-input")
const studentNameInput = document.getElementById("input-student-name");
const leftRightButton = document.querySelectorAll(".left-right-button");
const topicInput = document.querySelector("#topic")
const usefulTxt = document.querySelector(".textarea-a");
const feedback = document.querySelector(".textarea-b");
const outputContainer = document.querySelector("#output-container")
const addSuggestionBtn = document.querySelector("#addSuggestionBtn");
const addHomeworkBtn = document.querySelector("#addHomeworkBtn");
const suggestion = document.querySelector("#suggestion");
const homework = document.querySelector("#homework");


for(var i = 1; i <= 10; i++) {
    document.querySelector(".select-student-level").innerHTML += `
    <label class="level-container, container">${i}
    <input type="radio" class="level-selector" name="select-student-level" value="${i}">
    <span class="checkmark"></span>
    </label>
    `
}

radioBtns = document.querySelectorAll('.level-selector')
for(key in students){
    studentSelecor.options.add(new Option(key, key));
}


newStudentInput.onchange = () => {
    if(newStudentInput.checked) {
        studentNameInput.style.display = 'block';
        studentSelecor.style.display = 'none';
    }else{
        studentNameInput.style.display = 'none';
        studentSelecor.style.display = 'block';
    }
}


studentSelecor.onchange = () =>{
    let level = students[studentSelecor.value][0];
    try {
        document.querySelectorAll('.level-selector')[level-1].checked = true;
            let levelTxt = getLevel(level);
            levelText.innerHTML = `Level ${level} (${levelTxt})`;
        } catch (error) {
            levelText.innerHTML = `Choose Level`;
            radioBtns.forEach(radioBtn =>{
                radioBtn.checked = false;
            })
    }
    if(!newStudentInput.checked){
        genFeedback(studentSelecor.value);
    }else{
        genFeedback(studentNameInput.value)
    }
    getMemoText();
}

studentNameInput.addEventListener('focusout', () =>{
    if(!newStudentInput.checked){
        genFeedback(studentSelecor.value);
    }else{
        genFeedback(studentNameInput.value)
    }
    getMemoText();
})

radioBtns.forEach(item => {
    item.onclick = () => {
        let level = Number(item.value);
        let levelTxt = getLevel(level);
        levelText.innerHTML = `Level ${level} (${levelTxt})`;
    }
})
d = new Date();
d.setHours(d.getHours() + d.getTimezoneOffset()/60*-1)
d.setMinutes(d.getMinutes() + (d.getTimezoneOffset()*-1)%60)

dateInput.valueAsDate = d;

leftRightButton[0].onclick = () => {
    d = dateInput.valueAsDate
    dateInput.valueAsDate = new Date(d.setDate(d.getDate() -1))
    getMemoText();
}
leftRightButton[1].onclick = () => {
    d = dateInput.valueAsDate
    dateInput.valueAsDate = new Date(d.setDate(d.getDate() +1))
    getMemoText();
}

function getLevel(level){
    let levelTxt = ""
    if(level < 4){
        levelTxt = "Beginner"
    }else if(level < 7){
        levelTxt = "Intermediate"
    }else if(level < 9){
        levelTxt = "Advanced"
    }else{
        levelTxt = "Proficient"
    }
    return levelTxt;
}


function addGrammar(val1, val2){
    const grammarTable = document.querySelector("tbody")
        const elem = document.createElement("tr");
        elem.innerHTML = `
            <td>Said: </td>
            <td>
                <input class="def-input grammar-input-said" type="text" value="${val1}">
            </td>
            <td rowspan="2">
                
            </td>
        `
        elem.addEventListener('focusout', func1)
        const elem1 = document.createElement('tr');
        elem1.innerHTML = `
            <td>Should Say: </td>
            <td><input class="def-input m1 grammar-input-shd-say" type="text" value="${val2}"></td>
        `
        grammarTable.insertBefore(elem1, grammarTable.lastChild.previousSibling.previousSibling.previousSibling)
        grammarTable.insertBefore(elem, grammarTable.lastChild.previousSibling.previousSibling.previousSibling.previousSibling)

}

document.querySelector("#addGrammar").onclick = () => {
    const said = document.querySelector('#one');
    const shdSay = document.querySelector('#two');
    if(said.value && shdSay.value){
        addGrammar(said.value, shdSay.value)
        document.querySelector("#one").value = ""
        document.querySelector("#two").value = ""
    }
}

const pronun = document.querySelector("#pronunciation");
pronun.addEventListener('focusout', func)
document.querySelector("#addPronunciation").onclick = () => {
    if(pronun.value){
        const elem = document.createElement('input');
        elem.className = 'def-input';
        elem.classList.add('p');
        elem.value = pronun.value;
        elem.addEventListener('focusout', func)
        document.querySelector("#pronunBox").insertBefore(elem, pronun);
        pronun.value = ""
    }
}
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bdb5952f33mshe20f85b10163cccp155f4djsnbde8ddb636f2',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};


function func() {
    if(this.value && this.value.indexOf('/') === -1){
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.value}/pronunciation`, options)
        .then(response => response.json())
        .then(response => {
            try {
                if(this.previousSibling.value.indexOf('/') == -1){
                    if(response.pronunciation.all){
                        this.previousSibling.value += ` /${response.pronunciation.all}/`
                    }else{
                        this.previousSibling.value += ` /${response.pronunciation}/`
                    }
                }else{
                    if(response.pronunciation.all){
                        this.value += ` /${response.pronunciation.all}/`
                    }else{
                        this.value += ` /${response.pronunciation}/`
                    }
                }
            } catch (error) {
                if(response.pronunciation.all){
                    this.value += ` /${response.pronunciation.all}/`
                }else{
                    this.value += ` /${response.pronunciation}/`
                }
            }
            getMemoText();
        })           
    }
    if(this.value == "" && this.id != 'pronunciation'){
        this.parentElement.removeChild(this)
    }
}

function func1() {
    let inpt = this.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
    if(inpt.value == ""){
        this.parentElement.removeChild(this.nextSibling)
        this.parentElement.removeChild(this)
    }
}


document.querySelector("#copyBtn").onclick = () => {
    copyText(getMemoText())

}

function getMemoText(){
    let homeworkVal = "", suggestionVal = ""
    suggestion.value ? suggestionVal = `\nSUGGESTION\n${suggestion.value}` : "";
    homework.value ? homeworkVal = `\nHOMEWORK\n${homework.value}` : "";
    pronunElems = document.querySelectorAll(".p");
    pronunTxt = ""
    var i = 1;
    pronunElems.forEach(item =>{
        if(item.value){
            pronunTxt += `${i}. ${item.value}\n`
            i++;
        }
    })

    grammarInptSaid = document.querySelectorAll(".grammar-input-said");
    grammarInptShdSay = document.querySelectorAll(".grammar-input-shd-say");
    grammarTxt = ""

    for(var i = 0; i < grammarInptSaid.length; i++){
        if(grammarInptSaid[i].value && grammarInptShdSay[i].value)
        grammarTxt += `(SAID) ${grammarInptSaid[i].value}
(SHOULD SAY) ${grammarInptShdSay[i].value}
`
    }


    text = `${newStudentInput.checked? studentNameInput.value : studentSelecor.value} (${levelText.textContent})

Class review date: ${new Date(dateInput.valueAsNumber).toString().substring(0, 15)}

TOPIC TITLE: ${topicInput.value}

PRONUNCIATION REVIEW:
${pronunTxt}

GRAMMAR REVIEW:
${grammarTxt}

USEFUL WORDS/ EXPRESSIONS
${usefulTxt.value}

FEEDBACK
${feedback.value}
${suggestionVal}
${homeworkVal}
Have a great day!`

    outputContainer.value = text
    return text;
}


async function copyText(text){
    if(text != ""){
        navigator.clipboard.writeText(text)
        .then(
            console.log(text + " copied successfully")
        )
    }
}

function rand(obj){
    return ~~(Math.random()*obj.length);
}

function genFeedback(name){
    one = students[name][1].first;
    two = students[name][1].second;
    if(name != 'null' && name){
        feedback.value = `${feedback0[rand(feedback0)]} ${name}! ${one[rand(one)]} ${two[rand(two)]} ${feedback3[rand(feedback3)]}`
        getMemoText();
    }
}

document.getElementById('changeBtn').onclick = () => {
    if(!newStudentInput.checked){
        genFeedback(studentSelecor.value);
    }else{
        genFeedback(studentNameInput.value)
    }
}

document.querySelectorAll("input").forEach(item => {
    item.oninput = () => {
        getMemoText();
    }
})

document.querySelectorAll("textarea").forEach(item => {
    if(item != outputContainer){
        item.oninput = () => {
            getMemoText();
        }
    }
})

addSuggestionBtn.onclick = (e) => {
    suggestion.style.display = 'block';
    addSuggestionBtn.style.display = 'none';
}

addHomeworkBtn.onclick = () => {
    homework.style.display = 'block';
    addHomeworkBtn.style.display = 'none';
}

suggestion.addEventListener('focusout', () => {
    if(!suggestion.value){
        suggestion.style.display = 'none';
        addSuggestionBtn.style.display = 'flex';
    }
})

homework.addEventListener('focusout', () => {
    if(!homework.value){
        homework.style.display = 'none';
        addHomeworkBtn.style.display = 'flex';
    }
})

const students = {
    "Minseo (Emma)": 4,
    "Ethan": 4,
    "Tahee": 3,
    "Jay": 2,
    "Joy": 4,
    "Lucas": 2,
    "Yerin/Lina": 3,
    "Harry": 4,
    "Amy": 5,
    "Jiyoon": 2,
    "Sum Nah": 2,
    "Jinny": 4
}
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
    'Good effort',
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
]

const studentSelecor = document.querySelector("#select-student")
const newStudentInput = document.querySelector("#new-student")
const levelText = document.querySelector(".level-text")
const dateInput = document.getElementById("date-input")
const studentNameInput = document.getElementById("input-student-name");
const leftRightButton = document.querySelectorAll(".left-right-button");
const topicInput = document.querySelector("#topic")
const usefulTxt = document.querySelector(".textarea-a");
const feedback = document.querySelector(".textarea-b");


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
    let level = students[studentSelecor.value];
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

    genFeedback(studentSelecor.value);

}

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
}
leftRightButton[1].onclick = () => {
    d = dateInput.valueAsDate
    dateInput.valueAsDate = new Date(d.setDate(d.getDate() +1))
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
${feedback.value}`
    
    copyText(text)
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
    if(name != 'null'){
        feedback.value = `${feedback0[rand(feedback0)]} ${name}! ${feedback1[rand(feedback1)]} ${feedback2[rand(feedback2)]} ${feedback3[rand(feedback3)]}`
    }
}

document.getElementById('changeBtn').onclick = () => {
    genFeedback(studentSelecor.value);
}
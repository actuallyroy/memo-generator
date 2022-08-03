students = {
    "Minseo": 4,
    "Ethan": 4,
    "Tahee": 2,
    "Jay": 2,
    "Joy": 4,
    "Lucas": 1,
    "Yerin/Lina": 1,
    "Harry Montreal": 1,
    "Amy SK": 2,
    "Jiyoon SK": 1,
    "Sumnah": 1,
    "Jinny": 3
}

studentSelecor = document.querySelector("#select-student")
newStudentInput = document.querySelector("#new-student")
levelText = document.querySelector(".level-text")
dateInput = document.getElementById("date-input")
studentNameInput = document.getElementById("input-student-name");
leftRightButton = document.querySelectorAll(".left-right-button");
topicInput = document.querySelector("#topic")
usefulTxt = document.querySelector(".textarea-a");
feedback = document.querySelector(".textarea-b");


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

Class review date: ${dateInput.value}

TOPIC TITLE: ${topicInput.value}

PRONUNCIATION REVIEW:
${pronunTxt}

GRAMMAR REVIEW:
${grammarTxt}

USEFUL WORDS/ EXPRESSIONS
${usefulTxt.value}

FEEDBACK
${feedback.value}`
    console.log(text)
}
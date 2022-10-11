// const API = "http://localhost:3000/";
const API = "https://paueebackend.herokuapp.com/";

let lessonTopicsObj = []

students1 = []
currentStudent = {}

let fdbkOne = []
let fdbkTwo = []
let fdbkThree = []

let edited = false

//Fields
const studentSelecor = document.querySelector("#select-student")
const newStudentInput = document.querySelector("#new-student")
const levelText = document.querySelector(".level-text")
const dateInput = document.getElementById("date-input")
const studentNameInput = document.getElementById("input-student-name");
const leftRightButton = document.querySelectorAll(".left-right-button");
const topicInputs = document.querySelectorAll(".select-student.b.t");
const usefulTxt = document.querySelector(".textarea-a");
const feedback = document.querySelector(".textarea-b");
const outputContainer = document.querySelector("#output-container")
const addSuggestionBtn = document.querySelector("#addSuggestionBtn");
const addHomeworkBtn = document.querySelector("#addHomeworkBtn");
const suggestion = document.querySelector("#suggestion");
const homework = document.querySelector("#homework");
const sidePanel = document.getElementById("sidePanel")
let lessonTopics = document.querySelectorAll(".lesson-topics");
const others = document.getElementById("others")
const pronun = document.querySelector("#pronunciation");
var grammarInptSaid = document.querySelectorAll(".grammar-input-said");
var grammarInptShdSay = document.querySelectorAll(".grammar-input-shd-say");

//Add lesson categories to the options
function addLessonCategory() {
  lessonTopics = document.querySelectorAll(".lesson-topics");
  lessonCategory.forEach(key => {
      lessonTopics.forEach(item => {
          item.options.add(new Option(key, key))
      })
  })
}

addLessonCategory();

//get memo text on category change
lessonTopics.forEach(item => {
    item.onchange = () => {
      getMemoText();
    }
})




//add level radio buttons
for(var i = 1; i <= 10; i++) {
  document.querySelector(".select-student-level").innerHTML += `
  <label class="level-container, container">${i}
  <input type="radio" class="level-selector" name="select-student-level" value="${i}">
  <span class="checkmark"></span>
  </label>
  `
}


//add students' list
// for(key in students){
//   studentSelecor.options.add(new Option(key, key));
// }

axios.get(API + "api/students")
  .then(res => {
    students1 = res.data
    res.data.forEach(stu => {
      studentSelecor.options.add(new Option(stu.name, stu.id))
    })
  }
  )


//new student toggle
newStudentInput.onchange = () => {
  if(newStudentInput.checked) {
    studentNameInput.style.display = 'block';
    studentSelecor.style.display = 'none';
    genFeedback(studentNameInput.value)
  }else{
    studentNameInput.style.display = 'none';
    studentSelecor.style.display = 'block';
    students1.forEach(item => {
      console.log(item);
      if (item.id == currentStudent.id)
      currentStudent.name = item.name
    })
    genFeedback(currentStudent.name);
  }
}



//addtopic btn click listener
const lessonTopicCont = document.getElementById("lessonTopicCont");

function addTopicFunc() {
  b = false;
  lessonTopicCont.innerHTML = `<span class="a">Topic: </span>`;
  lessonTopicsObj.forEach((item) => {
    if (item[1] != "") {  
      if (!b) {
        lessonTopicCont.innerHTML += `<select onchange="getMemoText()" class="select-student lesson-topics"><option value="${item[0]}">${item[0]}</option></select>
                    <input class="select-student b t" type="text" id="topic" name="topic" placeholder="Eg. Vocabulary" oninput="getMemoText()" value="${item[1]}"><br>`;
        b = true;
      } else {
        lessonTopicCont.innerHTML += `<select onchange="getMemoText()" style="margin-left: 75px" class="select-student lesson-topics"><option value="${item[0]}">${item[0]}</option></select>
                    <input class="select-student b t" type="text" id="topic" name="topic" placeholder="Eg. Vocabulary" oninput="getMemoText()" value="${item[1]}"><br>`;
      }
    }
  });

  lessonTopicCont.innerHTML += `<select onchange="getMemoText()" style="margin-left: 75px" class="select-student lesson-topics"></select>
                <input class="select-student b t" type="text" id="topic" name="topic" placeholder="Eg. Vocabulary" oninput="getMemoText()">`;
  addLessonCategory();
  lessonTopicCont.innerHTML += `<svg onclick="addTopicFunc()" class="add" style="position: relative; top:15px" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>`;

}
document.getElementById("addTopicBtn").onclick = () => {
  addTopicFunc();
}


function rand(obj) {
  return ~~(Math.random() * obj.length);
}

function genFeedback(name) {
  let one = [],
    two = [],
    three = []
  if (newStudentInput.checked) {
    one = feedback1;
    two = feedback2;
    three = feedback3
  } else {
    try {
      one = students[name][1].first;
      two = students[name][1].second;
      three = feedback3
    } catch (error) {
      one = fdbkOne
      two = fdbkTwo
      three = fdbkThree
    }
  }
  if (name != "null" && name) {
    feedback.value = `${feedback0[rand(feedback0)]} ${name}! ${
      one[rand(one)]
    } ${two[rand(two)]} ${three[rand(three)]}`;
    getMemoText();
  }
}


//choose a student
studentSelecor.onchange = () =>{
  let level
  students1.forEach(i => {
    if (i.id == studentSelecor.value) {
      level = i.level
      currentStudent = {...i}
    }
  })
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
  axios.get(API + "api/" + currentStudent.id + "/memos")
    .then(res => {
      sidePanel.innerHTML = ""
      res.data.memos.forEach(item => {
        //pronunciations text parse
        pronunTxt = ""
        var i = 1;
        if (item.pronunciationReview) {
          Object.values(item.pronunciationReview).forEach(item1 =>{
            if(item1){
              pronunTxt += `${i}. ${item1}\n`
              i++;
            }
          })
        }

        //grammar review parse
        grammarTxt = ""
        if (item.grammarReview) {
          i = 1;
          Object.keys(item.grammarReview).forEach(item1 => {
            if (item1) {
              grammarTxt += `(Said) ${item1}\n(Should Say) ${item.grammarReview[item1]}\n`
            }
          })
        }

        feedbackTxt = ""
        if (item.feedback && item.feedback.length > 0) {
          if (item.feedback.length > 1) {
            feedbackTxt = item.feedback[0] + item.feedback[1] + item.feedback[2]
          } else {
            feedbackTxt = item.feedback[0]
          }
        }

        suggTxt = ""
        if (item.suggestion)
          suggTxt = "SUGGESTION\n" + item.suggestion
        homeWrkTxt = ""
        if (item.homework)
          homeWrkTxt = "HOMEWORK\n" + item.homework
        let textArea1 = document.createElement("textarea");
        textArea1.className = "right-body side"
        textArea1.value = `${currentStudent.name} (Level ${currentStudent.level} (${getLevel(currentStudent.level)}))

Class review date: ${new Date(Date.parse(item.date)).toString().substring(0, 15)}

TOPIC TITLE: ${item.topicTitle}

PRONUNCIATION REVIEW:
${pronunTxt}

GRAMMAR REVIEW:
${grammarTxt + item.others}

USEFUL WORDS/EXPRESSIONS
${item.usefulWordsAndExp}

FEEDBACK
${feedbackTxt}

${suggTxt}

${homeWrkTxt}

Have a great day!`;
        sidePanel.appendChild(textArea1);
        if (item.feedback && item.feedback.length > 1) {
          fdbkOne.push(item.feedback[0])
          fdbkTwo.push(item.feedback[1]);
        }
      })
      sidePanel.scrollTo(0, sidePanel.scrollHeight)
      if (!newStudentInput.checked) {
        genFeedback(currentStudent.name);
      }else{
        genFeedback(studentNameInput.value)
      }
      getMemoText();
    })
}


//input student name manually
studentNameInput.addEventListener('focusout', () =>{
  if(!newStudentInput.checked){
    genFeedback(currentStudent.name);
  } else {
    genFeedback(studentNameInput.value)
    currentStudent.name = studentNameInput.value
  }
  getMemoText();
})

//radio button on change
radioBtns = document.querySelectorAll('.level-selector')
radioBtns.forEach(item => {
  item.onclick = () => {
    let level = Number(item.value);
    let levelTxt = getLevel(level);
    levelText.innerHTML = `Level ${level} (${levelTxt})`;
    if (!newStudentInput.checked) {
      axios.post(API + "api/update/" + currentStudent.id, { name: currentStudent.name, level: level })
        .then(res => {
          console.log(res);
        })
        .catch(error =>
          console.log(error)
        )
    } else {
      currentStudent.level = level
    }
  }
})

//set today's date
d = new Date();
d.setHours(d.getHours() + d.getTimezoneOffset()/60*-1)
d.setMinutes(d.getMinutes() + (d.getTimezoneOffset()*-1)%60)

dateInput.valueAsDate = d;


//previous date
leftRightButton[0].onclick = () => {
  d = dateInput.valueAsDate
  dateInput.valueAsDate = new Date(d.setDate(d.getDate() -1))
  getMemoText();
}

//next date
leftRightButton[1].onclick = () => {
  d = dateInput.valueAsDate
  dateInput.valueAsDate = new Date(d.setDate(d.getDate() +1))
  getMemoText();
}


//get leve of student in text
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

//add more grammar field
function addGrammar(val1, val2){
  //grammar table
  const grammarTable = document.querySelector("tbody")
  
  
  // create grammar said field
  const elem = document.createElement("tr");
  //insert innerHTML
  elem.innerHTML = `
    <td>Said: </td>
    <td>
      <input class="def-input grammar-input-said" type="text" value="${val1}">
    </td>
    <td rowspan="2">
      
    </td>
  `
  //set focusout listeners
  elem.addEventListener('focusout', func1)

  //set input listener and get memo text on input
  elem.oninput = () => {
    getMemoText();
  }

  //create grammar should say field
  const elem1 = document.createElement('tr');
  elem1.innerHTML = `
    <td>Should Say: </td>
    <td><input class="def-input m1 grammar-input-shd-say" type="text" value="${val2}"></td>
  `


  grammarTable.insertBefore(elem1, grammarTable.lastChild.previousSibling.previousSibling.previousSibling)
  grammarTable.insertBefore(elem, grammarTable.lastChild.previousSibling.previousSibling.previousSibling.previousSibling)
  
  document.querySelector("#one").focus()

  grammarInptSaid = document.querySelectorAll(".grammar-input-said");
  grammarInptShdSay = document.querySelectorAll(".grammar-input-shd-say");
}

//copy text from grammar said to should say
document.querySelector("#one").addEventListener('focusout', () => {
  document.querySelector("#two").value = document.querySelector("#one").value
})


//grammar plus button listener
document.querySelector("#addGrammar").onclick = () => {
  const said = document.querySelector('#one');
  const shdSay = document.querySelector('#two');
  if(said.value && shdSay.value){
    addGrammar(said.value, shdSay.value)
    document.querySelector("#one").value = ""
    document.querySelector("#two").value = ""
  }
}

//pronunciation fields
pronun.addEventListener('focusout', getPronunciation)

document.querySelector("#addPronunciation").onclick = () => {
  if(pronun.value){
    const elem = document.createElement('input');
    elem.className = 'def-input';
    elem.classList.add('p');
    elem.value = pronun.value;
    elem.addEventListener('focusout', getPronunciation)
    document.querySelector("#pronunBox").insertBefore(elem, pronun);
    pronun.value = ""
  }
}



//get Pronunciations from words API
function getPronunciation() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bdb5952f33mshe20f85b10163cccp155f4djsnbde8ddb636f2",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

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
        } else {
          if(response.pronunciation.all){
            this.value += ` /${response.pronunciation.all}/`
          }else if(response.pronunciation.adjective){
            this.value += ` /${response.pronunciation.adjective}/`
          } else if (response.pronunciation.noun) {
            this.value += ` /${response.pronunciation.noun}/`;
          } else if (response.pronunciation.verb) {
            this.value += ` /${response.pronunciation.verb}/`;
          } else {
            this.value += ` /${response.pronunciation}/`;
          }
        }
      } catch (error) {
        if (response.pronunciation.all) {
          this.value += ` /${response.pronunciation.all}/`;
        } else if (response.pronunciation.adjective) {
          this.value += ` /${response.pronunciation.adjective}/`;
        } else if (response.pronunciation.noun) {
          this.value += ` /${response.pronunciation.noun}/`;
        } else if (response.pronunciation.verb) {
          this.value += ` /${response.pronunciation.verb}/`;
        } else {
          this.value += ` /${response.pronunciation}/`;
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
  }else{
    this.nextSibling.lastChild.previousSibling.firstChild.value = inpt.value
  }
}


document.querySelector("#copyBtn").onclick = () => {
  pronunElems = document.querySelectorAll(".p");
  pronuns = {}
  pronunElems.forEach(item =>{
    if (item.value) {
      p = item.value.split(" ")
      pronuns[p[0]] = p[1]
    }
  })


   grammarTxt = {}
  for (var i = 0; i < grammarInptSaid.length; i++) {
    if (grammarInptSaid[i].value && grammarInptShdSay[i].value) {
      grammarTxt[grammarInptSaid[i].value] = grammarInptShdSay[i].value
    }
  }
  if (edited) {
    if (newStudentInput.checked) {
  
      axios.post(API + "api/new", {
        name: studentNameInput.value,
        level: currentStudent.level,
        memos: [
          {
            date: dateInput.value,
            topicTitle: getTopicText(),
            pronunciationReview: pronuns,
            grammarReview: grammarTxt,
            others: others.value,
            usefulWordsAndExp: usefulTxt.value,
            feedback: parseFeedback(feedback.value),
            suggestion: suggestion.value,
            homework: homework.value,
          },
        ],
      })
        .then(res => {
        console.log(res);
      })
    } else {
      axios.post(API + "api/addmemo/" + currentStudent.id, {
        date: dateInput.value,
        topicTitle: getTopicText(),
        pronunciationReview: pronuns,
        grammarReview: grammarTxt,
        others: others.value,
        usefulWordsAndExp: usefulTxt.value,
        feedback: parseFeedback(feedback.value),
        suggestion: suggestion.value,
        homework: homework.value,
      })
      .then(res => console.log(res))
    }
  }
  copyText(getMemoText())
  edited = false

}

function parseFeedback(fdbktxt) {
  if (fdbktxt.indexOf("However") != -1) {
    fdbktxt = fdbktxt.substring(fdbktxt.indexOf("!") + 2)
    i1 = fdbktxt.indexOf("However");
    i2 = fdbktxt.indexOf("Overall")
    one = fdbktxt.substring(0, i1)
    two = fdbktxt.substring(i1, i2)
    three = fdbktxt.substring(i2)
    return [one, two, three]
  }else
    return [fdbktxt]
}

function getTopicText() {
  //get all lesson topics if there's more than one//
  lessonTopicsObj = []
  lessonTopics = document.querySelectorAll(".lesson-topics");
  lessonTopics.forEach(item => {
    lessonTopicsObj.push([item.value, item.nextElementSibling.value])
  })

  let topicText = ""
  //get topic text//
  lessonTopicsObj.forEach(item => {
    topicText += `${item[0]} : ${item[1]}, `
  })
  return topicText
}

function getMemoText(){
  edited = true
  //check suggestion field if not empty then get value//
  let homeworkVal = "", suggestionVal = ""
  suggestion.value ? suggestionVal = `\nSUGGESTION\n${suggestion.value}` : "";
  homework.value ? homeworkVal = `\nHOMEWORK\n${homework.value}` : "";

  
  //get pronunciations and create text for memo
  pronunElems = document.querySelectorAll(".p");
  pronunTxt = ""
  var i = 1;
  pronunElems.forEach(item =>{
    if(item.value){
      pronunTxt += `${i}. ${item.value}\n`
      i++;
    }
  })

    
    //Get grammar fields and create text for memo//
  grammarTxt = ""
  for(var i = 0; i < grammarInptSaid.length; i++){
    if(grammarInptSaid[i].value && grammarInptShdSay[i].value)
    grammarTxt += `(SAID) ${grammarInptSaid[i].value}
(SHOULD SAY) ${grammarInptShdSay[i].value}

`
  }


//Generated memo text----------------------------------------------------------------------//
  text = `${newStudentInput.checked? studentNameInput.value : currentStudent.name} (${levelText.textContent})

Class review date: ${new Date(dateInput.valueAsNumber).toString().substring(0, 15)}

TOPIC TITLE: ${getTopicText()}

PRONUNCIATION REVIEW:
${pronunTxt}

GRAMMAR REVIEW:
${grammarTxt}${others.value}

USEFUL WORDS/EXPRESSIONS
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
    )
  }
}



document.getElementById('changeBtn').onclick = () => {
  if(!newStudentInput.checked){
    genFeedback(currentStudent.name);
  }else{
    genFeedback(studentNameInput.value)
  }
}

function setClickListnerOnInput() {
  document.querySelectorAll("input").forEach(item => {
    item.oninput = () => {
      getMemoText();
    }
  })
}

setClickListnerOnInput();

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



var oldScrollY = 0;
var shown = false;
var cursorX = 0;
var menuBtnClicked = false;


//listeners and functions
document.querySelector("#menuShowHideBtn").onclick = () => {
    if(shown){
        hideMenuAnim();
        shown = false;
    }else{
        showMenuAnim();
        shown = true;
    }
}



function showMenuAnim() {
    let id = null;
    let rot = 0;
    let pos = 0;
    let opac = 1;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (rot == 45) {
        clearInterval(id);
      } else {
        pos+=0.22;
        rot++;
        opac-=0.03;
        bar1.style.transform = `translate(${pos*7.5}px, -${pos}px) rotate(${rot}deg)`;
        bar3.style.transform = `rotate(-${rot}deg) translate(-${pos*13}px, -${pos*1.5}px`;
        bar2.style.opacity = opac;
        sidePanel.style.transform = "translateX(-450px)"
        // document.querySelector("body").style.overflow = "hidden"
      }
    }
}




function hideMenuAnim(){
  let id = null;
  let rot = 45;
  let pos = 10;
  let opac = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (rot == 0) {
      sidePanel.style.transform = "translateX(0px)"
      // document.querySelector("body").style.overflow = "auto";
      clearInterval(id);
    } else {
      pos-=0.22;
      rot--;
      opac+=0.03;
      bar1.style.transform = `translate(${pos*7.5}px, -${pos}px) rotate(${rot}deg)`;
      bar3.style.transform = `rotate(-${rot}deg) translate(-${pos*13}px, -${pos*1.5}px`;
      bar2.style.opacity = opac;
    }
  }
}

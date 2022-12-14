//Data-----
const feedback0 = [
  "Good job",
  "Great job",
  "Well done",
  "Superb",
  "Good work",
  "Great work",
  "Superb work",
  "Excellent job",
  "Excellent work",
  "Wonderful job",
  "Wonderful work",
  "Very good job",
  "Very good work",
  "Awesome job",
  "Awesome",
  "Awesome work",
  "Fantastic job",
  "Fantastic work",
  "Well done",
  "Nice work",
  "Nice job",
  "Nicely done",
  "A+ effort",
  "A+",
  "Good effort",
  "Impressive",
  "Impressive work",
  "Way to go",
];

const feedback1 = [
  "I am impressed with how well you could share your thoughts and opinion on our lesson topic.",
  "You did well in finishing our lesson topic. You were able to participate well by giving out examples and answering all the activities with determination so keep it up!",
  "High five to that great performance! I can see that you can recall and catch-up in our lesson easily.",
  "You were very attentive and knows how to follow instructions easily so keep it up!",
];

const feedback2 = [
  "However, to be able to be fluent in speaking the English language, you should apply the new words and expressions on a daily basis and take note of the corrections made in the class.",
  "However, sometimes you add extra verbs in a sentence so take note of this.",
  "Please take note of the mispronounce words listed above and use the key pattern in our lesson today.",
  "You may try acting out a role-play as a server and a customer in a restaurant and let the people you know about the food you like and how you feel.",
  "However please take note of the corrections made in the class specially in using the key patterns listed above.",
];

const feedback3 = [
  "Overall, that was a great performance from you so just keep it going!",
  "Overall, that was a great class. you may refer to the attached photo for your take-home task.",
  "Overall, That was a superb class, See you again soon!",
  "Overall, you did great in our lesson today so keep it up.",
  "Overall, that was amazing and I hope that you speak more in the class.",
  "Overall, that was amazing and I would love to see you soon!",
  "Overall, that was a great performance form you so keep it up!",
  "Overall, that was a great performance so keep it up!",
  "Overall, that was an amazing job so keep up the good work!",
  "Overall, that was pretty impressive so good job!",
  "Overall, that was an amazing class. I hope to see you soon!",
];

const students = {
  "Minseo (Emma)": [
    4,
    {
      first: [
        "You wer able to finish our lesson topic about ______. You were very consistent with your focus and attention inside the class. You were able to answer all the activities and cite your opinion in our discussion part.",
        "You did well in finishing our lesson topic. You were able to participate well by giving out examples and, answering all the activities with determination so keep it up!",
        "What I like about you is your patience and attention to answer all the activities correctly so keep this up.",
      ],

      second: [
        "Now that you've learned the meaning and usage of the phrasal verbs_____, you may now try these out by using them on your daily conversations. Take note as well of the corrections made in the class specially in responding to questions. Make sure to always answer in a complete sentence and practice expressing your thoughts in the class even more.",
        "However, sometimes you add extra verbs in a sentence.",
        "Practice the corrections listed above and apply then on a daily basis.",
      ],
    },
  ],
  Ethan: [
    4,
    {
      first: feedback1,
      second: feedback2,
    },
  ],
  "Tae Hee": [
    4,
    {
      first: [
        "I can see that you were paying attention in the class. You could easily recall the words and phrases discussed in our lesson topic.",
        "You were always been very cooperative inside the class. You can comprehend the given new words and phrases by reading some context clues so keep it up!",
        "You've done your best to take part in our discussion today.",
        'You were able to finished our lesson today about "Cindy\'s Timetable". You were very prompt in answering all the activities and sharing your own timetable in the class so high five to that!',
      ],

      second: [
        'However, please practice the mispronounce words listed above. specially the long vowel and short vowel sound of phonic "i" and make use of the new words and vocabularies that we had discussed on a daily basis.',
        "However, please practice more with your pronunciation and grammar. Specially the vowel sounds /a/ and /e/.",
        "I hope that you'll be able to use the phrasal verbs in our lesson on a daily basis to get fluent using the English language in no time.",
        "However, please take note of the corrections made in the class specially, your grammar structure. Sometimes you tend to forget using some linking verbs and conjuctions such as and, therefore, like , and because when creating a sentence.",
      ],
    },
  ],
  Jay: [
    2,
    {
      first: [
        "You are improving well in the class. Your reading and comprehension is good and you can now answer in simple sentences about the lesson topic.",
        "You were very enthusiastic and engage well in the class so keep that good attitude!",
        "You were very enthusiastic and active in answering all the activities so high five to that!",
        "",
      ],

      second: [
        "However, I would like you to focus more with expanding your vocabulary to be able to express yourself more. You may study the new words that you've learned in the class.",
        "However, please take note of the words that you've mispronounce and the grammar corrections. You may study as well about the story: Things That Go!",
        "However, sometimes you mispronounce the words......... so just take note of these.",
      ],
    },
  ],
  Joy: [
    4,
    {
      first: feedback1,
      second: feedback2,
    },
  ],
  Lucas: [
    2,
    {
      first: [
        "You were able to learn new expressions and names of the animals(lizards and snakes). You have a good recall of new phrases and participates in all the activities actively so keep it up!",
        "I can see that you were now improving with your pronunciation. You're very enthusiastic and quick to learn so keep it up!",
        "You were able to comprehend the new words and phrases in our lesson today very eagerly so good job! You answer all the activities very promptly and share ideas about your favorite food as well so high five to that!",
      ],
      second: [
        "However, we still need to work on with your pronunciation. Sometimes you mispronounce the letters(a,e,c and s) so take note of these and the grammar correction as well.",
        "However, sometimes you mispronounce words that has the phonics sound 'sw' like swamp and swallow.You may listen more to words containing 'l' and 'n'.",
        "However, We still need to widen your vocabulary bank for you to be able to speak more and construct simple sentences better. You can do it!",
      ],
    },
  ],
  "Yerin/Lina": [
    3,
    {
      first: [
        "That was a good performance form you. You have a good recall of new words and phrases and could spell them with ease so keep up the good work!",
        "I like how you performed in our class today. You were very prompt in answering all the activities correctly. You have a good speed in reading and responds to questions with good comprehension so high five!",
      ],
      second: [
        "However, pay attention to some mispronounce words listed above specially the phonic sounds long and short /i/ and /g/.",
        'However, please pay attention to your pronunciation of words such as " sausage/??s????.s??d??/ and delicious/d????l????.??s/.',
      ],
    },
  ],
  Harry: [
    4,
    {
      first: feedback1,
      second: feedback2,
    },
  ],
  Amy: [
    6,
    {
      first: [
        "What I like about you is your focus and determination to participate in the class.",
        "You were very keen in answering the activities correctly.",
        "You were able to learn some useful verbs that you can use with your everyday conversations.",
        "You did very well in giving out ideas about the new words and phrases in our lesson today.",
        "You respond to questions and has a good understanding of most of the words discussed in the lesson topic.",
        "You are indeed a clever student. Keep on learning and you'll be able to build more confidence in speaking the English language.",
      ],
      second: [
        "Keep it up and ask more questions that are related to the lesson topic to expand your knowledge.",
        "However, be more confident with your response and never hesitate to ask questions and expand the lesson topic with your opinions and ideas.",
        "However, it is mandatory for you to apply your learnings as to be more fluent and gain confidence in speaking the Eglish language.",
        "Please make use of the following phrases by using it in your daily conversations.",
        "However, still needs to develop better responses by expounding answers whenever being asked inside the classroom.",
        "You may try using the new words and expressions in our lesson today so as that you'll get familiar with them, You can do it!",
      ],
    },
  ],
  Jiyoon: [
    2,
    {
      first: feedback1,
      second: feedback2,
    },
  ],
  Sumna: [
    2,
    {
      first: [
        "I can see your determination to answer all the activities independently so continue this good attitude.",
        "You were very cooperative and engaged yourself even more in our class so keep that great attitude!.",
        "You were able to attentively participated in our class and answer all the activities with ease so keep it up!",
        "You were very enthusiastic and active in the class. I love how good you are when it comes to reading and spelling out new words so keep it up!",
        "You made it through our class very well. I could see that you have a lot of potentials in you. You could comprehend and actively participates in our discussion so keep it up!",
      ],

      second: [
        "However, please take note of the corrections in our lesson today specially with the phonics sounds /s/, /o/,and /i/.",
        "However, we still need to work on with your pronunciation and grammar structure. Pay attention to the new words and expressions in our lesson so as you could apply them with your daily conversations with others.",
        'However, sometimes you mispronounce the phonics a&e and w&y so just practice these with your parent or guardian. Take note as well the corrections made in the class specially when using plural for "s" and apply these key patterns on a daily basis to improve your vocabulary bank.',
        "However, you mispronounce some words such as Microphone, Hobbies and singer so just practice saying these words when you have spare time.",
        "However, you still need to focus on your pronunciation and vocabulary enhancement.\nPlease practice these sounds: /k/ /t/ for cat, and /??r/ for bird.\n",
      ],
    },
  ],
  Jinny: [
    4,
    {
      first: feedback1,
      second: feedback2,
    },
  ],
  Camille: [
    1,
    {
      first: feedback1,
      second: feedback2,
    },
  ],
};

const lessonCategory = [
  "51Talk",
  "Engoo Conversation",
  "Engoo Grammar",
  "Engoo IELTS Speaking Test Preparation",
  "Engoo Vocabulary",
  "Engoo Pronunciation",
  "Engoo English for Kids",
  "Engoo Discussion",
  "Engoo Conversation Topics",
  "Engoo Travel & Culture",
  "Engoo Health & Lifestyle",
  "Engoo Describing Pictures",
  "Engoo Business",
  "Engoo Daily News",
  "Engoo World Literature",
  "Engoo Speaking Test",
  "Engoo TOEIC?? Speaking Actual Test",
  "Engoo TOEFL iBT?? Speaking",
  "Engoo Elementary Reading Series",
  "One English Phonics",
  "One English Vocabulary",
  "One English Reading",
  "One English Story",
  "One English Conversation",
  "Subject Link Lesson 1",
  "Subject Link Lesson 2",
  "Subject Link Lesson 3",
  "Subject Link Lesson 4",
  "Subject Link Lesson 5",
  "Bricks Reading",
  "Easy Link",
  "Link Start L-1",
  "Link Start L-2",
  "Link Start L-3",
];

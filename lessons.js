const subjects = [
  "English Language", "Mathematics", "Hausa Language",
  "Basic Science", "Physical and Health Education",
  "Islamic Studies", "Christian Religious Studies",
  "Nigerian History", "Social and Citizenship Studies",
  "Cultural and Creative Arts", "Digital Technology", "Agriculture"
];

const subjectGrid = document.getElementById("subject-grid");
const searchInput = document.getElementById("subject-search");
const lessonDetail = document.getElementById("lesson-detail");
const selectedSubject = document.getElementById("selected-subject");
const weekGrid = document.getElementById("week-grid");
const weekStatus = document.getElementById("week-status");
const languageSelect = document.getElementById("lesson-language");
const languageSwitch = document.getElementById("switch-language");
const languageStatus = document.getElementById("language-status");

const lessons = {
  "Mathematics": {
    1: {
      topic: {
        english: "Counting Numbers 1–5",
        hausa: "Ƙirga Lambobi 1–5"
      },
      objectives: {
        english: [
          "Count objects from 1 to 5.",
          "Recognise numbers 1, 2, 3, 4 and 5."
        ],
        hausa: [
          "Ƙirga abubuwa daga 1 zuwa 5.",
          "Gane lambobi 1, 2, 3, 4 da 5."
        ]
      },
      notes: {
        english: "Numbers help us count things. We count: 1 – one, 2 – two, 3 – three, 4 – four, 5 – five. Examples: one book, two pencils and three cups.",
        hausa: "Lambobi suna taimaka mana wajen ƙirga abubuwa. Muna ƙirga: 1 – ɗaya, 2 – biyu, 3 – uku, 4 – huɗu, 5 – biyar. Misalai: littafi ɗaya, fensir biyu da kofuna uku."
      },
      activity: {
        english: "The teacher shows five objects. Pupils count them aloud.",
        hausa: "Malami ya nuna abubuwa guda biyar. Ɗalibai su ƙirga su da murya."
      },
      classwork: {
        english: "1. Count from 1 to 5. 2. Draw 3 circles. 3. Write the number after 4.",
        hausa: "1. Ƙirga daga 1 zuwa 5. 2. Zana da'irori guda 3. 3. Rubuta lambar da ke zuwa bayan 4."
      },
      homework: {
        english: "Count five things at home and say their numbers.",
        hausa: "A gida, ƙirga abubuwa guda biyar kuma ka faɗi adadinsu."
      },
      quiz: [
        {
          english: "Which number comes after 2?",
          hausa: "Wace lamba ce ke zuwa bayan 2?",
          options: ["1", "3", "5"],
          answer: 1
        },
        {
          english: "How many fingers are on one hand?",
          hausa: "Yatsu nawa ne a hannu ɗaya?",
          options: ["3", "4", "5"],
          answer: 2
        },
        {
          english: "Which number means four?",
          hausa: "Wace lamba ce take nufin huɗu?",
          options: ["2", "4", "5"],
          answer: 1
        },
        {
          english: "Count: 1, 2, 3, __.",
          hausa: "Ƙirga: 1, 2, 3, __.",
          options: ["4", "1", "5"],
          answer: 0
        },
        {
          english: "Which is the smallest number?",
          hausa: "Wace ce mafi ƙanƙantar lamba?",
          options: ["5", "1", "3"],
          answer: 1
        }
      ]
    },

    2: {
      topic: {
        english: "Numbers 1–10",
        hausa: "Lambobi 1–10"
      },
      objectives: {
        english: ["Count from 1 to 10.", "Recognise numbers 1–10.", "Match numbers with objects."],
        hausa: ["Ƙirga daga 1 zuwa 10.", "Gane lambobi 1–10.", "Haɗa lambobi da abubuwa."]
      },
      notes: {
        english: "Numbers help us count things. 1 – One, 2 – Two, 3 – Three, 4 – Four, 5 – Five, 6 – Six, 7 – Seven, 8 – Eight, 9 – Nine, 10 – Ten. Examples: one book, two pencils and three cups.",
        hausa: "Lambobi suna taimaka mana wajen ƙirga abubuwa. 1 – Ɗaya, 2 – Biyu, 3 – Uku, 4 – Huɗu, 5 – Biyar, 6 – Shida, 7 – Bakwai, 8 – Takwas, 9 – Tara, 10 – Goma. Misalai: littafi ɗaya, fensir biyu da kofuna uku."
      },
      activity: {
        english: "The teacher shows ten objects. Pupils count them aloud.",
        hausa: "Malami ya nuna abubuwa guda goma. Ɗalibai su ƙirga su da murya."
      },
      classwork: {
        english: "1. Write numbers 1–10. 2. Draw 4 circles. 3. What comes after 6? 4. What comes before 9?",
        hausa: "1. Rubuta lambobi 1–10. 2. Zana da'irori guda 4. 3. Wace lamba ce ke zuwa bayan 6? 4. Wace lamba ce ke zuwa kafin 9?"
      },
      homework: {
        english: "Count ten objects at home and write their numbers.",
        hausa: "A gida, ƙirga abubuwa guda goma sannan ka rubuta lambobinsu."
      },
      quiz: [
        { english: "Which number comes after 5?", hausa: "Wace lamba ce ke zuwa bayan 5?", options: ["4", "6", "8"], answer: 1 },
        { english: "Which number means ten?", hausa: "Wace lamba ce take nufin goma?", options: ["7", "9", "10"], answer: 2 },
        { english: "What comes before 3?", hausa: "Wace lamba ce ke zuwa kafin 3?", options: ["2", "4", "5"], answer: 0 },
        { english: "How many fingers are on one hand?", hausa: "Yatsu nawa ne a hannu ɗaya?", options: ["5", "8", "10"], answer: 0 },
        { english: "Which is the biggest number?", hausa: "Wace ce lamba mafi girma?", options: ["2", "6", "10"], answer: 2 }
      ]
    },

    3: {
      topic: {
        english: "Counting Numbers 11–20",
        hausa: "Ƙirga Lambobi 11–20"
      },
      objectives: {
        english: ["Count from 11 to 20.", "Recognise numbers 11–20.", "Arrange numbers in order."],
        hausa: ["Ƙirga daga 11 zuwa 20.", "Gane lambobi 11–20.", "Jera lambobi bisa tsari."]
      },
      notes: {
        english: "After counting from 1 to 10, we continue: 11 – Eleven, 12 – Twelve, 13 – Thirteen, 14 – Fourteen, 15 – Fifteen, 16 – Sixteen, 17 – Seventeen, 18 – Eighteen, 19 – Nineteen, 20 – Twenty. We use numbers to count people and objects.",
        hausa: "Bayan mun ƙirga daga 1 zuwa 10, za mu ci gaba da: 11 – Goma sha ɗaya, 12 – Goma sha biyu, 13 – Goma sha uku, 14 – Goma sha huɗu, 15 – Goma sha biyar, 16 – Goma sha shida, 17 – Goma sha bakwai, 18 – Goma sha takwas, 19 – Goma sha tara, 20 – Ashirin. Muna amfani da lambobi wajen ƙirga mutane da abubuwa."
      },
      activity: {
        english: "The teacher writes numbers 11–20 on the board. Pupils read them aloud and arrange number cards in order.",
        hausa: "Malami ya rubuta lambobi 11–20 a allo. Ɗalibai su karanta su da murya sannan su jera katunan lambobi bisa tsari."
      },
      classwork: {
        english: "1. Write numbers 11–20. 2. What comes after 15? 3. What comes before 18? 4. Arrange 14, 11, 13, 12 in order.",
        hausa: "1. Rubuta lambobi 11–20. 2. Wace lamba ce ke zuwa bayan 15? 3. Wace lamba ce ke zuwa kafin 18? 4. Jera 14, 11, 13, 12 bisa tsari."
      },
      homework: {
        english: "Count 20 objects at home. Write numbers 11–20 in your exercise book.",
        hausa: "A gida, ƙirga abubuwa guda 20. Rubuta lambobi 11–20 a littafin rubutu."
      },
      quiz: [
        { english: "Which number comes after 12?", hausa: "Wace lamba ce ke zuwa bayan 12?", options: ["11", "13", "15"], answer: 1 },
        { english: "What number means fifteen?", hausa: "Wace lamba ce take nufin goma sha biyar?", options: ["15", "17", "20"], answer: 0 },
        { english: "Which number comes before 18?", hausa: "Wace lamba ce ke zuwa kafin 18?", options: ["17", "19", "16"], answer: 0 },
        { english: "What comes after 19?", hausa: "Me ke zuwa bayan 19?", options: ["18", "20", "17"], answer: 1 },
        { english: "Which is the smallest number?", hausa: "Wace ce mafi ƙanƙantar lamba?", options: ["20", "14", "11"], answer: 2 }
      ]
    },

    4: {
      topic: {
        english: "Writing Numbers 1–10",
        hausa: "Rubuta Lambobi 1–10"
      },
      objectives: {
        english: ["Recognise numbers 1–10.", "Write numbers 1–10 correctly.", "Match numbers with quantities."],
        hausa: ["Gane lambobi 1–10.", "Rubuta lambobi 1–10 daidai.", "Haɗa lambobi da adadin abubuwa."]
      },
      notes: {
        english: "Numbers can be written using figures. 1 – One, 2 – Two, 3 – Three, 4 – Four, 5 – Five, 6 – Six, 7 – Seven, 8 – Eight, 9 – Nine, 10 – Ten. We write numbers to show how many things we have.",
        hausa: "Ana rubuta lambobi da alamu na musamman. 1 – Ɗaya, 2 – Biyu, 3 – Uku, 4 – Huɗu, 5 – Biyar, 6 – Shida, 7 – Bakwai, 8 – Takwas, 9 – Tara, 10 – Goma. Muna rubuta lambobi domin nuna adadin abubuwan da muke da su."
      },
      activity: {
        english: "The teacher writes numbers 1–10 on the board. Pupils practise writing each number in their exercise books.",
        hausa: "Malami ya rubuta lambobi 1–10 a allo. Ɗalibai su yi atisayen rubuta kowace lamba a littattafansu."
      },
      classwork: {
        english: "1. Write numbers 1–5. 2. Write numbers 6–10. 3. What comes after 7? 4. What comes before 5? 5. Draw 4 circles and write the number 4.",
        hausa: "1. Rubuta lambobi 1–5. 2. Rubuta lambobi 6–10. 3. Me ke zuwa bayan 7? 4. Me ke zuwa kafin 5? 5. Zana da'irori guda 4 sannan ka rubuta lamba 4."
      },
      homework: {
        english: "Practise writing numbers 1–10 three times in your exercise book.",
        hausa: "Yi atisayen rubuta lambobi 1–10 sau uku a littafin rubutunka."
      },
      quiz: [
        { english: "Which number means five?", hausa: "Wace lamba ce take nufin biyar?", options: ["3", "5", "8"], answer: 1 },
        { english: "What comes after 8?", hausa: "Me ke zuwa bayan 8?", options: ["7", "9", "6"], answer: 1 },
        { english: "What comes before 4?", hausa: "Me ke zuwa kafin 4?", options: ["3", "5", "6"], answer: 0 },
        { english: "How do we write ten?", hausa: "Yaya ake rubuta goma?", options: ["8", "9", "10"], answer: 2 },
        { english: "How many circles should you draw if asked to draw 3?", hausa: "Da'irori nawa za ka zana idan aka ce ka zana 3?", options: ["2", "3", "5"], answer: 1 }
      

      ]
    },

    2: {
      topic: {
        english: "Numbers 1–10",
        hausa: "Lambobi 1–10"
      },
      objectives: {
        english: ["Count from 1 to 10.", "Recognise numbers 1–10.", "Match numbers with objects."],
        hausa: ["Ƙirga daga 1 zuwa 10.", "Gane lambobi 1–10.", "Haɗa lambobi da abubuwa."]
      },
      notes: {
        english: "Numbers help us count things. 1 – One, 2 – Two, 3 – Three, 4 – Four, 5 – Five, 6 – Six, 7 – Seven, 8 – Eight, 9 – Nine, 10 – Ten. Examples: one book, two pencils and three cups.",
        hausa: "Lambobi suna taimaka mana wajen ƙirga abubuwa. 1 – Ɗaya, 2 – Biyu, 3 – Uku, 4 – Huɗu, 5 – Biyar, 6 – Shida, 7 – Bakwai, 8 – Takwas, 9 – Tara, 10 – Goma. Misalai: littafi ɗaya, fensir biyu da kofuna uku."
      },
      activity: {
        english: "The teacher shows ten objects. Pupils count them aloud.",
        hausa: "Malami ya nuna abubuwa guda goma. Ɗalibai su ƙirga su da murya."
      },
      classwork: {
        english: "1. Write numbers 1–10. 2. Draw 4 circles. 3. What comes after 6? 4. What comes before 9?",
        hausa: "1. Rubuta lambobi 1–10. 2. Zana da'irori guda 4. 3. Wace lamba ce ke zuwa bayan 6? 4. Wace lamba ce ke zuwa kafin 9?"
      },
      homework: {
        english: "Count ten objects at home and write their numbers.",
        hausa: "A gida, ƙirga abubuwa guda goma sannan ka rubuta lambobinsu."
      },
      quiz: [
        { english: "Which number comes after 5?", hausa: "Wace lamba ce ke zuwa bayan 5?", options: ["4", "6", "8"], answer: 1 },
        { english: "Which number means ten?", hausa: "Wace lamba ce take nufin goma?", options: ["7", "9", "10"], answer: 2 },
        { english: "What comes before 3?", hausa: "Wace lamba ce ke zuwa kafin 3?", options: ["2", "4", "5"], answer: 0 },
        { english: "How many fingers are on one hand?", hausa: "Yatsu nawa ne a hannu ɗaya?", options: ["5", "8", "10"], answer: 0 },
        { english: "Which is the biggest number?", hausa: "Wace ce lamba mafi girma?", options: ["2", "6", "10"], answer: 2 }
      ]
    },

    3: {
      topic: {
        english: "Counting Numbers 11–20",
        hausa: "Ƙirga Lambobi 11–20"
      },
      objectives: {
        english: ["Count from 11 to 20.", "Recognise numbers 11–20.", "Arrange numbers in order."],
        hausa: ["Ƙirga daga 11 zuwa 20.", "Gane lambobi 11–20.", "Jera lambobi bisa tsari."]
      },
      notes: {
        english: "After counting from 1 to 10, we continue: 11 – Eleven, 12 – Twelve, 13 – Thirteen, 14 – Fourteen, 15 – Fifteen, 16 – Sixteen, 17 – Seventeen, 18 – Eighteen, 19 – Nineteen, 20 – Twenty. We use numbers to count people and objects.",
        hausa: "Bayan mun ƙirga daga 1 zuwa 10, za mu ci gaba da: 11 – Goma sha ɗaya, 12 – Goma sha biyu, 13 – Goma sha uku, 14 – Goma sha huɗu, 15 – Goma sha biyar, 16 – Goma sha shida, 17 – Goma sha bakwai, 18 – Goma sha takwas, 19 – Goma sha tara, 20 – Ashirin. Muna amfani da lambobi wajen ƙirga mutane da abubuwa."
      },
      activity: {
        english: "The teacher writes numbers 11–20 on the board. Pupils read them aloud and arrange number cards in order.",
        hausa: "Malami ya rubuta lambobi 11–20 a allo. Ɗalibai su karanta su da murya sannan su jera katunan lambobi bisa tsari."
      },
      classwork: {
        english: "1. Write numbers 11–20. 2. What comes after 15? 3. What comes before 18? 4. Arrange 14, 11, 13, 12 in order.",
        hausa: "1. Rubuta lambobi 11–20. 2. Wace lamba ce ke zuwa bayan 15? 3. Wace lamba ce ke zuwa kafin 18? 4. Jera 14, 11, 13, 12 bisa tsari."
      },
      homework: {
        english: "Count 20 objects at home. Write numbers 11–20 in your exercise book.",
        hausa: "A gida, ƙirga abubuwa guda 20. Rubuta lambobi 11–20 a littafin rubutu."
      },
      quiz: [
        { english: "Which number comes after 12?", hausa: "Wace lamba ce ke zuwa bayan 12?", options: ["11", "13", "15"], answer: 1 },
        { english: "What number means fifteen?", hausa: "Wace lamba ce take nufin goma sha biyar?", options: ["15", "17", "20"], answer: 0 },
        { english: "Which number comes before 18?", hausa: "Wace lamba ce ke zuwa kafin 18?", options: ["17", "19", "16"], answer: 0 },
        { english: "What comes after 19?", hausa: "Me ke zuwa bayan 19?", options: ["18", "20", "17"], answer: 1 },
        { english: "Which is the smallest number?", hausa: "Wace ce mafi ƙanƙantar lamba?", options: ["20", "14", "11"], answer: 2 }
      ]
    },

    4: {
      topic: {
        english: "Writing Numbers 1–10",
        hausa: "Rubuta Lambobi 1–10"
      },
      objectives: {
        english: ["Recognise numbers 1–10.", "Write numbers 1–10 correctly.", "Match numbers with quantities."],
        hausa: ["Gane lambobi 1–10.", "Rubuta lambobi 1–10 daidai.", "Haɗa lambobi da adadin abubuwa."]
      },
      notes: {
        english: "Numbers can be written using figures. 1 – One, 2 – Two, 3 – Three, 4 – Four, 5 – Five, 6 – Six, 7 – Seven, 8 – Eight, 9 – Nine, 10 – Ten. We write numbers to show how many things we have.",
        hausa: "Ana rubuta lambobi da alamu na musamman. 1 – Ɗaya, 2 – Biyu, 3 – Uku, 4 – Huɗu, 5 – Biyar, 6 – Shida, 7 – Bakwai, 8 – Takwas, 9 – Tara, 10 – Goma. Muna rubuta lambobi domin nuna adadin abubuwan da muke da su."
      },
      activity: {
        english: "The teacher writes numbers 1–10 on the board. Pupils practise writing each number in their exercise books.",
        hausa: "Malami ya rubuta lambobi 1–10 a allo. Ɗalibai su yi atisayen rubuta kowace lamba a littattafansu."
      },
      classwork: {
        english: "1. Write numbers 1–5. 2. Write numbers 6–10. 3. What comes after 7? 4. What comes before 5? 5. Draw 4 circles and write the number 4.",
        hausa: "1. Rubuta lambobi 1–5. 2. Rubuta lambobi 6–10. 3. Me ke zuwa bayan 7? 4. Me ke zuwa kafin 5? 5. Zana da'irori guda 4 sannan ka rubuta lamba 4."
      },
      homework: {
        english: "Practise writing numbers 1–10 three times in your exercise book.",
        hausa: "Yi atisayen rubuta lambobi 1–10 sau uku a littafin rubutunka."
      },
      quiz: [
        { english: "Which number means five?", hausa: "Wace lamba ce take nufin biyar?", options: ["3", "5", "8"], answer: 1 },
        { english: "What comes after 8?", hausa: "Me ke zuwa bayan 8?", options: ["7", "9", "6"], answer: 1 },
        { english: "What comes before 4?", hausa: "Me ke zuwa kafin 4?", options: ["3", "5", "6"], answer: 0 },
        { english: "How do we write ten?", hausa: "Yaya ake rubuta goma?", options: ["8", "9", "10"], answer: 2 },
        { english: "How many circles should you draw if asked to draw 3?", hausa: "Da'irori nawa za ka zana idan aka ce ka zana 3?", options: ["2", "3", "5"], answer: 1 }
      ] 
     ]
    }
  },
  "English Language": {
    1: {
      topic: {
        english: "Greetings and Introducing Myself",
        hausa: "Gaisuwa da Gabatar da Kai"
      },
      objectives: {
        english: [
          "Greet people politely.",
          "Introduce themselves using simple sentences."
        ],
        hausa: [
          "Gaishe da mutane cikin ladabi.",
          "Gabatar da kansu ta amfani da jimloli masu sauƙi."
        ]
      },
      notes: {
        english: "Greetings are words we use when meeting people. Examples: Good morning, Good afternoon, Good evening and Hello. We can introduce ourselves by saying: My name is Ada. I am a pupil.",
        hausa: "Gaisuwa kalmomi ne da muke amfani da su idan muka haɗu da mutane. Misalai: Ina kwana, Ina wuni, Ina yini da Sannu. Za mu iya gabatar da kanmu ta hanyar cewa: Sunana Ada. Ni ɗalibi ne."
      },
      activity: {
        english: "The teacher greets the pupils and asks them to introduce themselves. Pupils practise greeting one another.",
        hausa: "Malami zai gaishe da ɗalibai ya tambaye su su gabatar da kansu. Ɗalibai za su yi atisayen gaisawa da juna."
      },
      classwork: {
        english: "1. Write two greetings. 2. Complete: My name is ____.",
        hausa: "1. Rubuta gaisuwa guda biyu. 2. Cika: Sunana ____."
      },
      homework: {
        english: "Practise greeting your parents and introduce yourself to someone at home.",
        hausa: "Yi atisayen gaishe da iyayenka kuma ka gabatar da kanka ga wani a gida."
      },
      quiz: [
        { english: "What do we say in the morning?", hausa: "Me muke cewa da safe?", options: ["Good morning", "Good night", "Goodbye"], answer: 0 },
        { english: "Which is a greeting?", hausa: "Wanne ne gaisuwa?", options: ["Table", "Hello", "Book"], answer: 1 },
        { english: "How do you introduce yourself?", hausa: "Yaya ake gabatar da kai?", options: ["My name is Ada", "Go away", "Sit down"], answer: 0 },
        { english: "What do we say when leaving?", hausa: "Me muke cewa idan za mu tafi?", options: ["Goodbye", "Good morning", "Welcome"], answer: 0 },
        { english: "Are greetings important?", hausa: "Shin gaisuwa tana da muhimmanci?", options: ["Yes", "No", "Never"], answer: 0 }
      ]
    },
    2: {
      topic: {
        english: "The Alphabet A–F",
        hausa: "Haruffan A–F"
      },
      objectives: {
        english: [
          "Recognise letters A–F.",
          "Pronounce letters A–F.",
          "Match letters with simple words."
        ],
        hausa: [
          "Gane haruffan A–F.",
          "Furta haruffan A–F.",
          "Haɗa haruffa da kalmomi masu sauƙi."
        ]
      },
      notes: {
        english: "The alphabet is made up of letters. The first six letters are A, B, C, D, E and F. Examples: A for Apple, B for Ball, C for Cat, D for Dog, E for Egg and F for Fish.",
        hausa: "Haruffan Turanci sun ƙunshi haruffa da dama. Haruffa shida na farko su ne A, B, C, D, E da F. Misalai: A na Apple, B na Ball, C na Cat, D na Dog, E na Egg da F na Fish."
      },
      activity: {
        english: "The teacher displays alphabet cards A–F and pictures. Pupils pronounce the letters and match them with the pictures.",
        hausa: "Malami zai nuna katunan haruffa A–F da hotuna. Ɗalibai za su furta haruffan su haɗa su da hotunan."
      },
      classwork: {
        english: "1. Write letters A–F. 2. Match A with Apple, B with Ball and C with Cat.",
        hausa: "1. Rubuta haruffa A–F. 2. Haɗa A da Apple, B da Ball, C da Cat."
      },
      homework: {
        english: "Write letters A–F three times each.",
        hausa: "Rubuta kowane harafi daga A–F sau uku."
      },
      quiz: [
        { english: "Which letter comes first?", hausa: "Wanne harafi ne na farko?", options: ["A", "B", "C"], answer: 0 },
        { english: "Which letter comes after B?", hausa: "Wanne harafi ne ke zuwa bayan B?", options: ["A", "C", "D"], answer: 1 },
        { english: "A is for ____.", hausa: "A na ____.", options: ["Ball", "Apple", "Cat"], answer: 1 },
        { english: "Which letter begins Dog?", hausa: "Wanne harafi ne ke fara kalmar Dog?", options: ["D", "E", "F"], answer: 0 },
        { english: "Which letter comes after E?", hausa: "Wanne harafi ne ke zuwa bayan E?", options: ["C", "D", "F"], answer: 2 }
      ]
    },
    3: {
      topic: {
        english: "The Alphabet G–L",
        hausa: "Haruffan G–L"
      },
      objectives: {
        english: [
          "Recognise letters G–L.",
          "Pronounce letters G–L.",
          "Match letters with simple words."
        ],
        hausa: [
          "Gane haruffan G–L.",
          "Furta haruffan G–L.",
          "Haɗa haruffa da kalmomi masu sauƙi."
        ]
      },
      notes: {
        english: "Today we learn six more letters: G, H, I, J, K and L. Examples: G for Goat, H for Hat, I for Ink, J for Jug, K for Kite and L for Lion.",
        hausa: "A yau za mu koyi wasu haruffa shida: G, H, I, J, K da L. Misalai: G na Goat, H na Hat, I na Ink, J na Jug, K na Kite da L na Lion."
      },
      activity: {
        english: "The teacher shows letters G–L and pictures. Pupils say each letter and name the matching object.",
        hausa: "Malami zai nuna haruffa G–L da hotuna. Ɗalibai za su faɗi kowane harafi da sunan abin da ya dace da shi."
      },
      classwork: {
        english: "1. Write letters G–L. 2. Match G with Goat, K with Kite and L with Lion.",
        hausa: "1. Rubuta haruffa G–L. 2. Haɗa G da Goat, K da Kite, L da Lion."
      },
      homework: {
        english: "Write letters G–L three times each.",
        hausa: "Rubuta kowane harafi daga G–L sau uku."
      },
      quiz: [
        { english: "Which letter comes after G?", hausa: "Wanne harafi ne ke zuwa bayan G?", options: ["F", "H", "I"], answer: 1 },
        { english: "G is for ____.", hausa: "G na ____.", options: ["Goat", "Ball", "Fish"], answer: 0 },
        { english: "Which letter begins Kite?", hausa: "Wanne harafi ne ke fara Kite?", options: ["J", "K", "L"], answer: 1 },
        { english: "Which letter comes before L?", hausa: "Wanne harafi ne ke gaban L?", options: ["J", "K", "M"], answer: 1 },
        { english: "L is for ____.", hausa: "L na ____.", options: ["Lion", "Apple", "Dog"], answer: 0 }
      ]
    },
    4: {
      topic: {
        english: "The Alphabet M–R",
        hausa: "Haruffan M–R"
      },
      objectives: {
        english: [
          "Recognise letters M–R.",
          "Pronounce letters M–R.",
          "Match letters with simple words."
        ],
        hausa: [
          "Gane haruffan M–R.",
          "Furta haruffan M–R.",
          "Haɗa haruffa da kalmomi masu sauƙi."
        ]
      },
      notes: {
        english: "Today we learn six more letters: M, N, O, P, Q and R. Examples: M for Mango, N for Nest, O for Orange, P for Pen, Q for Queen and R for Rat.",
        hausa: "A yau za mu koyi wasu haruffa shida: M, N, O, P, Q da R. Misalai: M na Mango, N na Nest, O na Orange, P na Pen, Q na Queen da R na Rat."
      },
      activity: {
        english: "The teacher displays letters M–R and pictures. Pupils pronounce each letter and identify the matching picture.",
        hausa: "Malami zai nuna haruffa M–R da hotuna. Ɗalibai za su furta kowane harafi su gano hoton da ya dace."
      },
      classwork: {
        english: "1. Write letters M–R. 2. Match M with Mango, P with Pen and R with Rat.",
        hausa: "1. Rubuta haruffa M–R. 2. Haɗa M da Mango, P da Pen, R da Rat."
      },
      homework: {
        english: "Write letters M–R three times each.",
        hausa: "Rubuta kowane harafi daga M–R sau uku."
      },
      quiz: [
        { english: "Which letter comes first in this group?", hausa: "Wanne harafi ne na farko a wannan rukuni?", options: ["M", "N", "O"], answer: 0 },
        { english: "M is for ____.", hausa: "M na ____.", options: ["Pen", "Mango", "Rat"], answer: 1 },
        { english: "Which letter begins Pen?", hausa: "Wanne harafi ne ke fara Pen?", options: ["O", "P", "Q"], answer: 1 },
        { english: "Which letter comes after Q?", hausa: "Wanne harafi ne ke zuwa bayan Q?", options: ["P", "R", "S"], answer: 1 },
        { english: "R is for ____.", hausa: "R na ____.", options: ["Rat", "Cat", "Goat"], answer: 0 }
      ]
    }
  };

let preferredLanguage = "english";

try {
  preferredLanguage = localStorage.getItem("lessonLanguage") || "english";
} catch (error) {}

if (!["english", "hausa"].includes(preferredLanguage)) {
  preferredLanguage = "english";
},
          
let currentLanguage = preferredLanguage;
let activeSubject = "";
let activeWeek = 0;

function saveLanguage() {
  try {
    localStorage.setItem("lessonLanguage", preferredLanguage);
  } catch (error) {}
}

function updateLanguageDisplay() {
  languageSelect.value = preferredLanguage;
  languageStatus.textContent =
    currentLanguage === "english" ? "English selected" : "An zaɓi Hausa";
  languageSwitch.textContent =
    currentLanguage === "english" ? "Switch to Hausa" : "Canza zuwa Turanci";
}

function addSection(title, content) {
  const heading = document.createElement("h4");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  weekStatus.append(heading, paragraph);
}

function renderLesson(subject, week) {
  activeSubject = subject;
  activeWeek = week;
  weekStatus.replaceChildren();

  const lesson = lessons[subject]?.[week];

  if (!lesson) {
    weekStatus.textContent = currentLanguage === "english"
      ? subject + " — Week " + week + ": Lesson notes are being prepared."
      : subject + " — Mako na " + week + ": Ana shirya bayanan darasin.";
    return;
  }

  const lang = currentLanguage;
  const labels = lang === "english"
    ? {
        objectives: "Learning objectives",
        notes: "Lesson notes",
        activity: "Class activity",
        classwork: "Classwork",
        homework: "Homework",
        quiz: "Quick quiz",
        answers: "Answer key"
      }
    : {
        objectives: "Manufofin koyo",
        notes: "Bayanan darasi",
        activity: "Aikin aji",
        classwork: "Aikin aji",
        homework: "Aikin gida",
        quiz: "Ƙaramin gwaji",
        answers: "Amsoshi"
      };

  const title = document.createElement("h3");
  title.textContent = lesson.topic[lang];
  weekStatus.appendChild(title);

  addSection(labels.objectives, lesson.objectives[lang].join(" "));
  addSection(labels.notes, lesson.notes[lang]);
  addSection(labels.activity, lesson.activity[lang]);
  addSection(labels.classwork, lesson.classwork[lang]);
  addSection(labels.homework, lesson.homework[lang]);

  const quizHeading = document.createElement("h4");
  quizHeading.textContent = labels.quiz;
  weekStatus.appendChild(quizHeading);

  lesson.quiz.forEach((item, index) => {
    const question = document.createElement("p");
    question.textContent =
      (index + 1) + ". " + item[lang] + " " +
      item.options.map((option, i) =>
        String.fromCharCode(65 + i) + ". " + option
      ).join("   ");

    weekStatus.appendChild(question);
  });

  const answer = document.createElement("p");
  answer.textContent = labels.answers + ": " +
    lesson.quiz.map((item, i) =>
      (i + 1) + ". " + String.fromCharCode(65 + item.answer)
    ).join("  ");

  weekStatus.appendChild(answer);
}

languageSelect.addEventListener("change", function () {
  preferredLanguage = languageSelect.value;
  currentLanguage = preferredLanguage;
  saveLanguage();
  updateLanguageDisplay();

  if (activeSubject) renderLesson(activeSubject, activeWeek);
});

languageSwitch.addEventListener("click", function () {
  currentLanguage = currentLanguage === "english" ? "hausa" : "english";
  preferredLanguage = currentLanguage;
  saveLanguage();
  updateLanguageDisplay();

  if (activeSubject) renderLesson(activeSubject, activeWeek);
});

updateLanguageDisplay();

document.getElementById("year").textContent = new Date().getFullYear();

function createButton(text, className, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.className = className;
  button.addEventListener("click", action);
  return button;
}

function showSubjects(filter = "") {
  subjectGrid.replaceChildren();

  const matches = subjects.filter(subject =>
    subject.toLowerCase().includes(filter.toLowerCase())
  );

  if (matches.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No learning area found.";
    subjectGrid.appendChild(message);
    return;
  }

  matches.forEach(subject => {
    subjectGrid.appendChild(
      createButton(subject, "subject-button", () => showWeeks(subject))
    );
  });
}

function showWeeks(subject) {
  selectedSubject.textContent = subject;
  weekGrid.replaceChildren();

  for (let week = 1; week <= 13; week++) {
    weekGrid.appendChild(
      createButton("Week " + week, "week-button",
        () => renderLesson(subject, week))
    );
  }

  weekStatus.textContent = currentLanguage === "english"
    ? "Choose a week to view its lesson."
    : "Zaɓi mako domin ganin darasinsa.";

  lessonDetail.classList.remove("hidden");
  lessonDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

searchInput.addEventListener("input", event => {
  showSubjects(event.target.value);
});

showSubjects();

      
        
       
              

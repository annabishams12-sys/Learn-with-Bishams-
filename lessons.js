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
  
    5: {
      topic: {
        english: "Counting Numbers 21–30",
        hausa: "Ƙirga Lambobi 21–30"
      },
      objectives: {
        english: ["Count from 21 to 30.", "Recognise numbers 21–30.", "Arrange numbers in the correct order."],
        hausa: ["Ƙirga daga 21 zuwa 30.", "Gane lambobi 21–30.", "Jera lambobi bisa tsari."]
      },
      notes: {
        english: "After 20, we count 21, 22, 23, 24, 25, 26, 27, 28, 29 and 30. We use these numbers to count people and objects.",
        hausa: "Bayan 20, muna ƙirga 21, 22, 23, 24, 25, 26, 27, 28, 29 da 30. Muna amfani da waɗannan lambobi wajen ƙirga mutane da abubuwa."
      },
      activity: {
        english: "The teacher writes 21–30 on the board. Pupils read the numbers and arrange number cards in order.",
        hausa: "Malami ya rubuta 21–30 a allo. Ɗalibai su karanta lambobin kuma su jera katunan lambobi bisa tsari."
      },
      classwork: {
        english: "1. Write numbers 21–30. 2. What comes after 25? 3. What comes before 29? 4. Arrange 23, 21, 24, 22 in order.",
        hausa: "1. Rubuta lambobi 21–30. 2. Me ke zuwa bayan 25? 3. Me ke zuwa kafin 29? 4. Jera 23, 21, 24, 22 bisa tsari."
      },
      homework: {
        english: "Write numbers 21–30 in your exercise book.",
        hausa: "Rubuta lambobi 21–30 a littafin rubutunka."
      },
      quiz: [
        { english: "What comes after 21?", hausa: "Me ke zuwa bayan 21?", options: ["20", "22", "24"], answer: 1 },
        { english: "Which number comes before 25?", hausa: "Wace lamba ce ke zuwa kafin 25?", options: ["24", "26", "27"], answer: 0 },
        { english: "Which is the biggest number?", hausa: "Wace ce lamba mafi girma?", options: ["22", "28", "30"], answer: 2 },
        { english: "What comes after 29?", hausa: "Me ke zuwa bayan 29?", options: ["28", "30", "27"], answer: 1 },
        { english: "Which number is between 26 and 28?", hausa: "Wace lamba ce take tsakanin 26 da 28?", options: ["25", "27", "29"], answer: 1 }
      ]
    },

    6: {
      topic: {
        english: "Counting Numbers 31–40",
        hausa: "Ƙirga Lambobi 31–40"
      },
      objectives: {
        english: ["Count from 31 to 40.", "Recognise numbers 31–40.", "Write numbers 31–40 correctly."],
        hausa: ["Ƙirga daga 31 zuwa 40.", "Gane lambobi 31–40.", "Rubuta lambobi 31–40 daidai."]
      },
      notes: {
        english: "We continue counting after 30: 31, 32, 33, 34, 35, 36, 37, 38, 39 and 40. We can use numbers to count books, pencils and other things.",
        hausa: "Muna ci gaba da ƙirga bayan 30: 31, 32, 33, 34, 35, 36, 37, 38, 39 da 40. Za mu iya amfani da lambobi wajen ƙirga littattafai, fensir da sauran abubuwa."
      },
      activity: {
        english: "The teacher displays number cards from 31 to 40. Pupils read them aloud and write them in their books.",
        hausa: "Malami ya nuna katunan lambobi daga 31 zuwa 40. Ɗalibai su karanta su da murya kuma su rubuta su a littattafansu."
      },
      classwork: {
        english: "1. Write numbers 31–40. 2. What comes after 35? 3. What comes before 39? 4. Fill in: 36, 37, __, 39.",
        hausa: "1. Rubuta lambobi 31–40. 2. Me ke zuwa bayan 35? 3. Me ke zuwa kafin 39? 4. Cika: 36, 37, __, 39."
      },
      homework: {
        english: "Practise writing numbers 31–40 two times.",
        hausa: "Yi atisayen rubuta lambobi 31–40 sau biyu."
      },
      quiz: [
        { english: "What comes after 31?", hausa: "Me ke zuwa bayan 31?", options: ["30", "32", "34"], answer: 1 },
        { english: "What comes before 36?", hausa: "Me ke zuwa kafin 36?", options: ["35", "37", "38"], answer: 0 },
        { english: "Which number comes after 39?", hausa: "Wace lamba ce ke zuwa bayan 39?", options: ["38", "40", "41"], answer: 1 },
        { english: "Which is the smallest number?", hausa: "Wace ce mafi ƙanƙantar lamba?", options: ["34", "31", "40"], answer: 1 },
        { english: "Fill in: 36, 37, __.", hausa: "Cika: 36, 37, __.", options: ["39", "35", "40"], answer: 0 }
      ]
    },

    7: {
      topic: {
        english: "Counting Numbers 41–50",
        hausa: "Ƙirga Lambobi 41–50"
      },
      objectives: {
        english: ["Count from 41 to 50.", "Recognise numbers 41–50.", "Arrange numbers in order."],
        hausa: ["Ƙirga daga 41 zuwa 50.", "Gane lambobi 41–50.", "Jera lambobi bisa tsari."]
      },
      notes: {
        english: "After 40, we count 41, 42, 43, 44, 45, 46, 47, 48, 49 and 50. These numbers help us count larger groups of objects.",
        hausa: "Bayan 40, muna ƙirga 41, 42, 43, 44, 45, 46, 47, 48, 49 da 50. Waɗannan lambobi suna taimaka mana wajen ƙirga abubuwa masu yawa."
      },
      activity: {
        english: "The teacher counts from 41 to 50 with the pupils. Pupils arrange number cards in the correct order.",
        hausa: "Malami ya ƙirga daga 41 zuwa 50 tare da ɗalibai. Ɗalibai su jera katunan lambobi bisa tsari."
      },
      classwork: {
        english: "1. Write numbers 41–50. 2. What comes after 45? 3. What comes before 49? 4. Fill in: 47, 48, __, 50.",
        hausa: "1. Rubuta lambobi 41–50. 2. Me ke zuwa bayan 45? 3. Me ke zuwa kafin 49? 4. Cika: 47, 48, __, 50."
      },
      homework: {
        english: "Write numbers 41–50 and read them aloud.",
        hausa: "Rubuta lambobi 41–50 kuma ka karanta su da murya."
      },
      quiz: [
        { english: "What comes after 41?", hausa: "Me ke zuwa bayan 41?", options: ["40", "42", "44"], answer: 1 },
        { english: "Which number comes before 45?", hausa: "Wace lamba ce ke zuwa kafin 45?", options: ["44", "46", "47"], answer: 0 },
        { english: "What comes after 49?", hausa: "Me ke zuwa bayan 49?", options: ["48", "50", "51"], answer: 1 },
        { english: "Which is the biggest number?", hausa: "Wace ce lamba mafi girma?", options: ["43", "48", "50"], answer: 2 },
        { english: "Fill in: 46, 47, __, 49.", hausa: "Cika: 46, 47, __, 49.", options: ["45", "48", "50"], answer: 1 }
      ]
    },
  
    8: {
      topic: {
        english: "Comparing and Ordering Numbers",
        hausa: "Kwatanta da Jera Lambobi"
      },
      objectives: {
        english: ["Compare two numbers.", "Identify bigger and smaller numbers.", "Arrange numbers from smallest to biggest."],
        hausa: ["Kwatanta lambobi biyu.", "Gane lamba mafi girma da mafi ƙanƙanta.", "Jera lambobi daga ƙarami zuwa babba."]
      },
      notes: {
        english: "We compare numbers to know which is bigger or smaller. Example: 5 is bigger than 3. 2 is smaller than 4. We can arrange numbers from smallest to biggest: 1, 2, 3, 4, 5.",
        hausa: "Muna kwatanta lambobi domin sanin wacce ta fi girma ko ƙanƙanta. Misali: 5 ya fi 3 girma. 2 ya fi 4 ƙanƙanta. Za mu iya jera lambobi daga ƙarami zuwa babba: 1, 2, 3, 4, 5."
      },
      activity: {
        english: "The teacher shows groups of objects and asks pupils to identify which group has more or fewer objects.",
        hausa: "Malami ya nuna rukunin abubuwa kuma ya tambayi ɗalibai wane rukuni ne yake da abubuwa da yawa ko kaɗan."
      },
      classwork: {
        english: "1. Which is bigger: 4 or 2? 2. Which is smaller: 1 or 3? 3. Arrange 3, 1, 2 from smallest to biggest.",
        hausa: "1. Wanne ya fi girma: 4 ko 2? 2. Wanne ya fi ƙanƙanta: 1 ko 3? 3. Jera 3, 1, 2 daga ƙarami zuwa babba."
      },
      homework: {
        english: "Compare these pairs: 5 and 2; 3 and 1; 4 and 5.",
        hausa: "Kwatanta waɗannan lambobi: 5 da 2; 3 da 1; 4 da 5."
      },
      quiz: [
        { english: "Which number is bigger?", hausa: "Wace lamba ce ta fi girma?", options: ["2", "5", "1"], answer: 1 },
        { english: "Which number is smaller?", hausa: "Wace lamba ce ta fi ƙanƙanta?", options: ["4", "2", "5"], answer: 1 },
        { english: "Which is bigger: 3 or 1?", hausa: "Wanne ya fi girma: 3 ko 1?", options: ["3", "1", "Both"], answer: 0 },
        { english: "What comes first when counting?", hausa: "Wace lamba ce ke zuwa farko yayin ƙirga?", options: ["3", "2", "1"], answer: 2 },
        { english: "Arrange from smallest: 3, 1, 2.", hausa: "Jera daga ƙarami: 3, 1, 2.", options: ["1, 2, 3", "3, 2, 1", "2, 3, 1"], answer: 0 }
      ]
    },

    9: {
      topic: {
        english: "Introduction to Addition (Within 5)",
        hausa: "Gabatarwa ga Haɗa Lambobi (Cikin 5)"
      },
      objectives: {
        english: ["Understand the meaning of addition.", "Add numbers within 5.", "Use objects to solve simple addition problems."],
        hausa: ["Fahimtar ma'anar haɗa lambobi.", "Haɗa lambobi cikin 5.", "Amfani da abubuwa wajen warware sauƙaƙan tambayoyin haɗawa."]
      },
      notes: {
        english: "Addition means putting numbers together to get a total. The plus sign (+) means add. Example: 2 + 1 = 3. If we have 2 oranges and get 1 more, we have 3 oranges.",
        hausa: "Haɗa lambobi yana nufin tara lambobi domin samun jimilla. Alamar (+) tana nufin haɗawa. Misali: 2 + 1 = 3. Idan muna da lemu 2 aka ƙara mana 1, muna da lemu 3."
      },
      activity: {
        english: "The teacher uses bottle tops or stones to show simple addition. Pupils count the objects together.",
        hausa: "Malami ya yi amfani da murfin kwalba ko duwatsu wajen nuna haɗa lambobi. Ɗalibai su ƙirga abubuwan tare."
      },
      classwork: {
        english: "Solve: 1. 1 + 1 = __  2. 2 + 1 = __  3. 2 + 2 = __  4. 3 + 1 = __",
        hausa: "Warware: 1. 1 + 1 = __  2. 2 + 1 = __  3. 2 + 2 = __  4. 3 + 1 = __"
      },
      homework: {
        english: "Solve: 1 + 2, 2 + 2, 3 + 2 and 4 + 1.",
        hausa: "Warware: 1 + 2, 2 + 2, 3 + 2 da 4 + 1."
      },
      quiz: [
        { english: "What is 1 + 1?", hausa: "Nawa ne 1 + 1?", options: ["1", "2", "3"], answer: 1 },
        { english: "What is 2 + 1?", hausa: "Nawa ne 2 + 1?", options: ["2", "3", "4"], answer: 1 },
        { english: "What is 2 + 2?", hausa: "Nawa ne 2 + 2?", options: ["3", "4", "5"], answer: 1 },
        { english: "What is 3 + 1?", hausa: "Nawa ne 3 + 1?", options: ["3", "4", "5"], answer: 1 },
        { english: "What is 4 + 1?", hausa: "Nawa ne 4 + 1?", options: ["4", "5", "6"], answer: 1 }
      ]
    },

    10: {
      topic: {
        english: "Addition (Within 10)",
        hausa: "Haɗa Lambobi (Cikin 10)"
      },
      objectives: {
        english: ["Add numbers with answers up to 10.", "Use the plus sign correctly.", "Solve simple addition questions."],
        hausa: ["Haɗa lambobi da jimillarsu ba ta wuce 10 ba.", "Amfani da alamar haɗawa daidai.", "Warware sauƙaƙan tambayoyin haɗawa."]
      },
      notes: {
        english: "We can add numbers to get answers up to 10. Examples: 3 + 2 = 5, 4 + 3 = 7 and 5 + 5 = 10. Addition means putting numbers together.",
        hausa: "Za mu iya haɗa lambobi domin samun amsar da ba ta wuce 10 ba. Misalai: 3 + 2 = 5, 4 + 3 = 7 da 5 + 5 = 10. Haɗawa yana nufin tara lambobi tare."
      },
      activity: {
        english: "Pupils use their fingers, stones or bottle tops to practise addition up to 10.",
        hausa: "Ɗalibai su yi amfani da yatsunsu, duwatsu ko murfin kwalba wajen atisayen haɗa lambobi har zuwa 10."
      },
      classwork: {
        english: "Solve: 1. 3 + 2 = __  2. 4 + 3 = __  3. 5 + 2 = __  4. 5 + 5 = __",
        hausa: "Warware: 1. 3 + 2 = __  2. 4 + 3 = __  3. 5 + 2 = __  4. 5 + 5 = __"
      },
      homework: {
        english: "Solve: 2 + 5, 4 + 4, 6 + 2 and 7 + 3.",
        hausa: "Warware: 2 + 5, 4 + 4, 6 + 2 da 7 + 3."
      },
      quiz: [
        { english: "What is 3 + 2?", hausa: "Nawa ne 3 + 2?", options: ["4", "5", "6"], answer: 1 },
        { english: "What is 4 + 3?", hausa: "Nawa ne 4 + 3?", options: ["6", "7", "8"], answer: 1 },
        { english: "What is 5 + 2?", hausa: "Nawa ne 5 + 2?", options: ["6", "7", "8"], answer: 1 },
        { english: "What is 5 + 5?", hausa: "Nawa ne 5 + 5?", options: ["9", "10", "8"], answer: 1 },
        { english: "What is 6 + 2?", hausa: "Nawa ne 6 + 2?", options: ["7", "8", "9"], answer: 1 }
      ]
    },
  
    11: {
      topic: {
        english: "Introduction to Subtraction (Within 5)",
        hausa: "Gabatarwa ga Rage Lambobi (Cikin 5)"
      },
      objectives: {
        english: ["Understand the meaning of subtraction.", "Recognise the minus sign (−).", "Subtract numbers within 5."],
        hausa: ["Fahimtar ma'anar rage lambobi.", "Gane alamar ragewa (−).", "Rage lambobi cikin 5."]
      },
      notes: {
        english: "Subtraction means taking away from a number. The minus sign (−) means subtract. Example: 3 − 1 = 2. If we have 3 oranges and take away 1, we have 2 left.",
        hausa: "Rage lambobi yana nufin cire wasu daga cikin adadi. Alamar (−) tana nufin ragewa. Misali: 3 − 1 = 2. Idan muna da lemu 3 muka cire 1, lemu 2 za su rage."
      },
      activity: {
        english: "The teacher uses five bottle tops. Take away one or two and let pupils count how many remain.",
        hausa: "Malami ya yi amfani da murfin kwalba guda biyar. Ya cire ɗaya ko biyu sannan ɗalibai su ƙirga waɗanda suka rage."
      },
      classwork: {
        english: "Solve: 1. 2 − 1 = __  2. 3 − 1 = __  3. 4 − 2 = __  4. 5 − 1 = __",
        hausa: "Warware: 1. 2 − 1 = __  2. 3 − 1 = __  3. 4 − 2 = __  4. 5 − 1 = __"
      },
      homework: {
        english: "Solve: 3 − 2, 4 − 1, 5 − 2 and 5 − 3.",
        hausa: "Warware: 3 − 2, 4 − 1, 5 − 2 da 5 − 3."
      },
      quiz: [
        { english: "What is 2 − 1?", hausa: "Nawa ne 2 − 1?", options: ["1", "2", "3"], answer: 0 },
        { english: "What is 3 − 1?", hausa: "Nawa ne 3 − 1?", options: ["1", "2", "3"], answer: 1 },
        { english: "What is 4 − 2?", hausa: "Nawa ne 4 − 2?", options: ["1", "2", "3"], answer: 1 },
        { english: "What is 5 − 1?", hausa: "Nawa ne 5 − 1?", options: ["3", "4", "5"], answer: 1 },
        { english: "What is 5 − 3?", hausa: "Nawa ne 5 − 3?", options: ["1", "2", "3"], answer: 1 }
      ]
    },

    12: {
      topic: {
        english: "Revision of Weeks 1–11",
        hausa: "Bita na Makonni 1–11"
      },
      objectives: {
        english: ["Revise counting numbers 1–50.", "Compare numbers and arrange them in order.", "Practise simple addition and subtraction."],
        hausa: ["Maimaita ƙirga lambobi 1–50.", "Kwatanta lambobi da jera su bisa tsari.", "Yin atisayen haɗawa da rage lambobi."]
      },
      notes: {
        english: "We have learnt to count numbers from 1 to 50, compare numbers, add numbers and subtract numbers. Let us practise what we have learnt.",
        hausa: "Mun koyi ƙirga lambobi daga 1 zuwa 50, kwatanta lambobi, haɗa lambobi da rage lambobi. Mu yi atisayen abin da muka koya."
      },
      activity: {
        english: "The teacher asks pupils to count, arrange number cards, and solve addition and subtraction questions.",
        hausa: "Malami ya tambayi ɗalibai su ƙirga, jera katunan lambobi, sannan su warware tambayoyin haɗawa da ragewa."
      },
      classwork: {
        english: "1. Count from 1 to 20. 2. What comes after 39? 3. Which is bigger: 5 or 3? 4. Solve 2 + 2. 5. Solve 5 − 2.",
        hausa: "1. Ƙirga daga 1 zuwa 20. 2. Me ke zuwa bayan 39? 3. Wanne ya fi girma: 5 ko 3? 4. Warware 2 + 2. 5. Warware 5 − 2."
      },
      homework: {
        english: "Practise counting 1–50 and solve five addition or subtraction questions.",
        hausa: "Yi atisayen ƙirga 1–50 kuma ka warware tambayoyin haɗawa ko ragewa guda biyar."
      },
      quiz: [
        { english: "What comes after 19?", hausa: "Me ke zuwa bayan 19?", options: ["18", "20", "21"], answer: 1 },
        { english: "What is 2 + 2?", hausa: "Nawa ne 2 + 2?", options: ["3", "4", "5"], answer: 1 },
        { english: "What is 5 − 2?", hausa: "Nawa ne 5 − 2?", options: ["2", "3", "4"], answer: 1 },
        { english: "Which is bigger: 4 or 2?", hausa: "Wanne ya fi girma: 4 ko 2?", options: ["4", "2", "Both"], answer: 0 },
        { english: "What comes after 49?", hausa: "Me ke zuwa bayan 49?", options: ["48", "50", "51"], answer: 1 }
      ]
    },

    13: {
      topic: {
        english: "First Term Assessment",
        hausa: "Jarabawar Zango na Farko"
      },
      objectives: {
        english: ["Assess pupils' understanding of numbers 1–50.", "Test simple addition and subtraction.", "Check pupils' ability to compare numbers."],
        hausa: ["Auna fahimtar ɗalibai kan lambobi 1–50.", "Gwada haɗawa da rage lambobi masu sauƙi.", "Duba iya kwatanta lambobi."]
      },
      notes: {
        english: "This week is for testing what we have learnt in Mathematics during Weeks 1–12.",
        hausa: "Wannan makon na gwada abin da muka koya a lissafi daga Mako na 1 zuwa na 12."
      },
      activity: {
        english: "The teacher gives pupils oral and written Mathematics questions.",
        hausa: "Malami ya ba ɗalibai tambayoyin lissafi na baki da na rubutu."
      },
      classwork: {
        english: "1. Write numbers 1–10. 2. What comes after 29? 3. Solve 3 + 2. 4. Solve 5 − 1. 5. Which is bigger: 4 or 2?",
        hausa: "1. Rubuta lambobi 1–10. 2. Me ke zuwa bayan 29? 3. Warware 3 + 2. 4. Warware 5 − 1. 5. Wanne ya fi girma: 4 ko 2?"
      },
      homework: {
        english: "Revise all Mathematics topics taught this term.",
        hausa: "Maimaita dukkan darussan lissafi da aka koya a wannan zangon."
      },
      quiz: [
        { english: "What comes after 30?", hausa: "Me ke zuwa bayan 30?", options: ["29", "31", "32"], answer: 1 },
        { english: "What is 3 + 2?", hausa: "Nawa ne 3 + 2?", options: ["4", "5", "6"], answer: 1 },
        { english: "What is 5 − 1?", hausa: "Nawa ne 5 − 1?", options: ["3", "4", "5"], answer: 1 },
        { english: "Which is smaller: 2 or 5?", hausa: "Wanne ya fi ƙanƙanta: 2 ko 5?", options: ["2", "5", "Both"], answer: 0 },
        { english: "What is 4 + 1?", hausa: "Nawa ne 4 + 1?", options: ["4", "5", "6"], answer: 1 }
      ]
    },   
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
   },

    5: {
      topic: {
        english: "The Alphabet S–Z",
        hausa: "Haruffan Turanci S–Z"
      },
      objectives: {
        english: ["Recognise letters S–Z.", "Pronounce letters S–Z correctly.", "Write uppercase and lowercase letters."],
        hausa: ["Gane haruffa S–Z.", "Furta haruffa S–Z daidai.", "Rubuta manyan da ƙananan haruffa."]
      },
      notes: {
        english: "The English alphabet has 26 letters. The last letters are S, T, U, V, W, X, Y and Z. Each letter has an uppercase and lowercase form: S s, T t, U u, V v, W w, X x, Y y, Z z.",
        hausa: "Haruffan Turanci guda 26 ne. Haruffa na ƙarshe su ne S, T, U, V, W, X, Y da Z. Kowane harafi yana da babban da ƙaramin rubutu."
      },
      activity: {
        english: "The teacher displays letters S–Z. Pupils repeat their names and practise writing them.",
        hausa: "Malami ya nuna haruffa S–Z. Ɗalibai su maimaita sunayensu kuma su yi atisayen rubuta su."
      },
      classwork: {
        english: "1. Write S–Z. 2. Write the small letters s–z. 3. Name three letters from S–Z.",
        hausa: "1. Rubuta S–Z. 2. Rubuta ƙananan haruffa s–z. 3. Faɗi haruffa uku daga S–Z."
      },
      homework: {
        english: "Write the uppercase and lowercase letters S–Z two times.",
        hausa: "Rubuta manyan da ƙananan haruffa S–Z sau biyu."
      },
      quiz: [
        { english: "Which letter comes after S?", hausa: "Wane harafi ne ke zuwa bayan S?", options: ["R", "T", "U"], answer: 1 },
        { english: "Which letter comes before V?", hausa: "Wane harafi ne ke zuwa kafin V?", options: ["U", "W", "X"], answer: 0 },
        { english: "Which is the last letter of the alphabet?", hausa: "Wane ne harafi na ƙarshe?", options: ["Y", "X", "Z"], answer: 2 },
        { english: "Which is the small letter of W?", hausa: "Wanne ne ƙaramin harafin W?", options: ["v", "w", "x"], answer: 1 },
        { english: "Which letter comes after X?", hausa: "Wane harafi ne ke zuwa bayan X?", options: ["W", "Y", "Z"], answer: 1 }
      ]
    },

    6: {
      topic: {
        english: "Vowels",
        hausa: "Wasulan Turanci"
      },
      objectives: {
        english: ["Identify the five vowels.", "Say the vowels correctly.", "Recognise vowels in simple words."],
        hausa: ["Gane wasulan Turanci guda biyar.", "Furta wasulan daidai.", "Gane wasula a cikin kalmomi masu sauƙi."]
      },
      notes: {
        english: "There are five vowels in English: A, E, I, O and U. Examples: A in apple, E in egg, I in ink, O in orange and U in umbrella.",
        hausa: "Akwai wasula guda biyar a Turanci: A, E, I, O da U. Misalai: A a cikin apple, E a cikin egg, I a cikin ink, O a cikin orange da U a cikin umbrella."
      },
      activity: {
        english: "The teacher writes A, E, I, O and U on the board. Pupils say the letters and identify them in simple words.",
        hausa: "Malami ya rubuta A, E, I, O da U a allo. Ɗalibai su faɗi haruffan kuma su gane su a cikin kalmomi masu sauƙi."
      },
      classwork: {
        english: "1. Write the five vowels. 2. Circle the vowels: A, B, E, C, I. 3. Name two words that begin with vowels.",
        hausa: "1. Rubuta wasula guda biyar. 2. Zagaye wasula: A, B, E, C, I. 3. Faɗi kalmomi biyu da suka fara da wasula."
      },
      homework: {
        english: "Write the five vowels and one word for each vowel.",
        hausa: "Rubuta wasula guda biyar da kalma ɗaya ga kowane wasali."
      },
      quiz: [
        { english: "How many vowels are in English?", hausa: "Wasula nawa ne a Turanci?", options: ["3", "5", "7"], answer: 1 },
        { english: "Which of these is a vowel?", hausa: "Wanne daga cikin waɗannan wasali ne?", options: ["B", "A", "C"], answer: 1 },
        { english: "Which letter is not a vowel?", hausa: "Wanne harafi ba wasali ba ne?", options: ["E", "O", "D"], answer: 2 },
        { english: "Which vowel begins the word apple?", hausa: "Wane wasali ne ke fara kalmar apple?", options: ["A", "E", "U"], answer: 0 },
        { english: "Which group contains all five vowels?", hausa: "Wane rukuni ne ya ƙunshi wasula guda biyar?", options: ["A, E, I, O, U", "B, C, D, F, G", "A, B, C, D, E"], answer: 0 }
      ]
    },

    7: {
      topic: {
        english: "Consonants",
        hausa: "Baƙaƙen Haruffan Turanci"
      },
      objectives: {
        english: ["Understand what consonants are.", "Identify consonants in the alphabet.", "Differentiate vowels from consonants."],
        hausa: ["Fahimtar ma'anar baƙaƙen haruffa.", "Gane baƙaƙen haruffa a cikin jerin haruffa.", "Bambance wasula da baƙaƙe."]
      },
      notes: {
        english: "Consonants are the letters that are not vowels. The English alphabet has 21 consonants. Examples are B, C, D, F, G and H. A, E, I, O and U are vowels.",
        hausa: "Baƙaƙen haruffa su ne haruffan da ba wasula ba. Akwai baƙaƙe guda 21 a cikin haruffan Turanci. Misalai su ne B, C, D, F, G da H. A, E, I, O da U wasula ne."
      },
      activity: {
        english: "The teacher writes letters on the board. Pupils identify and call out the consonants.",
        hausa: "Malami ya rubuta haruffa a allo. Ɗalibai su gane kuma su faɗi baƙaƙen haruffa."
      },
      classwork: {
        english: "1. Write five consonants. 2. Circle the consonants: A, B, E, C, D. 3. How many consonants are in the English alphabet?",
        hausa: "1. Rubuta baƙaƙe guda biyar. 2. Zagaye baƙaƙe: A, B, E, C, D. 3. Baƙaƙe nawa ne a haruffan Turanci?"
      },
      homework: {
        english: "Write ten consonants in your exercise book.",
        hausa: "Rubuta baƙaƙe guda goma a littafin rubutunka."
      },
      quiz: [
        { english: "How many consonants are in English?", hausa: "Baƙaƙe nawa ne a Turanci?", options: ["5", "21", "26"], answer: 1 },
        { english: "Which of these is a consonant?", hausa: "Wanne daga cikin waɗannan baƙi ne?", options: ["A", "E", "B"], answer: 2 },
        { english: "Which letter is a vowel?", hausa: "Wanne harafi ne wasali?", options: ["D", "I", "G"], answer: 1 },
        { english: "Is C a consonant?", hausa: "Shin C baƙi ne?", options: ["Yes", "No", "Maybe"], answer: 0 },
        { english: "Which group contains only consonants?", hausa: "Wane rukuni ne ya ƙunshi baƙaƙe kawai?", options: ["A, E, I", "B, C, D", "O, U, A"], answer: 1 }
      ]
    },

  
    8: {
      topic: {
        english: "Simple Words",
        hausa: "Kalmomi Masu Sauƙi"
      },
      objectives: {
        english: ["Read simple English words.", "Recognise familiar words.", "Write simple words correctly."],
        hausa: ["Karanta kalmomi masu sauƙi na Turanci.", "Gane kalmomin da aka saba amfani da su.", "Rubuta kalmomi masu sauƙi daidai."]
      },
      notes: {
        english: "A word is a group of letters that has meaning. Examples of simple words are: cat, dog, pen, cup, sun, bag and book. We use words to speak and write.",
        hausa: "Kalma ita ce haruffa da aka haɗa suka ba da ma'ana. Misalan kalmomi masu sauƙi su ne: cat, dog, pen, cup, sun, bag da book. Muna amfani da kalmomi wajen magana da rubutu."
      },
      activity: {
        english: "The teacher shows pictures of a cat, dog, pen and book. Pupils say and read their names.",
        hausa: "Malami ya nuna hotunan mage, kare, fensir da littafi. Ɗalibai su faɗi kuma su karanta sunayensu."
      },
      classwork: {
        english: "1. Read these words: cat, dog, pen. 2. Write three simple words. 3. Complete: b__g (bag).",
        hausa: "1. Karanta waɗannan kalmomi: cat, dog, pen. 2. Rubuta kalmomi masu sauƙi guda uku. 3. Cika: b__g (bag)."
      },
      homework: {
        english: "Write five simple English words and read them aloud.",
        hausa: "Rubuta kalmomi biyar masu sauƙi na Turanci kuma ka karanta su da murya."
      },
      quiz: [
        { english: "Which word means an animal that barks?", hausa: "Wace kalma ce ke nufin dabbar da ke yin haushi?", options: ["Dog", "Cup", "Book"], answer: 0 },
        { english: "Which is a simple English word?", hausa: "Wanne ne kalma mai sauƙi ta Turanci?", options: ["Pen", "Running", "Beautiful"], answer: 0 },
        { english: "Which word names something we read?", hausa: "Wace kalma ce ke nufin abin da muke karantawa?", options: ["Sun", "Book", "Dog"], answer: 1 },
        { english: "Complete: c__t.", hausa: "Cika: c__t.", options: ["a", "o", "u"], answer: 0 },
        { english: "Which word names something we write with?", hausa: "Wace kalma ce ke nufin abin da muke rubutu da shi?", options: ["Pen", "Dog", "Sun"], answer: 0 }
      ]
    },

    9: {
      topic: {
        english: "Naming Words (Nouns)",
        hausa: "Sunayen Mutane, Wurare da Abubuwa"
      },
      objectives: {
        english: ["Understand naming words.", "Identify names of people, places and things.", "Give examples of naming words."],
        hausa: ["Fahimtar kalmomin suna.", "Gane sunayen mutane, wurare da abubuwa.", "Bayar da misalan kalmomin suna."]
      },
      notes: {
        english: "Naming words are called nouns. They name people, places, animals and things. Examples: girl, teacher, school, dog, chair and book.",
        hausa: "Kalmomin suna ana kiran su nouns a Turanci. Suna ba mutane, wurare, dabbobi da abubuwa suna. Misalai: girl, teacher, school, dog, chair da book."
      },
      activity: {
        english: "The teacher points to objects in the classroom. Pupils name them and identify people and places around them.",
        hausa: "Malami ya nuna abubuwa a cikin aji. Ɗalibai su faɗi sunayensu kuma su gano mutane da wuraren da ke kewaye da su."
      },
      classwork: {
        english: "1. Write three names of people. 2. Name two things in the classroom. 3. Is school a naming word?",
        hausa: "1. Rubuta sunayen mutane guda uku. 2. Faɗi sunayen abubuwa biyu a cikin aji. 3. Shin school kalmar suna ce?"
      },
      homework: {
        english: "Write five naming words found at home.",
        hausa: "Rubuta kalmomin suna guda biyar da ake samu a gida."
      },
      quiz: [
        { english: "What are naming words called?", hausa: "Me ake kira kalmomin suna a Turanci?", options: ["Verbs", "Nouns", "Vowels"], answer: 1 },
        { english: "Which is a naming word?", hausa: "Wanne ne kalmar suna?", options: ["Run", "Chair", "Jump"], answer: 1 },
        { english: "Which word names a place?", hausa: "Wace kalma ce sunan wuri?", options: ["School", "Eat", "Sing"], answer: 0 },
        { english: "Which word names an animal?", hausa: "Wace kalma ce sunan dabba?", options: ["Dog", "Book", "Table"], answer: 0 },
        { english: "Is teacher a naming word?", hausa: "Shin teacher kalmar suna ce?", options: ["Yes", "No", "Maybe"], answer: 0 }
      ]
    },

    10: {
      topic: {
        english: "Action Words (Verbs)",
        hausa: "Kalmomin Aiki"
      },
      objectives: {
        english: ["Understand action words.", "Identify action words in sentences.", "Give examples of action words."],
        hausa: ["Fahimtar kalmomin aiki.", "Gane kalmomin aiki a cikin jimloli.", "Bayar da misalan kalmomin aiki."]
      },
      notes: {
        english: "Action words tell us what someone or something does. They are called verbs. Examples: run, eat, jump, sing, read and write. Example sentence: I run.",
        hausa: "Kalmomin aiki suna nuna abin da mutum ko abu yake yi. Ana kiran su verbs a Turanci. Misalai: run, eat, jump, sing, read da write. Misalin jimla: I run."
      },
      activity: {
        english: "The teacher acts out actions such as jumping, clapping and walking. Pupils say the action words.",
        hausa: "Malami ya nuna ayyuka kamar tsalle, tafa hannu da tafiya. Ɗalibai su faɗi kalmomin ayyukan."
      },
      classwork: {
        english: "1. Write three action words. 2. Circle the action word: I run. 3. Complete: I ____ food (eat).",
        hausa: "1. Rubuta kalmomin aiki guda uku. 2. Zagaye kalmar aiki: I run. 3. Cika: I ____ food (eat)."
      },
      homework: {
        english: "Write five action words and use two in simple sentences.",
        hausa: "Rubuta kalmomin aiki guda biyar kuma ka yi amfani da biyu a cikin jimloli masu sauƙi."
      },
      quiz: [
        { english: "What are action words called?", hausa: "Me ake kira kalmomin aiki a Turanci?", options: ["Nouns", "Verbs", "Vowels"], answer: 1 },
        { english: "Which is an action word?", hausa: "Wanne ne kalmar aiki?", options: ["Chair", "Run", "Book"], answer: 1 },
        { english: "Which word shows eating?", hausa: "Wace kalma ce ke nuna cin abinci?", options: ["Eat", "Table", "Bag"], answer: 0 },
        { english: "Find the action word: I jump.", hausa: "Nemo kalmar aiki: I jump.", options: ["I", "Jump", "Both"], answer: 1 },
        { english: "Which word shows singing?", hausa: "Wace kalma ce ke nuna waƙa?", options: ["Sing", "Pen", "School"], answer: 0 }
      ]
    },

  
    11: {
      topic: {
        english: "Making Simple Sentences",
        hausa: "Yin Sauƙaƙan Jimloli"
      },
      objectives: {
        english: ["Understand what a sentence is.", "Make simple English sentences.", "Use capital letters at the beginning of sentences."],
        hausa: ["Fahimtar ma'anar jimla.", "Yin sauƙaƙan jimloli na Turanci.", "Amfani da babban harafi a farkon jimla."]
      },
      notes: {
        english: "A sentence is a group of words that gives a complete meaning. Examples: I am a girl. This is a book. I can read. A sentence begins with a capital letter.",
        hausa: "Jimla ita ce rukuni na kalmomi da ke ba da cikakkiyar ma'ana. Misalai: I am a girl. This is a book. I can read. Jimla tana farawa da babban harafi."
      },
      activity: {
        english: "The teacher writes simple sentences on the board. Pupils read them aloud and make their own sentences.",
        hausa: "Malami ya rubuta sauƙaƙan jimloli a allo. Ɗalibai su karanta su da murya kuma su ƙirƙiri nasu jimlolin."
      },
      classwork: {
        english: "1. Make a sentence with 'book'. 2. Complete: I am a ____. 3. Write one sentence about yourself.",
        hausa: "1. Yi jimla da kalmar 'book'. 2. Cika: I am a ____. 3. Rubuta jimla ɗaya game da kanka."
      },
      homework: {
        english: "Write three simple sentences in your exercise book.",
        hausa: "Rubuta sauƙaƙan jimloli guda uku a littafin rubutunka."
      },
      quiz: [
        { english: "What is a sentence?", hausa: "Menene jimla?", options: ["A letter", "Words that give complete meaning", "A number"], answer: 1 },
        { english: "Which is a sentence?", hausa: "Wanne ne jimla?", options: ["Book", "I can read.", "A"], answer: 1 },
        { english: "Which letter begins a sentence?", hausa: "Wane irin harafi ne ke fara jimla?", options: ["Small letter", "Capital letter", "Number"], answer: 1 },
        { english: "Complete: I am a ____.", hausa: "Cika: I am a ____.", options: ["girl", "run", "eat"], answer: 0 },
        { english: "Which sentence is correct?", hausa: "Wace jimla ce daidai?", options: ["i am happy.", "I am happy.", "I happy am"], answer: 1 }
      ]
    },

    12: {
      topic: {
        english: "Punctuation Marks and Revision",
        hausa: "Alamomin Rubutu da Bita"
      },
      objectives: {
        english: ["Identify the full stop and question mark.", "Use punctuation marks in simple sentences.", "Revise topics learnt in Weeks 1–11."],
        hausa: ["Gane alamar cikawa da tambaya.", "Amfani da alamomin rubutu a jimloli masu sauƙi.", "Maimaita darussan Makonni 1–11."]
      },
      notes: {
        english: "Punctuation marks help us write correctly. A full stop (.) ends a statement. A question mark (?) ends a question. Examples: I am happy. What is your name? We can also revise letters, vowels, consonants, words, nouns, verbs and sentences.",
        hausa: "Alamomin rubutu suna taimaka mana wajen rubutu daidai. Alamar cikawa (.) tana ƙare jimla. Alamar tambaya (?) tana ƙare tambaya. Misalai: I am happy. What is your name? Za mu kuma maimaita haruffa, wasula, baƙaƙe, kalmomi, nouns, verbs da jimloli."
      },
      activity: {
        english: "The teacher writes sentences with missing punctuation marks. Pupils add the correct marks and read the sentences.",
        hausa: "Malami ya rubuta jimloli ba tare da alamomin rubutu ba. Ɗalibai su ƙara alamomin da suka dace kuma su karanta jimlolin."
      },
      classwork: {
        english: "1. Write a full stop. 2. Write a question mark. 3. Add the correct mark: I am happy __. 4. Add the correct mark: What is your name __.",
        hausa: "1. Rubuta alamar cikawa. 2. Rubuta alamar tambaya. 3. Ƙara alamar da ta dace: I am happy __. 4. Ƙara alamar da ta dace: What is your name __."
      },
      homework: {
        english: "Write two sentences ending with a full stop and one question ending with a question mark.",
        hausa: "Rubuta jimloli biyu da suka ƙare da alamar cikawa da tambaya ɗaya da ta ƙare da alamar tambaya."
      },
      quiz: [
        { english: "Which mark ends a statement?", hausa: "Wace alama ce ke ƙare jimlar bayani?", options: [".", "?", ","], answer: 0 },
        { english: "Which mark ends a question?", hausa: "Wace alama ce ke ƙare tambaya?", options: [".", "?", "!"], answer: 1 },
        { english: "Which is a vowel?", hausa: "Wanne ne wasali?", options: ["B", "A", "D"], answer: 1 },
        { english: "Which is an action word?", hausa: "Wanne ne kalmar aiki?", options: ["Run", "Chair", "Book"], answer: 0 },
        { english: "Which is a naming word?", hausa: "Wanne ne kalmar suna?", options: ["Jump", "Eat", "School"], answer: 2 }
      ]
    },

    13: {
      topic: {
        english: "First Term Assessment",
        hausa: "Jarabawar Zango na Farko"
      },
      objectives: {
        english: ["Assess pupils' knowledge of the alphabet.", "Test understanding of vowels and consonants.", "Assess simple words, sentences and punctuation."],
        hausa: ["Auna sanin ɗalibai game da haruffan Turanci.", "Gwada fahimtar wasula da baƙaƙe.", "Auna fahimtar kalmomi, jimloli da alamomin rubutu."]
      },
      notes: {
        english: "This week is for assessing what pupils have learnt in English Language during Weeks 1–12.",
        hausa: "Wannan makon na gwada abin da ɗalibai suka koya a Turanci daga Mako na 1 zuwa na 12."
      },
      activity: {
        english: "The teacher gives pupils oral and written English Language questions.",
        hausa: "Malami ya ba ɗalibai tambayoyin Turanci na baki da na rubutu."
      },
      classwork: {
        english: "1. Write the alphabet A–Z. 2. Name the five vowels. 3. Write three naming words. 4. Write two action words. 5. Make one simple sentence.",
        hausa: "1. Rubuta haruffa A–Z. 2. Faɗi wasula guda biyar. 3. Rubuta kalmomin suna guda uku. 4. Rubuta kalmomin aiki guda biyu. 5. Yi jimla ɗaya mai sauƙi."
      },
      homework: {
        english: "Revise all English Language topics taught this term.",
        hausa: "Maimaita dukkan darussan Turanci da aka koya a wannan zangon."
      },
      quiz: [
        { english: "How many letters are in the English alphabet?", hausa: "Haruffa nawa ne a Turanci?", options: ["20", "26", "30"], answer: 1 },
        { english: "Which group contains the five vowels?", hausa: "Wane rukuni ne ya ƙunshi wasula guda biyar?", options: ["A, E, I, O, U", "B, C, D, F, G", "S, T, V, W, X"], answer: 0 },
        { english: "Which is a naming word?", hausa: "Wanne ne kalmar suna?", options: ["Run", "Book", "Jump"], answer: 1 },
        { english: "Which is an action word?", hausa: "Wanne ne kalmar aiki?", options: ["Chair", "Eat", "School"], answer: 1 },
        { english: "Which mark ends a question?", hausa: "Wace alama ce ke ƙare tambaya?", options: [".", "?", ","], answer: 1 }
      ]
    },
  },
      
  "Basic Science": {
    1: {
      topic: {
        english: "Living and Non-living Things",
        hausa: "Abubuwa Masu Rai da Marasa Rai"
      },
      objectives: {
        english: [
          "Identify living things.",
          "Identify non-living things.",
          "Give examples of living and non-living things."
        ],
        hausa: [
          "Gane abubuwa masu rai.",
          "Gane abubuwa marasa rai.",
          "Bayar da misalan abubuwa masu rai da marasa rai."
        ]
      },
      notes: {
        english: "Living things are things that have life. They grow, breathe and need food and water. Examples are humans, goats, birds and trees. Non-living things do not have life. Examples are stones, chairs, tables and pencils.",
        hausa: "Abubuwa masu rai suna da rai. Suna girma, suna numfashi kuma suna buƙatar abinci da ruwa. Misalai su ne mutane, awaki, tsuntsaye da bishiyoyi. Abubuwa marasa rai ba su da rai. Misalai su ne duwatsu, kujeru, tebura da fensir."
      },
      activity: {
        english: "The teacher shows pictures of living and non-living things. Pupils identify each one.",
        hausa: "Malami ya nuna hotunan abubuwa masu rai da marasa rai. Ɗalibai su gane kowanne."
      },
      classwork: {
        english: "1. Mention two living things. 2. Mention two non-living things. 3. Is a goat living or non-living?",
        hausa: "1. Faɗi abubuwa biyu masu rai. 2. Faɗi abubuwa biyu marasa rai. 3. Akuya tana da rai ko ba ta da rai?"
      },
      homework: {
        english: "Draw two living things and two non-living things.",
        hausa: "Zana abubuwa biyu masu rai da abubuwa biyu marasa rai."
      },
      quiz: [
        { english: "Which is a living thing?", hausa: "Wanne abu ne mai rai?", options: ["Goat", "Stone", "Chair"], answer: 0 },
        { english: "Which is non-living?", hausa: "Wanne abu ne marar rai?", options: ["Bird", "Table", "Tree"], answer: 1 },
        { english: "Do living things grow?", hausa: "Shin abubuwa masu rai suna girma?", options: ["Yes", "No", "Never"], answer: 0 },
        { english: "Which needs food?", hausa: "Wanne ne yake buƙatar abinci?", options: ["Human", "Stone", "Pencil"], answer: 0 },
        { english: "Is a tree living?", hausa: "Shin bishiya tana da rai?", options: ["Yes", "No", "Never"], answer: 0 }
      ]
    },
    2: {
      topic: {
        english: "Parts of the Human Body",
        hausa: "Sassan Jikin Dan Adam"
      },
      objectives: {
        english: [
          "Name some parts of the human body.",
          "Identify parts of the head.",
          "State the uses of some body parts."
        ],
        hausa: [
          "Faɗi wasu sassan jikin mutum.",
          "Gane sassan kai.",
          "Fadi amfanin wasu sassan jiki."
        ]
      },
      notes: {
        english: "The human body has different parts. These include the head, eyes, nose, ears, mouth, hands, legs and stomach. We use our hands to hold things and our legs to walk.",
        hausa: "Jikin mutum yana da sassa daban-daban. Waɗannan sun haɗa da kai, idanu, hanci, kunnuwa, baki, hannuwa, ƙafafu da ciki. Muna amfani da hannuwa wajen riƙe abubuwa, ƙafafu kuma wajen tafiya."
      },
      activity: {
        english: "The teacher points to different body parts. Pupils name and touch each part.",
        hausa: "Malami ya nuna sassan jiki daban-daban. Ɗalibai su faɗi sunayensu kuma su taɓa kowanne."
      },
      classwork: {
        english: "1. Name three parts of the body. 2. What do we use to walk? 3. What do we use to hold things?",
        hausa: "1. Faɗi sassan jiki guda uku. 2. Me muke amfani da shi wajen tafiya? 3. Me muke amfani da shi wajen riƙe abubuwa?"
      },
      homework: {
        english: "Draw a human body and label the head, hands and legs.",
        hausa: "Zana jikin mutum sannan ka rubuta sunayen kai, hannuwa da ƙafafu."
      },
      quiz: [
        { english: "Which is a part of the body?", hausa: "Wanne sashe ne na jiki?", options: ["Head", "Chair", "Stone"], answer: 0 },
        { english: "What do we use to walk?", hausa: "Me muke amfani da shi wajen tafiya?", options: ["Legs", "Ears", "Eyes"], answer: 0 },
        { english: "Where are our eyes?", hausa: "A ina idanu suke?", options: ["Head", "Legs", "Hands"], answer: 0 },
        { english: "What do we use to hold things?", hausa: "Me muke amfani da shi wajen riƙe abubuwa?", options: ["Hands", "Nose", "Ears"], answer: 0 },
        { english: "How many hands do most people have?", hausa: "Hannu nawa ne yawancin mutane suke da su?", options: ["One", "Two", "Four"], answer: 1 }
      ]
    },
    3: {
      topic: {
        english: "The Five Sense Organs",
        hausa: "Gabobin Ji Guda Biyar"
      },
      objectives: {
        english: [
          "Name the five sense organs.",
          "State the uses of the sense organs.",
          "Identify the sense organs."
        ],
        hausa: [
          "Faɗi sunayen gabobin ji guda biyar.",
          "Fadi amfanin gabobin ji.",
          "Gane gabobin ji."
        ]
      },
      notes: {
        english: "We have five sense organs. They are the eyes, ears, nose, tongue and skin. We use our eyes to see, ears to hear, nose to smell, tongue to taste and skin to feel.",
        hausa: "Muna da gabobin ji guda biyar. Su ne idanu, kunnuwa, hanci, harshe da fata. Muna amfani da idanu wajen gani, kunnuwa wajen ji, hanci wajen ƙamshi, harshe wajen ɗanɗano, fata kuma wajen taɓawa."
      },
      activity: {
        english: "The teacher asks pupils to look, listen, smell a safe item and touch different objects.",
        hausa: "Malami ya umarci ɗalibai su kalla, su saurara, su ji ƙamshin abu mai aminci kuma su taɓa abubuwa daban-daban."
      },
      classwork: {
        english: "1. Name two sense organs. 2. Which organ helps us to see? 3. Which organ helps us to hear?",
        hausa: "1. Faɗi gabobin ji guda biyu. 2. Wane gaɓa ne ke taimaka mana wajen gani? 3. Wane gaɓa ne ke taimaka mana wajen ji?"
      },
      homework: {
        english: "Draw and label any three sense organs.",
        hausa: "Zana kuma ka rubuta sunayen gabobin ji guda uku."
      },
      quiz: [
        { english: "Which organ helps us to see?", hausa: "Wane gaɓa ne ke taimaka mana wajen gani?", options: ["Eyes", "Ears", "Nose"], answer: 0 },
        { english: "Which organ helps us to hear?", hausa: "Wane gaɓa ne ke taimaka mana wajen ji?", options: ["Tongue", "Ears", "Skin"], answer: 1 },
        { english: "Which organ helps us to smell?", hausa: "Wane gaɓa ne ke taimaka mana wajen jin ƙamshi?", options: ["Nose", "Eyes", "Hands"], answer: 0 },
        { english: "Which organ helps us to taste?", hausa: "Wane gaɓa ne ke taimaka mana wajen ɗanɗano?", options: ["Tongue", "Ears", "Legs"], answer: 0 },
        { english: "Which organ helps us to feel?", hausa: "Wane gaɓa ne ke taimaka mana wajen ji ta taɓawa?", options: ["Skin", "Nose", "Eyes"], answer: 0 }
      ]
    },
    4: {
      topic: {
        english: "Parts of a Plant",
        hausa: "Sassan Tsiro"
      },
      objectives: {
        english: [
          "Identify the parts of a plant.",
          "Name the main parts of a plant.",
          "State the uses of some plant parts."
        ],
        hausa: [
          "Gane sassan tsiro.",
          "Faɗi manyan sassan tsiro.",
          "Fadi amfanin wasu sassan tsiro."
        ]
      },
      notes: {
        english: "A plant is a living thing. The main parts of a plant are the roots, stem, leaves and flowers. Roots hold the plant in the soil. The stem supports the plant. Leaves help the plant make food. Flowers can develop into fruits.",
        hausa: "Tsiro abu ne mai rai. Manyan sassan tsiro su ne saiwa, kara, ganye da furanni. Saiwa tana riƙe tsiro a ƙasa. Kara tana tallafa wa tsiro. Ganye yana taimaka wa tsiro wajen samar da abinci. Furanni na iya zama 'ya'yan itace."
      },
      activity: {
        english: "The teacher shows a real plant or picture. Pupils point to its roots, stem, leaves and flowers.",
        hausa: "Malami ya nuna ainihin tsiro ko hotonsa. Ɗalibai su nuna saiwa, kara, ganye da furanni."
      },
      classwork: {
        english: "1. Name three parts of a plant. 2. Which part holds a plant in the soil? 3. Which part supports the plant?",
        hausa: "1. Faɗi sassan tsiro guda uku. 2. Wane sashe ne ke riƙe tsiro a ƙasa? 3. Wane sashe ne ke tallafa wa tsiro?"
      },
      homework: {
        english: "Draw a plant and label its roots, stem and leaves.",
        hausa: "Zana tsiro sannan ka rubuta sunayen saiwa, kara da ganye."
      },
      quiz: [
        { english: "Which is a part of a plant?", hausa: "Wanne sashe ne na tsiro?", options: ["Root", "Shoe", "Cup"], answer: 0 },
        { english: "Which part holds the plant in the soil?", hausa: "Wane sashe ne ke riƙe tsiro a ƙasa?", options: ["Flower", "Root", "Leaf"], answer: 1 },
        { english: "Which part supports the plant?", hausa: "Wane sashe ne ke tallafa wa tsiro?", options: ["Stem", "Fruit", "Flower"], answer: 0 },
        { english: "Which part is usually green?", hausa: "Wane sashe ne yawanci yake kore?", options: ["Leaf", "Root", "Stone"], answer: 0 },
        { english: "Is a plant a living thing?", hausa: "Shin tsiro abu ne mai rai?", options: ["Yes", "No", "Never"], answer: 0 }
      ]
    },

    
    5: {
      topic: {
        english: "Animals and Their Homes",
        hausa: "Dabbobi da Gidajensu"
      },
      objectives: {
        english: ["Identify common animals.", "Name places where animals live.", "Give examples of animal homes."],
        hausa: ["Gane dabbobi na yau da kullum.", "Faɗi wuraren da dabbobi suke zama.", "Bayar da misalan gidajen dabbobi."]
      },
      notes: {
        english: "Animals are living things. Some animals live in houses, nests, holes, water or forests. Dogs live in kennels, birds live in nests and fish live in water.",
        hausa: "Dabbobi abubuwa ne masu rai. Wasu dabbobi suna zama a gidaje, sheƙuna, ramuka, ruwa ko dazuzzuka. Kare yana zama a gidan kare, tsuntsu a sheƙa, kifi kuma a ruwa."
      },
      activity: {
        english: "The teacher shows pictures of animals and their homes. Pupils match each animal to its home.",
        hausa: "Malami ya nuna hotunan dabbobi da gidajensu. Ɗalibai su haɗa kowace dabba da gidanta."
      },
      classwork: {
        english: "1. Name two animals. 2. Where does a bird live? 3. Where do fish live?",
        hausa: "1. Faɗi sunayen dabbobi biyu. 2. Ina tsuntsu yake zama? 3. Ina kifaye suke zama?"
      },
      homework: {
        english: "Draw two animals and their homes.",
        hausa: "Zana dabbobi biyu da gidajensu."
      },
      quiz: [
        { english: "Where does a bird live?", hausa: "Ina tsuntsu yake zama?", options: ["Nest", "Pot", "Bag"], answer: 0 },
        { english: "Which animal lives in water?", hausa: "Wace dabba ce take zama a ruwa?", options: ["Goat", "Fish", "Dog"], answer: 1 },
        { english: "A dog is a ____.", hausa: "Kare ____ ne.", options: ["Plant", "Animal", "Stone"], answer: 1 },
        { english: "Which is an animal?", hausa: "Wanne ne dabba?", options: ["Cat", "Chair", "Cup"], answer: 0 },
        { english: "Where can a rabbit live?", hausa: "Ina zomo zai iya zama?", options: ["Hole", "Sky", "Book"], answer: 0 }
      ]
    },

    6: {
      topic: {
        english: "Uses of Plants",
        hausa: "Amfanin Tsirrai"
      },
      objectives: {
        english: ["State the uses of plants.", "Identify useful plants.", "Explain why plants are important."],
        hausa: ["Faɗi amfanin tsirrai.", "Gane tsirrai masu amfani.", "Bayyana muhimmancin tsirrai."]
      },
      notes: {
        english: "Plants are useful to people and animals. We get food, medicine, shade and wood from plants. Trees also provide shelter for some animals.",
        hausa: "Tsirrai suna da amfani ga mutane da dabbobi. Muna samun abinci, magani, inuwa da itace daga tsirrai. Bishiyoyi kuma suna ba wasu dabbobi mafaka."
      },
      activity: {
        english: "The teacher shows pictures of useful plants. Pupils mention what we get from them.",
        hausa: "Malami ya nuna hotunan tsirrai masu amfani. Ɗalibai su faɗi abin da ake samu daga gare su."
      },
      classwork: {
        english: "1. Mention two uses of plants. 2. Name one plant we eat. 3. What do trees provide on a sunny day?",
        hausa: "1. Faɗi amfanin tsirrai guda biyu. 2. Faɗi tsiro ɗaya da muke ci. 3. Me bishiyoyi suke bayarwa a rana mai zafi?"
      },
      homework: {
        english: "Draw a useful plant and write two things we get from plants.",
        hausa: "Zana tsiro mai amfani sannan ka rubuta abubuwa biyu da muke samu daga tsirrai."
      },
      quiz: [
        { english: "Which do we get from plants?", hausa: "Wanne muke samu daga tsirrai?", options: ["Food", "Plastic", "Glass"], answer: 0 },
        { english: "Trees provide us with ____.", hausa: "Bishiyoyi suna ba mu ____.", options: ["Shade", "Noise", "Smoke"], answer: 0 },
        { english: "Which is a plant?", hausa: "Wanne ne tsiro?", options: ["Mango tree", "Stone", "Chair"], answer: 0 },
        { english: "Plants can be used for ____.", hausa: "Ana amfani da tsirrai wajen ____.", options: ["Medicine", "Making stones", "Making water"], answer: 0 },
        { english: "Plants are useful to ____.", hausa: "Tsirrai suna da amfani ga ____.", options: ["People and animals", "Stones only", "Chairs only"], answer: 0 }
      ]
    },

    7: {
      topic: {
        english: "Water and Its Uses",
        hausa: "Ruwa da Amfaninsa"
      },
      objectives: {
        english: ["Identify sources of water.", "State the uses of water.", "Understand the importance of clean water."],
        hausa: ["Gane hanyoyin samun ruwa.", "Faɗi amfanin ruwa.", "Fahimci muhimmancin ruwa mai tsafta."]
      },
      notes: {
        english: "Water is important to all living things. We get water from rain, rivers, wells and taps. We use water for drinking, cooking, bathing and washing. We should drink clean and safe water.",
        hausa: "Ruwa yana da muhimmanci ga dukkan abubuwa masu rai. Muna samun ruwa daga ruwan sama, koguna, rijiyoyi da famfo. Muna amfani da ruwa wajen sha, girki, wanka da wanki. Ya kamata mu sha ruwa mai tsafta da aminci."
      },
      activity: {
        english: "The teacher shows clean water and pictures of water sources. Pupils name the sources.",
        hausa: "Malami ya nuna ruwa mai tsafta da hotunan wuraren samun ruwa. Ɗalibai su faɗi sunayensu."
      },
      classwork: {
        english: "1. Mention two sources of water. 2. State two uses of water. 3. Why should we drink clean water?",
        hausa: "1. Faɗi hanyoyin samun ruwa guda biyu. 2. Faɗi amfanin ruwa guda biyu. 3. Me ya sa ya kamata mu sha ruwa mai tsafta?"
      },
      homework: {
        english: "Draw two sources of water.",
        hausa: "Zana hanyoyin samun ruwa guda biyu."
      },
      quiz: [
        { english: "Which is a source of water?", hausa: "Wanne ne hanyar samun ruwa?", options: ["River", "Chair", "Book"], answer: 0 },
        { english: "We use water for ____.", hausa: "Muna amfani da ruwa wajen ____.", options: ["Drinking", "Writing", "Singing"], answer: 0 },
        { english: "Which water is safe to drink?", hausa: "Wane ruwa ne yake da aminci a sha?", options: ["Clean water", "Dirty water", "Waste water"], answer: 0 },
        { english: "Rain gives us ____.", hausa: "Ruwan sama yana ba mu ____.", options: ["Water", "Sand", "Fire"], answer: 0 },
        { english: "Water is important to ____.", hausa: "Ruwa yana da muhimmanci ga ____.", options: ["Living things", "Tables only", "Stones only"], answer: 0 }
      ]
    },

    8: {
      topic: {
        english: "Air Around Us",
        hausa: "Iskar da Ke Kewaye da Mu"
      },
      objectives: {
        english: ["Know that air is around us.", "State the importance of air.", "Identify things that move with air."],
        hausa: ["Sanin cewa iska tana kewaye da mu.", "Faɗi muhimmancin iska.", "Gane abubuwan da iska take motsawa."]
      },
      notes: {
        english: "Air is all around us. We cannot usually see air, but we can feel it when it blows. People and animals need air to breathe. Moving air is called wind.",
        hausa: "Iska tana kewaye da mu. Ba kasafai muke ganin iska ba, amma muna iya jin ta idan tana kadawa. Mutane da dabbobi suna buƙatar iska domin numfashi. Iskar da take motsi ana kiranta iska mai kadawa."
      },
      activity: {
        english: "The teacher uses a hand fan to show moving air. Pupils feel the air.",
        hausa: "Malami ya yi amfani da fanka ta hannu domin nuna iska mai motsi. Ɗalibai su ji iskar."
      },
      classwork: {
        english: "1. What is air? 2. Can we usually see air? 3. What do we use air for?",
        hausa: "1. Mene ne iska? 2. Shin muna iya ganin iska? 3. Me muke amfani da iska wajen yi?"
      },
      homework: {
        english: "Draw a fan and a kite. Write how air helps them.",
        hausa: "Zana fanka da kumurci. Rubuta yadda iska take taimaka musu."
      },
      quiz: [
        { english: "Air is ____ us.", hausa: "Iska tana ____ da mu.", options: ["Around", "Inside stones", "Under books"], answer: 0 },
        { english: "Moving air is called ____.", hausa: "Iskar da take motsi ana kiranta ____.", options: ["Wind", "Water", "Fire"], answer: 0 },
        { english: "We need air to ____.", hausa: "Muna buƙatar iska domin ____.", options: ["Breathe", "Eat stones", "Sleep standing"], answer: 0 },
        { english: "Which can move with wind?", hausa: "Wanne iska za ta iya motsawa?", options: ["Kite", "Rock", "Building"], answer: 0 },
        { english: "Can we usually see air?", hausa: "Shin muna iya ganin iska?", options: ["No", "Yes, always", "Only at night"], answer: 0 }
      ]
    },

    9: {
      topic: {
        english: "Weather",
        hausa: "Yanayin Jiki"
      },
      objectives: {
        english: ["Describe different types of weather.", "Identify sunny and rainy weather.", "State how weather affects our activities."],
        hausa: ["Bayyana nau'o'in yanayi daban-daban.", "Gane yanayin rana da ruwan sama.", "Faɗi yadda yanayi yake shafar ayyukanmu."]
      },
      notes: {
        english: "Weather is the condition of the air around us at a particular time. It can be sunny, rainy, cloudy or windy. We wear light clothes in hot weather and use umbrellas when it rains.",
        hausa: "Yanayi shi ne yadda iskar da ke kewaye da mu take a wani lokaci. Yanayi na iya zama na rana, ruwan sama, gajimare ko iska. Muna sanya tufafi masu sauƙi idan zafi ya yi, kuma muna amfani da laima idan ana ruwan sama."
      },
      activity: {
        english: "Pupils look outside and describe the weather. The teacher shows pictures of different weather conditions.",
        hausa: "Ɗalibai su duba waje su bayyana yanayin. Malami ya nuna hotunan yanayi daban-daban."
      },
      classwork: {
        english: "1. Mention two types of weather. 2. What do we use when it rains? 3. What is a sunny day like?",
        hausa: "1. Faɗi nau'o'in yanayi guda biyu. 2. Me muke amfani da shi idan ana ruwan sama? 3. Yaya rana take idan yanayi ya yi haske?"
      },
      homework: {
        english: "Draw a sunny day and a rainy day.",
        hausa: "Zana ranar rana da ranar ruwan sama."
      },
      quiz: [
        { english: "Which is a type of weather?", hausa: "Wanne ne nau'in yanayi?", options: ["Rainy", "Chair", "Pencil"], answer: 0 },
        { english: "What do we use when it rains?", hausa: "Me muke amfani da shi idan ana ruwan sama?", options: ["Umbrella", "Spoon", "Plate"], answer: 0 },
        { english: "The sun gives us ____.", hausa: "Rana tana ba mu ____.", options: ["Light and heat", "Books", "Food directly"], answer: 0 },
        { english: "Dark clouds may bring ____.", hausa: "Gajimare masu duhu na iya kawo ____.", options: ["Rain", "Books", "Stones"], answer: 0 },
        { english: "Wind is moving ____.", hausa: "Iska mai kadawa ita ce ____ mai motsi.", options: ["Air", "Soil", "Water only"], answer: 0 }
      ]
    },

    10: {
      topic: {
        english: "Sources of Light",
        hausa: "Hanyoyin Samun Haske"
      },
      objectives: {
        english: ["Identify sources of light.", "Name natural and man-made sources of light.", "Explain why light is important."],
        hausa: ["Gane hanyoyin samun haske.", "Faɗi hanyoyin haske na halitta da na mutum.", "Bayyana muhimmancin haske."]
      },
      notes: {
        english: "Light helps us to see things. The sun is a natural source of light. Other sources include stars, electric bulbs, lamps and torches. We should never look directly at the sun.",
        hausa: "Haske yana taimaka mana wajen ganin abubuwa. Rana hanya ce ta halitta ta samun haske. Sauran hanyoyin sun haɗa da taurari, fitilun lantarki, fitilu da tocila. Kada mu kalli rana kai tsaye."
      },
      activity: {
        english: "The teacher shows pictures of the sun, bulb and torch. Pupils identify each source of light.",
        hausa: "Malami ya nuna hotunan rana, fitilar lantarki da tocila. Ɗalibai su gane kowace hanyar haske."
      },
      classwork: {
        english: "1. Mention two sources of light. 2. What does light help us to do? 3. Name one natural source of light.",
        hausa: "1. Faɗi hanyoyin haske guda biyu. 2. Me haske yake taimaka mana mu yi? 3. Faɗi hanyar haske ta halitta guda ɗaya."
      },
      homework: {
        english: "Draw two sources of light.",
        hausa: "Zana hanyoyin samun haske guda biyu."
      },
      quiz: [
        { english: "Which is a natural source of light?", hausa: "Wanne ne hanyar haske ta halitta?", options: ["Sun", "Bulb", "Torch"], answer: 0 },
        { english: "Light helps us to ____.", hausa: "Haske yana taimaka mana wajen ____.", options: ["See", "Smell", "Taste"], answer: 0 },
        { english: "Which uses electricity?", hausa: "Wanne ne yake amfani da lantarki?", options: ["Electric bulb", "Sun", "Star"], answer: 0 },
        { english: "We should not look directly at the ____.", hausa: "Bai kamata mu kalli ____ kai tsaye ba.", options: ["Sun", "Book", "Chair"], answer: 0 },
        { english: "Which is another source of light?", hausa: "Wanne ne wata hanyar haske?", options: ["Torch", "Stone", "Water"], answer: 0 }
      ]
    },

    11: {
      topic: {
        english: "Sound",
        hausa: "Sauti"
      },
      objectives: {
        english: ["Identify sources of sound.", "Know that we hear with our ears.", "Distinguish loud and soft sounds."],
        hausa: ["Gane hanyoyin samun sauti.", "Sanin cewa muna ji da kunnuwa.", "Bambanta sauti mai ƙarfi da mai laushi."]
      },
      notes: {
        english: "Sound is what we hear. We hear sounds with our ears. Sounds can be loud or soft. Examples of sound sources are bells, drums, voices and radios.",
        hausa: "Sauti shi ne abin da muke ji. Muna jin sauti da kunnuwanmu. Sauti na iya zama mai ƙarfi ko mai laushi. Misalan hanyoyin samun sauti su ne ƙararrawa, ganga, murya da rediyo."
      },
      activity: {
        english: "The teacher makes gentle sounds using a bell and asks pupils to identify them.",
        hausa: "Malami ya yi sautuka masu laushi da ƙararrawa sannan ya tambayi ɗalibai su gane su."
      },
      classwork: {
        english: "1. Which organ helps us to hear? 2. Mention two sources of sound. 3. Give one example of a loud sound.",
        hausa: "1. Wane gaɓa ne yake taimaka mana wajen ji? 2. Faɗi hanyoyin samun sauti guda biyu. 3. Bayar da misalin sauti mai ƙarfi guda ɗaya."
      },
      homework: {
        english: "Write three things that produce sound.",
        hausa: "Rubuta abubuwa uku da suke samar da sauti."
      },
      quiz: [
        { english: "We hear with our ____.", hausa: "Muna ji da ____.", options: ["Ears", "Eyes", "Nose"], answer: 0 },
        { english: "Which produces sound?", hausa: "Wanne ne yake samar da sauti?", options: ["Bell", "Stone", "Water in a cup"], answer: 0 },
        { english: "Sound can be ____.", hausa: "Sauti na iya zama ____.", options: ["Loud or soft", "Only blue", "Only sweet"], answer: 0 },
        { english: "Which is a musical instrument?", hausa: "Wanne ne kayan kiɗa?", options: ["Drum", "Chair", "Plate"], answer: 0 },
        { english: "A radio produces ____.", hausa: "Rediyo yana samar da ____.", options: ["Sound", "Roots", "Leaves"], answer: 0 }
      ]
    },

    12: {
      topic: {
        english: "Personal Hygiene",
        hausa: "Tsaftar Jiki"
      },
      objectives: {
        english: ["Explain personal hygiene.", "Mention good hygiene practices.", "State the importance of keeping clean."],
        hausa: ["Bayyana tsaftar jiki.", "Faɗi hanyoyin kula da tsafta.", "Faɗi muhimmancin kasancewa da tsafta."]
      },
      notes: {
        english: "Personal hygiene means keeping our bodies clean. We should bathe regularly, brush our teeth, wash our hands with soap, wear clean clothes and keep our nails short. Good hygiene helps prevent sickness.",
        hausa: "Tsaftar jiki tana nufin kiyaye tsabtar jikinmu. Ya kamata mu yi wanka akai-akai, mu goge haƙora, mu wanke hannuwa da sabulu, mu sanya tufafi masu tsafta kuma mu rage farce. Tsafta tana taimakawa wajen hana cututtuka."
      },
      activity: {
        english: "The teacher demonstrates proper handwashing. Pupils practise the steps.",
        hausa: "Malami ya nuna yadda ake wanke hannu da kyau. Ɗalibai su yi atisayen matakan."
      },
      classwork: {
        english: "1. What is personal hygiene? 2. Mention two ways to keep clean. 3. Why should we wash our hands?",
        hausa: "1. Mene ne tsaftar jiki? 2. Faɗi hanyoyi biyu na kiyaye tsafta. 3. Me ya sa ya kamata mu wanke hannuwanmu?"
      },
      homework: {
        english: "Write three ways you keep your body clean.",
        hausa: "Rubuta hanyoyi uku da kake amfani da su wajen kiyaye tsaftar jikinka."
      },
      quiz: [
        { english: "Personal hygiene means keeping our body ____.", hausa: "Tsaftar jiki tana nufin kiyaye jikinmu ____.", options: ["Clean", "Dirty", "Wet always"], answer: 0 },
        { english: "What should we use to wash our hands?", hausa: "Me ya kamata mu yi amfani da shi wajen wanke hannu?", options: ["Soap and water", "Sand only", "Oil"], answer: 0 },
        { english: "We brush our ____.", hausa: "Muna goge ____.", options: ["Teeth", "Shoes", "Books"], answer: 0 },
        { english: "Clean clothes help us to stay ____.", hausa: "Tufafi masu tsafta suna taimaka mana mu kasance ____.", options: ["Clean", "Dirty", "Hungry"], answer: 0 },
        { english: "Good hygiene helps prevent ____.", hausa: "Tsafta tana taimakawa wajen hana ____.", options: ["Sickness", "Reading", "Walking"], answer: 0 }
      ]
    },

    13: {
      topic: {
        english: "Safety at Home and School",
        hausa: "Kariya a Gida da Makaranta"
      },
      objectives: {
        english: ["Identify common dangers at home and school.", "Mention simple safety rules.", "Explain how to avoid accidents."],
        hausa: ["Gane haɗurra a gida da makaranta.", "Faɗi ƙa'idojin kariya masu sauƙi.", "Bayyana yadda ake guje wa haɗari."]
      },
      notes: {
        english: "Safety means protecting ourselves from danger. We should not play with fire, sharp objects or electrical sockets. We should walk carefully, keep floors dry and tell an adult when we see danger. Never touch unknown chemicals or medicines.",
        hausa: "Kariya tana nufin kare kanmu daga haɗari. Bai kamata mu yi wasa da wuta, abubuwa masu kaifi ko guraben lantarki ba. Ya kamata mu yi tafiya a hankali, mu busar da wuraren da suka jike kuma mu sanar da babba idan mun ga haɗari. Kada mu taɓa sinadarai ko magungunan da ba mu sani ba."
      },
      activity: {
        english: "The teacher shows pictures of safe and unsafe actions. Pupils identify the safe actions.",
        hausa: "Malami ya nuna hotunan ayyuka masu aminci da marasa aminci. Ɗalibai su gane ayyukan da suke da aminci."
      },
      classwork: {
        english: "1. What is safety? 2. Mention two things we should not play with. 3. Who should we tell when we see danger?",
        hausa: "1. Mene ne kariya? 2. Faɗi abubuwa biyu da bai kamata mu yi wasa da su ba. 3. Wa ya kamata mu sanar idan mun ga haɗari?"
      },
      homework: {
        english: "Write three safety rules you follow at home or school.",
        hausa: "Rubuta ƙa'idojin kariya guda uku da kake bi a gida ko makaranta."
      },
      quiz: [
        { english: "Safety means protecting ourselves from ____.", hausa: "Kariya tana nufin kare kanmu daga ____.", options: ["Danger", "Books", "Food"], answer: 0 },
        { english: "We should not play with ____.", hausa: "Bai kamata mu yi wasa da ____ ba.", options: ["Fire", "Toys", "Balls"], answer: 0 },
        { english: "Who should we tell about danger?", hausa: "Wa ya kamata mu sanar game da haɗari?", options: ["A trusted adult", "Nobody", "A small child"], answer: 0 },
        { english: "We should walk ____.", hausa: "Ya kamata mu yi tafiya ____.", options: ["Carefully", "Blindly", "While pushing others"], answer: 0 },
        { english: "We should never touch unknown ____.", hausa: "Kada mu 

let preferredLanguage = "english";

try {
  preferredLanguage = localStorage.getItem("lessonLanguage") || "english";
} catch (error) {}

if (!["english", "hausa"].includes(preferredLanguage)) {
  preferredLanguage = "english";
}

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

      
        
       
              

(function () {
  // Content banks: replace or extend with your actual content
  // Emoji sequence game: show emojis and multiple-choice guesses
  const emojiPrompts = [
    {
      type: "emojiQuiz",
      text: "🧙‍♂️💍🔥",
      choices: [
        "The Lord of the Rings",
        "Harry Potter",
        "Star Wars",
        "The Hobbit",
      ],
      answer: "The Lord of the Rings",
    },
    {
      type: "emojiQuiz",
      text: "🦁👑",
      choices: ["The Lion King", "Jungle Book", "Madagascar", "Zootopia"],
      answer: "The Lion King",
    },
    {
      type: "emojiQuiz",
      text: "🍫🏭",
      choices: [
        "Charlie and the Chocolate Factory",
        "Ratatouille",
        "Up",
        "Toy Story",
      ],
      answer: "Charlie and the Chocolate Factory",
    },
    {
      type: "emojiQuiz",
      text: "🚢🧊🌊",
      choices: ["Titanic", "Moana", "Pirates of the Caribbean", "Aquaman"],
      answer: "Titanic",
    },
    {
      type: "emojiQuiz",
      text: "🕸️🕷️🧑",
      choices: ["Spider-Man", "Venom", "Ant-Man", "Batman"],
      answer: "Spider-Man",
    },
    {
      type: "emojiQuiz",
      text: "👽📞🏠",
      choices: ["E.T.", "Arrival", "Home Alone", "Phone Booth"],
      answer: "E.T.",
    },
    {
      type: "emojiQuiz",
      text: "🧊⛄️",
      choices: ["Frozen", "Ice Age", "Happy Feet", "Encanto"],
      answer: "Frozen",
    },
    {
      type: "emojiQuiz",
      text: "🐟🔍",
      choices: ["Finding Nemo", "Shark Tale", "Jaws", "The Meg"],
      answer: "Finding Nemo",
    },
    {
      type: "emojiQuiz",
      text: "🧙‍♂️🧹⚡",
      choices: ["Harry Potter", "The Witcher", "Percy Jackson", "Matilda"],
      answer: "Harry Potter",
    },
    {
      type: "emojiQuiz",
      text: "🚗⚡",
      choices: ["Cars", "Speed", "Fast & Furious", "Transformers"],
      answer: "Cars",
    },
    // Added user-provided emoji sequences (auto-generate choices if missing)
    { type: "emojiQuiz", text: "🔥🦊", answer: "Fire fox" },
    { type: "emojiQuiz", text: "🏠🍭🍯🏠", answer: "Home Sweet home" },
    { type: "emojiQuiz", text: "🦇🌲", answer: "Battery" },
    { type: "emojiQuiz", text: "👀🪚", answer: "See saw" },
    { type: "emojiQuiz", text: "🪆📌", answer: "Dolphin" },
    { type: "emojiQuiz", text: "🍬💔", answer: "Candy crush" },
    { type: "emojiQuiz", text: "👔👧", answer: "Tiger" },
    { type: "emojiQuiz", text: "🌙🔑", answer: "monkey" },
    { type: "emojiQuiz", text: "🪑", answer: "Teacher" },
    { type: "emojiQuiz", text: "⚪🏠", answer: "White house" },
    { type: "emojiQuiz", text: "🍯🌕", answer: "Honey moon" },
    { type: "emojiQuiz", text: "+ 💻", answer: "sun screen" },
    { type: "emojiQuiz", text: "🕸👀", answer: "Website" },
    { type: "emojiQuiz", text: "😡⛽🚘", answer: "madagascar" },
    { type: "emojiQuiz", text: "F + 󰝊+A", answer: "france" },
    { type: "emojiQuiz", text: "J + 🍳", answer: "Japan" },
    { type: "emojiQuiz", text: "👫🚢💔", answer: "Titanic" },
    { type: "emojiQuiz", text: "👠🕐🪄", answer: "cinderella" },
    { type: "emojiQuiz", text: "󰝊👟󰎽", answer: "Abebe Bikila" },
    { type: "emojiQuiz", text: "🦠+ 💰", answer: "germany" },
    { type: "emojiQuiz", text: "🌹👠", answer: "Valentine" },
    { type: "emojiQuiz", text: "🤥", answer: "lie(pinocio)" },
    { type: "emojiQuiz", text: "🌍+ 🥤", answer: "world cup" },
    { type: "emojiQuiz", text: "B+👂", answer: "Bear" },
    { type: "emojiQuiz", text: "👴👗👠", answer: "Old fashion" },
    { type: "emojiQuiz", text: "🥛🤝", answer: "Handshake" },
    { type: "emojiQuiz", text: "🌨👨", answer: "snow man" },
    { type: "emojiQuiz", text: "🎄🏠👦", answer: "Home Alone" },
    { type: "emojiQuiz", text: "🥋👦", answer: "The karate kid" },
    { type: "emojiQuiz", text: "👄🥢", answer: "lip stick" },
    { type: "emojiQuiz", text: "🪨+ ⭐", answer: "Rock star" },
    { type: "emojiQuiz", text: "🕷🕸👦", answer: "Spider Man" },
    { type: "emojiQuiz", text: "🥁", answer: "heartbeat" },
    { type: "emojiQuiz", text: "💪🪑", answer: "armchair" },
    { type: "emojiQuiz", text: "🍉🍌👊", answer: "Fruit punch" },
    { type: "emojiQuiz", text: "🛀🤵", answer: "Bathing suit" },
    { type: "emojiQuiz", text: "🙂📘", answer: "Facebook" },
    { type: "emojiQuiz", text: "🙂🕐", answer: "facetime" },
    { type: "emojiQuiz", text: "🔥🐶", answer: "Hot dog" },
    { type: "emojiQuiz", text: "😡🦜", answer: "angry birds" },
    { type: "emojiQuiz", text: "󰨄🐒🕌", answer: "aladdin" },
    { type: "emojiQuiz", text: "🃏", answer: "Joker" },
    { type: "emojiQuiz", text: "󰫺 󰫷", answer: "frozen" },
    { type: "emojiQuiz", text: "🦁👑", answer: "The Lion King" },
    { type: "emojiQuiz", text: "🧺⚽", answer: "Basket ball" },
    { type: "emojiQuiz", text: "+ A", answer: "china" },
    { type: "emojiQuiz", text: "🍔🤴", answer: "Burger king" },
    { type: "emojiQuiz", text: "🌧🎀", answer: "Rainbow" },
    { type: "emojiQuiz", text: "B+👂", answer: "Bear" },
    { type: "emojiQuiz", text: "🥩⚽", answer: "meatball" },
  ];

  const triviaPrompts = [
    {
      type: "trivia",
      text: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Mercury"],
      answer: "Mars",
    },
    {
      type: "trivia",
      text: "How many continents are there?",
      choices: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      type: "trivia",
      text: "What is the capital of Japan?",
      choices: ["Seoul", "Tokyo", "Kyoto", "Osaka"],
      answer: "Tokyo",
    },
    {
      type: "trivia",
      text: "Which gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      type: "trivia",
      text: "Who painted the Mona Lisa?",
      choices: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    // Added user-provided trivia
    {
      type: "trivia",
      text: "Who is the author of the iconic Ethiopian novel Fikir Eske Mekabir?",
      choices: [
        "Haddis Alemayehu",
        "Baalu Girma",
        "Haddisu Girma",
        "Sahle Sellassie",
      ],
      answer: "Haddis Alemayehu",
    },
    {
      type: "trivia",
      text: "Who was the first African to win an Olympic gold medal (1960 Rome Olympics)?",
      choices: [
        "Haile Gebrselassie",
        "Abebe Bikila",
        "Kenenisa Bekele",
        "Tirunesh Dibaba",
      ],
      answer: "Abebe Bikila",
    },
    {
      type: "trivia",
      text: "How many rings are on the Olympic flag?",
      choices: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      type: "trivia",
      text: "How many UNESCO World Heritage Sites are located in Ethiopia?",
      choices: ["6", "7", "9", "8"],
      answer: "9",
    },
    {
      type: "trivia",
      text: "Which planet is closest to the sun?",
      choices: ["Pluto", "Earth 2.0", "Mars Deluxe", "Mercury"],
      answer: "Mercury",
    },
    {
      type: "trivia",
      text: "What is the name of Ethiopia’s highest mountain?",
      choices: ["Ras Dashen", "Ras Kilimanjaro", "Ras Everest", "Ras Kenya"],
      answer: "Ras Dashen",
    },
    {
      type: "trivia",
      text: "What year did TikTok launch internationally?",
      choices: ["2017", "2020", "Next year", "2018"],
      answer: "2017",
    },
    {
      type: "trivia",
      text: "If Alex is the son of Mark, and Mark is the brother of Lisa, who is Lisa to Alex?",
      choices: ["Sister", "Mother", "Aunt", "Cousin"],
      answer: "Aunt",
    },
    {
      type: "trivia",
      text: "Who was the first Disney Princess?",
      choices: ["Cinderella", "Snow White", "Frozen", "Tiana"],
      answer: "Snow White",
    },
    {
      type: "trivia",
      text: "The first Ethiopian film is?",
      choices: ["Tewodros", "Hirut, Abatua Manew", "Shuru", "Lambadina"],
      answer: "Hirut, Abatua Manew",
    },
    {
      type: "trivia",
      text: "Which body part never stops growing?",
      choices: ["Eyes", "hand", "Ears", "Feet"],
      answer: "Ears",
    },
    {
      type: "trivia",
      text: "What is the only food that never spoils?",
      choices: ["Canned tuna", "Salt", "Honey", "Rice"],
      answer: "Honey",
    },
    {
      type: "trivia",
      text: "Which planet rains diamonds?",
      choices: ["Venus", "Jupiter", "Neptune", "Saturn"],
      answer: "Neptune",
    },
    {
      type: "trivia",
      text: "Which animal sleeps standing up?",
      choices: ["Rabbits", "Horse", "cow", "Kangaroo"],
      answer: "Horse",
    },
    {
      type: "trivia",
      text: "What was the original color of carrots before?",
      choices: ["Orange", "Purple", "White", "Yellow"],
      answer: "Purple",
    },
    {
      type: "trivia",
      text: "Which lake is the source of the Blue Nile?",
      choices: ["Lake Tana", "Lake Abaya", "Lake Chamo", "Lake Assal"],
      answer: "Lake Tana",
    },
    {
      type: "trivia",
      text: "What has many keys but can't open any locks?",
      choices: ["A Door", "A piano", "A Road", "A map"],
      answer: "A piano",
    },
    {
      type: "trivia",
      text: "How many players are on the field for one team in a standard basketball match?",
      choices: ["5", "10", "11", "12"],
      answer: "5",
    },
    {
      type: "trivia",
      text: "What is the only mammal that can't jump?",
      choices: ["Elephant", "Dogs", "kangaroos", "Hen"],
      answer: "Elephant",
    },
    {
      type: "trivia",
      text: "Which Ethiopian king is associated with the legend of the Queen of Sheba?",
      choices: [
        "King Solomon",
        "Emperor Haile Selassie",
        "King Ezana",
        "Tewodros II",
      ],
      answer: "King Ezana",
    },
    {
      type: "trivia",
      text: "What is Ethiopia’s oldest UNESCO World Heritage Site?",
      choices: ["Aksum (Axum)", "Gondar", "Simien Mountains", "Harar Jugol"],
      answer: "Aksum (Axum)",
    },
    {
      type: "trivia",
      text: "What has a head, a tail, but no body?",
      choices: ["Ghost", "Coin", "Dog", "Shadow"],
      answer: "Coin",
    },
    {
      type: "trivia",
      text: "Which Ethiopian city was the capital before Addis Ababa?",
      choices: ["Gondar", "Axum", "Harar", "Ankober"],
      answer: "Gondar",
    },
    {
      type: "trivia",
      text: "What unusual musical instrument is unique to Ethiopia?",
      choices: ["Krar", "Masenqo", "Begena", "Washint"],
      answer: "Begena",
    },
    {
      type: "trivia",
      text: "The name for the second round of coffee served in an Ethiopian coffee ceremony is called?",
      choices: ["Tona", "Abol", "Baraka", "Kolo"],
      answer: "Tona",
    },
    {
      type: "trivia",
      text: "Which country hosted the 2022 FIFA World Cup?",
      choices: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Egypt"],
      answer: "Qatar",
    },
    {
      type: "trivia",
      text: "Which country is home to the kangaroo?",
      choices: ["South Africa", "New Zealand", "Australia", "Brazil"],
      answer: "Australia",
    },
    {
      type: "trivia",
      text: "What is the capital of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      type: "trivia",
      text: "What is the currency of Eritrea?",
      choices: ["Birr", "Nakfa", "dollar", "Dinar"],
      answer: "Nakfa",
    },
    {
      type: "trivia",
      text: "When Alex was 8 years old, his sister Bella was half his age. Now Alex is 30. How old is Bella now?",
      choices: ["15", "26", "27", "38"],
      answer: "26",
    },
    {
      type: "trivia",
      text: "If you pass the person in 2nd place, what position are you in?",
      choices: ["1st", "2nd", "3rd", "Last"],
      answer: "2nd",
    },
    {
      type: "trivia",
      text: "What is the world's most spoken language by native speakers?",
      choices: ["English", "Hindi", "Spanish", "Mandarin"],
      answer: "Mandarin",
    },
    {
      type: "trivia",
      text: "Which popular event takes place every four years and features countries from around the world?",
      choices: ["Raciling", "Olympics", "Expo", "Fashion Week"],
      answer: "Olympics",
    },
    {
      type: "trivia",
      text: "Which planet is known for its rings?",
      choices: ["Jupiter", "Mars", "Saturn", "Neptune"],
      answer: "Saturn",
    },
    {
      type: "trivia",
      text: "What travels faster than sound?",
      choices: ["light", "Thoughts", "Water", "Shadows"],
      answer: "light",
    },
    {
      type: "trivia",
      text: "How can a person go 10 days without sleep?",
      choices: [
        "By using energy drinks",
        "By sleeping at night",
        "Through meditation",
        "They can’t it’s impossible",
      ],
      answer: "By sleeping at night",
    },
    {
      type: "trivia",
      text: "Which nation invented sushi?",
      choices: ["China", "Thailand", "Japan", "Korea"],
      answer: "Japan",
    },
    {
      type: "trivia",
      text: "What part of the brain controls balance and coordination?",
      choices: ["Brainstem", "Cerebellum", "Cerebrum", "Thalamus"],
      answer: "Cerebellum",
    },
    {
      type: "trivia",
      text: "Which part of the human body contains the most bones?",
      choices: ["The Skull", "The Hands", "The Torso", "The Legs"],
      answer: "The Hands",
    },
    {
      type: "trivia",
      text: "Bill Gates is the founder of which company?",
      choices: ["Apple", "Amazon", "Microsoft", "Tesla"],
      answer: "Microsoft",
    },
    {
      type: "trivia",
      text: "Which country is most credited with the invention of ice cream as we know it today?",
      choices: ["Italy", "China", "kenya", "United States"],
      answer: "Italy",
    },
    {
      type: "trivia",
      text: "Which of the following languages has the longest alphabet?",
      choices: ["Greek", "Russia", "Arabic", "English"],
      answer: "Russia",
    },
    {
      type: "trivia",
      text: "I have a glass of water with a single ice cube in it. When the ice melts, will the water level be higher, lower, or the same?",
      choices: ["Higher", "Lower", "Same"],
      answer: "Same",
    },
    {
      type: "trivia",
      text: "Which of the following sports is NOT currently a permanent part of the Olympic program?",
      choices: ["Skateboarding", "Sport Climbing", "Cricket", "Surfing"],
      answer: "Cricket",
    },
    {
      type: "trivia",
      text: "Which of these countries has a flag that is NOT rectangular in shape?",
      choices: ["Switzerland", "Nepal", "Vatican City", "Greece"],
      answer: "Nepal",
    },
    {
      type: "trivia",
      text: "Which country is the world's largest producer of coffee?",
      choices: ["ethiopia", "Vietnam", "Brazil", "turkey"],
      answer: "Brazil",
    },
    {
      type: "trivia",
      text: "Who is most commonly credited with the European discovery of the Americas in 1492?",
      choices: [
        "Christopher Columbus",
        "George washington",
        "Amerigo Vespucci",
        "Chris Magellan",
      ],
      answer: "Christopher Columbus",
    },
    {
      type: "trivia",
      text: "What color is a giraffe's tongue?",
      choices: ["white", "blue", "Red", "Yellow"],
      answer: "blue",
    },
    {
      type: "trivia",
      text: "Who was the first prime Minister of the U.S. government?",
      choices: [
        "Prime Minister Benjamin Franklin",
        "President George Washington",
        "King George III",
        "None",
      ],
      answer: "None",
    },
    {
      type: "trivia",
      text: "Which animal does not close its eyes when it sleeps?",
      choices: ["goat", "rabbit", "fish", "Cat"],
      answer: "fish",
    },
    {
      type: "trivia",
      text: "What is the largest city by population in the United States?",
      choices: ["Los Angeles", "Chicago", "New York City", "Houston"],
      answer: "New York City",
    },
  ];

  const truthOrDarePrompts = [
    { type: "truth", text: "Truth: What is a small fear you have?" },
    { type: "truth", text: "Truth: What is your most used app?" },
    { type: "dare", text: "Dare: Do 10 seconds of a victory dance." },
    { type: "dare", text: "Dare: Speak only in rhyme for the next turn." },
    { type: "truth", text: "Truth: Share a fun fact about yourself." },
    // Added user Truth items
    {
      type: "truth",
      text: "Have you ever told a secret you promised to keep?",
    },
    {
      type: "truth",
      text: "If you could get surgery to look like any celebrity, who would it be?",
    },
    {
      type: "truth",
      text: "What's something everyone seems to love that you just don't get?",
    },
    { type: "truth", text: "What's one thing you only do when you're alone?" },
    {
      type: "truth",
      text: "What's one thing you've always wanted to try but are too scared to do?",
    },
    {
      type: "truth",
      text: "What's a hidden talent you have that no one around you knows about?",
    },
    {
      type: "truth",
      text: "What’s the most embarrassing thing you’ve Googled?",
    },
    {
      type: "truth",
      text: "What’s the weirdest lie you’ve told to get out of plans?",
    },
    {
      type: "truth",
      text: "What’s the dumbest thing you’ve done while drunk?",
    },
    { type: "truth", text: "What’s a childhood food you still secretly love?" },
    {
      type: "truth",
      text: "Tell us about fun or amazing facts that are hard to believe?",
    },
    { type: "truth", text: "What is the worst gift you have ever given?" },
    {
      type: "truth",
      text: "If you were arrested tomorrow, what would it most likely be for?",
    },
    {
      type: "truth",
      text: "If you had to delete one app from your phone forever, which would it be?",
    },
    {
      type: "truth",
      text: "If you had to perform in a talent show right now, what would it be?",
    },
    {
      type: "truth",
      text: "Would you trade in your dog or cat for a million birr?",
    },
    {
      type: "truth",
      text: "If you had to change your name, what would your new first name be?",
    },
    { type: "truth", text: "What’s one thing you love most about yourself?" },
    {
      type: "truth",
      text: "What is one thing you would stand in line an hour for?",
    },
    {
      type: "truth",
      text: "If you got the chance to travel to another country, where would it be and why?",
    },
    // Added user Dare items
    {
      type: "dare",
      text: "Call a friend, pretend it’s their birthday, and sing them Happy Birthday.",
    },
    {
      type: "dare",
      text: "Do an impression of another player/actor until someone can figure out who it is.",
    },
    {
      type: "dare",
      text: "Call a fast-food place and ask if they sell left-handed burgers.",
    },
    { type: "dare", text: "Do 10 push ups / sit ups." },
    { type: "dare", text: "Do your best chicken dance." },
    {
      type: "dare",
      text: "Eat a chile and wait for 1 minute before drinking water.",
    },
    { type: "dare", text: "Do a dance with the chosen music." },
    { type: "dare", text: "Take a photo with a Yenege Insta template." },
    { type: "dare", text: "Sing a song for us—pick or ask for suggestions." },
    { type: "dare", text: "Lip-sync your friend's choice of song." },
    { type: "dare", text: "Share Yenege social media with your 3 friends." },
    { type: "dare", text: "Describe your entire day using only 3 emojis." },
    { type: "dare", text: "Give us your BEST supermodel walk-through." },
    { type: "dare", text: "Do your best eskista dance for 30 seconds." },
    { type: "dare", text: "Draw what your friend asks you to draw." },
    { type: "dare", text: "Make the makerina dance for the group." },
    { type: "dare", text: "Wear a silly hat for the rest of the event." },
    {
      type: "dare",
      text: "Pretend to be an Addis Ababa minibus conductor calling out all the stops.",
    },
    { type: "dare", text: "Make a short voice message and play it to us." },
    {
      type: "dare",
      text: "Take a snap photo with a filter chosen by your friend.",
    },
    // Couples Truth
    {
      type: "truth",
      text: "If we were a celebrity couple, what would our ship name be?",
    },
    { type: "truth", text: "What is one adventure you want to do with me?" },
    { type: "truth", text: "What kind of clothing do you like?" },
    {
      type: "truth",
      text: "If we opened a business together, what would it be and what would our roles be?",
    },
    { type: "truth", text: "Choose a song for your boyfriend/girlfriend." },
    {
      type: "truth",
      text: "If you had to pick one day that we have passed together which would it be and why?",
    },
    { type: "truth", text: "Which action of mine makes you happy and mad?" },
    { type: "truth", text: "What is your partner's screen saver?" },
    { type: "truth", text: "Tell me one gift you wanted me to give you." },
    {
      type: "truth",
      text: "Which country do you want to travel with your partner?",
    },
    {
      type: "truth",
      text: "If you could get surgery to look like any celebrity, who would it be?",
    },
    {
      type: "truth",
      text: "What's something your partner loves that you just don't get?",
    },
    { type: "truth", text: "What's one thing you only do when you're alone?" },
    {
      type: "truth",
      text: "What's one thing you've always wanted to try but are too scared to do?",
    },
    {
      type: "truth",
      text: "What's a hidden talent you have that no one around you knows about?",
    },
    {
      type: "truth",
      text: "What’s the most embarrassing thing you’ve Googled?",
    },
    { type: "truth", text: "Do you believe in love at first sight?" },
    { type: "truth", text: "What’s your idea of a perfect date?" },
    { type: "truth", text: "What’s your love language?" },
    { type: "truth", text: "What is your biggest turn-on?" },
    // Couples Dare
    { type: "dare", text: "Show one action that your partner mostly does." },
    { type: "dare", text: "Do your best chicken dance." },
    {
      type: "dare",
      text: "Write five things you love about your partner and read them out loud.",
    },
    { type: "dare", text: "Do a trust fall into each other’s arms." },
    {
      type: "dare",
      text: "Take a photo with Yenege Instagram template pose chosen by your partner.",
    },
    { type: "dare", text: "Sing a song—pick or ask for suggestions." },
    { type: "dare", text: "Lip-sync your partner's choice of song." },
    { type: "dare", text: "Share Yenege social media with your 3 friends." },
    { type: "dare", text: "Describe your partner using only 3 emojis." },
    { type: "dare", text: "Give us your BEST catwalk." },
    { type: "dare", text: "Do your best eskista dance for 30 seconds." },
    { type: "dare", text: "Draw what your partner asks you to draw." },
    {
      type: "dare",
      text: "Make the couple dance for the group by your choice.",
    },
    { type: "dare", text: "Send a cute selfie to your partner’s phone." },
    {
      type: "dare",
      text: "Create your official couple's handshake or secret signal right now.",
    },
    {
      type: "dare",
      text: "Make a short voice message for your partner and play it.",
    },
    { type: "dare", text: "Give your partner a compliment." },
    { type: "dare", text: "Say I love you in 3 different languages." },
    {
      type: "dare",
      text: "Act out your partner’s favorite movie scene or TikTok trend.",
    },
    { type: "dare", text: "Do your best impression of your partner’s voice." },
  ];

  // State
  const TOTAL_QUESTIONS = 10;
  let deck = [];
  let currentIndex = 0;
  let score = 0; // trivia correct count
  const answersLog = [];

  // Elements
  const $setup = document.getElementById("setup");
  const $game = document.getElementById("game");
  const $results = document.getElementById("results");
  const $startBtn = document.getElementById("startBtn");
  const $nextBtn = document.getElementById("nextBtn");
  const $skipBtn = document.getElementById("skipBtn");
  const $restartBtn = document.getElementById("restartBtn");
  const $progressLabel = document.getElementById("progressLabel");
  const $promptType = document.getElementById("promptType");
  const $promptText = document.getElementById("promptText");
  const $choices = document.getElementById("choices");
  const $score = document.getElementById("score");
  const $summary = document.getElementById("summary");
  const $modeButtons = document.querySelectorAll("#modeSelect .mode");
  let selectedMode = null; // 'emoji' | 'trivia' | 'truthOrDare'
  const $homeBtn = document.getElementById("homeBtn");
  const $backBtn = document.getElementById("backBtn");

  function start() {
    // Build pool based on selected mode
    let pool = [];
    if (selectedMode === "emoji") {
      pool = emojiPrompts.map((x) => ({ ...x, type: "emoji" }));
    } else if (selectedMode === "trivia") {
      pool = triviaPrompts;
    } else if (selectedMode === "truthOrDare") {
      pool = truthOrDarePrompts;
    } else {
      pool = [
        ...emojiPrompts.map((x) => ({ ...x, type: "emoji" })),
        ...triviaPrompts,
        ...truthOrDarePrompts,
      ];
    }
    // Remove duplicate questions by text, then shuffle and sample
    const uniquePool = uniqueByText(pool);
    deck = shuffle(uniquePool).slice(
      0,
      Math.min(TOTAL_QUESTIONS, uniquePool.length)
    );
    currentIndex = 0;
    score = 0;
    answersLog.length = 0;

    $setup.classList.add("hidden");
    $results.classList.add("hidden");
    $game.classList.remove("hidden");

    renderCurrent();
  }

  function renderCurrent() {
    if (currentIndex >= deck.length) {
      return showResults();
    }
    const item = deck[currentIndex];
    $progressLabel.textContent = `Question ${
      currentIndex + 1
    } of ${TOTAL_QUESTIONS}`;
    $promptType.textContent =
      item.type === "emoji" ? "EMOJI" : item.type.toUpperCase();
    $promptText.textContent = item.text;
    $promptText.classList.toggle("emoji", item.type === "emoji");
    $choices.innerHTML = "";

    let isQuiz = false;
    let choicesForItem = [];
    if (item.type === "trivia") {
      isQuiz = true;
      choicesForItem = item.choices.slice();
    } else if (item.type === "emoji") {
      isQuiz = true;
      choicesForItem = Array.isArray(item.choices)
        ? item.choices.slice()
        : buildEmojiChoices(item);
    }
    // Show skip for non-quiz (truth/dare) only
    $skipBtn.classList.toggle("hidden", isQuiz);
    if (isQuiz) {
      const shuffledChoices = shuffle(choicesForItem.slice());
      shuffledChoices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "choice";
        btn.textContent = choice;
        btn.onclick = () => onSelectQuiz(btn, choice, item.answer);
        $choices.appendChild(btn);
      });
    } else {
      // Non-trivia items have no choices; encourage user to perform/answer then continue
      const info = document.createElement("div");
      info.className = "choice";
      info.textContent = "Do it / answer, then hit Next →";
      info.style.cursor = "default";
      $choices.appendChild(info);
    }
  }

  function onSelectQuiz(btn, choice, answer) {
    // Prevent multiple selection
    const alreadySelected = $choices.querySelector(".selected");
    if (alreadySelected) return;

    btn.classList.add("selected");
    const correct = choice === answer;
    if (correct) {
      btn.classList.add("correct");
      score += 1;
    } else {
      btn.classList.add("incorrect");
      // highlight correct
      [...$choices.children].forEach((el) => {
        if (el.textContent === answer) el.classList.add("correct");
      });
    }
    answersLog.push({ index: currentIndex, choice, correct });
  }

  function next() {
    // For truth/dare, "Next" means done
    const item = deck[currentIndex];
    if (item && (item.type === "truth" || item.type === "dare")) {
      answersLog.push({ index: currentIndex, status: "done" });
    }
    if (currentIndex < deck.length) {
      currentIndex += 1;
    }
    if (currentIndex >= deck.length) {
      showResults();
    } else {
      renderCurrent();
    }
  }

  function skip() {
    const item = deck[currentIndex];
    if (item && (item.type === "truth" || item.type === "dare")) {
      answersLog.push({ index: currentIndex, status: "skipped" });
    }
    // Advance to next
    if (currentIndex < deck.length) {
      currentIndex += 1;
    }
    if (currentIndex >= deck.length) {
      showResults();
    } else {
      renderCurrent();
    }
  }

  function showResults() {
    $game.classList.add("hidden");
    $results.classList.remove("hidden");

    const totalQuiz = deck.filter(
      (d) => d.type === "trivia" || d.type === "emoji"
    ).length;
    const doneTruthDare = answersLog.filter((a) => a.status === "done").length;
    const skippedTruthDare = answersLog.filter(
      (a) => a.status === "skipped"
    ).length;

    if (totalQuiz > 0) {
      $score.textContent = `Correct answers: ${score} / ${totalQuiz}`;
    } else if (doneTruthDare + skippedTruthDare > 0) {
      $score.textContent = `Done: ${doneTruthDare} • Skipped: ${skippedTruthDare}`;
    } else {
      $score.textContent = "Thanks for playing!";
    }
    $summary.textContent = "";
  }

  function restart() {
    $setup.classList.remove("hidden");
    $results.classList.add("hidden");
    $game.classList.add("hidden");
  }

  function goHome() {
    // Reset to initial state
    selectedMode = null;
    $modeButtons.forEach((b) => b.classList.remove("active"));
    $startBtn.disabled = true;
    restart();
  }

  function goBack() {
    // Keep selectedMode but return to setup
    $setup.classList.remove("hidden");
    $results.classList.add("hidden");
    $game.classList.add("hidden");
  }

  function uniqueByText(items) {
    const seen = new Set();
    const out = [];
    for (const it of items) {
      const key = it && typeof it.text === "string" ? it.text.trim() : "";
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(it);
    }
    return out;
  }

  function buildEmojiChoices(item) {
    const correct = item.answer;
    const allAnswers = emojiPrompts.map((e) => e.answer).filter(Boolean);
    const pool = allAnswers.filter((a) => a && a !== correct);
    const distractors = shuffle(pool).slice(0, 3);
    return shuffle([correct, ...distractors]);
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  // Events
  $startBtn.addEventListener("click", start);
  $nextBtn.addEventListener("click", next);
  $skipBtn.addEventListener("click", skip);
  $restartBtn.addEventListener("click", restart);
  $homeBtn.addEventListener("click", goHome);
  $backBtn.addEventListener("click", goBack);

  // Mode selection events
  $modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedMode = btn.dataset.mode;
      $modeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      $startBtn.disabled = false;
    });
  });
})();
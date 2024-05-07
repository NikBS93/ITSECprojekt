const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function redirectToINFO() {
    window.location.href = "INFO.html"; 
}

function redirectToQUIZ() {
    window.location.href = "QUIZ.html";
}

function redirectToLINKS() {
    window.location.href = "links.html";
}

// Define the story and choices
const storyData = {
    1: {
      text: "You receive an email from an unknown sender claiming you've won a prize. Do you open the email?",
      choices: [
        { text: "Yes", destination: 2 },
        { text: "No", destination: 3 }
      ]
    },
    2: {
      text: "You opened the email and it asks you to click on a link to claim your prize. Do you click the link?",
      choices: [
        { text: "Yes", destination: 4 },
        { text: "No", destination: 5 }
      ]
    },
    3: {
      text: "You deleted the email. Good choice! It was a phishing attempt. The end.",
      choices: []
    },
    4: {
      text: "You clicked the link and it led you to a suspicious website asking for personal information. Do you enter your details?",
      choices: [
        { text: "Yes", destination: 6 },
        { text: "No", destination: 7 }
      ]
    },
    5: {
      text: "You closed the email without clicking the link. You avoided a potential phishing attack. The end.",
      choices: []
    },
    6: {
      text: "You entered your details and your accounts got compromised. It was a phishing scam. The end.",
      choices: []
    },
    7: {
      text: "You closed the website without entering your details. You avoided a phishing attack. The end.",
      choices: []
    }
  };
  
  // Function to display the current story text and choices
  function displayStory(storyIndex) {
    const storyContainer = document.getElementById("story");
    const choicesContainer = document.getElementById("choices");
    
    storyContainer.textContent = storyData[storyIndex].text;
    choicesContainer.innerHTML = "";
  
    storyData[storyIndex].choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => makeChoice(choice.destination));
      choicesContainer.appendChild(button);
    });
  }
  
  // Function to handle the player's choice and update the story
  function makeChoice(destination) {
    displayStory(destination);
  }
  
  // Start the game by displaying the initial story
  displayStory(1);

  
# Module 10 - Team/Employee Generator
## Object Oriented Programming - Node.js


### Project Overview
- A Node.js Command-line Application that takes in employee information and generates a formatted and styled HTML summary page.

### Approach

Breaking down the requirements - I will separate the objective into the following parts:
  - Define a constructor for the Employee class; extend it to three employee types: Manager, Engineer and Intern
  
  - Create HTML templates for each employee type
  
  - Using the command line, prompt the Manager to enter the info
  
  - Once the Manager is added, begin adding the team members
  
  - Using the list of team members, generate the html page containing all members of the team
  
  ### User Story
  
   AS A manager
  
   I WANT to generate a webpage that displays my team's basic info
  
   SO THAT I have quick access to their emails and GitHub profiles
    
 ### Acceptance Criteria
 
  GIVEN a command-line application that accepts user input
  
  WHEN I am prompted for my team members and their information
  
  THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  
  WHEN I click on an email address in the HTML
  
  THEN my default email program opens and populates the TO field of the email with the address
  
  WHEN I click on the GitHub username
  
  THEN that GitHub profile opens in a new tab
  
  WHEN I start the application
  
  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  
  WHEN I enter the team manager’s name, employee ID, email address, and office number
  
  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  
  WHEN I select the engineer option
  
  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

  WHEN I select the intern option
  
  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  
  WHEN I decide to finish building my team
  
  THEN I exit the application, and the HTML is generated
  
### Environment

  - JavaScript
  
  - Node.js
  
  - HTML/CSS
  
### Sample Output

![image](https://user-images.githubusercontent.com/87884472/137670955-ad2f7044-8272-4404-962d-92af1c0c9ce6.png)

### Demo Video

npm_test.gif






  

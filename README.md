# react-clock-project
## Demo & Preview
Demo: https://samuel-santos91.github.io/react-clock-project/ <br>
<img width="500" alt="Screenshot 2024-06-09 at 01 04 00" src="https://github.com/samuel-santos91/react-clock-project/assets/107240729/5ed3b91d-2375-4f17-80f0-9e58386f2889">

## Requirements
### MVP
* Create a digital and analog clock using JavaScript, CSS, and HTML.
* Both clocks should be displayed on the same page and synchronised.
* They should display the current real time.
* Update the time every second.
### Purpose
The purpose of this project is to demonstrate proficiency in React and SCSS, as well as the ability to create a synchronised digital and analog clock that updates in real-time.
### Tech Stack
* React.js - For building the UI components.
* SCSS - For modular and maintainable styling.

## Cloning and Running the Application in local
1. Clone repository
```bash
git clone https://github.com/yourusername/yourrepository.git cd yourrepository
```
2. Install dependencies
```bash
npm install
```
3. Run the project
```bash
npm run dev
```

4. Open localhost on your browser

## Approach
* Used React Context for managing time state and updating it every second.
* Separated data handling from UI components.
* Separated the code structure into containers and reusable components.
* Applied SCSS for styling with variables and mixins for consistency and maintainability.
  
## Features
* Real-time synchronised digital and analog clocks.
* Clean and responsive design.
* **Custom Font**: Downloaded and used a specific digital font to style the digital clock for a more authentic look. (https://www.fontget.com/font/digital-7-family/)

## Challenges
* **Synchronisation:** Ensuring both clocks update at the exact same time without delays.
  *  **Solution:** Used the setInterval() method  to update the state variables every second.
  *  documentation: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 
* **Styling:** Changing the clock hands' rotation point from the centre to the edge.
  * **Solution:** Utilised the transform-origin property in CSS to pivot the rotation point
  * documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin.  


# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![Desktop-1](./public/Screenshots/localhost_5173_.png)
![Desktop-2](./public/Screenshots/localhost_5173_%20(1).png)
![Desktop-3](./public/Screenshots/localhost_5173_%20(2).png)
![Desktop-4](./public/Screenshots/localhost_5173_%20(3).png)
![Desktop-5](./public/Screenshots/localhost_5173_%20(4).png)
![Mobile-1](./public/Screenshots/localhost_5173_(iPhone%20XR).png)
![Mobile-2](./public/Screenshots/localhost_5173_(iPhone%20XR)%20(1).png)
![Mobile-3](./public/Screenshots/localhost_5173_(iPhone%20XR)%20(2).png)
![Mobile-4](./public/Screenshots/localhost_5173_(iPhone%20XR)%20(3).png)
![Mobile-5](./public/Screenshots/localhost_5173_(iPhone%20XR)%20(4).png)


### Links

- Live Site URL: [vercel app](https://multistepform-gamma.vercel.app/)

## My process
- started with the html syntax
- develop the css code designing mobile first.
- developed the javascript logic for navigating the levels.(exluding the final screen)
- wrote the css for bigger screens. 505px first and then up. Factored in screens for tabs.
- developed javascript code for authentication of different levels.
- wrote js for the final screen. 
- made little adjustment

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Java script


### What I learned

I expanded my knowledge on input validation for different input types. Good practical use of regex as a constant and using the test() function for regex. extended use of the foreach function on arrays.

To see how you can add code snippets, see below:

```js
let value = document.querySelector('.input')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
      alert("Invalid email format");
      isValid = false;
    }
```

### Continued development

-Error handling
-Javascript optimization
-Neatness of code
-code organization

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=CYlNJpltjMM&list=PPSV) - This should help with inout validation but I didnt use this video.
- [Example resource 2](https://www.w3schools.com/howto/howto_css_switch.asp ) - the source I go the toggle design from.

## Author

- Website - [Barnabas James Oluwamayowa](https://multistepform-gamma.vercel.app/)
- Frontend Mentor - [@Jamieeee1](https://www.frontendmentor.io/profile/Jamieeee1)
- Twitter - [@Meet_JamesB](https://www.twitter.com/Meet_JamesB)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

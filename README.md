# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview
    this is a simple, useful web application for shortening long urls
### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./assets/screenshot.png)


### Links

- Solution URL: [github](https://github.com/Maiqel1/link-shortner)
- Live Site URL: [netlify](https://app.netlify.com/sites/guileless-mousse-0fbb41/overview)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- tailwind.CSS - CSS library
- Mobile-first workflow
- [vue](https://vuejs.org/) - JS library


### What I learned

This project really tested my knowledge of javascript logic

```js
if(!this.url) {
        this.visible = true;
      } else {
        this.shorten = data.result.full_short_link;
      this.links.push(
        { shorten: data.result.full_short_link },
        { url: this.url }
      );
      this.visible = false;
      }
```
### Continued development

i would like to focus more on local storage and its implementation in future projects

## Author

- Linkedin - [michael](https://www.linkedin.com/in/michael-olowe-7b600620a/)
- Frontend Mentor - [@Maiqel](https://www.frontendmentor.io/profile/Maiqel1)
- Twitter - [@maiq_el](https://www.twitter.com/maiq_el)




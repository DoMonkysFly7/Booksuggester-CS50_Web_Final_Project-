Created by DoMonkysFly7 - Oprea Stefan-A.

CS50 Web Final Project! 
Booksuggester - Answer the questions and receive a book (or more) you will surely want to check out! 

README:
Check it out on: https://github.com/DoMonkysFly7/Booksuggester---GitHub-Pages-Version

Distinctiveness and complexity
I supposed this is an original idea, as I've noticed no such website with such purpose anywhere on the internet 
(maybe beside https://www.whichbook.net). Even 'whichbook' shows a huge number of 'suggestions', whereas my project offers
only a small variety from which the user can choose to look further into.

Description:
This Project was initially created to be submitted as part of 'CS50's Web Development with Python and JavaScript' course
requirements. Therefore, you will find on my GitHub a static 'duplicate' using only HTML, CSS and JavaScript + React.js  as well. However, both
repositories achieve the same outcome. Still, feel free to check both of them out!

Purpose:
This website is meant to suggest one or multiple books to read for the person who has used it. It is not meant to spend
a lot of time on it, but simply: enter, answer the questions, get curious about a new book(s) you may wanna try out that
the website has been deemed suitable for you, end of the story. 
I created this website because I believed the idea may be interesting, as I have not seen many websites like this before,
if any, and also because sometimes I myself struggle to pick a new book to read. 

How to run:
The website works quite simply: 
Upon opening, simply start answering the served question. The questions are in the same order all the time and only 
two pre-written answers are possible. Once all the questions have been answered, the website will present you with one or
two books (one of which comes from some of the Author's personal favorites) which should be, more or less, compatible 
with your tastes and personality. If you are unsatisfied with the book(s) presented at the end of the questioning process
you may press the 'Restart' button in order to start answering the same questions again, which would result in a different
pool of suggestions OR you could press the 'Another' button, which will randomly assign another book or set of books from the ones which the website already deems suitable to you. Quite simple 
really. 

How is built:
It uses HTML, SASS converted to CSS, JavaScript and React.js, and the Django framework. It also uses APIs from
https://openlibrary.org and https://covers.openlibrary.org/ for information regarding the books. These aforementioned websites, all
their pages, are 'APIs' themselves, meaning they can be requested by anyone in JSON or any other format, no key is required.

As you may have noticed, this website has no user input and no database, as these are not necessary. I trust that may
affect my final mark on the final project.

On the backend, it is quite easy to change questions/answers/subjects to fetch from APIs, quotes, and the author's comments. So it is really flexible!

Main (important) files:
App.js - This is where all the background logic happens: questions, components, and possible answers rendering. The logic of 
of making the right API calls by subject or specific work (see openlibrary.org API documentation), the caching and some
of the security features, the edge cases, and much more, all is handled here.

styles.css - Converted from SASS, so it may look a bit weird, here is well all the animations and stylization, as the name
suggests, happens. I used a great deal of FLEXBOX and a bit of GRID.
Of course, the website is fully responsive and looks good on both Desktop (all browsers) and mobile.

index.html - The only HTML file of the project, as this is a One Page application, none more were required. All dependencies
are shown there (React, REACT DOM, Babel...). Obviously, there is also the layout of the page.

layout.html - This contains the layout for all pages which could be added to this website. As it is a One-Page app. more
than the 'index' is not necessary.

open-book.png - Icon of the website, found online, no copyright for personal use.

default.png - Logo, created only with a random website for such aims. 

Security:
As this project will only be visible on GitHub pages, ever, GitHub has provided most of the security features, such as CSP, SRI, HSTS, X-Frame-Options, and forced HTTPS.
However, I took the liberty of modifying CORS settings and adding Framebusting logic as well.

Performance:
I used Page Speed Insights (https://pagespeed.web.dev/) from Google in order to check the performance on both Desktop and Mobile. While on a Desktop works much better,
I heard the feedback from various people I had to try the website out that it works fine on mobiles as well.

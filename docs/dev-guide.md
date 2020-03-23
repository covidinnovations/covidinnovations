# Website Development Guide

**Related**

* Tech diagrams: https://hackmd.io/U_D0ZzpFQPKl7FrD-bGneQ
* Theme from: https://github.com/panr/hugo-theme-hello-friend

## Getting Started

* Install Go
* Install Hugo: https://gohugo.io/getting-started/installing


## website directory

The website directory contains files for generating a static website using the Hugo framework.

**FAQ**

* Q: Why not Nodejs?
	* Because I want this site to be deployable on any static site host anywhere on the Internet. And I want it to be scalable.
* Q: Why not React?
	* Because I don't want to learn another tech stack right now. This project requires development of many diverse components and I want to stay with vanilla Javascript and HTML.
* Q: Why Hugo framework?
	* Because I have been building sites with it recently and it's extremely easy for me to publish content without much work. I can add sections and pages as needed.

### Where the code is:

Starting in the website directory...

**/layouts/login/**
This path contains the html fragments used in the login section of the site. The baseof.html page contains the html skeleton of the pages in this section. It has javascript in this path that loads auth.js and determines if the user is logged in with Web3.


**/assets/js/app:**
This directory path contains the javascript used by each section of the site.

* app.js
* auth.js

**/assets/scss/pages/all**
This path contains the scss files that are loaded into the sass post processor and generated as part of the static html


## Running localhost

Note: These instructions have only been validated on MacOS and should work with Linux, with some changes.

* Install webpack and CLI: [Guide](https://webpack.js.org/guides/installation/)
* Run `npm build`
* Run `hugo server` and open a browser in localhost:1313

## Generating html for production

`$ hugo`

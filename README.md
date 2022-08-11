# mlsp-fall22

## Deploy Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/1ef5aca7-af99-49e5-b889-8ea1a98a14d1/deploy-status)](https://app.netlify.com/sites/hungry-tereshkova-f1fd8c/deploys)

## Getting Started for Homework

TBA

## Getting Started for Building Course Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) by patconrey, a TA in 2020 fall and edited by nicolaus625 a TA in 2021 fall.

### Running the project locally

You'll want to make edits to website on your local machine, see if they look okay, and then update the website with your updates. This process is called developing locally and then deploying. To develop locally, you'll need to do a couple things.

First, you need to clone this project to your local machine. Put it wherever; it doesn't really matter. After you've cloned, run the following commands:

1. `cd mlsp-fall21/CourseWeb`
2. `npm install`

The second command will install all of the project dependencies listed in `package.json`. It might take some time. If you don't have `npm` installed, please consult this link, [Installing NPM](https://www.npmjs.com/get-npm). If you're generally unfamiliar with NPM, it's a package manager for JavaScript, allowing developers to share their libraries and frameworks. You should only need to run `npm install` once, when you first clone the project. If, for whatever reason, you re-clone the project, you'll need to re-run `npm install`. If other people add packages to `package.json`, then you'll need to run `npm install` to install those new packages after pulling their changes.

After you've installed the dependencies by following step 2 above, you are ready to run the site. In your terminal, run `npm start`. There are a couple other similar commands, but they're not important right now. They're detailed in the Available Scripts section.

In summary, the process to run the project locally is:

1. `cd mlsp-fall21/CourseWeb`
2. `npm install`
3. `npm start`

Running `npm start` will open up the website in your default browser. The address bar will display `localhost:3000`. This is a local server. Nobody else can see changes you make to the site, if it's served from `localhost:3000`.

If you have any issues that you can't quickly figure out with a Google search, please email patrickconrey@gmail.com.

## Making Changes for Course Website

There are several things that will go into updating or adding content to this site. There are sections below describing each.

### Project Structure

In order to make changes, you need to know where to find the documents to change! In this section, we'll talk about the way the codebase is structured. This is a fairly simple [React](https://reactjs.org/) project. In fact, it's a little embarrassing to be using React for a website like this. Unfortunately, React is terribly easy to fall in love with. That being said, there's not a great deal of custom infrastructure here. We follow a pretty simple paradigm. 

After you've installed the dependencies with `npm install` (_c.f._ Running the project locally section), you'll have three root-level directories. Along with those root-level directories, there are several root-level files, which you likely won't need to change so we won't highlight. The project will look like

```
|- node_modules/
|- public/
|- src/
| ...configuration files
```

We'll talk about each of these in turn.

#### `node_modules/`

This directory is created when you run `npm install`. It houses all of the code of the dependencies. You will most likely not need to dive into this directory at all. Occasionally, you may need to delete this directory and re-install the dependencies, but that's mostly what you're going to do with this directory.

#### `public/`

This directory houses some very important documents. You'll note that the standard `index.html` is in this directory, along with `favicon.ico`.

The `index.html` document is actually the only `html` file in the project. It does a couple important things. First, it links to things like external stylesheets. It also declares a `div` with an id of `root`. When we create a React app, we actually attach it to this `root` div. You don't need to change it at all, it's just good to know.

In the `public/` directory you will find a directory called `images/`. This directory holds static image content, like logos or profile pictures. When you add pictures to the Team section on the website, you'll likely put the profile pictures in this subdirectory.

In general, the `public/` directory is where you should put your _static_ content. This will ultimately include things like homework assignment PDFs and project rubrics. Please use discernment in the directory structure. For example, if you are going to add a homework assignment PDF to the `public/` directory, it would be sensible to create a `homework/` subdirectory and place the PDF there.

Any resource you put in this directory will be publicly accessible. You will be able to add, say, a profile image in `public/images/<filename.jpg>`, and reference it in the code at `href=/images/<filename.jpg>`. This general pattern exists for PDFs that you may add to `public/homework/<filename.pdf>`. To reference that document in your code, you would use the link `href=/homework/<filename.pdf>`

**N.B.:** It is typically not advisable to add large files to a project like this, as the project is managed through GitHub. If you add a homework data .zip file that's 100mB, then the repository is suddenly inflated by 100mB, which is not great for developer experience. With large files (anything larger 10mB or so), I would add them to a public Google drive folder, and then link to that resource on this site. It's really not ideal to put large files into Git.

#### `src/`

This directory contains the bulk of the code for the website. As of the writing of this README, the structure looks generally like:

```
|-src/
	|-Components/
	|	|-Home/
	|	|-Homework/
	|	|-Lectures/
	|	|-Project/
	|	|-Footer.js
	|	|-TopNavigationMenu.js
	|-Pages/
	|	|-Home.js
	|	|-Homework.js
	|	|-Lectures.js
	|	|-Project.js
	|-App.js
	|-index.css
	|-index.js
	|-reportWebVitals.js
```

There are three main components to this directory: `Components/`, `Pages/`, and `App.js`. There's a very simple design philosophy in structuring the website this way. First, we'll cover each section in broad strokes, then we'll walk through the process of adding a new page to the site, which is an illustrative example.

We'll start by explaining `App.js`. This document is responsible for displaying the main navigation menu, displaying the footer, and displaying the appropriate webpage given the requested URL. Look through this document. It's unlikely that you would need to change anything big in this document but it's important to know your way around it.

Next, we'll talk about the `Pages/` directory. Each document in this directory represents a completely separate page of information on the website. Currently, there are pages for the Home page, the Homework page, the Lectures page, and the Project page. Open up one of these documents, for example, the `Pages/Homework.js` document. You will find a very simple page. It simply renders a `<HeroSection />` and `<HomeworkListSection />`. Those sections are defined in the `Components/` directory. All the documents in `Pages/` simply orchestrate which components to render and in which order they're displayed on a given page.

Finally, we'll address the `Components/` directory. This directory is divided into many subdirectories, each of which corresponds to a page from the `Pages/` directory. Each document in one of these subdirectories is a section of content on the site. For example, the document `src/Components/Project/ProjectMidtermSection.js` is responsible for displaying content about the Project midterm report. These sections will largely resemble traditional HTML pages, with some notable exceptions. One of the more obvious differences is simply that the tradition `class=` attribute of most HTML elements has been replaced by a `className=` attribute. This is a pain but just an intricacy of the JSX markup language. If you need to edit content on pages, you will most likely be changing the content in these component documents, using standard HTML methods.

### Editing existing content on the site

#### Simple Changes

Most of the text from the previous year's site has been copy-and-pasted into this project, so you likely won't need to change much on the homepage. If you need to make small updates to due dates or text, you can find the section of text you want to change in the `src/Components/` directory.

#### Technicalities for the Team Section, the Homework Page, and the Lectures Page

The Team Section, the Homework Page, and the Lectures Page all contain some special logic to make it easier to update the content.

**Team Section**
Open up `src/Pages/Home.js` and `src/Components/Home/TeamSection.js`. You will find that `Home.js` renders a component called `<TeamSection/>`, which you have conveniently just opened up. The Team section renders a little blurb for each person on the team. The blurb displays their name, their role, a profile image, their Twitter URL, and their LinkedIn URL. To add people to the team section, you will edit the variable `const people` at the top of the document. This variable is an array of JSON objects. Each JSON object represents a person. To add people, simply edit the existing object in the array and duplicate it so that the `people` variable consists of JSON objects for each person on the team. The link for the profile image should be selected according to our previous discussion on the `public/` directory.

**Homework Page**
Open up `src/Pages/Homework.js` and `src/Components/Homework/HomeworkListSection.js`. You will find that `Homework.js` renders a component called `<HomeworkListSection/>`. The `<HomeworkListSection/>` renders blurbs for each assignment. Similar to the Teams Section, you should edit the `const assignments` variable to render a new assignment or edit an existing one. The links for the assigments should be selected according to our previous discussion on the `public/` directory.

**Lectures Pages**
Similar to the two previous discussions, we see that `Lectures.js` renders a component which, in turn, renders a list of lectures. In this document, that list is controlled by the variable `const lectures` in `LectureListSection.js`. To add a lecture, simply add an object to the list that follows the general pattern defined by the template object that's already in the list. Pursuant to our discussion about the `public/` directory, the link for each lecture item should be specified relative to the subdirectory of `public/` where the document resides.

### Adding a page to the site

Now, we'll walk through the process of adding a page to the site for the course quizzes. Here are the general steps:

1. Duplicate whatever document in `Pages/` looks the most like what you want. Rename that duplicated file `Quizzes.js`.
2. In `Pages/Quizzes.js`, delete the import statements in the first couple lines, as well as the rendered components like `<HeroSection/>`, etc.
3. Create a subdirectory in `Components/` called `Quizzes`, yielding the path `Components/Quizzes/`.
4. In `Components/Quizzes/` create a file called `HeroSection.js`.
5. Copy the content from some other `HeroSection.js` file into `Components/Quizzes/HeroSection.js` and make the appropriate changes in terms of text.
6. Create documents for the other sections you will need on the quizzes page. These files will live in `Components/Quizzes/`. Copy and paste stuff where you can!
7. Back in `Pages/Quizzes.js`, import the sections you just created in `Components/Quizzes/`. Render them in between the `<div className="relative"> ... </div>` tags, following the example set by other documents in the `Pages/` directory.
8. In `src/App.js`, import the page you just made by adding the line `import Quizzes from "./Pages/Quizzes"` by the other page import statements.
9. In `src/App.js`, duplicate the `<Route path="" > <Component> </Route>` and change the `path=""` to `path="/quizzes`. The component rendered inside the `<Route>` tags will be `<Quizzes />`, yielding:

```
<Route path="/quizzes">
	<Quizzes />
</Route>
```

10. Almost done! Now we just need to update the navigation menu to accomade the new page. Open `src/Components/TopNavigationMenu.js`. In the `const navigation` variable, add the following object: `{ name: 'Quizzes', href: '/quizzes'}`. The `name` property specifies what's displayed on the navigation menu. The `href` property specifies the path that you defined in the `<Route path= >` component in the previous step. Previously we set `<Route path="/quizzes">`, so we just need to set the `href` propert to `href: '/quizzes'`. This component is set up to read from the `const navigation` variable and automatically handles mobile navigation menu design changes.
11. Celebrate: you've added a new page! 🎉

## Deploying Course Web

Awesome! We've covered pretty much everything you need to know to add and edit content on the site. The only thing that's left to talk about is getting your changes on the internet-facing website. This is actually super simple.

The site is currently set up on Netlify, which is a fabulous hosting provider. If you want to deploy the changes you've made, commit them to the repository on Git and merge them to the `main` branch. Netlify will automatically detect that there was a change to the `main` branch and will deploy the site for you. In a couple minutes, you'll be able to access your changes on the internet-facing site. Unless something broke...

Right now the repository you've been working on is deployed to the website https://hungry-tereshkova-f1fd8c.netlify.app/. This is a dummy URL that is automatically generated by Netlify, a hosting provider. Once you all are satisfied with the content of the website, patconrey will move it over to [teamia.io](http://teamia.io/) or [mlsp21.cs.cmu.edu](http://mlsp21.cs.cmu.edu/).

### Testing before going live

To make sure that there are no errors before you push your code, run the command `npm run build`. This will produce a new root-level directory called `build/`. It houses all of the build artifacts. If you can run this command without any errors, then feel free to push your changes to the `main` branch! If there are errors, you'll need to fix those before the site can be deployed. And it's not a "you _should_ fix those before site is deployed". Netlify won't deploy the site if there are any errors, so those errors _have_ to get fixed.

## Available Scripts for Web Building

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

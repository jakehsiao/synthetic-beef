# Guide for React Learners
By Hanchi Xiao (@jakehsiao).

[React](https://reactjs.org/) is a modern and elegant way of developing web pages. **If you want to make a website, you should dive into this right now.**

I recently made a hackathon project using React, and here's the [learning log and stories behind that](https://github.com/jakehsiao/synthetic-beef/blob/master/learning_log.md).

## Why You Should Learn React
- **The state-of-art and the most elegant way to develop web applications.** It's simply much better than old methods like vanilla javascript or jQuery.
- **Easy to learn.** It only requires the basic understanding of a programming language. Then you can simple create a new react app, and dive into the development.
- **Plenty of community developed components ready to use.** You never need to write everything from scratch. Just grab some components developed by skilled developers, put them together, and you got a super fancy professional-looking webpage!
- **Revolutionary design concepts.** If you don't want to be a front end developer, or even don't want to make web pages, you are still encouraged to learn React. React introduces a new and elegant way to develop user interface. This is revolutionary. Highly modularized components, the functional programming concept that see web application as a mapping from data to web view, the immutable state tree and single source of truth design concept. Learning React would simply  and make you a better developer.

## Prerequisites
To dive into React, you need to know:
- **A programming language.** JavaScript is preferred because React is based on it, or languages with similar syntax like C++, Java or C#. You need to know how to use conditions(if statement), loops(for statement), define functions and classes. To learn more, check [codecademy](https://www.codecademy.com/learn/introduction-to-javascript).
- **A basic understanding of HTML.** What HTMl pages look like behind the scene, and have a good understanding of "div" and "img" tags, which are used the most. To learn more, check [codecademy](https://www.codecademy.com/learn/learn-html).
- **A basic understanding of CSS.** How to use CSS to styling HTML pages, simple CSS attributes like width, height, margin, border. Understanding of flexbox pattern is better. To learn more, check [codecademy](https://www.codecademy.com/learn/learn-css).
- Some **basic functional programming patterns** like function as parameter, map and reduce. It is not mandatory and you will learn it gradually in the learning process. But React itself is based on functional programming so knowing some helps you a lot.

## Dive into React
- The first class of your React learning journey should always be this great [Codecademy Course](https://www.codecademy.com/learn/react-101). In my view it is the best React learning tutorial so far.
- Once you know the basic of React, [Create a new React App](https://create-react-app.dev/docs/getting-started/), and write something for fun! There are some [learning project suggestions](https://www.freecodecamp.org/news/8-reactjs-project-ideas-to-start-learning-by-doing/).
- Also, the modern way to use React is to use [Hooks]() rather than class components. Try change all your class components to functional ones using hooks, and see the difference! Even there are plenty of hooks to use, knowing useState and useEffect is enough for most of the time.

## Rubric of Understanding
- Able to write a simple web application using Create-React-App. Know how to write reusable components using JSX with Hooks, and arrange them layer by layer.
- Know how to use CSS to style your webpage. Know how to use flexbox to arrange the components smartly.
- Know how to fetch API and display the fetched contents.
- Let all your code follow the [style guide](https://github.com/airbnb/javascript/tree/master/react).
- Know some best practices of React, like stateful-stateless architechture, and single-source-of-truth state management.
- Know how to use components that are open source and developed by communities. One of the React's biggest strength is the reusability of components!

## Advanced Learning
If you have already learned everything above and want to move one step further in the journey of React, here are some advanced topics:
- **Typescript:** One of the biggest shortcomings of Javascript is it doesn't have a type system. A type system is essential for collaboration and robustness. [Typescript](https://www.typescriptlang.org/) is such a solution and quite popular around front end developers.
- **Redux:** When the state tree of your project goes large and quite complex, "useState" hook may no longer meet your needs. [Redux](https://redux.js.org/) is the most popular state management library for React. It also optimizes your code structure so you don't need to pass the functions layer by layer from top to bottom. And don't forget that modern Redux use Hooks as well.
- **React Router:** Your web application is very likely to need routers, where you access different contents via different url address. [React Router](https://reactrouter.com/web/guides/quick-start) is for this.
- **Ant Design:** You may want your website looks professional even you know nothing about art and UI design. [Ant design](https://ant.design/) has a box of ready-to-use pro-looking components that you can simply combine them to make a beautiful website.
- **NodeJS:** Sometimes only a frontend client cannot meet your needs. You may need a backend to store user data and so on. However, you don't need to learn a new progamming language to develop a backend. You can bring your decent Javascript skills to backend as well. [NodeJS](https://nodejs.org/en/) is a quite easy to use backend solution and you may use [Express](https://expressjs.com/) to build a simple backend for your application. If that's not enough, try [NestJS](https://nestjs.com/) and [SocketIO](https://socket.io/).
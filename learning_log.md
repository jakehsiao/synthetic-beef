## Chapter 1: Choice of Project
At first, I want to contribute to some of my favourate open source projects, like [pandas]() and [scikit-learn]().

The pandas project has a quite specific [contributing guide]() that guide me step by step on how to contributing code to the project. 

By following the guideline, first is to find a issue to work on. 

However, most issues require triage, which is quite challenging and require a decent understanding of the codebase.

Then I decide to work on issues with "good first issue" at first. 

However, most of issues with this tag are already taken by others, and with a great amount of discussions around that.

The [only issue I took]() on pandas is then replied by the maintainer that this issue is already fixed in master branch. 

Finally, I failed to contribute to pandas.

Then I tried scikit-learn. First find some issues that look easy to work on. I found 2 issues and replied "take" to both of them. 

Then I start following the [contributing guide]() of sklearn to start working on the code base. The contributing guide of sklearn is also quite specific too. 

However, I failed to build from source but this step is essential for the development . I searched the error message all over the google, tried all possible methods, but none of them worked. 

Therefore, contributing to another open source project, sklearn, failed again.

After trying to contribute to 2 open source projects failed, I decide to partipitate in a hackathon.

It seems like **contributing to open source projects is much harder than I previously thought.** Most issues require bug traige which needs a deep understanding of the codebase. And most "good first issue" and "up for grab" issues are taken quite soon after posted.

So next, I will change my goal from contributing open source projects to performing well in a hackathon.

## Chapter 2: Start with Hackathon
The hackerathon is called [leading](). The theme this time is **raising awareness**. Develop an application that mention people something important that they were not aware of before.

The theme is quite challenging. After I took part in as an individual, I was assigned to a team with 2 strangers.

After some brainstorm and googling, we decide to do a project about synthetic meats. Breeding beef is harmful to the environment and emit tons of greenhouse gases like methane. Therefore, by replacing some beef that you eat with articial ones, can significantly save the environment.

Once the project to be done is confirmed, the role of each member is quickly figured out. I do the front end part using React, Khadar do the back end part using Node, and Roberto do the data analysis part.

So what I am going to do is **sharpen my React skill and build pro-looking web application.**

I've learned some React before on [Codecademy](), and to further improve my React skill, I also learned about [Best Practices]() and [Style Guide from Airbnb]().

To start the development of the client side, first I need to create a new react app, using the most popular tool, [Create React App]().

However, after an react app is created, it failed to start running.

This bug is unexpected and I had never seen it before, what a strange bug it is.

{Error message}

Then I googled a lot about the error messages above. I found some solutions on github issues and stackoverflow, however, I had tried all of them, but none of them worked for me. That was really maddening.

However, at the same time, I tried to run another react app I had created before, and it worked properly. So it must be caused by the new version of create-react-app. The react app created by older version of c-r-a works normally, but by the newest version of c-r-a cannot run.
    
Then I read the error message again and again carefully, and found that is came from a node module called "fsevents". And that is not from the "fsevents" its own, it came from a submodule of a module called "chokidar". By comparing this module of the worked react app and unworked react app, I found the difference: the working one uses the chokidar of version 3.4.0 but the not working one uses version 2!

Then by upgrading the "chokidar" module into version 3, the app works back to normal. So it was all because of version 2 of chokidar! I triaged the bug and solved it on my own.

Then I added this [new issue]() to create-react-app official github repository, asked them, why downgrade "chokidar" from version 3 to version 2 in newer version of create-react-app, and that would cause problems in MacOS.

Therefore, **when a tough bug comes, and none of the googled methods worked, read the error message carefully, letter by letter,** and may find some hints from it.

After this bug is solved, the development of the web application begins.

## Chapter 3: Development of Project
To develop pro-looking web applications, the easiest way is to use production-ready templates.

First, I tried on [Bootstrap templates](). However, those templates are not compatible with React.

Then I tried [Ant Design Landing](), a template library. However, after installed, it was not able to run and some unexpeted error messages are shown, and I did not find any solution for those problems. So I failed to use Ant Design templates.

After I failed to use Ant Design templates, I reported those error messages on [official repository](). Sometimes reporting an issue is also a way of contributing to open source projects.

After several templating methods failed, I decided to write everything from scratch, without using any templates. To make the website look professional, I googled how to design better web user interface. And here are several tips I found:
- Use CSS3 Shadows
- Add a background, even is just some random textures
- Add some icons
- Leave more whitespaces
- Add some animations

Even I am not a professional UI designer, simply add those tricks to the web application can simply make a big difference.

Then I find CSS is quite a challenging part in development and can easily become a time-consuming black hole. I found the most of the developing time, I am not writing code, not debugging, but tweaking those CSS files.

First, there must be some proven pattern for ratios of web components, maybe some of them are based on some mathematics research like golden ratio. Then, there must be better ways of writing css rather than just tweaking margin, width and height.

Then, I asked a friend who is working on front end development. "Use flex." simply he said.

Therefore, I found some really good css-flexbox tutorials like [css-tricks flex guide]() and [flex frogs](). After learned them, I added flex attributes to every div components, and also some smart css tricks like "martin:auto". **Flex is a really powerful CSS technique, it makes tweaking CSS files much easier than before.**

Finally, my part, client side development, has finished, and posted on [github pages](). It is time for other teammates to contribute to this project.

## Chapter 4: Contributing and Further Improvements
We decide to use [this repository]() as the main entry point for our project. All the codes, assets, and data, are shared in this repository, by simply add pull requests.

However, one teammate is not familiar with pull request on github. Therefore, I wrote a [contributing guide]() to show other teammates how to add pull requests and contribute to this project step by step.

After 2 full days of development, the hackathon is reaching the deadline. The minimum viable product is already online, however, it is just a MVP, still far from what I expected for this project.

So for sure this project will keep developing and iterating to be better and better, here are some further improvements:
- Integrate selling pages of synthetic meats from Amazon. This may require the Amazon SDK to integrate selling pages with this web application seamlessly.
- Add [Typescript](). This can make up for Javascript's shortcomings while greatly improve the robustness of the project.
- Add [Redux]() when the state tree goes complex. Currently the state system for this project is quite simple but it will go complex in the future. Redux is the most popular state management solution for React. However not now, because currently "useState" hook works really well.
- Add templates. Even I failed to add ant design templates at first, maybe this issue will be fixed in the future and using templates comes available again. I may also try other templating methods that are available in React.

So finally, my understandings of React, Javascript, CSS, and git collaboration have improved a lot in this project.
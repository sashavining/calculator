# calculator

A calculator that accepts input from the user's input (keyboard or clicking on buttons).

![Landing Page Gif](https://github.com/sashavining/calculator/blob/5bdcbacb966274b23e06f60ec221bdbdcc3cbb17/Document%20(2).gif)

## How It's Made:

Made this project to practice my DOM manipulation, array, and string skills in Javascript. I riffed off of the iPhone calculator display for the GUI. 

**Tech used:** CSS, HTML, JavaScript

## Optimizations

I had to change my approach several times as I went through the project. The most impactful change I had to make was how I was collecting input. Initially, I was collecting the textContent of the keys, but collecting the event.code from keypresses. That led to some extremely messy and buggy code. Switching to collecting event.key fixed the problem. Looking back at the parameters of the project, I probably also would have limited the top display to a single operand and operator for clarity, as the calculator does not obey order of operations. 

## Lessons Learned:

Plan out projects in more detail with pseudocode beforehand. I retred and re-factored a lot of code that I would not have had to, had I planned out my methods and logic beforehand. 

(Created 2/1/2022)

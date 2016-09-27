# Flea

![Flea!](https://github.com/LosGimenos/Flea/blob/master/img/Screen%20Shot%202016-09-26%20at%209.22.51%20PM.png?raw=true)

Single-page listing app built with React, Node, Superagent, Firesbase, Webpack, Babel, HTML, and Css.

Simple commerce is the best thing ever. Hey I have a thing for sale! Hey I want to buy that thing! I wanted to figure out the bare bones of being able to put something up for sale, seeing who sold it, who is bidding on it, and have that info stored somewhere. Eventually I want to tie this engine into something that will be accessible via SMS. In some neighborhoods, folks have phones, but don't want to mess with all that 'smart'. SMS is still the way many of these folks prefer to handle things. But that is another story...

![Flea toList](https://github.com/LosGimenos/Flea/blob/master/img/Screen%20Shot%202016-09-26%20at%209.22.36%20PM.png?raw=true)

For this version, you are able to register an account and list items (really just computers for now. Why not? Everyone loves them). 

![Flea listings](https://github.com/LosGimenos/Flea/blob/master/img/Screen%20Shot%202016-09-26%20at%209.22.21%20PM.png?raw=true)

Once you place a listing you can see it and all other listings from the listings page.

![Flea bids](https://github.com/LosGimenos/Flea/blob/master/img/Screen%20Shot%202016-09-26%20at%209.23.23%20PM.png?raw=true)

You can check your own listings from the listings panel.
![Flea winnings](https://github.com/LosGimenos/Flea/blob/master/img/Screen%20Shot%202016-09-26%20at%209.23.32%20PM.png?raw=true)

You can also check the listings that you are currently winning.

---

## Installations

Nothing for the user to install.

---

## Challenges

I found structuring data and working with Firebase to be the most challenging part. I essentially came down to attached ID's to everything that is happening on Flea. Including giving ID state to the Dashboard upon login. Not sure if this is best practice, but it's the only way I could get set up conditionals that weren't making constant calls to the database. Even though I tried reusing some components here and there, I sometimes couldn't match up the data that they were used to receiving with props I was passing in. Some components are empty when they are so packed with life coming from other areas.

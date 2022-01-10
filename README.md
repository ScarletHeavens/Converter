# a simple converter with five options

This quick and simple converter allows you to choose between five different options - Farenheit, Celcius, feet, inches and Centimeters. 

# You can only type in numbers, a negative number and an apostrophe in case you are calculating in inches. 
In case you type in just a minus or an apostrophe as a first symbol, the process will not go further and the text will change. 

# You can type the amount once and then switch between options. By default the amount is set to zero, and some measurements will already show in the result, (like Farenheit to Celcius) just because...that's how science works. 
The clear button clears the display. 
If you want to reset the option too, the app should be reloaded. 

# The code has been written using ES6 and React hooks for a simple state management, and I split it in just a few components and two validators (one utilizing regEx) for the input and output validation. 
As for the CSS, I used the amazing Glassmorphism calculator article https://www.codinglabweb.com/2021/02/how-to-make-calculator-using-html-css.html as a base and added a few tweaks from myself, including the Select element from the 'react-select' library.


In general, this is the first code I created off the top of my head and I guess it's not perfect, but it works ;) 

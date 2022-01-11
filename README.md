# A simple converter with five options

The converter allows you to choose between five different options - Farenheit, Celcius, feet, inches and Centimeters. 

<img width="482" alt="Screenshot 2022-01-11 at 13 36 38" src="https://user-images.githubusercontent.com/87530494/148943796-a9269b5b-9fed-4c6c-b3e3-2d055d71ad16.png">

You can type in numbers, a negative number and an apostrophe in case you are calculating in inches.The resulting digit will allow only floats up to 2 digits. 
In case you type in just a minus or an apostrophe as a first symbol, the process will not go further and the text will change. Same if you continue by typing in a letter.

<img width="475" alt="Screenshot 2022-01-11 at 13 36 54" src="https://user-images.githubusercontent.com/87530494/148943855-3ac66b52-0221-4003-9113-e2febfa5f488.png">


You can type the amount once and then switch between options. The default amount is set to zero, however some convertations will be above or below zero by default (like Farenheit to Celcius). 
The clear button clears the display. 
If you want to reset the option too, the app should be reloaded. 

<img width="474" alt="Screenshot 2022-01-11 at 13 29 04" src="https://user-images.githubusercontent.com/87530494/148942825-4fb56931-4cc2-458d-b35d-0303340aea14.png">

The code has been written using ES6 and React hooks for a simple state management, and I split it in just a few components and two validators (one utilizing regEx) for the input and output validation. 

<img width="495" alt="Screenshot 2022-01-11 at 13 28 55" src="https://user-images.githubusercontent.com/87530494/148942832-305dcffa-2c4c-43e4-a7d0-0168d76976f0.png">

As for the CSS, I used the amazing Glassmorphism calculator article https://www.codinglabweb.com/2021/02/how-to-make-calculator-using-html-css.html as a base and added a few tweaks from myself, including the Select element from the 'react-select' library.


In general, this is the first code I created off the top of my head and I guess it's not perfect, but it works ;) 

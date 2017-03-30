# _Roman Numerals Converter_

#### _A simple JavaScript driven program to convert Hindu-Arabic numbers to Roman numerals, 30-03-2017_

#### By _**Aubrey Masten & Trevor Fast**_

## Description

_This program allows a user to enter any number between 1 and 3999 and receive an output of its Roman Numeral counterpart. This is done by using a keyboard and a mouse via an internet browser._

## Setup/Installation Requirements

* In your desired directory enter the command:
* `git clone https://github.com/Sommersette/roman-numerals`
* or visit sommersette.github.io/roman-numerals

## Expected Behaviour/Specs

  1. if the user inputs any number from 1-9 they will be shown its corresponding Roman numerals. The pairs are {1:I,2:II,3:III,4:IV,5:V,6:VI,7:VII,8VIII:,9:IX}
  2. if the user inputs any number from 10-90 they will be shown its corresponding Roman numeral. The pairs are {10:X,20:XX,30:XXX,40:XL,50:L,60:LX,70:LXX,80:LXXX:,90:XC}
  3. if the user inputs any number from 100-900 they will be shown its corresponding Roman numeral. The pairs are {100:C,200:CC,300:CCC,400:CD,500:C,600:DC,700:DCC,800:DCCC:,900:CM}
  4. if the user inputs any number from 1000-3000, they will be shown its corresponding Roman numeral. The pairs are {1000:M,2000:MM,3000:MMM}
  5. when the user enters a number which includes a combination of numbers from different bases, each digit is interpreted separately, using the same logic, substituting that base's specific set of character example: 444 would be interpreted in three steps as 4 using 100s characters(CD), 4 using 10s characters(XL) and 4 using 1s characters(IV) for a final string of CDXLIV
  6. if user inputs 0's, ignore those numbers and move on to the next conversion
  7. concatenate all outputs into total final numeral.
  8. validate user input, to ensure code only operates on numbers between 1-3999

## Known Bugs

There are no known bugs or issues when running on Chrome. If you find an issue, you can find contact information below.

## Support and contact details

_For more information about this project and/or future projects you can send messages via github or email: TrevorRfast@gmail.com or aubreymasten@gmail.com_

## Technologies Used

* HTML 5.1
* CSS 3
* JavaScript
* Bootstrap 3.7
* JQuery 3.2.0

### License

Copyright (c) 2016 **_Aubrey Masten & Trevor Fast_**

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

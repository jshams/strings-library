# Strings Library
![npm](https://img.shields.io/npm/v/strings-library.svg?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/min/strings-library.svg?style=plastic)
[![Build Status](https://travis-ci.com/jshams/strings-library.svg?branch=master)](https://travis-ci.com/jshams/strings-library)

## Description

This library includes basic string manupulation methods that you can call on string objects. Some including capitalizing words or switching cases of short (or long) phrases.
- [Github](https://github.com/jshams/npm-libraries-few2-1/tree/master/strings-library)
- [NPM](https://www.npmjs.com/package/strings-library)

## Installation

Start by running this command in your project's directory
```
npm install strings-library --save
```
And then requring it on the top of your index.js file 
```
require('strings-library')
```





## Methods

| Method                 |                  Description                        | Example input                  | Example output                 | 
|:-----------------------|:----------------------------------------------------|:------------------------------|:------------------------------|
| .firstCharToUpper()    | returns the string with the first char capitalized  | 'hello world'            | 'Hello world'            |
| .allCaps()             | returns the string completely capitalized           | 'hello world'            | 'HELLO WORLD'            |
| .allfirstCharsToUpper()| returns the string with the first letter of every word capitalized | 'hello world'|     'Hello World'     |
|.upperEveryOtherLetter()| returns the string with every other letter capitalized | 'hello world'         | 'HeLlO wOrLd'            |
| .removeWhiteSpace()    | returns the string with white space removed         | '  hello    world  ' | 'hello world' |
| .kabobCase()           | returns the string in kabob-case                    | 'hello world             | 'hello-world'            |
| .snakeCase()           | returns the string in snake_case                    | 'hello world'            | 'hello_world'            |
| .camelCase()           | returns the string in camelCase                     | 'hello world'            | 'helloWorld'             |



## Code Samples

```javascript
const str = 'i like yellow water baloons'
str.firstCharToUpper()          // 'I like yellow water baloons'
str.allCaps()                   // 'I LIKE YELLOW WATER BALOONS'
str.upperEveryOtherLetter()     // 'I lIkE yElLoW wAtEr BaLoOnS'
str.removeWhiteSpace()          // 'i like yellow water baloons'
str.kabobCase()                 // 'i-like-yellow-water-baloons'
str.snakeCase()                 // 'i_like_yellow_water_baloons'
str.camelCase()                 // 'iLikeYellowWaterBaloons'
```
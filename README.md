# JS-Password-Generator 
### Install:
`npm i sos-password-generator`


### Usage
1. Require the package:

```javascript
const PasswordGenerator = require('sos-password-generator')
```

2. Create an instance of PasswordGenerator Class

```javascript
const generator = new PasswordGenerator();
```
3. Generate your password:
```javascript
console.log(generator.generatePassword()); //Result => generates random 8-character-length password 
                                        // contains numbers,lower case ,upper case, and symbols.
```   


### Custom Options 
Before generating password,You can pass options object to the method init

```javascript
generator.init({
    hasUpper:true,
    hasLower:true,
    hasSymbol:true,
    hasNumber:false,
    passwordLength:15,
    allowedSymbols: '!@#$',
})
```

### Default options

```javascript
hasUpper:true
hasLower:true
hasSymbol:true
hasNumber:true
passwordLength:8
allowedSymbols: '!@#$%^&*(){}[]=/<>,.'
```


Credits
-------
- [Linkedin Account](https://www.somar-kesen.com/)  </br>
- [My website](https://www.somar-kesen.com/) </br>
- [All contributors](https://github.com/Syrian-Open-Source/js-password-generator/graphs/contributors)

About Syrian Open Source
-------
The Syrian Open Source platform is the first platform on GitHub dedicated to bringing Syrian developers from different cultures and experiences together, to work on projects in different languages, tasks, and versions, and works to attract Syrian developers to contribute more under one platform to open source software, work on it, and issue it with high quality and advanced engineering features, which It stimulates the dissemination of the open-source concept in the Syrian software community, and also contributes to raising the efficiency of developers by working on distributed systems and teams.

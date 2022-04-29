'use strict';
class PasswordGenerator{
    constructor() {
        this.settings = {
          hasUpper:true,
          hasLower:true,
          hasSymbol:true,
          hasNumber:true,
          passwordLength:8,
          allowedSymbols: '!@#$%^&*(){}[]=/<>,.',
        };

        this.password = "";
    }
    init(settings){
        this.settings = Object.assign({},this.settings,settings);
    }
    #getRandomCharacter(start,offset) {
        return String.fromCharCode(Math.floor(Math.random() * offset) + start);
    }

    #randomFunc = {
        hasLower: ()=> { return this.#getRandomCharacter(97,26)},
        hasUpper: ()=> { return this.#getRandomCharacter(65,26)},
        hasNumber: ()=>{ return this.#getRandomCharacter(48,10) },
        hasSymbol: ()=> { return this.settings.allowedSymbols[Math.floor(Math.random() * this.settings.allowedSymbols.length)];
        },
    };
     generatePassword(){
        let password = "";

        const typesCount = Object.values(this.settings).filter(item=>{if(item===true) return item}).length;
        const typesArr = Object.keys(this.settings)
            .filter((item) =>
                {  if(this.settings[item]===true)
                    return item
                });

        for (let i = 0; i < this.settings.passwordLength; i += typesCount){
            typesArr.forEach((type) => {
                password += this.#randomFunc[type]();
            });

        }
        password = password.slice(0,this.settings.passwordLength);
        for(let i =0; i<16; i++)
        {
            password = this.#shuffle(password);
        }
        return password;
    }


    #shuffle(s) {
        var arr = s.split('');
        var n = arr.length;

        for(var i=0 ; i<n-1 ; ++i) {
            var j = Math.floor(Math.random() * n);

            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        s = arr.join('');
        return s;
    }
}

module.exports = PasswordGenerator;

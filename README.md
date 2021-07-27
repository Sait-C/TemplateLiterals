# TemplateLiterals

*Template Literals (formerly Template Strings) is a form of string writing that came with ES6 that provides code readability and ease of writing.*

## Benefits
### Multi-Line String Writing:
```JavaScript
//Old Usage:
let oldString = "My favorite foods:\nPasta\nHamburger"

//New Usage:
let newString = `My favorite foods:
                  Pasta
                  Hamburger
                  Meatball`
```

### Interpolation
- *Interpolation means using variables in text. It is used to embed expressions within regular strings.*

```JavaScript
let a = 99;
let b = 999;

console.log(`${a} times ${b} equals ${a*b}`);

//Output: 
//99 times 999 equals 98901
```

### Readability
![DesignForReadability](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignshack.net%2Fwp-content%2Fuploads%2Freadability-lede.jpg&f=1&nofb=1)
### It makes template tags less complex.
[An Example](https://github.com/Sait-C/TemplateLiterals/blob/main/templateLiterals.js)

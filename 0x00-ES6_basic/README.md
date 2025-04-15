# ALX Backend JavaScript

## 0. Const or let?

Modify

- function ```taskFirst``` to instantiate variables using ```const```
- function ```taskNext``` to instantiate variables using ```let```

```javascript
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

Executed example:

```terminal
ty@theAstralProgrammer0:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

ty@theAstralProgrammer0:~$
ty@theAstralProgrammer0:~$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
ty@theAstralProgrammer0:~$
```

## 1. Block Scope

Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

```javascript
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

Execution:

```terminal
ty@theAstralProgrammer0:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
ty@theAstralProgrammer0:~$
ty@theAstralProgrammer0:~$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
ty@theAstralProgrammer0:~$
```

## 2. Arrow functions

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

Execution:

```terminal
ty@theAstralProgrammer0:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
ty@theAstralProgrammer0:~$
ty@theAstralProgrammer0:~$ npm run dev 2-main.js
[ 'SOMA', 'Union Square', 'Noe Valley' ]
ty@theAstralProgrammer0:~$
```

## 3. Parameter defaults

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

```javascript
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

Execution:

```terminal
ty@theAstralProgrammer0:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
ty@theAstralProgrammer0:~$
ty@theAstralProgrammer0:~$ npm run dev 3-main.js
142
56
41
ty@theAstralProgrammer0:~$
```

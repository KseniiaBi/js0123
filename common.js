import {user} from './user.js';
import { credentials } from './constants.js';
import {calc as math} from './calc.js';
import Admin from './admin.js';
import * as helper from './helper.js';

credentials();
user.sayHi();

console.warn(math.sum(2,3));

let a1 = new Admin('Jacob');
console.log(a1);


helper.bar();
helper.fizz();
helper.foo();
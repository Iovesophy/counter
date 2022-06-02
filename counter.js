import {inc,dec} from './calc.js';

const ERROFCOUNT = "Counter limit";

let parseElem = i => document.getElementById(i);

document.getElementById("add").onclick = () => {
    var e = parseElem("view")
    var c = parseInt(e.textContent);
    if (c < 1000) {
        e.textContent = inc(c);
    } else {
        alert(ERROFCOUNT);
    }
}

document.getElementById("sub").onclick = () => {
    var e = parseElem("view")
    var c = parseInt(e.textContent);
    if (c > 0) {
        e.textContent = dec(c);
    } else {
        alert(ERROFCOUNT);
    }
}


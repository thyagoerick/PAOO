"use strict";
function contador(inicial) {
    return () => inicial++;
}
const c1 = contador(10);

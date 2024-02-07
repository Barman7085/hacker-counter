let count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment()
{
    count += 1;
    // console.log(count);
    countEl.textContent = count;
}

function save()
{
    let output = count + "-";
    saveEl.textContent += output;
    count = 0;
    countEl.textContent = 0;
}



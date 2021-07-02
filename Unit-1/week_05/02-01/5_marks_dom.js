var btn = document.querySelector("form");
btn.addEventListener('submit', getInput);

function getInput(event){
    event.preventDefault();
    var name = document.querySelector('#name');
    var science = document.querySelector('#science');
    var age = document.querySelector('#age');
    var english = document.querySelector('#english');
    var maths = document.querySelector('#maths');

    var table = document.querySelector("table")
    var tr = document.createElement('tr')
    var name_td = document.createElement("td");  
    var age_td = document.createElement("td");  
    var sci_td = document.createElement("td");  
    var maths_td = document.createElement("td");  
    var eng_td = document.createElement("td");  
    var total_td = document.createElement("td");
    var del_td = document.createElement("td");
    var del_btn = document.createElement("button");
    del_btn.innerHTML = "Delete"

    name_td.innerHTML = name.Value;
    sci_td.innerHTML = science.Value;
    eng_td.innerHTML = english.Value;
    math_td.innerHTML = maths.Value;
    sci_td.innerHTML = science.Value;
    total_td.innerHTML = Number(science.value) + Number(english.value) + Number(maths.value);
    del_btn.addEventListener('click', deleteRow)
    del_td.append(del_btn)

    tr.append(name_td);   
            //    if use prepend del_td will com first and name_td at last;
    tr.append(age_td);
    tr.append(sci_td);
    tr.append(maths_td);
    tr.append(eng_td);
    tr.append(total_td);
    tr.append(del_td);

    table.append(tr);

    name.value = "";
    science.value = "";

}

function deleteRow(event){
    console.log(event.target);
    event.target.parentNode.parentNode.remove();
}
var arrow = document.getElementsByClassName("arrow");
console.log(arrow.length);

for (var i = 0; i < arrow.length; i++){
    arrow[i].addEventListener('mouseenter', enterfunction)
    arrow[i].addEventListener('mouseleave', leavefunction)
}
// "fi-rr-angle-small-right
function enterfunction(event){
    event.target.setAttribute("class", "fi-rr-arrow-small-right arrow")
}

function leavefunction(event){
    event.target.setAttribute("class", "fi-rr-angle-small-right arrow")
}

// display on & off of header dropdown
function display_block (input) {
    input.style.display = "block"
}
function display_none (input) {
    input.style.display ="none"
}
function white (input) {
    input.style.color = "white"
}
function color_default (input) {
    input.style.color = "#716890"
}
var pdt = document.getElementById("prdt");
var sol = document.getElementById("solutions");
var cust = document.getElementById("customer");
var price = document.getElementById("pricing");

var dropdown_pdt = document.querySelector(".header_dropdown_product");
var dropdown_sol = document.querySelector(".header_dropdown_solutions");

// pdt.addEventListener('mouseenter', function(){
//     display_block(dropdown_pdt);
//     display_none(dropdown_sol);
// })
// dropdown_pdt.addEventListener('mouseleave', function(){
//     display_none(dropdown_pdt);
// })

// sol.addEventListener('mouseenter', function(){
//     display_block(dropdown_sol);
//     display_none(dropdown_pdt);
// })
// dropdown_sol.addEventListener('mouseleave', function(){
//     display_none(dropdown_sol);
// })
// price.addEventListener('mouseenter', function(){
//     display_none(dropdown_pdt);
//     display_none(dropdown_sol);
// })
// cust.addEventListener('mouseenter', function(){
//     display_none(dropdown_pdt);
//     display_none(dropdown_sol);
// })

// services DOM

var rthink_btn = document.getElementById("rethink_btn");
var auto_btn = document.getElementById("automate_btn");
var gbl_btn = document.getElementById("global_btn")

var rethink = document.getElementById("rethink_pricing");
var automate = document.getElementById("automate_finops");
var global = document.getElementById("go_global");

var lin_rt = document.querySelector(".line_left");
var lin_auto = document.querySelector(".line_middle");
var lin_gbl = document.querySelector(".line_right");

rthink_btn.addEventListener('click', function(){
    display_block(rethink);
    display_none(automate);
    display_none(global);
    white(rthink_btn);
    color_default(auto_btn);
    color_default(gbl_btn);
    display_block(lin_rt);
    display_none(lin_auto);
    display_none(lin_gbl);
    rethink.style.display = "flex";
})
auto_btn.addEventListener('click', function(){
    display_none(rethink);
    display_block(automate);
    display_none(global);
    color_default(rthink_btn);
    white(auto_btn);
    color_default(gbl_btn);
    display_none(lin_rt);
    display_block(lin_auto);
    display_none(lin_gbl);
    automate.style.display = "flex"
})
global_btn.addEventListener('click', function(){
    display_none(rethink);
    display_none(automate);
    display_block(global);
    color_default(rthink_btn);
    color_default(auto_btn);
    white(gbl_btn);
    display_none(lin_rt);
    display_none(lin_auto);
    display_block(lin_gbl);
    global.style.display = "flex"
})

// stretch arrow

var login_ang = document.querySelector(".login_angle");
var login_arr = document.querySelector(".login_arrow");
var log = document.querySelector(".login");

log.addEventListener("mouseenter", function(){
    login_arr.style.display = "block";
    login_ang.style.display = "none";
    login_arr.style.marginTop = "0px";
})
log.addEventListener("mouseleave", function(){
    login_arr.style.display = "none";
    login_ang.style.display = "block";
    login_ang.style.marginTop = "0px";
})

var sch_nav_ang = document.querySelector(".sch_nav_angle");
var sch_nav_arr = document.querySelector(".sch_nav_arrow");
var sch_orng = document.querySelector(".schedule_orange");

sch_orng.addEventListener("mouseenter", function(){
    sch_nav_arr.style.display = "block";
    sch_nav_ang.style.display = "none";
})
sch_orng.addEventListener("mouseleave", function(){
    sch_nav_arr.style.display = "none";
    sch_nav_ang.style.display = "block";
})

var arr_purp = document.querySelector(".arr_purp");
var sch_purp = document.querySelector(".schedule_purple")

sch_purp.addEventListener("mouseenter", function(){
    arr_purp.style.padding = "0 0 0 3px";
})
sch_purp.addEventListener("mouseleave", function(){
    arr_purp.style.padding = "0";
})

var sign_it = document.querySelector(".sign_i");
var sign_u = document.querySelector(".sign_up")

sign_u.addEventListener("mouseenter", function(){
    sign_it.style.padding = "0";
})
sign_u.addEventListener("mouseleave", function(){
    sign_it.style.padding = "5px";
})

var lma = document.querySelector(".lma");
var lm_a = document.querySelector(".lm_a")

lm_a.addEventListener("mouseenter", function(){
    lma.style.padding = "0";
    lma.style.marginTop = "5px"
})
lm_a.addEventListener("mouseleave", function(){
    lma.style.padding = "0 0 0 5px";
    lma.style.marginTop = "5px"
})

var lmssm = document.querySelector(".lmssm");
var lm_ssm = document.querySelector(".lm_ssm")

lm_ssm.addEventListener("mouseenter", function(){
    lmssm.style.padding = "0";
    lmssm.style.marginTop = "5px"
})
lm_ssm.addEventListener("mouseleave", function(){
    lmssm.style.padding = "0 0 0 5px";
    lmssm.style.marginTop = "5px"
})

var lmsaas = document.querySelector(".lmsaas");
var lm_saas = document.querySelector(".lm_saas")

lm_saas.addEventListener("mouseenter", function(){
    lmsaas.style.padding = "0";
    lmsaas.style.marginTop = "5px"
})
lm_saas.addEventListener("mouseleave", function(){
    lmsaas.style.padding = "0 0 0 5px";
    lmsaas.style.marginTop = "5px"
})

var blqtc = document.querySelector(".blqtc");
var bl_qtc = document.querySelector(".bl_qtc")

bl_qtc.addEventListener("mouseenter", function(){
    blqtc.style.padding = "0";
    blqtc.style.marginTop = "5px"
})
bl_qtc.addEventListener("mouseleave", function(){
    blqtc.style.padding = "0 0 0 5px";
    blqtc.style.marginTop = "5px"
})

var blompm = document.querySelector(".blompm");
var bl_ompm = document.querySelector(".bl_ompm")

bl_ompm.addEventListener("mouseenter", function(){
    blompm.style.padding = "0";
    blompm.style.marginTop = "5px"
})
bl_ompm.addEventListener("mouseleave", function(){
    blompm.style.padding = "0 0 0 5px";
    blompm.style.marginTop = "5px"
})

var blsfo = document.querySelector(".blsfo");
var bl_sfo = document.querySelector(".bl_sfo")

bl_sfo.addEventListener("mouseenter", function(){
    blsfo.style.padding = "0";
    blsfo.style.marginTop = "5px"
})
bl_sfo.addEventListener("mouseleave", function(){
    blsfo.style.padding = "0 0 0 5px";
    blsfo.style.marginTop = "5px"
})

var h_sch_i = document.querySelector(".h_sch_i");
var head_sch = document.querySelector(".head_sch")

head_sch.addEventListener("mouseenter", function(){
    h_sch_i.style.padding = "0 0 0 10px";
})
head_sch.addEventListener("mouseleave", function(){
    h_sch_i.style.padding = "0 0 0 5px";
})

var btm_sch_ang = document.querySelector(".btm_sch_angle");
var btm_sch_arr = document.querySelector(".btm_sch_arrow");
var btm_sch = document.querySelector(".btm_sch");

btm_sch.addEventListener("mouseenter", function(){
    btm_sch_arr.style.display = "block";
    btm_sch_ang.style.display = "none";
})
btm_sch.addEventListener("mouseleave", function(){
    btm_sch_arr.style.display = "none";
    btm_sch_ang.style.display = "block";
})

var comp_services = document.querySelector('.comp_services');
var product = document.getElementById('product');
product.addEventListener('mouseenter', function() { extend_arrow(1)});
product.addEventListener('mouseout', function() {shrink_arrow(1)} );

var help = document.getElementById('help');
help.addEventListener('mouseenter', function() { extend_arrow(2)});
help.addEventListener('mouseout', function() {shrink_arrow(2)} );

var resources = document.getElementById('resources');
resources.addEventListener('mouseenter', function() { extend_arrow(3)});
resources.addEventListener('mouseout', function() {shrink_arrow(3)} );

var company = document.getElementById('company');
company.addEventListener('mouseenter', function() { extend_arrow(4)});
company.addEventListener('mouseout', function() {shrink_arrow(4)} );

function extend_arrow(index) {
    var normal_arrow_name = "fi-rr-angle-small-right_" + index;
    var long_arrow_name = "fi-rr-arrow-right_" + index;
    var tags = comp_services.getElementsByTagName('i');
    tags[index - 1].classList.remove('fi-rr-angle-small-right');
    tags[index - 1].classList.remove(normal_arrow_name);
    tags[index - 1].classList.add('fi-rr-arrow-right');
    tags[index - 1].classList.add(long_arrow_name);
}
function shrink_arrow(index) {
    var normal_arrow_name = "fi-rr-angle-small-right_" + index;
    var long_arrow_name = "fi-rr-arrow-right_" + index;
    var tags = comp_services.getElementsByTagName('i');
    tags[index - 1].classList.remove('fi-rr-arrow-right');
    tags[index - 1].classList.remove(long_arrow_name);
    tags[index - 1].classList.add('fi-rr-angle-small-right');
    tags[index - 1].classList.add(normal_arrow_name);
}





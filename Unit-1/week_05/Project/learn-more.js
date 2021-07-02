var company_centric_details = document.getElementById('company_centric_details');
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
    var normal_arrow_name = "arrow_right_" + index;
    var long_arrow_name = "long_arrow_right_" + index;
    var tags = company_centric_details.getElementsByTagName('i');
    tags[index - 1].classList.remove('arrow_right');
    tags[index - 1].classList.remove(normal_arrow_name);
    tags[index - 1].classList.add('long_arrow_right');
    tags[index - 1].classList.add(long_arrow_name);
}
function shrink_arrow(index) {
    var normal_arrow_name = "arrow_right_" + index;
    var long_arrow_name = "long_arrow_right_" + index;
    var tags = company_centric_details.getElementsByTagName('i');
    tags[index - 1].classList.remove('long_arrow_right');
    tags[index - 1].classList.remove(long_arrow_name);
    tags[index - 1].classList.add('arrow_right');
    tags[index - 1].classList.add(normal_arrow_name);
}

document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('students');
        closeMenu();
        s[0].style.display='block';
    }
}

document.onmouseover=function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className!='menu-item' && target.className!='students') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('students');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}
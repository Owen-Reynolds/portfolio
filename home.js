function scrollHome(){
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })
}

function scrollProjects(){
    document.getElementById('projects').scrollIntoView({
        behavior: "smooth"
    });
}

function scrollAbout(){
    document.getElementById('about').scrollIntoView({
        behavior: "smooth"
    })
}

function clearSkills(){
    document.getElementById('skillsTab').style.display = 'none';
    document.getElementById('workTab').style.display = 'none';
    document.getElementById('goalsTab').style.display = 'none';
    document.getElementById('contactTab').style.display = 'none';
    document.getElementById('box1').style.backgroundColor = 'white';
    document.getElementById('box2').style.backgroundColor = 'white';
    document.getElementById('box3').style.backgroundColor = 'white';
    document.getElementById('box4').style.backgroundColor = 'white';
}

window.onload = function(){
    document.getElementById('box1').style.backgroundColor = '#D3D3D3';
}

function showSkills(){
    clearSkills();
    document.getElementById('skillsTab').style.display = 'flex';

    document.getElementById('box1').style.backgroundColor = '#D3D3D3';
}

function showWork(){
    clearSkills();
    document.getElementById('workTab').style.display = 'flex';

    document.getElementById('box2').style.backgroundColor = '#D3D3D3';
}

function showGoals(){
    clearSkills();
    document.getElementById('goalsTab').style.display = 'flex';

    document.getElementById('box3').style.backgroundColor = '#D3D3D3';
}

function showContact(){
    clearSkills();
    document.getElementById('contactTab').style.display = 'flex'

    document.getElementById('box4').style.backgroundColor = '#D3D3D3';
}

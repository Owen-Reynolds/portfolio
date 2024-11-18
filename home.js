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
    document.getElementById('hobbiesTab').style.display = 'none';
    document.getElementById('contactTab').style.display = 'none';
}

function showSkills(){
    clearSkills();

    document.getElementById('skillsTab').style.display = 'flex';

    skillsBox = document.getElementById('box1');
    skillsBox.
}

function showWork(){
    clearSkills();

    document.getElementById('workTab').style.display = 'flex';
}

function showHobbies(){
    clearSkills();

    document.getElementById('hobbiesTab').style.display = 'flex';
}

function showContact(){
    clearSkills();

    document.getElementById('contactTab').style.display = 'flex'
}

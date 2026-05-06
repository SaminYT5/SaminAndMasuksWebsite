const jsbutton = document.getElementById('jsbutton');

if (jsbutton) {
    jsbutton.onclick = () => {
        alert('This alert is coded in JS the script is mainly for the multiple pages in one HTML file the script was originally just to test JS');
    }
}

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

showSection('home');

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'home';
    showSection(hash);
});
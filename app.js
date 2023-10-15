const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sunParent = document.querySelector('.cover-up');
const moonParent = document.querySelector('.cover-down');
const covers = document.querySelector('.covers');
const theme = document.getElementById('theme');
const switchDiv = document.getElementById('switch');
const darkSwitch = document.getElementById('darkSwitch');
const loader = document.querySelector('.loader');

localStorage.length > 0 ? covers.style.display = 'none' : null;

if (localStorage.key(0) === 'dark') {
    theme.href = './dark.css';
    darkSwitch.href = './darkSwitch.css';
}

sun.addEventListener('click', () => {
    sunParent.classList.add('expand');
    moonParent.classList.add('shrink');
    covers.classList.add('fadeAway');
    localStorage.setItem('light', 'true');
    setTimeout(() => {
        covers.style.display = 'none';
    }, 700)
})

moon.addEventListener('click', () => {
    moonParent.classList.add('expand');
    sunParent.classList.add('shrink');
    localStorage.setItem('dark', 'true');
    localStorage.removeItem('light');
    covers.classList.add('fadeAway');
    theme.href = './dark.css';
    darkSwitch.href = './darkSwitch.css';
    setTimeout(() => {
        covers.style.display = 'none';
    }, 700)
})


function changeTheme() {
    console.log(2)
    if (localStorage.key(0) == 'light') {
        gsap.to('#rect', {duration: 1, opacity: 0, ease: "power3.out",});
        gsap.to('#rectDark', {duration: 1, opacity: 1, ease: "power3.out",});
        gsap.to('#sun', { duration: 1, x: 53, opacity: 0, ease: "power3.out",});
        gsap.to('#rays', { duration: 1, x: 53, opacity: 0, ease: "power3.out",});
        gsap.to('#moon_spots', { duration: 1, x: 53, opacity: 1, ease: "power3.out",});
        gsap.to('#clouds', { duration: 1, y: 53, opacity: 1, ease: "power3.out",});
        gsap.to('#stars', { duration: 1, y: 6, opacity: 1, ease: "power3.out",});
        
        theme.href = './dark.css';
        setTimeout(() => {
            localStorage.setItem('dark', 'true');
            localStorage.removeItem('light');
            darkSwitch.href = './darkSwitch.css';
        }, 700)
        
    } else {
        gsap.to('#rect', {duration: 1, opacity: 1, ease: "power3.out"});
        gsap.to('#rectDark', {duration: 1, opacity: 0, ease: "power3.out"});
        gsap.to('#sun', { duration: 1, x: 0, opacity: 1, ease: "power3.out",});
        gsap.to('#rays', { duration: 1, x: 0, opacity: 1, ease: "power3.out",});
        gsap.to('#moon_spots', { duration: 1, x: 0, opacity: 0, ease: "power3.out",});
        gsap.to('#clouds', { duration: 1, y: 0, ease: "power3.out",});
        gsap.to('#stars', { duration: 1, y: -120, ease: "power3.out",});

        localStorage.setItem('light', 'true');
        localStorage.removeItem('dark');
        theme.href = '';
        darkSwitch.href = '';
    }
}

switchDiv.addEventListener('click', changeTheme);


window.addEventListener('load', () => {
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    })
})
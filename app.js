// const sun = document.querySelector('.sun');
// const moon = document.querySelector('.moon');
// const sunParent = document.querySelector('.cover-up');
// const moonParent = document.querySelector('.cover-down');
// const covers = document.querySelector('.covers');
const theme = document.getElementById('theme');
const switchDiv = document.getElementById('switch');
const darkSwitch = document.getElementById('darkSwitch');
const loader = document.querySelector('.loader');


// loading screen
window.addEventListener('load', () => {
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    })
})


// running this cuz otherwise the sun svg animation does not work properly, as giving it an x value in css makes it jump from x:53 to x:0
// window.onload = () => {
//     if(localStorage.getItem('dark') === 'true') {
//         gsap.set('sun', { x: 53 })
//         gsap.set('moon', { x: 53, opacity: 1 })
//     } else {
//         gsap.set('sun', { x: 0 })
//     }
// }


// handling local storage
// if (localStorage.getItem('light') === 'true') {
//     covers.style.display = 'none';

// } else if (localStorage.getItem('dark') === 'true') {
//     theme.href = './dark.css';
//     darkSwitch.href = './darkSwitch.css';
//     covers.style.display = 'none';
    
// } else {
//     document.body.classList.add('no-overflow');
// }

window.onload = () => {

    if(localStorage.getItem('light') === 'true') {
        theme.href = '';
        darkSwitch.href = '';
    } else {
        theme.href = './dark.css';
        darkSwitch.href = './darkSwitch.css';
        localStorage.setItem('dark', 'true');
        gsap.set('#sun', { x: 53 })
        gsap.set('#moon', { x: 0, opacity: 1,})
        gsap.set('#moon_spots', { x: 53, opacity: 1, })
        gsap.set('#clouds', { y: 130, })
    } 
}

// handling theme switch
// sun.addEventListener('click', () => {
//     // sunParent.classList.add('expand');
//     // moonParent.classList.add('shrink');
//     // covers.classList.add('fadeAway');
//     localStorage.setItem('light', 'true');
//     setTimeout(() => {
//         document.body.classList.remove('no-overflow');
//         covers.style.display = 'none';
//     }, 700)
// })

// moon.addEventListener('click', () => {
//     // moonParent.classList.add('expand');
//     // sunParent.classList.add('shrink');
//     localStorage.setItem('dark', 'true');
//     localStorage.removeItem('light');
//     // covers.classList.add('fadeAway');
//     theme.href = './dark.css';
//     darkSwitch.href = './darkSwitch.css';
//     setTimeout(() => {
//         document.body.classList.remove('no-overflow');  
//         // covers.style.display = 'none';
//     }, 700)
// })


function changeTheme() {
    if (localStorage.getItem('light') === 'true') {
        gsap.to('#rect', {duration: 1, opacity: 0, ease: "power3.out",});
        gsap.to('#rectDark', {duration: 1, opacity: 1, ease: "power3.out",});
        gsap.to('#sun', { duration: 1, x: 53, opacity: 0, ease: "power3.out",});
        gsap.to('#rays', { duration: 1, x: 53, opacity: 0, ease: "power3.out",});
        gsap.to('#moon_spots', { duration: 1, x: 53, opacity: 1, ease: "power3.out",});
        gsap.to('#clouds', { duration: 1, y: 53, opacity: 1, ease: "power3.out",});
        gsap.to('#stars', { duration: 1, y: 6, opacity: 1, ease: "power3.out",});
        
        theme.href = './dark.css';
        localStorage.setItem('dark', 'true');
        localStorage.removeItem('light');
        setTimeout(() => {
            darkSwitch.href = './darkSwitch.css';
        }, 700)
        
    } else {
        gsap.to('#rect', {duration: 1, opacity: 1, fill: '#357AB4', ease: "power3.out"});
        gsap.to('#rectDark', {duration: 1, opacity: 0, ease: "power3.out"});
        gsap.to('#sun', { duration: 1, x: 0, opacity: 1, ease: "power3.out",});
        gsap.to('#moon', { duration: 1, x: 0, opacity: 1, ease: "power3.out",});
        gsap.to('#rays', { duration: 1, x: 0, opacity: 1, ease: "power3.out",});
        gsap.to('#moon_spots', { duration: 1, x: 0, opacity: 0, ease: "power3.out",});
        gsap.to('#clouds', { duration: 1, y: 0, ease: "power3.out",});
        gsap.to('#stars', { duration: 1, y: -120, ease: "power3.out",});

        theme.href = '';
        localStorage.setItem('light', 'true');
        localStorage.removeItem('dark');
        // darkSwitch.href = '';
        setTimeout(() => {
            darkSwitch.href = '';
        }, 700);
    }
}

switchDiv.addEventListener('click', changeTheme);


// scrolling 
const home = document.getElementById('home');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const aboutSection = document.querySelector('.about');
const projectsSection = document.querySelector('.projects');


home.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

about.addEventListener('click', () => {
    aboutSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    })
})

projects.addEventListener('click', () => {
    projectsSection.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    })
})

contact.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
    })
})
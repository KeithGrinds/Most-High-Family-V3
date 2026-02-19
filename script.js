/* LIQUID CURSOR */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

/* 3D TILT CARDS */
const cards = document.querySelectorAll('.card');
cards.forEach(card=>{
    card.addEventListener('mousemove', e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width/2;
        const centerY = rect.height/2;
        const rotateX = -(y - centerY)/10;
        const rotateY = (x - centerX)/10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });
    card.addEventListener('mouseleave', ()=>{card.style.transform='rotateX(0) rotateY(0) scale(1)';});
});

/* SCROLL PARALLAX HERO */
window.addEventListener('scroll',()=>{
    document.querySelector('.hero').style.backgroundPositionY = window.scrollY * 0.5 + 'px';
});

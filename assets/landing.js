// reveal cinematográfico: desktop (.rv) + slides mobile (.mslide)
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0.12});
document.querySelectorAll('.rv,.mslide').forEach(el=>io.observe(el));

// nav scrolled + scroll horizontal pinned (desktop) + parallax mobile
const nav=document.getElementById('nav');
const pinOuter=document.getElementById('pinOuter');
const track=document.getElementById('track');
const mslides=[...document.querySelectorAll('.mslide')];
let tick=false;
function onScroll(){
  if(tick)return;tick=true;
  requestAnimationFrame(()=>{
    const y=window.scrollY;
    nav.classList.toggle('scrolled',y>40);
    const aurora=document.querySelector('.aurora');
    if(aurora)aurora.style.transform=`translateY(${y*0.1}px)`;
    if(pinOuter && track && window.innerWidth>820){
      // desktop: scroll horizontal pinned (sin cambios)
      const rect=pinOuter.getBoundingClientRect();
      const total=pinOuter.offsetHeight-window.innerHeight;
      const prog=Math.min(Math.max(-rect.top/total,0),1);
      const max=track.scrollWidth-window.innerWidth;
      track.style.transform=`translateX(${-prog*max}px)`;
    } else if(!RM && window.innerWidth<=820 && mslides.length){
      // mobile: parallax sutil de la imagen de cada slide (profundidad)
      const vh=window.innerHeight;
      for(const s of mslides){
        const r=s.getBoundingClientRect();
        if(r.bottom<-40||r.top>vh+40) continue; // solo los visibles
        const center=r.top+r.height/2;
        const off=(center-vh/2)/vh;            // ~ -0.7 .. 0.7
        const img=s.querySelector('img');
        if(img) img.style.transform=`translateY(${(off*-7).toFixed(2)}%)`;
      }
    }
    tick=false;
  });
}
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('resize',onScroll);
onScroll();

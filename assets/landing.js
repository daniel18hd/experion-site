// reveal
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// nav scrolled + horizontal pin scroll (desktop)
const nav=document.getElementById('nav');
const pinOuter=document.getElementById('pinOuter');
const track=document.getElementById('track');
let tick=false;
function onScroll(){
  if(tick)return;tick=true;
  requestAnimationFrame(()=>{
    const y=window.scrollY;
    nav.classList.toggle('scrolled',y>40);
    const aurora=document.querySelector('.aurora');
    if(aurora)aurora.style.transform=`translateY(${y*0.1}px)`;
    if(pinOuter && track && window.innerWidth>820){
      const rect=pinOuter.getBoundingClientRect();
      const total=pinOuter.offsetHeight-window.innerHeight;
      const prog=Math.min(Math.max(-rect.top/total,0),1);
      const max=track.scrollWidth-window.innerWidth;
      track.style.transform=`translateX(${-prog*max}px)`;
    }
    tick=false;
  });
}
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('resize',onScroll);
onScroll();

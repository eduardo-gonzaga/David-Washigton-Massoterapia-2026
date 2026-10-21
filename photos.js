const photoDialog=document.querySelector('#photo-dialog');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{photoDialog.querySelector('img').src=button.dataset.photo;photoDialog.querySelector('img').alt=button.dataset.caption;photoDialog.querySelector('p').textContent=button.dataset.caption;photoDialog.showModal()}));
photoDialog.querySelector('.photo-close').addEventListener('click',()=>photoDialog.close());
photoDialog.addEventListener('click',event=>{if(event.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)photoDialog.close()}});
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const desktopPointer=matchMedia('(min-width: 651px) and (pointer: fine)');
const hero=document.querySelector('.hero');
let scrollFrame=0;
function updateParallax(){scrollFrame=0;if(motionPreference.matches||!desktopPointer.matches){hero.style.removeProperty('--parallax-y');return}const r=hero.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){const shift=Math.max(-15,Math.min(15,-r.top*.045));hero.style.setProperty('--parallax-y',shift+'px')}}
function scheduleParallax(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateParallax)}
addEventListener('scroll',scheduleParallax,{passive:true});addEventListener('resize',scheduleParallax,{passive:true});motionPreference.addEventListener('change',scheduleParallax);desktopPointer.addEventListener('change',scheduleParallax);updateParallax();

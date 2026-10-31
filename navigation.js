'use strict';
(() => {
 const menu=document.querySelector('.menu'),nav=document.querySelector('#nav'),backdrop=document.querySelector('.nav-backdrop');
 if(!menu||!nav)return;
 const mobile=window.matchMedia('(max-width:1050px)');
 const surroundings=[...document.querySelectorAll('main, footer, .floating, .mobile-contact')];
 function setOpen(open,restoreFocus=false){
  open=Boolean(open&&mobile.matches);
  nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);
  menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  nav.inert=mobile.matches&&!open;if(backdrop)backdrop.hidden=!open;
  surroundings.forEach(el=>{el.inert=open;});
  if(open)nav.querySelector('a')?.focus();else if(restoreFocus)menu.focus();
 }
 menu.addEventListener('click',()=>setOpen(!nav.classList.contains('open')));
 backdrop?.addEventListener('click',()=>setOpen(false,true));
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
 document.addEventListener('keydown',e=>{
  if(!nav.classList.contains('open'))return;
  if(e.key==='Escape'){e.preventDefault();setOpen(false,true);return;}
  if(e.key==='Tab'){
   const links=[menu,...nav.querySelectorAll('a[href]')],first=links[0],last=links[links.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
 });
 mobile.addEventListener('change',()=>setOpen(false));setOpen(false);
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a[href^="#"]').forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});
  },{rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
 }
})();

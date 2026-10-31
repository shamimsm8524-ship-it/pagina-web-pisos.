'use strict';
const service=document.querySelector('#servicio');
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{service.value=a.dataset.service;}));
const recommendations={wood:['Consulta por parquet y parquetón: madera natural con opciones de acabado y mantenimiento según el material.','Parquet / Parquetón'],practical:['Consulta por SPC: revisaremos el uso del ambiente, la base y la ficha del producto para elegir una opción adecuada.','Piso SPC'],renew:['Consulta por pulido y restauración. Envíanos fotos para evaluar si tu piso puede recuperarse.','Pulido y restauración'],help:['Te orientamos entre madera natural, SPC y laminado según el ambiente, el acabado y tu presupuesto.','Necesito asesoría']};
let guideService='Necesito asesoría';
document.querySelector('#priority').addEventListener('change',e=>{const r=recommendations[e.target.value];guideService=r?r[1]:'Necesito asesoría';document.querySelector('#advice').textContent=r?r[0]:'Cada espacio tiene necesidades distintas. Revisamos el uso, la base y el acabado antes de recomendarte un material.';});
document.querySelector('#guide-link').addEventListener('click',()=>{service.value=guideService;});
const lightbox=document.querySelector('#lightbox'),lightboxImage=document.querySelector('#lightbox-image');
document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{lightboxImage.src=b.dataset.image;lightboxImage.alt=b.querySelector('img').alt;document.querySelector('#lightbox-caption').textContent=b.dataset.caption;lightbox.showModal();}));
document.querySelector('.close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close();});
lightbox.addEventListener('close',()=>{document.body.style.overflow='';});
document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{document.body.style.overflow='hidden';}));
document.querySelector('#quoteForm').addEventListener('submit',e=>{
 e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const data=new FormData(f);const nombre=data.get('nombre').trim(),ubicacion=data.get('ubicacion').trim();
 if(!nombre||!ubicacion){const field=f.elements[!nombre?'nombre':'ubicacion'];field.setCustomValidity('Completa este campo con información válida.');field.reportValidity();field.addEventListener('input',()=>field.setCustomValidity(''),{once:true});return;}
 const message=`Hola Parquet Aranibar, quiero consultar sobre mi proyecto.\n\nNombre: ${nombre}\nDistrito / ciudad: ${ubicacion}\nServicio: ${data.get('servicio')}\nÁrea aproximada: ${data.get('metros')?data.get('metros')+' m²':'Por confirmar'}\nDetalle: ${data.get('detalle').trim()||'Por conversar'}\n\n¿Podrían orientarme con una cotización?`;
 const url='https://wa.me/51935695708?text='+encodeURIComponent(message);const status=document.querySelector('#form-status');status.replaceChildren(document.createTextNode('Consulta preparada. '));const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Abrir WhatsApp';status.append(link);window.open(url,'_blank','noopener,noreferrer');
});
document.querySelector('#year').textContent=new Date().getFullYear();

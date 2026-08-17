from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

if 'id="por-que-elegirnos"' in s:
    print('La sección ya existe')
    raise SystemExit(0)

needle = '  <section class="quote section section-soft" id="cotizacion">'
if needle not in s:
    raise SystemExit('No se encontró el punto de inserción')

section = '''  <style>
    .why-us{background:#fff}
    .why-us-head{max-width:760px;margin-bottom:34px}
    .why-us-head p:last-child{color:#6b7174;line-height:1.8;margin-top:14px}
    .why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .why-card{border:1px solid #e1d8ce;border-radius:12px;padding:26px 22px;background:#fbf8f4;box-shadow:0 10px 26px rgba(20,36,42,.06)}
    .why-icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#103846;color:#fff;font-weight:900;margin-bottom:18px}
    .why-card h3{font-family:Georgia,'Times New Roman',serif;color:#103846;font-size:22px;font-weight:400;margin-bottom:10px}
    .why-card p{color:#6b7174;line-height:1.7;font-size:14px}
    .why-cta{display:flex;justify-content:space-between;gap:18px;align-items:center;margin-top:26px;padding:24px 26px;border-radius:12px;background:#103846;color:#fff}
    .why-cta strong{font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:400}
    @media(max-width:900px){.why-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:620px){.why-grid{grid-template-columns:1fr}.why-cta{flex-direction:column;align-items:flex-start}.why-card{padding:22px 18px}}
  </style>

  <section class="why-us section" id="por-que-elegirnos">
    <div class="container">
      <div class="why-us-head">
        <p class="eyebrow">¿POR QUÉ ELEGIRNOS?</p>
        <h2 class="section-title">Trabajo profesional de principio a fin.</h2>
        <p>Nos enfocamos en ofrecer un resultado limpio, duradero y bien terminado, con atención directa durante todo el proyecto.</p>
      </div>
      <div class="why-grid">
        <article class="why-card"><div class="why-icon">01</div><h3>Instalación profesional</h3><p>Colocación precisa de parquet, parquetón, SPC y laminados para un acabado uniforme y resistente.</p></article>
        <article class="why-card"><div class="why-icon">02</div><h3>Materiales de calidad</h3><p>Trabajamos con soluciones pensadas para hogares, oficinas, comercios y espacios de alto tránsito.</p></article>
        <article class="why-card"><div class="why-icon">03</div><h3>Atención personalizada</h3><p>Te orientamos según tu espacio, presupuesto y el tipo de acabado que deseas conseguir.</p></article>
        <article class="why-card"><div class="why-icon">04</div><h3>Restauración y acabados</h3><p>Pulido, mantenimiento y recuperación de pisos para devolverles presencia, brillo y vida útil.</p></article>
      </div>
      <div class="why-cta"><strong>¿Tienes un proyecto en mente?</strong><a class="btn btn-white" href="https://wa.me/51935695708?text=Hola%20Parquet%20Aranibar,%20quiero%20cotizar%20un%20proyecto." target="_blank" rel="noopener">COTIZAR POR WHATSAPP</a></div>
    </div>
  </section>

'''

p.write_text(s.replace(needle, section + needle, 1), encoding='utf-8')
print('Sección agregada correctamente')

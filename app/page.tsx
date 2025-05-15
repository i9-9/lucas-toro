"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const collections = [
  { name: "Pinturas", key: "pinturas" },
  // Si hay más carpetas, agregarlas aquí
];

const imagesByCollection: Record<string, { src: string; title: string; price: string }[]> = {
  pinturas: [
    { src: "/pinturas/2.jpg", title: "Obra 1", price: "$700.00" },
    { src: "/pinturas/Manos.png", title: "Manos", price: "$900.00" },
    { src: "/pinturas/Flores.png", title: "Flores", price: "$850.00" },
    { src: "/pinturas/serie Pic nic.png", title: "Serie Pic Nic", price: "$1,200.00" },
    { src: "/pinturas/Artboard 10.jpg", title: "Artboard 10", price: "$650.00" },
    { src: "/pinturas/Artboard 11.jpg", title: "Artboard 11", price: "$650.00" },
    { src: "/pinturas/Artboard 6.jpg", title: "Artboard 6", price: "$650.00" },
    { src: "/pinturas/Artboard 7.jpg", title: "Artboard 7", price: "$650.00" },
    { src: "/pinturas/Artboard 8.jpg", title: "Artboard 8", price: "$650.00" },
    { src: "/pinturas/Artboard 9.jpg", title: "Artboard 9", price: "$650.00" },
    { src: "/pinturas/Artboard 2.jpg", title: "Artboard 2", price: "$650.00" },
    { src: "/pinturas/Artboard 3.jpg", title: "Artboard 3", price: "$650.00" },
    { src: "/pinturas/Artboard 4.jpg", title: "Artboard 4", price: "$650.00" },
    { src: "/pinturas/4.png", title: "Obra 4", price: "$700.00" },
    { src: "/pinturas/3.jpg", title: "Obra 3", price: "$700.00" },
    { src: "/pinturas/4.jpg", title: "Obra 4b", price: "$700.00" },
    { src: "/pinturas/6.jpg", title: "Obra 6", price: "$700.00" },
    { src: "/pinturas/7.jpg", title: "Obra 7", price: "$700.00" },
    { src: "/pinturas/5.jpg", title: "Obra 5", price: "$700.00" },
  ],
};

function InfoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [open]);
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.4)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: 'Garamond, serif'
    }} onClick={onClose}>
      <div
        ref={modalRef}
        style={{
          background: "#fff",
          color: "#171717",
          borderRadius: 0,
          maxWidth: 900,
          width: "90vw",
          padding: 32,
          boxShadow: "none",
          fontFamily: 'Garamond, serif',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ position: "absolute", right: 24, top: 24, background: "none", border: "none", fontSize: 24, cursor: "pointer", fontFamily: 'Garamond, serif', borderRadius: 0 }}>×</button>
        <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 0, letterSpacing: '0.04em', color: '#222', textTransform: 'uppercase', textAlign: 'center' }}>Sobre mí</div>
        <div className="modal-columns" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ flex: 1, minWidth: 220, fontSize: 15, lineHeight: 1.7, color: '#444', fontWeight: 300, letterSpacing: '0.01em' }}>
            Artista visual, escritor y músico. Nacido en 1987 en El Palomar, Provincia de Buenos Aires.<br />
            Licenciado en Artes Multimediales por la Universidad Nacional de las Artes (UNA).
            <div style={{ fontSize: 13, color: '#888', margin: '18px 0 6px 0', fontWeight: 400, letterSpacing: '0.01em' }}>Formación y Trayectoria Profesional:</div>
            <ul style={{ fontSize: 13, color: '#888', marginLeft: 18, marginBottom: 0, fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}>
              <li>Clínica de obra: Ernesto Ballesteros.</li>
              <li>Clases de pintura: Melisa Calabria.</li>
              <li>Asistencias profesionales: Daniel Scheimberg y Alejandra Metler.</li>
              <li>Programa de formación: / Residencia MUSGO / UNA Multimedia</li>
              <li>Diseño ejecutivo: Complejo C Art Media.</li>
              <li>Producción, dirección artística y arte visual: Fiestas Witches, C ART MEDIA, Carta de vinos de la parrilla Don Julio, Undertones, +160, Killerdrumz, La Plateada, Underclub, La Malcriada, Hiedrah Club de Baile.</li>
            </ul>
            <div style={{ fontSize: 13, color: '#888', margin: '18px 0 6px 0', fontWeight: 400, letterSpacing: '0.01em' }}>Exposiciones:</div>
            <ul style={{ fontSize: 13, color: '#888', marginLeft: 18, marginBottom: 0, fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}>
              <li>Vanitas I – Moria Galería (Individual, 2015)</li>
              <li>Vanitas II – Moria Galería (Individual, 2016)</li>
              <li>Legion – Convoi Galería (Individual, 2017)</li>
              <li>HADAS – Galería 13 Bazar Kiosco Taller (Grupal, 2024)</li>
              <li>Pic Nic – Sheikobs (Individual, 2024)</li>
            </ul>
            <div style={{ fontSize: 13, color: '#888', margin: '18px 0 6px 0', fontWeight: 400, letterSpacing: '0.01em' }}>Performances Artísticas:</div>
            <ul style={{ fontSize: 13, color: '#888', marginLeft: 18, marginBottom: 0, fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}>
              <li>Espacio La Factoría, Talleres Abiertos (2024)</li>
              <li>Espacio Unión Informática, Talleres Abiertos (2024)</li>
              <li>Fundación El Mirador, Cierre de la muestra &quot;¿Cuántos Artilugios Compone una piedra?&quot; por Lila Llunez</li>
              <li>Galería Moria, Cierre de muestra &quot;Desvelo&quot; por Celina Eceiza (2022)</li>
              <li>Galería Moria, Cierre de muestra &quot;519600&quot; por Maxi Murad (2023)</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 220, fontSize: 15, lineHeight: 1.7, color: '#444', fontWeight: 300, letterSpacing: '0.01em' }}>
            <div style={{ fontSize: 13, color: '#888', margin: '0 0 6px 0', fontWeight: 400, letterSpacing: '0.01em' }}>Proyectos Musicales y Colectivos:</div>
            <ul style={{ fontSize: 13, color: '#888', marginLeft: 18, marginBottom: 18, fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}>
              <li>Cine Shampoo (2008–2012): Colectivo de Noise y música experimental. Presentaciones en La Trastienda junto a Animal Collective, Festival Tratado de Integración 03 Pulso (Neuquén) y La Alianza Francesa.</li>
              <li>LNGCHPS: Proyecto musical con más de 70 álbumes editados desde 2009.</li>
            </ul>
            <div style={{ fontSize: 13, color: '#888', margin: '0 0 6px 0', fontWeight: 400, letterSpacing: '0.01em' }}>Contacto:</div>
            <ul style={{ fontSize: 13, color: '#888', marginLeft: 18, marginBottom: 0, fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}>
              <li>Teléfono: 011 15 39368411</li>
              <li>Correo electrónico: <a href="mailto:lucastorodesign@gmail.com" style={{ color: '#888' }}>lucastorodesign@gmail.com</a></li>
              <li>Instagram: <a href="https://instagram.com/lucasdepalomar" target="_blank" style={{ color: '#888' }}>@lucasdepalomar</a> | <a href="https://instagram.com/lngchps" target="_blank" style={{ color: '#888' }}>@lngchps</a></li>
            </ul>
          </div>
        </div>
        <style>{`
          @media (min-width: 700px) {
            .modal-columns {
              flex-direction: row !important;
              gap: 48px !important;
              text-align: left !important;
            }
            .modal-columns > div {
              flex: 1 1 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function Arrow({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
      style={{
        position: 'absolute',
        [direction === 'left' ? 'left' : 'right']: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,0.85)',
        border: 'none',
        fontSize: 32,
        cursor: 'pointer',
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Garamond, serif',
        boxShadow: 'none',
        borderRadius: 0,
        zIndex: 2,
        transition: 'background 0.2s',
        margin: 0,
      }}
    >
      {direction === 'left' ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
      )}
    </button>
  );
}

function ImageModal({ open, onClose, img }: { open: boolean; onClose: () => void; img?: { src: string; title: string; price: string } }) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [open]);
  if (!open || !img) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.7)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center"
    }} onClick={onClose}>
      <div ref={modalRef} style={{ background: "#fff", color: "#171717", maxWidth: 900, width: "90vw", padding: 0, borderRadius: 0, boxShadow: 'none', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", right: 16, top: 16, background: "none", border: "none", fontSize: 28, cursor: "pointer", color: '#171717', borderRadius: 0, boxShadow: 'none' }}>&times;</button>
        <img src={img.src} alt={img.title} style={{ width: '100%', maxWidth: 700, height: 'auto', objectFit: 'contain', background: '#fff', margin: '48px 0 16px 0', borderRadius: 0, boxShadow: 'none' }} />
        <div style={{ fontWeight: 400, fontSize: 17, marginBottom: 2, color: '#222', letterSpacing: '0.02em', lineHeight: 1.3, textAlign: 'center' }}>{img.title}</div>
        <div style={{ color: '#aaa', fontSize: 15, letterSpacing: '0.03em', textAlign: 'center', marginBottom: 24 }}>{img.price}</div>
      </div>
    </div>
  );
}

function Slider({ images }: { images: { src: string; title: string; price: string }[] }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#fff", fontFamily: 'Garamond, serif', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
      <Arrow direction="left" onClick={prev} />
      <img
        src={images[idx].src}
        alt={images[idx].title}
        style={{ width: "100%", height: "70vh", objectFit: "contain", display: "block", margin: "0 auto", background: "#fff", maxHeight: '80vh', boxShadow: 'none', borderRadius: 0 }}
      />
      <Arrow direction="right" onClick={next} />
      <div style={{ position: "absolute", bottom: 16, left: 0, width: "100%", textAlign: "center", color: "#333", fontSize: 16 }}>
        {idx + 1} / {images.length}
      </div>
    </div>
  );
}

function SelectedWorks({ images }: { images: { src: string; title: string; price: string }[] }) {
  const [modalImg, setModalImg] = useState<null | { src: string; title: string; price: string }>(null);
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: '1.2rem 0.2rem 1.2rem 0.2rem' }}>
      <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 18, letterSpacing: '0.04em', color: '#222', textTransform: 'uppercase', textAlign: 'center' }}>Obras seleccionadas</div>
      <div style={{
        columnCount: 2,
        columnGap: '18px',
        maxWidth: '100%',
      }}>
        {images.slice(0, 12).map((img) => (
          <div key={img.src} style={{
            background: '#fff',
            marginBottom: '18px',
            display: 'inline-block',
            width: '100%',
            breakInside: 'avoid',
            padding: 8,
            maxWidth: '100%',
            borderRadius: 0,
            cursor: 'pointer',
          }} onClick={() => setModalImg(img)}>
            <img src={img.src} alt={img.title} style={{ width: '100%', height: 'auto', objectFit: 'contain', marginBottom: 8, background: '#fff', display: 'block', borderRadius: 0 }} />
            <div style={{ fontWeight: 400, fontSize: 15, marginBottom: 1, color: '#222', letterSpacing: '0.02em', lineHeight: 1.3, textAlign: 'center' }}>{img.title}</div>
            <div style={{ color: '#aaa', fontSize: 13, letterSpacing: '0.03em', textAlign: 'center' }}>{img.price}</div>
          </div>
        ))}
      </div>
      <ImageModal open={!!modalImg} onClose={() => setModalImg(null)} img={modalImg || undefined} />
    </section>
  );
}

function AboutAndAwards() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: '1.2rem 0.2rem 1.2rem 0.2rem', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 18, letterSpacing: '0.04em', color: '#222', textTransform: 'uppercase', textAlign: 'center' }}>Sobre mí</div>
      <div style={{ fontSize: 15, marginBottom: 12, lineHeight: 1.7, color: '#444', fontWeight: 300, letterSpacing: '0.01em', textAlign: 'center' }}>
        Soy Lucas Toro, artista visual, escritor y músico. Nacido en 1987 en El Palomar, Provincia de Buenos Aires. Licenciado en Artes Multimediales por la UNA. Mi trabajo explora la relación entre imagen, sonido y palabra, abordando temáticas contemporáneas desde una perspectiva experimental y poética.
      </div>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 6, fontWeight: 400, letterSpacing: '0.01em', textAlign: 'center' }}>Premios y distinciones:</div>
      <ul style={{ fontSize: 13, color: '#888', margin: '0 auto 0 auto', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6, textAlign: 'center', listStyle: 'none', padding: 0 }}>
        <li>Premio Fundación El Mirador (2023)</li>
        <li>Beca de Creación FNA (2022)</li>
        <li>Residencia MUSGO / UNA Multimedia (2021)</li>
      </ul>
      <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6, fontWeight: 300, letterSpacing: '0.01em', textAlign: 'center', marginTop: 10 }}>
        Clínica de obra: Ernesto Ballesteros.<br />
        Clases de pintura: Melisa Calabria.<br />
        Asistencias profesionales: Daniel Scheimberg y Alejandra Metler.<br />
        Diseño ejecutivo: Complejo C Art Media.<br />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: '1.2rem 0.2rem 2rem 0.2rem', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
      <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 18, letterSpacing: '0.04em', color: '#222', textTransform: 'uppercase', textAlign: 'center' }}>Contacto</div>
      <div style={{ fontSize: 15, marginBottom: 6, color: '#444', fontWeight: 300, letterSpacing: '0.01em', textAlign: 'center' }}>lucastorodesign@gmail.com</div>
      <div style={{ fontSize: 15, marginBottom: 6, color: '#444', fontWeight: 300, letterSpacing: '0.01em', textAlign: 'center' }}>011 15 39368411</div>
      <div style={{ fontSize: 15, marginBottom: 6, color: '#444', fontWeight: 300, letterSpacing: '0.01em', textAlign: 'center' }}>Instagram: <a href="https://instagram.com/lucasdepalomar" target="_blank" style={{ color: '#888', textDecoration: 'none' }}>@lucasdepalomar</a> | <a href="https://instagram.com/lngchps" target="_blank" style={{ color: '#888', textDecoration: 'none' }}>@lngchps</a></div>
      <div style={{ color: '#bbb', fontSize: 13, fontWeight: 300, letterSpacing: '0.01em', textAlign: 'center', marginTop: 10 }}>
        El Palomar, Provincia de Buenos Aires, Argentina
      </div>
    </section>
  );
}

export default function Home() {
  const [modal, setModal] = useState(false);
  const [collection, setCollection] = useState(collections[0].key);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sidebarOpen && sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [sidebarOpen]);
  return (
    <div style={{ fontFamily: 'Garamond, serif', minHeight: '100vh', width: '100vw', background: '#fff', fontSize: 14 }}>
      <nav style={{ width: "100vw", maxWidth: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2rem 1.5rem 1.5rem", borderBottom: "1px solid #eee", background: "#fff", position: "sticky", top: 0, zIndex: 10, fontFamily: 'Garamond, serif', height: 70 }}>
        <span style={{ fontSize: "1.5rem", fontWeight: 400, letterSpacing: "-0.02em" }}>Lucas Toro</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setSidebarOpen((v) => !v)} style={{ fontSize: 18, background: "none", border: "1px solid #ccc", borderRadius: 6, padding: "6px 14px", cursor: "pointer", color: "#171717", fontFamily: 'Garamond, serif', marginRight: 8 }}>{sidebarOpen ? '⟨' : '☰'}</button>
          <button onClick={() => setModal(true)} style={{ fontSize: 18, background: "none", border: "1px solid #ccc", borderRadius: 6, padding: "6px 18px", cursor: "pointer", color: "#171717", fontFamily: 'Garamond, serif' }}>info</button>
        </div>
      </nav>
      <div style={{ display: 'flex', height: 'calc(100vh - 70px)', width: '100vw' }}>
        {sidebarOpen && (
          <aside ref={sidebarRef} style={{ width: 180, background: '#faf9f6', borderRight: '1px solid #eee', padding: '2rem 0.5rem', fontFamily: 'Garamond, serif', height: '100%', transition: 'width 0.2s', opacity: 1 }}>
            <div style={{ fontWeight: 600, marginBottom: 24, fontSize: 18, letterSpacing: '-0.01em' }}>Colecciones</div>
            {collections.map((col) => (
              <button
                key={col.key}
                onClick={() => setCollection(col.key)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: collection === col.key ? '#eaeaea' : 'none',
                  border: 'none',
                  borderRadius: 4,
                  padding: '10px 8px',
                  marginBottom: 8,
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'Garamond, serif',
                  fontSize: 16,
                  color: '#171717',
                  fontWeight: collection === col.key ? 600 : 400,
                  transition: 'background 0.2s',
                }}
              >
                {col.name}
              </button>
            ))}
          </aside>
        )}
        <main style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', transition: 'margin-left 0.2s' }}>
          <Slider images={imagesByCollection[collection]} />
        </main>
      </div>
      <SelectedWorks images={imagesByCollection[collection]} />
      <AboutAndAwards />
      <ContactSection />
      <InfoModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}

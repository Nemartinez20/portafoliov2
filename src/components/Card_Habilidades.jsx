export default function Card_Habilidades({ urlH, nombreH }) {
  return (
    <>
      <div className="cad_habilidades">
        <img
          src={urlH}
          alt="HTML"
          loading="lazy"
          decoding="async"
          className="img_habilidades"
        />
        <p className="titulo_Habilidaes">{nombreH}</p>
      </div>
    </>
  );
}

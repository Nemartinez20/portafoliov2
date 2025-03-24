export default function Card_Habilidades({ url, nombreH }) {
  return (
    <>
      <div className="cad_habilidades">
        <img
          src={url}
          alt="HTML"
          loading="lazy"
          decoding="async"
          className="img_habilidades"
        />
        <p>{nombreH}</p>
      </div>
    </>
  );
}

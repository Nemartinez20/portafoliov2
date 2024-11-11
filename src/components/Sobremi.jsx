export function Sobremi() {
  return (
    <>
      <section className="sobremi">
        <div className="sobremi_container">
          <div className="sobremi_descrition">
            <h2 className="titulo_nombre">Nestor Arley Martinez</h2>
            <li className="sobremi_titulo">
              <a href="">Desarrollador fullstack</a>
            </li>
            <p className="content-parrafo">
              Desarrollador autodidacta, 28 años. De Colombia, Me considero una
              persona bastante cooperativa respetuosa y Tengo mucha pasión por
              el aprendizaje constante me impulsa..
            </p>

            <div className="sobremi_redes">
              <img
                className="sobremi_iconos"
                src="/img/sun.svg"
                alt="logo_img"
              />
              <img
                className="sobremi_iconos"
                src="/img/linkedin-brands-solid.svg"
                alt="logo_img"
              />
              <img
                className="sobremi_iconos"
                src="/img/github-brands-solid.svg"
                alt="logo_img"
              />
              {/* <li className="sobremi_titulo">
                <a href="">Desarrollador fullstack</a>
              </li>
              <li className="sobremi_titulo">
                <a href="">Desarrollador fullstack</a>
              </li> */}
            </div>
          </div>

          <div className="sobremi__imgcontainer">
            <img className="sobremi__foto" src="/img/mia.jpg" alt="logo_img" />
          </div>
        </div>
      </section>
    </>
  );
}

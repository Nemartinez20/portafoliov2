export function Proyectos() {
  return (
    <>
      <article className="card">
        <div className="padre">
          <img src="/img/img1.png" alt="img-mia" />
          <div className="pollo">unossffffffffs</div>
        </div>
        <div className="content-info">
          <h2 className="titulo-proyecto">Proyecto uno</h2>

          <p className="content-parrafo">
            Desarrollador autodidacta, 28 años. De Colombia, Me considero una
            persona bastante cooperativa respetuosa y Tengo mucha pasión por el
            aprendizaje constante me impulsa..
          </p>
          <div className="content-ul">
            <li className="content-tags">react</li>
            <li className="content-tags">Php</li>
            <li className="content-tags">Javascript</li>
            <li className="content-tags">Html</li>
            <li className="content-tags">Css</li>
            <li className="content-tags">Mysql</li>
          </div>

          <div className="content-ul">
            <li className="content-botones">
              <img
                className="contetnImg"
                src="/img/github-brands-solid.svg"
                alt=""
              />
              <a href="">Codigo</a>
            </li>
            <li className="content-botones">
              <img className="contetnImg" src="/img/globe-solid.svg" alt="" />
              <a href="">Demo</a>
            </li>
          </div>
        </div>
      </article>
    </>
  );
}

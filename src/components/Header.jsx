import { useRef } from "react";

export function Header() {
  const menuRef = useRef(null);
  const darkRef = useRef(null);
  const sunRef = useRef(null);

  const handleclick = () => {
    console.log("dando click modo oscuro");
    let body = document.body;
    body.classList.toggle("dark_mode");
  };
  const handleclickClose = () => {
    menuRef.current.classList.toggle("closeMenu");
    console.log("dando en menu");
  };
  const handleclickMenu = () => {
    menuRef.current.classList.toggle("closeMenu");
    console.log("dando en menu");
  };

  return (
    <>
      <header className="header__principal">
        <div className="header__container">
          <div className="header__logo">
            <div className="header__conenedor__barra">
              <img
                className="header__barra"
                onClick={handleclickMenu}
                src="/img/bars-solid.svg"
                alt="logo_img"
              />
              <a href="">Portafolio</a>
            </div>
          </div>

          <nav className="header__menu  " ref={menuRef}>
            <ul>
              <a href="#">Inicio</a>
              <a href="#">Acerca de mi</a>
              <a href="#">Habilidades</a>
              <a href="#">Proyectos</a>
              <a href="#">Contacto</a>
            </ul>
            <div className="close " onClick={handleclickClose}>
              X
            </div>
          </nav>
          {/* <div class="modo_oscuro">
            <div class="info">
              <i class="fa-solid fa-moon"></i>
              <span class="spanss">Dark mode</span>
            </div>

            <div class="switch">
              <div class="base">
                <duv class="circulo "></duv>
              </div>
            </div>
          </div> */}
          <div onClick={handleclick}>
            <img
              ref={darkRef}
              className="header__darkmode"
              id="dark"
              src="/img/sun.svg"
              alt="logo_img"
            />
            <img
              className="header__darkmode dark"
              src="/img/moon.svg"
              alt="logo_img"
            />
          </div>
        </div>
      </header>
    </>
  );
}

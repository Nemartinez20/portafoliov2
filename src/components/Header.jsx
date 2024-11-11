import { useRef } from "react";

export function Header() {
  const menuRef = useRef(null);
  const darkRef = useRef(null);
  const sunRef = useRef(null);

  const handleclick = () => {
    console.log("dando click modo oscuro");
    let body = document.body;
    // body.classList.toggle("closeMenu");
    body.classList.toggle("dark_mode");
  };
  const handleclickClose = (e) => {
    menuRef.current.classList.toggle("closeMenu");
    console.log("dando en menu");
    // e.target.style.display = "none";
  };
  const handleclickMenu = () => {
    menuRef.current.classList.toggle("closeMenu");
    console.log("dando en menu");

    // // e.target.style.left = 0;
    // e.target.style.display = "flex";
  };

  return (
    <>
      {/* <header className="bg-slate-100 shadow-md px-6">
        <div className="flex justify-between items-center h-16 ">
          <a href="">Logo</a>

          <div>
            <button>Inicoi</button>
            <button>Inicoi</button>
          </div>

          <button className=" pp text-slate-500  hover:bg-sky-500 hover:text-slate-50 rounded-md p-1 transition-all focus:ring-2 md:flex-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header> */}
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
              <a href="">Inicio</a>
              <a href="">Acerca de mi</a>
              <a href="">Habilidades</a>
              <a href="">Proyectos</a>
              <a href="">Contacto</a>
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

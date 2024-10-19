export function Header() {
  return (
    <>
      <header className="text-center bg-slate-200 h-20 w-11/12 m-auto  shadow-md ">
        <nav className="bg-slate-400 grid-flow-col">
          <div className="flex justify-evenly w-">
            <a className="color-" href="">
              Inicio
            </a>
            <a className="color-" href="">
              Sobre M'i
            </a>
            <a className="color-" href="">
              Estudios
            </a>
          </div>

          <div>
            <a href="">DarkMode</a>
          </div>
        </nav>
        <p className="text-2xl text-lime-500">Hola mundo</p>
      </header>
    </>
  );
}

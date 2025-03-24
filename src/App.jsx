import Habilidades from "./components/Habilidades";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Sobremi } from "./components/Sobremi";

function App() {
  return (
    <>
      <Header />

      <main className="contenedor-principal">
        <Sobremi />
        <h2 className="titulo-seccion">Proyectos</h2>
        <div className="contenedor__proyectos">
          <Proyectos />
          <Proyectos />
          <Proyectos />
          <Proyectos />
          <Proyectos />
        </div>

        <div>
          <h2 className="contenedor-principal">Tecnologias</h2>
          <Habilidades />
        </div>
      </main>
    </>
  );
}

export default App;

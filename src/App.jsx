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
      </main>
    </>
  );
}

export default App;

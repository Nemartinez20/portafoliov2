export function Contacto() {
  return (
    <>
      <form action="">
        <div className="campo">
          <label htmlFor="nombre">nombre</label>
          <input type="text" id="nombre" />
        </div>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="campo">
          <label htmlFor="email">Mensaje</label>
          <textarea name="" id=""></textarea>
        </div>
      </form>
    </>
  );
}

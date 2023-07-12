import Link from "next/link";

const NotFound = () => {
  return (
    <section className="error-page">
      <div className="center">
        <div className="block text-center">
          <h1>404</h1>
          <h3>Página no encontrada</h3>
          <p>
            La página a la que te diriges no existe o fue removida
          </p>
          <a href="/" className="btn btn-main-md">
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
};
export default NotFound;

import "./homePage.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <h1>Bienvenido a CardTest</h1>
      <p>
        Bienvenido a <span>Card Test</span>. Para empezar, puedes revisar tu
        estado en <span>/state</span>. Si quieres actualizar tu estado, puedes
        hacerlo en <span>/upgrade</span>. Si le interesa leer y aprender más
        sobre nosotros, puede ir a <span>/about</span>.
      </p>

      <h2>¡Gracias por confiar en nosotros!</h2>
    </div>
  );
}

import { useState, useEffect } from "react"
import { Header } from "./components/Header"

const App = () => {
  const [estado, setEstado] = useState(0);

  // useEffect(() => {
  //   console.log("Renderizou")
  // }); //executa sempre apos o return(renderizaçao)

  // useEffect(() => {
  //   console.log("Renderizou")
  // }, []); //executa somente uma vez

  // useEffect(() => {
  //   console.log("Renderizou")
  // }, [estado]);

  const add = () => setEstado(estado + 1);
  
  return (
    <>
      <h1>Contador {estado}</h1>
      <button onClick={add}>Add+</button>
      <Header data={"20-20-2012"}/>
    </>
  );
}

export default App;

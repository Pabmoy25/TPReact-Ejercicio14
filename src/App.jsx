import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Menu from "./components/Common/Menu";
import Footer from "./components/Common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Pages/Inicio";
import Error404 from "./components/Pages/Error404";
import Administrador from "./components/Pages/Administrador";
import FormularioRecetas from "./components/Pages/recetas/FormularioRecetas";
import DetalleReceta from "./components/Pages/DetalleReceta";

function App() {
  return (
    <>
        <BrowserRouter>
        <Menu></Menu>
        <section className="mainpage">
          <Routes>
            <Route>
              <Route exact path="/" element={<Inicio></Inicio>}></Route>
              <Route
                exact
                path="/inicio"
                element={<Inicio></Inicio>}
              ></Route>
              <Route
              exact
              path="/administrador"
              element={<Administrador></Administrador>}
            ></Route>
              <Route exact path="/error" element={<Error404></Error404>}></Route>
              <Route path="*" element={<Error404></Error404>}></Route>
            </Route>
            <Route
              exact
              path="/administrador/crear"
              element={
                <FormularioRecetas
                editar={false}
                  titulo="Nuevo producto"></FormularioRecetas>
              }
            ></Route>
            <Route
              exact
              path="/detalleReceta/:id"
              element={<DetalleReceta></DetalleReceta>}
            ></Route>
            <Route
              exact
              path="/administrador/editar/:id"
              element={
                <FormularioRecetas
                  editar={true}
                  titulo="Editar Receta"
                ></FormularioRecetas>
              }
            ></Route>
          </Routes>
        </section>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

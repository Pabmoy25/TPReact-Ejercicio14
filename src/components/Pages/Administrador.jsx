import { Button, Table } from "react-bootstrap";
import Receta from "./recetas/Receta";
import { Link } from "react-router-dom";


const Administrador = () => {
    return (
        <section className="container mainpage">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4 titulo-administrador">Recetas</h1>
            <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
          </div>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Cod</th>
                <th>Receta</th>
                <th>URL de Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
            </tr>
            </thead>
            <tbody>
              <Receta></Receta>
              <Receta></Receta>
              <Receta></Receta>
              <Receta></Receta>
            </tbody>
          </Table>
        </section>
      );
    };

export default Administrador;
import "./navBarWineType.css";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavBarWineType = () => {

  const clase = useSelector((state) => state.clase);

  return (
    <div class="cards-wrapper">
    <Fragment >
      <div class="card-wrapper">
      <Link to={"/vinos/" + "tinto"}  style={{ color: "inherit", textDecoration: "inherit" }}>
        <div class="card-1 card-object card-object-hf">
          <fragment class="face front">
            <div class="title-wrapper">
              <div class="title">Tinto</div>
              <div class="subtitle">Dionisio Wines</div>
            </div>
          </fragment>
        </div>
        </Link>
      </div>

      <div class="card-wrapper">
      <Link to={"/vinos/" + "blanco"}  style={{ color: "inherit", textDecoration: "inherit" }}>
        <div class="card-2 card-object card-object-hf">
          <fragment class="face front">
            <div class="title-wrapper">
              <div class="title">Blanco</div>
              <div class="subtitle">Dionisio Wines</div>
            </div>
          </fragment>
        </div>
        </Link>
      </div>

      <div class="card-wrapper">
      <Link to={"/vinos/" + "rosado"}  style={{ color: "inherit", textDecoration: "inherit" }}>
        <div class="card-3 card-object card-object-hf">
          <fragment class="face front">
            <div class="title-wrapper">
              <div class="title">Rosado</div>
              <div class="subtitle">Dionisio Wines</div>
            </div>
          </fragment>
        </div>
        </Link>
      </div>

      <div class="card-wrapper">
      <Link to={"/vinos/" + "espumante"}  style={{ color: "inherit", textDecoration: "inherit" }}>
        <div class="card-4 card-object card-object-hf">
          <fragment class="face front">
            <div class="title-wrapper">
              <span class="title">Espumante</span>
              <span class="subtitle">Dionisio Wines</span>
            </div>
          </fragment>
        </div>
        </Link>
      </div>
    </Fragment>
    </div>
  );
};
import "./searchBar.css";
import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { getWinesByName, getWines } from "../../redux/actions";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    if (e.target.value.length === 0) {
      dispatch(getWines());
    } else {
      setName(e.target.value);
    }
    console.log(name);
  }

  function handleSumit(e) {
    e.preventDefault();
    var search = document.getElementById("search").value;
    if (search.length === 0) {
      alert("Ingresa algunos caracteres para buscar");
      dispatch(getWines());
    }
    try {
      if (dispatch(getWinesByName(name)).isEmptyObject()) {
        alert("No se encuentra nada");       
      }  else {
        dispatch(getWinesByName(name));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(getWinesByName(name));
  }, [dispatch]);

  return (
    <div>
      <form class="d-flex" role="search">
        <input
          id="search"
          className="form-control me-2"
          aria-label="Search"
          type="search"
          placeholder="Busca por nombre..."
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={(e) => handleSumit(e)}
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

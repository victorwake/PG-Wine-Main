import './expDetails.css';
import{
    postExp,
    updateExp,
    getExp,
    getExpType
} from '../../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ExpDetails =() =>{
    const clase = useSelector((state) => state.theme);
    const expDetail = useSelector((state) => state.expDetail);
    const dispatch = useDispatch();

    
  const expType = expDetail.expType;
  let kindType = "";
  let kindName = "";

  if (!!expType) {
    kindType = expType.toLowerCase();
    kindName = expType.toUpperCase();
  }

  // useEffect(() => {
  //   dispatch(getExpDetail(id));
  // }, [dispatch, id]);
}
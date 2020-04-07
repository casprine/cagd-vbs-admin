import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

const MDAProduct = props => {
  const { id } = useParams();
  useEffect(()=>{
    document.title = `he;;p | CADG`
  })
  return <>
  {id}</>;
};

export default MDAProduct;

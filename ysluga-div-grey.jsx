import { useState } from 'react'
import '../../css/yslugi.css'

export const YslugaDivGrey = props => {
    let {name, price} = props.data;
    return (
    <>
        <div className="conteiner colorGrey">
            <h2 className="name">{name}</h2>
            <h3 className="price">{price}</h3>
        </div>
    </>
  )
}

export default YslugaDivGrey




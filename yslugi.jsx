import { useState } from 'react'
import '../css/yslugi.css'
import YslugaDivGrey from './blocks/ysluga-div-grey'
import YslugaDivWhite from './blocks/ysluga-div-white'

function App() {


  return (
    <>
        <section className='AllYslugi' id='YslygiSection'>
            <h6 className="wcolor">Наши услуги</h6>
            <div className="wrapYslugi">
              <YslugaDivWhite data={{name: 'Название услуги', price: '4999₽'}}/>
              <YslugaDivGrey data={{name: 'Название услуги', price: '4999₽'}}/>
              <YslugaDivWhite data={{name: 'Название услуги', price: '4999₽'}}/>
              <YslugaDivGrey data={{name: 'Название услуги', price: '4999₽'}}/>
              <YslugaDivWhite data={{name: 'Название услуги', price: '4999₽'}}/>
              <YslugaDivGrey data={{name: 'Название услуги', price: '4999₽'}}/>
              <a href="/прайс-лист" className="showPrice">ОТКРЫТЬ ПРАЙС</a>
            </div>
            
        </section>
    </>
  )
}

export default App

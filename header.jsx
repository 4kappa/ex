import { useState } from 'react'

import '../header/header.css'

function Header() {
  const [isMenu, setMenu] = useState(false)

  const Menu = () => {
      if (!isMenu) {
          setMenu(true)
      }else{
          setMenu(false)
      }
  }
  return (
    <>
    <div className="header_div_full">
    <header className={isMenu ? "open" : "closed"}>
        <div className="header_div">
            <div className="logo_div">
                <h1 className='logo'>мк дентал</h1>
            </div>
            <div className="menu_div">
                <button className='btn_menu' onClick={Menu}> 
                    <div className={isMenu ? "bar_long clicked" : "bar_long"}></div>
                    <div className={isMenu ? "bar_short clicked" : "bar_short"}></div>
                </button>
            </div>
        </div>
        <div className={isMenu ? "header_info open" : "header_info"}>
          <button className={isMenu ? 'link show' :'link'}>прайс-лист</button>
          <button className={isMenu ? 'link show call' :'link'}>записаться на прием</button>
          <button className={isMenu ? 'link show' :'link'}>наши доктора</button>
          <button className={isMenu ? 'link show' :'link'}>отзывы</button>
          <button className={isMenu ? 'link show' :'link'}>контакты</button>
        </div>
      </header>
    </div>
    </>
  )
}

export default Header

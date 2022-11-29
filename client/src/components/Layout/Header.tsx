import React from "react"
import { Link } from "react-router-dom"
//import { useLocation } from "react-router-dom";
import logo from "../../assets/images/yuo.png"
import Auth from "../../pages/Auth/Auth"
import Button from "../../ui/button/Button"
import Navigation from "./Navigation"

const PageHeader: React.FC = () => {
  return (
    <>
      <header className="bg-fixed top-0 z-30 w-full shadow-sm">
        <div className="flex items-center max-w-full mx-10">
          <Link to="/">
            <img
              src={logo}
              height="96"
              width="90"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="logo"></span>
          </Link>
          <div className="title font-bold">
            <h1>Южный округ</h1>
            <h3>войск национальной гвардии Российской Федерации</h3>
          </div>
        </div>
      </header>
      <main
        id="topBar"
        className="flex items-center justify-between mx-10 max-h-max"
      >
        <nav className="flex items-center h-4 mr-8">
          <Link to="/">
            <Button>Главная</Button>
          </Link>
          <Link to="/">
            <Button>Тех.поддержка</Button>
          </Link>
          <Link to="/">
            <Button>СЭД</Button>
          </Link>
          <Link to="/">
            <Button>Почта</Button>
          </Link>
          <Link to="/">
            <Button>Справочные системы</Button>
          </Link>

          <Link to="/">
            <Button>Справочные материалы</Button>
          </Link>
          <Link to="/">
            <Button>Образцы документов</Button>
          </Link>
          <Link to="/">
            <Button>Центр ИТ ЮО</Button>
          </Link>
          <Link to="/">
            <Button>Военный совет ЮО</Button>
          </Link>
        </nav>
        <nav className="flex items-end justify-end">
          <Link to="/login">
            <Button>Вход</Button>
          </Link>
        </nav>

        {/* <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <SubMenu label="Open">
          <MenuItem>index.html</MenuItem>
          <MenuItem>example.js</MenuItem>
          <SubMenu label="Styles">
            <MenuItem>about.css</MenuItem>
            <MenuItem>home.css</MenuItem>
            <MenuItem>index.css</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem>Save</MenuItem>
        </Menu> */}
      </main>

      <hr className="border-1.5 border-red-900" />
    </>
  )
}

export default PageHeader

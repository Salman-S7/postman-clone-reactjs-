import { FaCircleUser } from "react-icons/fa6"

const Header = () => {
  return (
      <header className="h-[10vh] w-full bg-slate-600 text-white fixed top-0 left-0 flex
     items-center justify-between common-p">
          <div className="text-orange-500 font-black ">Postman</div>
          <div className=""><FaCircleUser className="h-8 w-8"/></div>
    </header>
  )
}

export default Header
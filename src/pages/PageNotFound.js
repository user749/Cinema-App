import { useEffect } from "react"
import { Link } from "react-router-dom"
import  page  from "../assets/images/404image.gif"
import { Button } from "../components"

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page not Found / Cinema`;
  } ) ;


  return (

    <main>
      <section className="flex flex-col justiy-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
          <img className="rounded" src={page} alt="404 Page not Found" />
        </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <Button>Back to Cinema</Button>
          </Link>
       </div>
      </section>
    </main>
  
  )
}

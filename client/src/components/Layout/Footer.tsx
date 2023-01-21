import React from "react"
<<<<<<< HEAD
import "../../assets/styles/footer.scss"
=======
import "../../ui/assets/styles/footer.scss"
>>>>>>> 0e5a80557de103005bea356e3a8e77cb9fbea83f

const currentYear = new Date().getFullYear()

const PageFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-700 text-center lg:text-left mt-[40px]">
      <div className="text-gray-300 text-center sticky top-0 z-30 w-full px-2 py-2 sm:px-2 ">
        <p>&copy;{currentYear} Южный округ войск национальной гвардии </p>
      </div>
    </footer>
  )
}

export default PageFooter

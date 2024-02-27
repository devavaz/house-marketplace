import { Link } from "react-router-dom"
import rentCategotyImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategotyImage from "../assets/jpg/sellCategoryImage.jpg"



const Explore = () => {
  return (
    <div className="explore">

      <header>
        <p className="pageHeader">
          Explore
        </p>
      </header>

      <main>
        {/* // Slider */}


        <p className="exploreCategoryHeading">
          Categories
        </p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategotyImage} alt="rentCategotyImage" className="exploreCategoryImg"/>
            <p className="exploreCategoryName">Places for rent</p>

           </Link>
           <Link to="/category/sale">
            <img src={sellCategotyImage} alt="sellCategotyImage" className="exploreCategoryImg"/>
            <p className="exploreCategoryName">Places for sale</p>
           </Link>
         

        </div>
      </main>
      

     


    </div>
  )
}

export default Explore
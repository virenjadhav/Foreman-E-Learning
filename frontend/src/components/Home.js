import React,{useState, useEffect} from 'react';
import Header from './Header';
import axios from 'axios';
import CourseContainer from "./CourseContainer";
import CategoryScroll from "./CategoryScroll";

function Home() {

    const [categerios, setCategerios] = useState([]);

    useEffect(() => {
        const getCategerious = async () => {
            const categeriousResponse = await axios.get('http://localhost:5000/get_categerious');
        
            // console.log("categeriousResponse")
            // console.log(categeriousResponse.data.category);
            setCategerios(categeriousResponse.data.category);
        }
        getCategerious();
      
    },[])

  return (
    <div>
        <Header />
        <div className="container">
            <CategoryScroll categerios={categerios}/>
        {/* {categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} /> 
  )):<div></div>} */}
  </div>
    </div>
  )
}

export default Home
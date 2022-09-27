import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import CourseContainer from "./CourseContainer";
import CategoryScroll from "./CategoryScroll";

function Home() {
  const [categerios, setCategerios] = useState([]);
  const [selectCategory, setCategory] = useState("");

  useEffect(() => {
    const getCategerious = async () => {
      const categeriousResponse = await axios.get(
        "http://localhost:5000/get_categerious"
      );

      // console.log("categeriousResponse")
      // console.log(categeriousResponse.data.category);
      setCategerios(categeriousResponse.data.category);
    };
    // getCategerious();
    const category = [
      {
        id: 1,
        name: "Architecture and Planning",
        code: "AR",
      },
      {
        id: 2,
        name: "Computer Science and Information Technology",
        code: "CS",
      },
      {
        id: 3,
        name: "Chemical Engineering",
        code: "CH",
      },
      {
        id: 4,
        name: "Electrical Engineering",
        code: "EE",
      },
      {
        id: 5,
        name: "Mechanical Engineering",
        code: "ME",
      },
      {
        id: 6,
        name: "Civil Engineering",
        code: "CE",
      },
      {
        id: 7,
        name: "Mathematics",
        code: "MA",
      },
      {
        id: 8,
        name: "Aerospace Engineering",
        code: "AE",
      },
      {
        id: 9,
        name: "Agricultural Engineering",
        code: "AG",
      },
      {
        id: 10,
        name: "Electronics and Communication Engineering",
        code: "EC",
      },
      {
        id: 11,
        name: "Biotechnology",
        code: "BT",
      },
    ];
    setCategerios(category);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <CategoryScroll categerios={categerios} setCategory={setCategory} />
        {/* {categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} /> 
  )):<div></div>} */}
        <CourseContainer categeory={selectCategory} />
      </div>
    </div>
  );
}

export default Home;

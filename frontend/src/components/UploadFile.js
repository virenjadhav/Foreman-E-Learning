// import axios from "axios";

// import React, { Component, createContext } from "react";

// // import React, { Component } from "react";

// export const AppContext = createContext(null);
// class UploadFile extends React.Component {
  
//     // Initially, no file is selected
//     state = {
//       title: 'id',
//       body: 'id hai',
//       featured_image: null,
//       image_path : AppContext
    
//   };

// componentDidMount(){
  
// const fetchsome = async () => {
//   console.log("componentDidMount")
//   const response = await axios.get("http://localhost:5000/posts");
//   console.log("response")
//   this.setState({image_path: response.data.featured_image_url})
//   // console.log(response);
// }
// fetchsome();
// }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   onImageChange = event => { 
//     this.setState({ featured_image: event.target.files[0] });
//   };

//   // // On file select (from the pop up)
//   // onFileChange = (event) => {
//   //   // Update the state
//   //   this.setState({ selectedFile: event.target.files[0] });
//   // };

//   // // On file upload (click the upload button)
//   // onFileUpload = () => {
//   //   // Create an object of formData
//   //   const formData = new FormData();

//   //   // Update the formData object
//   //   formData.append(
//   //     "myFile",
//   //     this.state.selectedFile
//   //     //   this.state.selectedFile.name
//   //   );

//   //   // Details of the uploaded file
//   //   console.log(this.state.selectedFile);
//   //   console.log(formData);

//   //   // Request made to the backend api
//   //   // Send formData object
//   //   axios.post("api/uploadfile", formData);
//   // };

//   // // File content to be displayed after
//   // // file upload is complete
//   // fileData = () => {
//   //   if (this.state.selectedFile) {
//   //     return (
//   //       <div>
//   //         <h2>File Details:</h2>

//   //         <p>File Name: {this.state.selectedFile.name}</p>

//   //         <p>File Type: {this.state.selectedFile.type}</p>

//   //         <p>
//   //           Last Modified:{" "}
//   //           {this.state.selectedFile.lastModifiedDate.toDateString()}
//   //         </p>
//   //       </div>
//   //     );
//   //   } else {
//   //     return (
//   //       <div>
//   //         <br />
//   //         <h4>Choose before Pressing the Upload button</h4>
//   //       </div>
//   //     );
//   //   }
//   // };

//   handleSubmit = event => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('title', this.state.title);
//     formData.append('body', this.state.body);
//     formData.append('featured_image', this.state.featured_image);
//     for (var key of formData.entries()) {
//       console.log(key[0] + ', ' + key[1]);
//   }
//     console.log("formData");
//     console.log(formData);
//     console.log(this.state.featured_image)
//     fetch('http://localhost:5000/posts', {
//       method: 'POST',
//       body: formData
//     })
//     .catch(error=>console.log(error));
//   };
  

//   render() {
//     return (
//       <div onclick={this.handleChange}>
//         <h1>GeeksforGeeks</h1>
//         <h3>File Upload using React!</h3>
//         <div>
//           <input type="file" 
//           // onChange={this.onFileChange}
//           onChange={this.onImageChange} 
//           />
//           <button 
//           // onClick={this.onFileUpload}
//           onClick={this.handleSubmit}
//           >Upload!</button>
//         </div>
//         <img src={require(`${this.state.image_path}`)} alt=""/>
//         {/* {this.fileData()} */}
//       </div>
//     );
//   }
// }

// export default UploadFile;


// import React from 'react'
import axios from "axios";

import React, { useEffect, useState, Component, createContext } from "react";

// // import React, { Component } from "react";

export const AppContext = createContext(null);

const UploadFile = () => {
  // state = {
    //       title: 'id',
    //       body: 'id hai',
    //       featured_image: null,
    //       image_path : AppContext
        
    //   };

    const [title, setTitle] = useState("id");
    const [body, setBody] = useState("body");
    const [featured_image, setFeaturedImage] = useState(null);
    const [image_path, setImagePath] = useState(AppContext);

  useEffect(() => {
  
const fetchsome = async () => {
  // console.log("componentDidMount")
  const response = await axios.get("http://localhost:5000/posts");
  // console.log("response")
  // this.setState({image_path: response.data.featured_image_url})
  setImagePath(response.data.featured_image_url);
  // console.log(response);
}
fetchsome();
},[]);

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  const onImageChange = event => { 
    // this.setState({ featured_image: event.target.files[0] });
    setFeaturedImage(event.target.files[0]);
  };


  const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('featured_image', featured_image);
        for (var key of formData.entries()) {
          console.log(key[0] + ', ' + key[1]);
      }
        console.log("formData");
        console.log(formData);
        console.log(featured_image)
        fetch('http://localhost:5000/posts', {
          method: 'POST',
          body: formData
        })
        .catch(error=>console.log(error));
      };
      


  return (
            <div 
            // onclick={this.handleChange}
            >
              <h1>GeeksforGeeks</h1>
              <h3>File Upload using React!</h3>
              <div>
                <input type="file" 
                // onChange={this.onFileChange}
                onChange={onImageChange} 
                />
                <button 
                // onClick={this.onFileUpload}
                onClick={handleSubmit}
                >Upload!</button>
              </div>
              <img src={image_path} alt=""/>
              {/* {this.fileData()} */}
            </div>
          );
  
}

export default UploadFile
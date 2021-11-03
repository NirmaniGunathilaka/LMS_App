// import axios from "axios";
// import React from "react";
// import APIService from "../service/APIService";

// //const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function ViewCourse() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//    APIService.getCourses().then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }
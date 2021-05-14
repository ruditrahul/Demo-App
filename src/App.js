
import { useEffect, useState } from 'react';
import './App.css';
import Image from "./Image";
import Page from "./Page";
import Pagination from "./Pagination";

function App() {
  const [posts,setPosts]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>{
      setPosts(data);
    });
  })

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="App">
    <Page posts={currentPosts}/>
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
     {/* {posts.map((photo)=>(
        <Image key={photo.id} title={photo.title} url={photo.url}></Image>
      ))} */}
    </div>
  );
}

export default App;

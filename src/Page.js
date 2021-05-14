import React from 'react';
import Image from "./Image";

function Page({posts}) {
    return (
        <div>
        <ul className='page'>
            {posts.map(photo => (
             <Image key={photo.id} title={photo.title} url={photo.url}></Image>
      ))}
    </ul>
        </div>
    )
}

export default Page

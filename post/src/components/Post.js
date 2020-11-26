import React, { useState } from 'react';
import axios from 'axios';
// import { text } from 'express';
// // import { json } from 'body-parser';

function Post() {
  const [like, setLiked] = useState(false);
  // const [text, setText] = useState('');
  // const [numberLike, setNumberLike] = useState({
  //   number: 0,
  // });

  // const getLikes = () => {
  //   axios.get('/like').then((res) => {
  //     //   console.log(res);
  //     setNumberLike({
  //       number: res.data,
  //     });
  //   });
  // };
  // getLikes();

  const likeTime = (e) => {
    setLiked(!like);
    // let newlikes = {
    //   number: 1,
    //   //   name: 'rahmonoc',
    // };

    // if (!like) {
    //   axios.post('/likes', newlikes).then((res) => {
    //     console.log(res);
    //     setNumberLike({ number: res.data.likes });
    //     // idDelete = res.data._id;
    //   });
    // }
  };

  // const delButton = () => {
  //   axios.delete('/delete', idDelete).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const textWrite = () => {
  //   let index = 0;
  //   setText('I am web developer', () => {
  //     text.slice(0, index);
  //   });
  //   index++;
  //   // const h1 = document.getElementById('text');
  //   // text.slice(0, index);

  //   if (index < text.length) {
  //     index = 0;
  //   }
  // };
  // setInterval(textWrite, 100);
  return (
    <div>
      <i
        onClick={likeTime}
        className={like ? 'fas fa-heart' : 'far fa-heart'}
      ></i>
      <button>X</button>
      {/* <p>{numberLike.number}</p> */}
      {/* <h1></h1> */}
    </div>
  );
}

export default Post;

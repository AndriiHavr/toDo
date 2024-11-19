import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checked, deletePost, changePost } from "../store/slice";

const PostList = () => {
   const posts = useSelector((state) => state.posts);
   const dispatch = useDispatch();

   return (
      <div>
         <h2>Завдання</h2>
         <ul>
            {posts.map((post) => (
              
               <li key={post.id}>
                   {/* {console.log(post)} */}
                  <input
                     type="checkbox"
                     checked={post.checked}
                     onChange={() => dispatch(checked({ id: post.id }))}
                  />
                  <span className={post.checked ? "crossed" : ""}>
                     {post.title}
                  </span>
                  <button onClick={() => dispatch(deletePost(post.id))}>
                     Видалити
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default PostList;

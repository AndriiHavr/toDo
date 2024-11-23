import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checked, deletePost, changePost } from "../store/slice";

const PostList = () => {
   const posts = useSelector((state) => state.posts);
   console.log(posts);
   const dispatch = useDispatch();

   const [editingId, setEditingId] = useState(null);
   const [editValue, setEditValue] = useState("");

   const handleEdit = (post) => {
      setEditingId(post.id);
      setEditValue(post.title);
   };

   const handleSave = (id) => {
      dispatch(changePost({ id, title: editValue }));
      setEditingId(null);
   };

   return (
      <div>
         <h2 style={{marginLeft: '10px'}}>Tasks</h2>
         <ul>
            {posts.map((post) => (
               <li key={post.id} style={{ position: "relative" }}>
                  <input
                     type="checkbox"
                     checked={post.checked}
                     onChange={() => dispatch(checked({ id: post.id }))}
                  />

                  {editingId === post.id ? (
                     <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => handleSave(post.id)}
                        onKeyDown={(e) =>
                           e.key === "Enter" && handleSave(post.id)
                        }
                        style={{ position: "absolute", left: "26px", height: "30px",width:"300px", fontSize: "16px" }}
                        autoFocus
                     />
                  ) : (
                     <span
                        onClick={() => handleEdit(post)}
                        className={post.checked ? "crossed" : ""}
                     >
                        {post.title}
                     </span>
                  )}

                  <button onClick={() => dispatch(deletePost(post.id))}>
                     Delete
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default PostList;

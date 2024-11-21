import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addPosts}  from "../store/slice";


const AddPostForm = () => {
 const [title, setTitle] = useState('')
 const dispatch = useDispatch();
 
 const handleSubmit = (e) => {
   e.preventDefault();
   if(title) {
      dispatch(addPosts({title, id:Number(Date.now().toString().slice(-5)), checked: false}));
      setTitle('')
      // console.log(Number(Date.now().toString().slice(-5)))
   }
 }

   return(
      <form onSubmit={handleSubmit} style={{marginLeft: '15px'}}>
         <input type="text" className="main_input" value={title} onChange={(e)=> setTitle(e.target.value)} />
         <button type="submit">Add task</button>
      </form>
   )
}

export default AddPostForm;

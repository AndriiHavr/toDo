import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
   localStorage.setItem("posts", JSON.stringify(state));
};

const loadFromLocalStorage = () => {
   const savedState = localStorage.getItem("posts");
   return savedState
      ? JSON.parse(savedState)
      : [
           {
              title: "Скласти розпорядок.",
              id: 1,
              checked: false,
           },
        ];
};

const postsSlice = createSlice({
   name: "posts",
   initialState: loadFromLocalStorage(),
   reducers: {
      addPosts: (state, action) => {
         state.push(action.payload);
         saveToLocalStorage(state);
         // console.log(JSON.stringify(state, null, 2));
         // console.log("addPost");
      },
      changePost: (state, action) => {
         const post = state.find((p) => p.id === action.payload.id);//
         if (post) {
            post.title = action.payload.title;
            saveToLocalStorage(state);
         }
         // console.log(JSON.stringify(state, null, 2));
         // console.log("changePost");
      },
      checked: (state, action) => {
         const post = state.find((item) => item.id === action.payload.id);
         if (post) {
            post.checked = !post.checked;
            saveToLocalStorage(state);
         }
         // console.log(JSON.stringify(state, null, 2));
         // console.log("checked");
      },
      deletePost: (state, action) => {
         const index = state.findIndex((post) => post.id === action.payload);
         if (index !== -1) {
            state.splice(index, 1);
            saveToLocalStorage(state);
         }
         // console.log(JSON.stringify(state,null,2));
         // console.log("delete")
      },
   },
});

export const { addPosts, changePost, deletePost, checked } = postsSlice.actions;
export default postsSlice.reducer;

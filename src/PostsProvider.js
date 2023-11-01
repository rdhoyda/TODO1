// import React, { createContext, useContext, useReducer } from "react";

// const PostsContext = createContext();

// export function PostsProvider({ children }) {
//   const initialState = []; // Initial state for posts

//   function postReducer(state, action) {
//     switch (action.type) {
//       case "CREATE_POST":
//         return [...state, action.post]; // Add the new post to the state
//       // Add more cases for other actions if needed
//       default:
//         return state;
//     }
//   }

//   const [posts, dispatchPosts] = useReducer(postReducer, initialState);

//   return (
//     <PostsContext.Provider value={{ posts, dispatchPosts }}>
//       {children}
//     </PostsContext.Provider>
//   );
// }

// export function usePosts() {
//   return useContext(PostsContext);
// }

// import Post from "./Post";
// import { v4 as uuid4 } from 'uuid';
// export default function PostsProvider({ posts = [] }) {
//   return (
//     <div>
//       {posts.map((p, i) => (
//         <Post {...p} key={uuid4()} />
//       ))}
//     </div>
//   );
// }


import React from "react";
import Post from "./Post";
import { v4 as uuid4 } from 'uuid';

export default function PostsProvider({ posts = [], handleDeletePost }) {
  return (
    <div>
      {posts.map((p, i) => (
        <div key={uuid4()}>
          <Post post={p} />
          <button onClick={() => handleDeletePost(p.title)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

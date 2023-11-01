// import React, { useState, useReducer } from "react";
// import CreatePost from "./CreatePost";
// import UserBar from "./Userbar";
// import PostsProvider from "./PostsProvider";

// function App() {
//   const initialPosts = [
//     {
//       title: "React Hooks",
//       content: "The great thing since sliced bread!",
//       author: "Daniel Bugl"
//     },
//     {
//       title: "Using React Fragment",
//       content: "Keeping the DOM tree clean",
//       author: "Daniel Bugl"
//     },
//     {
//       title: "Component reusability",
//       content: "Make your component reusable",
//       author: "Daniel Bugl"
//     }
//   ];

//   const [createPostVisible, setCreatePostVisible] = useState(false);

//   function userReducer(state, action) {
//     switch (action.type) {
//       case "LOGIN":
//         setCreatePostVisible(true);
//         return action.username;
//       case "REGISTER":
//         setCreatePostVisible(true);
//         return action.username;
//       case "LOGOUT":
//         setCreatePostVisible(false);
//         return null;
//       default:
//         return state;
//     }
//   }

//   const [user, dispatchUser] = useReducer(userReducer, "");

//   function postReducer(state, action) {
//     switch (action.type) {
//       case "CREATE_POST":
//         const newPost = {
//           title: action.title,
//           content: action.content,
//           author: user,
//           complete: false,
//           dateCreated: new Date().toISOString(),
//           dateCompleted: null,
//         };
//         return [newPost, ...state];

//       case "TOGGLE_POST":
//         const updatedPosts = state.map((post) => {
//           if (post.title === action.title) {
//             post.complete = !post.complete;
//             post.dateCompleted = post.complete ? new Date().toISOString() : null;
//           }
//           return post;
//         });
//         return updatedPosts;

//       case "DELETE_POST":
//         return state.filter((post) => post.title !== action.title);

//       default:
//         return state;
//     }
//   }

//   const [posts, dispatchPost] = useReducer(postReducer, initialPosts);

//   const handleAddPost = (newPost) => {
//     dispatchPost({ type: "CREATE_POST", ...newPost });
//   };

//   return (
//     <div>
//       <UserBar user={user} dispatchUser={dispatchUser} />
//       {user && (
//         <CreatePost
//           user={user}
//           handleAddPost={handleAddPost}
//           dispatchPost={dispatchPost} // Pass dispatchPost as a prop
//         />
//       )}
//       <PostsProvider posts={posts} dispatchPost={dispatchPost} />
//     </div>
//   );
// }

// export default App;


import React, { useState, useReducer } from "react";
import CreatePost from "./CreatePost";
import UserBar from "./Userbar";
import PostsProvider from "./PostsProvider";

function App() {
  const initialPosts = [
    {
      title: "React Hooks",
      content: "The great thing since sliced bread!",
      author: "Daniel Bugl"
    },
    {
      title: "Using React Fragment",
      content: "Keeping the DOM tree clean",
      author: "Daniel Bugl"
    },
    {
      title: "Component reusability",
      content: "Make your component reusable",
      author: "Daniel Bugl"
    }
  ];

  const [createPostVisible, setCreatePostVisible] = useState(false);

  function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        setCreatePostVisible(true);
        return action.username;
      case "REGISTER":
        setCreatePostVisible(true);
        return action.username;
      case "LOGOUT":
        setCreatePostVisible(false);
        return null;
      default:
        return state;
    }
  }

  const [user, dispatchUser] = useReducer(userReducer, "");

  function postReducer(state, action) {
    switch (action.type) {
      case "CREATE_POST":
        const newPost = {
          title: action.post.title,
          content: action.post.content,
          author: user,
          complete: false,
          dateCreated: new Date().toISOString(),
          dateCompleted: null,
        };
        return [newPost, ...state];

      case "TOGGLE_POST":
        const updatedPosts = state.map((post) => {
          if (post.title === action.title) {
            post.complete = !post.complete;
            post.dateCompleted = post.complete ? new Date().toISOString() : null;
          }
          return post;
        });
        return updatedPosts;

      case "DELETE_POST":
        return state.filter((post) => post.title !== action.title);

      default:
        return state;
    }
  }

  const [posts, dispatchPost] = useReducer(postReducer, initialPosts);

  const handleAddPost = (newPost) => {
    console.log(newPost);
    dispatchPost({ type: "CREATE_POST", ...newPost });
  };

  const handleDeletePost = (title) => {
    dispatchPost({ type: "DELETE_POST", title });
  };


  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} />
      {user && (
        <CreatePost
          user={user}
          handleAddPost={handleAddPost}
          dispatchPost={dispatchPost} 
        />
      )}
      <PostsProvider posts={posts} handleDeletePost={handleDeletePost} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export default function CreatePost({ user, handleAddPost, dispatchPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      title,
      content,
      author,
      dateCreated: new Date().toISOString(),
    };

    // Dispatch the CREATE_POST action to update the global post state
    dispatchPost({ type: "CREATE_POST", post: newPost });

    // Reset the form fields
    setTitle("");
    setContent("");
    setAuthor("");
  }


  return (
    <div>
      <h3>Create New Post</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}
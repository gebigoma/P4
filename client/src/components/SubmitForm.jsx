import React from 'react'

const SubmitForm = (props) => {
  let { handleChange, handleSubmit, title, body, post_url, img, tags } = props
  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Title" name="title" autoComplete="off" value={title} />
        <input onChange={handleChange} type="text" placeholder="Description" name="body" autoComplete="off" value={body}/>
        <input onChange={handleChange} type="text" placeholder="Post Url" name="post_url" autoComplete="off" value={post_url}/>
        <input onChange={handleChange} type="text" placeholder="Image" name="img" autoComplete="off" value={img} />
        <input onChange={handleChange} type="text" placeholder="Tags" name="tags" autoComplete="off" value={tags}/>
        <button>Submit</button>
      </form>
  )
}

export default SubmitForm
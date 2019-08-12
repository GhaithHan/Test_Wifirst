import React from  'react';


// Components
import PostsItem from './posts_list_item';



const PostsList = (props) => {
  
  const items = props.testing.map(item => (
    <PostsItem item={item} key={item.id}/>
  ))


  return (
    <div>
      {props.children}
      {items}
    </div>
  )

}

export default PostsList; 
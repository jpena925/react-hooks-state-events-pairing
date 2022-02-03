import React from 'react';

function Buttons({upvotes, downvotes, onUpvote, onDownvote}) {
  return (
  <button onClick={onUpvote || onDownvote}>
    {upvotes ? `${upvotes}👍` : `${downvotes}👎`} 
  </button>)
}

export default Buttons;

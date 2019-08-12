import React from 'react';


import '../css/styles.css';

const styles = {
  size:{
    fontSize: "10px"
  }
}

// le role de cette composante est d'afficher les commentaire pour chaque post


const CommentsList = (props) => {

  return (
      <div>
               
                    <div>
                        <h3 style={styles.size}><span className="bigger">commentaire:</span> {props.item.body} <strong>Par {props.item.email}</strong></h3> 
                    </div>

      </div>

    );
  
}

export default CommentsList;
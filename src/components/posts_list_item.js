import React, {Component} from 'react';
import CommentsList from './comments_list'
import { CSSTransition } from 'react-transition-group'
import '../css/styles.css';

class PostsItem extends Component {

  
  // il s'agit de la composante qui va s'occuper de chaque post et elle recoit ces propriétés de la
  // composante mére PostItems

  // j'ai crée une nouvelle composante pour les commentaire et j'ai utilisé CSSTransition de la librairie 
  // react transition group pour son affichage

  
  state = {
    show:false
  }

  
  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false
    })
  }
  
  
  render(){
    const items = this.props.item.comments.map(item => (
      <CommentsList item={item} key={item.id}/>
      ))

  return (
    <div>
        
        <h2 className="titrepost">Titre: {this.props.item.title}</h2>
        <h3>Ce post a été creé par l'username <strong>{this.props.item.user.username}</strong></h3>
         <p className="size">email: <span className="bigger">{this.props.item.user.email}</span></p>
         <p className="size">téléphone: <span className="bigger">{this.props.item.user.phone}</span></p>
         <p className="size">website: <span className="bigger">{this.props.item.user.website}</span></p>

        <div className="postcontent">
          {this.props.item.body}
        </div>
        
        <div>
                        <CSSTransition
                        in={this.state.show}
                        timeout={1000}
                        classNames="square"
                        mountOnEnter
                        unmountOnExit
                        
                        >
                            <div className={`square ${this.state.show}`}>
                                {items}
                            </div>
                        </CSSTransition>
                        
                            <div className="showDiv"
                            onClick={this.showDiv}
                            >
                                Voir/fermer Les Commentaires de ce Post
                            </div>
        
                    </div>
        


    </div>
  )
}
} 

export default PostsItem;


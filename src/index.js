import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/styles.css';

//components
import Header from './components/header';
import PostsList from './components/posts_list';




class Postlist extends React.Component {
  state = {
      content: [],
      filtered: []
  };

  // l'idée est d'associer tout les données(venant des 4 endpoints) et qui sont reliées dans un tableau qui s'appelle our_post
  // donc chaque post (avec l'utilisateur qui l'a crée et les commentaires) se retrouveront dans un seul tableau

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        let our_post = [];
        let posts =  response.data ;
        Promise.all(
            posts.map(item => (
                axios.get(`https://jsonplaceholder.typicode.com/users/${item.userId}`)
                    .then(res =>{
                        item['user'] = res.data ;
                        
                      }).then(
                        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${item.id}`).then(res =>{
                          item['comments'] = res.data ; 
                          our_post.push(item)
                        })
                        )
            ))
        )
            .then(() => {
                this.setState({content:our_post})
            })
    })

  }
  
  // le role de la fonction getKeyword est de prendre la valeur de la variable saisie dans le input
  // et de chercher cette valeur dans les titres des postes 

  getKeyword = (event) => {
    // console.log(event.target.value)
    let keyword = event.target.value;
    let filtered = this.state.content.filter((item)=> {
        return item.title.indexOf(keyword) > -1
    })
    this.setState({
      filtered:filtered
    })
    // console.log(filtered)
  }


  render() {
    console.log(this.state.content)
    let postsFiltered = this.state.filtered;
    let postsWhole = this.state.content
      return (
          <div>
            <Header keywords={this.getKeyword}/>
            <PostsList testing={postsFiltered.length === 0 ? postsWhole : postsFiltered}></PostsList>
          </div>
      );
  }
}

ReactDOM.render(
  <Postlist name="World" />,
  document.getElementById('root')
);




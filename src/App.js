import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import AddComment from './components/AddComment';

class App extends Component {
  
  // Mock para probar la API
  /*state = {
    comments: [
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body:
          "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      },
      {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body:
          "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
      },
      {
        postId: 1,
        id: 4,
        name: "alias odio sit",
        email: "Lew@alysha.tv",
        body:
          "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
      },
    ],
  };
  */

  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then((response) => response.json())
      .then((result) => this.setState({ comments: result }))
      .then((json) => console.log('Fetch de la API', json));
  }

  deleteComment = (id) => {
    console.log('id', id);
    fetch('https://jsonplaceholder.typicode.com/comments/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log('delete comment', json))
      .then(
        this.setState({
          comments: [...this.state.comments.filter((item) => item.id !== id)],
        })
      );

    /*this.setState({
      // El filter hace un nuevo arreglo con la validación que se le pasa
      // Escoge los ids difirentes al que se le pasa
      comments: [...this.state.comments.filter((item) => item.id !== id)],
    });*/
  };

  addingComment = (commentAdded) => {
    // Para validar que llega la información desde AddComment hasta app.js:
    console.log('Comentario a añadir, recibido por App', commentAdded);

    // Mock de comentario para añadir
    /*const newComment = {
      id: 3454,
      email: "hola@gardner.biz",
      body: "hola body",
    }; */

    commentAdded.id = this.state.comments.length + 1;
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        body: commentAdded.body,
        userId: commentAdded.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(
        this.setState({ comments: [...this.state.comments, commentAdded] })
      );

    // this.setState({
    //   comments: [...this.state.comments, newComment],
    // });
  };

  render() {
    console.log('Probando state en App', this.state.comments);
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Comments</p>
        </header>
        {/* Se le pasan las props (comments) al componente Comment: */}
        {/* Se instancia Comment */}
        <AddComment addComment={this.addingComment} />
        <Comment
          comments={this.state.comments}
          delComment={this.deleteComment}
        />
        {/* Se le pasa como prop la función que elimina los comentarios del State */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

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
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=3")
      .then((response) => response.json())
      .then((result) => this.setState({ comments: result }))
      .then((json) => console.log("Fetch de la API", json));
  }

  //Método para eliminar comentarios del State
  deleteComment = (id) => {
    console.log("id", id);
    fetch("https://jsonplaceholder.typicode.com/comments/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          comments: [...this.state.comments.filter((item) => item.id !== id)],
        })
      )
      .then((json) => console.log("delete comment", json));

    /*
    this.setState({
      // El filter hace un nuevo arreglo con la validación que se le pasa
      // Escoge los ids difirentes al que se le pasa
      comments: [...this.state.comments.filter((item) => item.id !== id)],
    });
    */
  };

  addBody = (bodyReceived) => {
    // Para validar que llega la información desde AddComment hasta app.js
    console.log("Comentario a añadir, recibido por App", bodyReceived);

    /*     // Mock de comentario para añadir
    const newComment = {
      id: 3454,
      email: "hola@gardner.biz",
      body: "hola body",
    }; */

    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.comments[this.state.comments.length-1].id + 1,
        body: bodyReceived,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          comments: [...this.state.comments, result],
        })
      )
      .then((json) => console.log("comentario añadido", json));

      

      console.log('Estado',this.state.comments[this.state.comments.length-1].id)

    // this.setState({
    //   comments: [...this.state.comments, newComment],
    // });
  };

  render() {
    //console.log("Probando state en App", this.state.comments);
    console.log("Eliminación", this.deleteComment);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Comments</p>
        </header>
        {/* Se le pasan las props (comments) al componente Comment: */}
        {/* Se instancia Comment */}
        <AddComment addBody={this.addBody} />
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

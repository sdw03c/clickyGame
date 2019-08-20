import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Card from "./components/Card"
import images from "../public/images/"
import Footer from './components/Footer';
import './App.css';



class App extends Component{
  state ={
    currentScore: 0,
    topScore: 0,
    cards, 
    images
  }


gameOver = () => {
  if (this.state.currentScore > this.state.topScore){
    this.setState({topScore: this.state.currentScore}, function(){
      console.log(this.state.topScore);
      console.log(topScore);
    })
  }
  this.state.cards.forEach(card => {
    this.setState({currentScore:0})
    card.count = 0;
    return true;
  });
}
  randomizeCards = () => {
    this.state.images.sort(() => Math.random() - 0.5)
    return true;
  }

  clickCard = id => {
    this.state.cards.find((card,i) => {
      if(card.id === id){
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1
          this.setState({currentScore: this.state.score + 1}, function(){
          console.log(this.state.currentScore)
        })
        this.randomizeCards();
        return true
      }
      else{
        this.gameOver();
      }
    }
    })
  }


render() {
  return(
<div>
  <Header currentScore={this.state.currentScore} topScore={this.state.score}>

  </Header>
  <Wrapper>
   {this.state.cards.map (card => (
    <Card
      clickCard = {this.clickCard}
      id = {card.id}
      key = {card.id}
      image={card.image}
    />
   ))}
  </Wrapper>
  <Footer>

  </Footer>
</div>
  )
}
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Footer></Footer>
//     </div>

    
//   );
// }

// render(){
//   return(
//   <Footer></Footer>)}
  

export default App;

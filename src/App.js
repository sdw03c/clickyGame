import React, {Component} from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Card from "./components/Card"
import images from "./images.json"
import whatever from './images/leo-titanic.PNG'
import Footer from './components/Footer';
import './App.css';

class App extends Component{
    state ={
      currentScore: 0,
      topScore: 0,
      images 
     // images
    }
    gameOver = () => {
        if (this.state.currentScore > this.state.topScore){
          this.setState({topScore: this.state.currentScore}, function(){
            console.log(this.state.topScore);
          })
        }
        this.state.images.forEach(card => {
          this.setState({currentScore:0})
          card.count = 0;
          return true;
        });
        if (this.state.currentScore === 12){
            // this.setState({topScore: this.state.currentScore}, function(){
              alert("You won!!! :) Click on a Leo card to begin a new game!");
             
           }
           else
        alert("Sorry, you lost! :( Click on a Leo card to begin a new game.")
      }
      randomizeCards = () => {
        this.state.images.sort(() => Math.random() - 0.5)
        return true;
      }
      
      clickImage = id => {
        this.state.images.find((card,i) => {
          if(card.id === id){
            if(images[i].count === 0){
                images[i].count = images[i].count + 1
              this.setState({currentScore: this.state.currentScore + 1}, function(){
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
  // Map over this.state.images and render a cardCard component for each card object
    render() {
        return (
           <div>
                <Header currentScore={this.state.currentScore} topScore={this.state.topScore}></Header>
                <Wrapper>
                {console.log(whatever)}
                {this.state.images.map(card => (
                    <Card
                    clickImage={this.clickImage}
                        id={card.id}
                        key={card.id}
                        image={card.image} />
        ))}
          </Wrapper>
        <Footer></Footer>
        </div>
        );
    }
}

export default App;

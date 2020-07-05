import React from 'react';
import './App.css';
import CharacterCard from '../CharacterCard/';
import Logo from '../../assets/images/rick-and-morty_logo.png';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      nextPage : 1,
      loading : true,
      error : null,
      data : {
        results : [],
      }
    };
  }

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () =>{
    this.setState({ loading : true, error : null});
    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
      const data = await response.json();
      this.setState({
        nextPage : this.state.nextPage+1,
        loading : false,
        data : {
          results : [].concat(this.state.data.results, data.results),
        },
      });
    }catch(error){
      this.setState({loading : false, error : error});
    }
  }
   
  render(){
    return (
      <main className="App py-5">
         <div className="container-fluid">
              <div className="container d-flex justify-content-center p-5">
                  <img className="App__logo" src={Logo} alt="Rick and Morty Logo" ></img>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row justify-content-center">
                    {this.state.data.results.map(character =>(<CharacterCard character={character}/>))}
                </ul> 
              </div>
         </div>
         {(!this.state.loading) && (
                      <button onClick={() => this.fetchCharacters()} className="btn App__button py-3">Load More</button>
          )} 
      </main>
    );
  }
}

export default App;

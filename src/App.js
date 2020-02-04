import React from "react";
import Homepage from './components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}


export default App;

/*



{
  state = {
modalIsOpen: false,
showBlock: false
}

showModal = () => {
  this.setState({modalIsOpen: true});
}

closeModal = () => {
  this.setState({modalIsOpen:false});
}



  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

      <button className = "Button" onClick= {() => this.setState(prevState => ({showBlock:!prevState.showBlock}))} >Toggle</button>
      <br/><br/>



<Transition in =  {this.state.showBlock} timeout = {300}  mountOnEnter unmountOnExit>
  {state => (
    <div 
     style ={{backgroundColor: 'red',
      width:100,
      height:100,
       margin:'auto',
       transition: 'opacity 1s ease-out',
       opacity: state === 'exiting' ? 0 : 1
       }}>
    </div> 
  ) }
 </Transition>

<Transition   in = {this.state.modalIsOpen} timeout = {300} mountOnEnter unmountOnExit >  
{state => (
 <Modal closed = {this.closeModal}  show = {state} />

)}

</Transition>
       {this.state.modalIsOpen ? 
        <Backdrop show /> : null}
        <button className="Button" onClick= {this.showModal} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
  
  
  this.state.showBlock ?  

:null }
*/
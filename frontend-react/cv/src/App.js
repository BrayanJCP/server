import React, { Component } from 'react';
import profileImg from './profile.jpg'
import Experience from './Components/experience/experience';
import Study from './Components/studies/study';
import './App.scss';

class App extends Component {
  liAbilities;
  constructor(props){
    super();
    let rangesAbilities=[
      {name:"HTML",value:90},
      {name:"CSS",value:95},
      {name:"JavaScript",value:88},
      {name:"Angular 2+",value:85},
      {name:"React",value:30},
      {name:"NodeJs",value:30}
    ];
    this.liAbilities=rangesAbilities.map((item,index)=>{
      return (<div className='indexAbility' key={index}>
        <label data-value={item.value}>{item.name}</label>
        <span title={item.value}></span>
      </div>);
    });
  }
 componentDidMount(){
   var a=document.getElementsByClassName("indexAbility");
   for(var i=0;i<a.length;i++){
     a[i].children[1].style.left=((a[i].clientWidth*a[i].children[0].dataset.value)/100)-10+"px";
   }
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Brayan Corredor</h3>
          <p>Ingeniero de sistemas - Desarrollador de software</p>
        </header>
        <div className="personalInformation">
            <img src={profileImg} alt="Profile"/>
            <span>Información</span>
            <p>Brayan Julian Corredor Puentes</p>
            <p>313 488 7428</p>
            <p>brayanjcp@outlook.com</p>
            <p><a href="https://co.linkedin.com/in/brayan-julian-corredor-puentes-408109114" target="blank">Perfil LinkedIn</a></p>
            <span>Habilidades</span>
            <div className="liAbilities">{this.liAbilities}</div>
        </div> 
        <div className="contentInformation">
         <Experience />
         <Study />
        </div>
      </div>
    );
  }
}

export default App;

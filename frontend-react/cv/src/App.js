import React, { Component } from 'react';
import profileImg from './profile.jpg'
import Experience from './Components/experience/experience';
import Study from './Components/studies/study';
import './App.scss';

class App extends Component {
  liAbilities;
  isCanShow;
  constructor(props){
    super(props);
    this.state={
      isCanShow:true
    }
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
   this.reloadStadistic();
 }
 reloadStadistic(){
  var a=document.getElementsByClassName("indexAbility");
  for(var i=0;i<a.length;i++){
    a[i].children[1].style.left=((a[i].clientWidth*a[i].children[0].dataset.value)/100)-10+"px";
  }
 }
 changeShow(){
  let show=document.getElementsByClassName('showProfile');
  for(let i=0;i<show.length;i++){ 
    if(show[i].classList.contains('show'))
      show[i].classList.remove('show');
    else
      show[i].classList.add('show');
      var a=document.getElementsByClassName("indexAbility");
      for(var j=0;j<a.length;j++){
        a[j].children[1].style.left=((a[j].clientWidth*a[j].children[0].dataset.value)/100)-10+"px";
      }
   };
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Brayan Corredor</h3>
          <p>Ingeniero de sistemas - Desarrollo de software</p>
          <button className='showProfile btnShow' onClick={this.changeShow}>Perfil</button>
        </header>
        <div className="showProfile personalInformation">
           <button className='showProfile btnShow' onClick={this.changeShow}>Perfil</button>
            <img src={profileImg} alt="Profile"/>
            <span>Información</span>
            <p><i className="material-icons">account_circle</i>Brayan Julian Corredor Puentes</p>
            <p><i className="material-icons">contact_phone</i>313 488 7428</p>
            <p><i className="material-icons">contact_mail</i>brayanjcp@outlook.com</p>
            <p><i className="material-icons">public</i><a href="https://co.linkedin.com/in/brayan-julian-corredor-puentes-408109114" target="blank">Perfil LinkedIn</a></p>
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

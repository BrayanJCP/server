import React from 'react';
import './study.scss';
class Study extends React.Component {
    listStudiesPrimary;
    otherStudies;
    constructor(props) {
        super(props);
        let studies = [
            {
              title: "Ingenieria de Sistemas",
              institution: "Universidad Distrital Francisco Jose de Caldas",
              date: "Mar 2016 - Nov 2017",
              otherStudy:false
            },
            {
                title: "Curso de angular 6 desde cero hasta profesional",
                institution: "Udemy",
                date: "Nov 2017 – Feb 2018",
                otherStudy:true
              },
              {
                title: "MCPS: Microsoft Certified Professional",
                institution: "Microsoft Learning",
                date: "Abril 2016 - Abril 2016",
                otherStudy:true
              },
              {
                title: "MS: Programming in HTML5 with JavaScript and CSS3",
                institution: "Microsoft Learning",
                date: "Abril 2016 - Abril 2016",
                otherStudy:true
              },
          ]
        this.listStudiesPrimary = studies.filter((e)=>{return !e.otherStudy}).map((item,i) =>
                <li key={i}>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.institution}</p>
                        <p>* {item.date}</p>
                    </div>
                </li>
            );
            this.otherStudies = studies.filter((e)=>{return e.otherStudy}).map((item,i) =>
                <li key={i}>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.institution}</p>
                        <p>* {item.date}</p>
                    </div>
                </li>
            );
    }
    
    render() {
        return (
            <div className="content-study">
                <h2>Estudios</h2>
                <ul className="listExperience">{this.listStudiesPrimary}</ul>
                <h2>Otros Estudios</h2>
                <ul className="listExperience">{this.otherStudies}</ul>
            </div>
        );
    }
}

export default Study;
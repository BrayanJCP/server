import React from 'react';
import './experience.scss';
class Experience extends React.Component {
    listItems;
    constructor(props) {
        super(props);
        let experiences = [
            {
              name: "Exsis Sofware y soluciones",
              description: "Desarrollador Front-end, con manejo de html5, css3 y JavaScript. Creación de interfaz gráfica para aplicaciones web creadas con html5 y css3, Creación de componentes usando JavaScript y Jquery. Manejo del versionamiento de una aplicación mediante un git-flow básico.",
              date: "Mar 2016 - Nov 2017"
            },
            {
              name: "Stefanini Informatica y tecnologia-(Cliente Cardif)",
              description: "Desarrollo Front-end con Angular 4+, Sass, Html5.En Angular desarrolle componentes globales para el uso de la aplicación, separación de módulos (Lazy Loading). Se creo un guía estilos basados en los diseños con Html5 y css3. Manejo de framworks css Boostrap y Angular-Material.",
              date: "Nov 2017 - Sep 2018"
            },
            {
              name: "Stefanini Informatica y tecnologia-(Cliente Azteca)",
              description: "Desarrollador Front-end, maquetacion de interfaz grafica Web para una aplicacion creada en .Net MVC 4, apoyo para creacion de Activities en Android.",
              date: "Sep 2018 - Sep 2019"
            },
            {
              name: "Pragma S.A",
              description: "Desarrollo de aplicaciones web con Angular 4+. Manejo de modulos y componentes. Manejo de micro-frontends con docker, nginx, angular. He trabajado con jenkins para despliegues. Trabajó bajo metodología agil. Colaboro en la creación o soporte de apis en proyectos de Java ya implementados. Base de datos DynamoDB. Versionamiento de código en git (GitLab, GitHub, Bitbucket...)", 
              date: "Sep 2019 - Actualmente"
            },
          ]
        this.listItems = experiences.map((item) =>
                <li key={item.name}>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>* {item.date}</p>
                    </div>
                </li>
            );
    }
    
    render() {
        return (
            <div className="content-experience">
                <h2>Experiencia Laboral</h2>
                <ul className="listExperience">{this.listItems}</ul>
            </div>
        );
    }
}

export default Experience;
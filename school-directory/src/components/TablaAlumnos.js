import React from "react";
const url_server = "http://127.0.0.1:5000/students";

class TablaAlumnos extends React.Component{
    constructor(props){
        super(props)
        this.state = { alumnos: [] }
    }

    componentWillMount(){
        fetch(url_server).then( resolve =>{
            return resolve.json(); 
          }).then(data => {
            console.log(data);
            this.setState({ alumnos: data });
          });
    }

    render(){
        return(
            <p>Ya listo</p>
        );
    }
}

export default TablaAlumnos;
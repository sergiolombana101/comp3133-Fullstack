import React from "react";
import axios from "axios";

class DeletStudent extends React.Component {
    state = { 
        id:''
     }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Delete</button>
                </form>
            </div>
         );
    }
    handleChange = event => {
        let id = event.value;
        this.setState({id : id})
    };
    handleSubmit = event => {
        event.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/"+this.state.id)
            .then(res=>console.log(res));
    };
}
 
export default DeletStudent;
import axios from "axios"
import React from "react"

class AddStudent extends React.Component {
    state = {  
        userName:''
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
         );
    }

    handleChange = event => {
        let name = event.value;
        this.setState({userName : name})
    };
    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',{username:this.state.userName})
            .then(res=>console.log(res));
    };
}
 
export default AddStudent;
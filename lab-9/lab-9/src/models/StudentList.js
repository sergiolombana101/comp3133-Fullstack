import React from "react";
import axios from "axios";
import DeleteStudent from "../components/DeleteStudent";

class UserList extends React.Component {
    state = {  
        users:[]
    };
    /* THE RENDER METHOD HAS TO RETURN SOMETHING EVEN IF IT IS NULL.
       THIS METHOD GETS CALLED WHEN THE COMPONENT GETS RENDERED. 
    */
    render() {
        return <>
                <ul>
                    {this.state.users.map(user=>{return <li>{user}<br/><DeleteStudent/></li> } )}
                </ul>
               </>
    }
    
    /*THIS METHOD GETS CALLED AFTER ALL THE ELEMENTS OF THE PAGE ARE RENDERED CORRECTLY.
      IT IS USED TO FETCH SOME DATA FROM AN EXTERNAL API OR PERFORM SOME UNIQUE OPERATIONS WHICH NEEDS JSX ELEMENTS*/
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const users_new = res.data;
            let new_list = users_new.map(user=>{return user['name'] })
            console.log(new_list);
            this.setState({ users: new_list});
        });
    }
}
 
export default UserList;
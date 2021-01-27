import React, {useEffect} from 'react'
import axios from "axios";


function App() {
    useEffect( () => {
// Make a request for a user with a given ID
        axios.get('/user?ID=12345')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    })


    return (
        <div className="App">


        </div>
    );
}

export default App;

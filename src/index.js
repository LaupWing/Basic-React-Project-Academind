import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// To set common headers
// axios.defaults.headers.commom['Authorization'] = SOME_TOKEN
// axios.defaults.headers.post['Authorization'] = SOME_TOKEN
// This interceptor is something every request has on axios
// Its like a global request objects

axios.interceptors.request.use(request=>{
    console.log(request)
    return request
},error=>{
    console.log(error)
    return Promise.reject(error)
})
axios.interceptors.response.use(response=>{
    console.log(response)
    return response
},error=>{
    console.log(error)
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

import axios from 'axios'

const URL="https://5e9ec500fb467500166c4658.mockapi.io/todos"

class API{
    static getTotalList(){
        let response = axios.get(URL).then((response) => {
        });
        return response;
    }

    static createTodo(todo){
        let response= axios.post(URL,todo);
        return response;
    }
}

export default API;
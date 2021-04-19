import axios from 'axios';
export default{
    getGames: function(){
        return axios({
            url:'/api/games',
            baseURL: 'http://localhost:5000',
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        });
    },
    createGame: function(gameData){
        return axios({
            url:'api/games',
            baseUrl: 'http://localhost:5000',
            headers:{'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'post',
            body: gameData
        });
    }
}
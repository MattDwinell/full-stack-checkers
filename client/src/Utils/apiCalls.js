import axios from 'axios';
export default{
    getGames: function(uid){
        return axios({
            url:'/api/games',
            baseURL: 'http://localhost:5000',
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        });
    },
    getGamesInProgress: function(uid){
        return axios({
            url:'/api/games/'+ encodeURI(uid),
            baseURL: 'http://localhost:5000',
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        });
    },
    getOpenGames: function(uid){
        return axios({
            url: '/api/games/open/' + encodeURI(uid),
            baseURL: 'http://localhost:5000',
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        })
    },
    createGame: function(gameData){
        return axios({
            url:'/api/games',
            baseUrl: 'http://localhost:5000',
            headers:{'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'post',
            data: gameData
        });
    },
    deleteGame: function(id){
        return axios({
            url: '/api/games/' + id,
            headers:{'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'delete'
        })
    },
    updateGame: function(game){
        return axios({
            url:'/api/games/' + game.id,
            headers:{'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'put',
            data: game
        })
    }
}
import axios from 'axios';
const apiCalls ={
    getGames: function(uid){
        return axios({
            url:'/api/games',
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        });
    },
    getGameById: function(gameId){
        return axios({
            url:'/api/games/find-one/'+ gameId,
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        });
    },
    getGamesInProgress: function(uid){
        return axios({
            url:'/api/games/'+ encodeURI(uid),
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        });
    },
    getOpenGames: function(uid){
        return axios({
            url: '/api/games/open/' + encodeURI(uid),
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        })
    },
    getPastGames: function(uid){
        return axios({
            url: '/api/games/past/' + encodeURI(uid),
            headers: {'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'},
            method: 'get'
        })
    },
    createGame: function(gameData){
        return axios({
            url:'/api/games',
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
export default apiCalls;
function gameObject(){
    return {
        home:{
            teamName:"Brooklyn Nets",
            colors:[ "Black", "White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                    
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                    
                },

                 "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                    
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                    
                },

                    "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                    
                },

            },
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                    
                },

                  "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                    
                },

                 "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                    
                },

                    "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                    
                },

                   "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                   }

            },

        }
    }
}

function numPointsScored(playerName){
    let game=gameObject();
    let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let pointsScored=players[playerName]["points"]
    return pointsScored
}
console.log(numPointsScored("Brendan Haywood"))
console.log(numPointsScored("Alan Anderson"))

function shoeSize(playerName){
    let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let shoeSize=players[playerName]["shoe"]
    return shoeSize
}
console.log(shoeSize("Brendan Haywood"))
console.log(shoeSize("Alan Anderson"))

function teamColors(teamName){
    let game=gameObject();
    let teams=[
         game["away"],game["home"]
    ]
    let team=teams.find(t => t.teamName===teamName)
    return team["colors"]
}
console.log(teamColors("Brooklyn Nets"))
console.log(teamColors("Charlotte Hornets"))

function teamNames(){
    let game=gameObject();
     let teamNames=[
         game["away"]["teamName"],game["home"]["teamName"]
    ]
  
    return teamNames
}
console.log(teamNames())

function playerNumbers(teamName){
    let game=gameObject();
    let teams=[
         game["away"],game["home"]
    ]
    let team=teams.find(t => t.teamName===teamName)
    let playerNumbers=[]
    for(let player in team["players"]){
        playerNumbers.push(team["players"][player]["number"])
    }
    return playerNumbers;
}
console.log(playerNumbers("Brooklyn Nets"))
console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName){
    let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let playerStats=players[playerName];
    return playerStats
}

console.log(playerStats("Brendan Haywood"))
console.log(playerStats("Alan Anderson"))

function bigShoeRebounds(){
    let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let shoeSizes=[]
    for(let player in players){
        shoeSizes.push(players[player]["shoe"])
    }
     let bigShoe=-Infinity
    for(let size in shoeSizes){
        if (shoeSizes[size] > bigShoe){
            bigShoe=shoeSizes[size];
        }
    }
 for(let player in players){
      if (players[player]["shoe"]===bigShoe){
        return players[player]["rebounds"]
      }
    }   
    
}
console.log(bigShoeRebounds())

function mostPointsScored(){
        let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let points=[]
    for(let player in players){
        points.push(players[player]["points"])
    }
     let mostPointsScored=-Infinity
    for(let point in points){
        if (points[point] > mostPointsScored){
            mostPointsScored=points[point];
        }
    }
    return mostPointsScored
}
console.log(mostPointsScored())

function  winningTeam(){
     let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]

    let awayPoints=0;
    let homePoints=0;
    for(let player in awayPlayers){
        awayPoints +=awayPlayers[player]["points"]
    }
        for(let player in homePlayers){
        homePoints +=homePlayers[player]["points"]
    }

    if (awayPoints>homePoints){
        return game["away"]["teamName"]
    }
     return game["home"]["teamName"]
}
console.log(winningTeam())

function playerWithLongestName(){
            let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let playerWithLongestName=""
    for(let player in players){
        if (player.length > playerWithLongestName.length){
            playerWithLongestName=player
        }
    }
    return playerWithLongestName
}
console.log(playerWithLongestName())

function doesLongNameStealATon(){
        let game=gameObject();
      let awayPlayers=game["away"]["players"]
    let homePlayers=game["home"]["players"]
    let players={...awayPlayers,...homePlayers}
    let steals=[]
    for(let player in players){
        steals.push(players[player]["steals"])
    }
     let mostSteals=-Infinity
    for(let steal in steals){
        if (steals[steal] > mostSteals){
            mostSteals=steals[steal];
        }
    }
    let playerLongestName=playerWithLongestName()
    let playerLongestNameSteals=players[playerLongestName]["steals"]
    return playerLongestNameSteals >= mostSteals
}
console.log(doesLongNameStealATon())
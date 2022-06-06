
// Array with soccer teams

const soccerTeams = [
    {
        name: "Milan",
        scoredPoints: 0,
        fouls: 0
    },
    {
        name: "Inter",
        scoredPoints: 0,
        fouls: 0
    },
    {
        name: "Juventus",
        scoredPoints: 0,
        fouls: 0
    },
    {
        name: "Roma",
        scoredPoints: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        scoredPoints: 0,
        fouls: 0
    },
]

// Generate random numbers for scoredPoints and fouls

for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].scoredPoints = Math.floor(Math.random() * 100);
    soccerTeams[i].fouls = Math.floor(Math.random() * 100);
}
console.log(soccerTeams)
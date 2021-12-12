// 1 -> homeTeam
// 0 -> away Team

// {
//     "competitions": [
//         ["HTML", "C#"],
//         ["C#", "Python"],
//         ["Python", "HTML"]
//     ],
//         "results": [0, 0, 1]
// }

const HOME_TEAM_TOWN = 1;

// O(n) time | O(k) space - where n is the number of competitions and k is the number of teams
function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = { [currentBestTeam]: 0 }

    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTown, awayTeam] = competitions[idx];

        const winningTeam = result === HOME_TEAM_TOWN ? homeTown : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }

    return currentBestTeam;
}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;

    scores[team] += points;
}
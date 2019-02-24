
## [Home](./index.md)

# JavaScript

The app is contained in a single Class written in valid JSX syntax  
[Tennis.jsx](https://github.com/listingslab-software/tennis-challenge-sydney/blob/master/src/Tennis/Tennis.jsx)


## Why React?

Well... really we just want to create a Vanilla JavaScript 
Class to manacge the scoring of a tennis match. Let's call that Class Tennis.  

We will structure Tennis as a React JSX component because it fits in well  
with our e2e testing framework and also because it gives us React's full  
superset of features such as state management and component lifecycle hooks.  

That said, at it's heart, Tennis is still just a Class.  
Let's review the Vanilla parts.

## Tennis Class

First we want to start the match
What variables do we need to track to keep score?  
Let's set up a JSON object to describe one

```javascript
  startMatch = () => {
    const matchId = uniqid('match_');
    let newMatches = this.state.matches;
    const newObj = {
      matchId,
      dateStarted: Date.now(),
      lastUpdate: Date.now(),
      player1Points: 0,
      player2Points: 0,
      winner: null,
      score: `0:0`,
    };
    newMatches.push (newObj);
    this.setState({
      matches: newMatches,
      currentMatch: newObj
    })
  }
```
## Game logic

The ___pointWon(player)__ method is the core of the game. It gets called every time a player wins a point by their icon button being clicked. It takes one param; the winner of the point __player__. The method then processes the point, works out the score and updates the state with the result.

It was at this time that we decided to de-scope the scoring of games in a set due to time constraints. 

```javascript
pointWon = (player) => {
    const {
        currentMatch,
    } = this.state;
    let p1 = currentMatch.player1Points;
    let p2 = currentMatch.player2Points;
    let winner = null;
    player === 'player1' ? p1++ : p2++;
    let score = `${this.getPeculiarScore(p1)}:${this.getPeculiarScore(p2)}`;
    if (p1 === 3 && p2 === 3){
        score = 'Deuce';
    }  
    if (p1 > 3 || p2 > 3){
        const d =  Math.max(p1, p2) - Math.min(p1, p2);
        let playerX = `Player 1`;
        if (p2 === Math.max(p1, p2)){
        playerX = `Player 2`;
        }
        switch (d) {
        case 0:
            score = `Deuce`;
            break;
        case 1:
            score = `Advantage ${playerX}`;
            break;
        default:
            winner = playerX;
        }
    }
    this.setState ({
        currentMatch:{
        ...currentMatch,
        player1Points: p1,
        player2Points: p2,
        winner,
        score,
        }
    })
}
```

## Other methods

The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as 0, 15, 30, 40, respectively. We'll also need a method to do that.

```javascript
  getPeculiarScore = (points) => {
    let peculiarScore;
    switch (points) {
      case 0:
        peculiarScore = `0`; // || `Love`
        break;
      case 1:
        peculiarScore = `15`;
        break;
      case 2:
        peculiarScore = `30`;
        break;
      case 3:
        peculiarScore = `40`;
        break;
      default: 
        peculiarScore = 'error';
    }
    return peculiarScore;
  }
```

NEXT => [Delivery](https://listingslab-software.github.io/tennis-challenge-sydney/solution.html)
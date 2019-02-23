## [Tennis Challenge Sydney](./index.md)

# JavaScript

## Why React?

Well... really we just want to create a Vanilla JavaScript 
Class to manacge the scoring of a tennis match. Let's call that Class Tennis.  

We will structure Tennis as a React JSX component because it fits in well  
with our e2e testing framework and also because it gives us React's full  
superset of features such as state management and component lifecycle hooks.  

That said, at it's heart, Tennis is still just a Class.  
Let's review the Vanilla parts.

## Vanilla Javascript Tennis Class

What variables do we need to track to keep score?  
Let's set up a JSON object to describe a match

```javascript
    { 
        matchId: 1,
        player1Points: 0,
        player2Points: 0,
        player1Games: 0,
        player2Games: 0,
        winner: null,
    }
```

Next we'd need a function to mutate the object.  
We'll call it pointWon and it will take a parameter 'winner'  
Which should only be either 'player1' || 'player2'

```javascript
pointWon = (winner) => {
    switch (winner) {
        case 'player1':
            const newPlayer1Points = this.state.player1Points + 1;
            this.setState ({
                player1Points: newPlayer1Points
            })
            break;

        case 'player2':
            const newPlayer2Points = this.state.player2Points + 1;
            this.setState ({
            player2Points: newPlayer2Points
            })
            break;

    default: 
        alert ('pointWon error');
}
```

### Judging Score on update

That takes care of updating the component state with a new score.  
Next we will need to make a judgement on the new state of the match object  
to check if any special cases such as 'game_over' have been reached.

In React, the render method is called on state update, so this is the time  
for us to make our judgement

### Converting points to score

The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as 0, 15, 30, 40, respectively.

We'll need a method to do that.

```javascript
getPeculiarScore = (points) => {
    let peculiarScore;
    switch (points) {
        case 0:
            peculiarScore = `love`; // || 0 :)
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
            peculiarScore = 'getPeculiarScore error';
    }
    return peculiarScore;
}
```

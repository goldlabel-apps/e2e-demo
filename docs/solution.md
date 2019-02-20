## [Tennis Challenge Sydney](./index.md)

# Solution

We started by thinking about what kind of tests would show all stakeholders whether our tennis scoring app is working correctly.

What variables do we need to track to keep score?  
Let's set up a JSON object to describe a match

```javascript
[
    { 
        player1Points: 0,
        player2Points: 0,
        player1Games: 0,
        player2Games: 0,
        winner: null,
    }
]
```
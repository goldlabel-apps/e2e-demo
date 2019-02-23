import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Tennis.Style';
import cn from 'classnames';
import {
  Button,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core/';
import IconPlayer from '@material-ui/icons/PersonAdd';
import uniqid from 'uniqid';

class Tennis extends Component {

  state ={
    matches:[],
    currentMatch: null,
  }

  startMatch = () => {
    const matchId = uniqid('match_');
    let newMatches = this.state.matches;
    const newObj = {
      matchId,
      dateStarted: Date.now(),
      lastUpdate: Date.now(),
      player1Points: 0,
      player2Points: 0,
      player1Games: 0,
      player2Games: 0,
      winner: null,
      feedBack: `Click on a player to win them a point`,
    };
    newMatches.push (newObj);
    this.setState({
      matches: newMatches,
      currentMatch: newObj
    })
  }

  pointWon = (winner) => {
    const {
      currentMatch,
    } = this.state;
    let feedBack = ``;
    let p1 = currentMatch.player1Points;
    let p2 = currentMatch.player2Points;
    switch (winner) {
      case 'player1':
        p1 ++;
        feedBack = `Yay Player 1!`;
        break;
      case 'player2':
        p2 ++;
        feedBack = `Yay Player 2!`;
        break;
      default: 
    }
    feedBack = this.checkGameState().feedBack;
    console.log (this.checkGameState());
    this.setState ({
      currentMatch:{
        ...currentMatch,
        player1Points: p1,
        player2Points: p2,
        feedBack,
      }
    })


  }

  checkGameState = () => {
    // const {
    //   currentMatch,
    // } = this.state;
    // console.log ('checkGameState', currentMatch);
    let gameState = {
      gameOver: false,
      feedBack: `keep playing, bro`,
    };
    return gameState;
  }

  randomisePointWin = () => {
    if (Math.random() >= 0.5){
      return 'player1';
    }
    return 'player2';
  }

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

  render() {
    const {
      classes
    } = this.props;
    const {
      currentMatch,
    } = this.state;
    let score = '0:0';
    if (currentMatch !== null){
      score = `${this.getPeculiarScore(currentMatch.player1Points)} : ${this.getPeculiarScore(currentMatch.player2Points)}`;
    }
    return (
      <div className={cn(classes.tennis)}>
          <Grid container>
          { currentMatch === null ? 
            <Grid item xs={12}  className={cn(classes.startMatchBtn)}>
              <Button
                id={`start-match`}
                variant={`contained`}
                color={`primary`}
                onClick={(e) => {
                  e.preventDefault();
                  this.startMatch();
                }}>
                Start Match
              </Button>
            </Grid>
          : 
          <React.Fragment>  
            <Grid item xs={12}>
              <Grid container className={cn(classes.court)}>
                  
                  <Grid item xs={6}> 
                    <Typography variant={`title`}>
                      {`Player 1`}
                    </Typography>
                    <div style={{ borderRight: '1px solid #eee' }}>
                      <IconButton
                        disabled={false}
                        color={`primary`}
                        onClick={(e) => {
                          e.preventDefault();
                          this.pointWon('player1');
                        }}>
                        <IconPlayer className={cn(classes.iconBtn)} />
                      </IconButton>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant={`title`}>
                      {`Player 2`}
                    </Typography>
                    <div style={{ borderLeft: '1px solid #eee' }}>
                      <IconButton
                        disabled={false}
                        color={`secondary`}
                        onClick={(e) => {
                          e.preventDefault();
                          this.pointWon('player2');
                        }}>
                        <IconPlayer className={cn(classes.iconBtn)} />
                      </IconButton>
                    </div>
                  </Grid>

                </Grid>
              </Grid>


              <Grid item xs={12} className={cn(classes.feedBack)}>
                <Typography variant={`body1`}>
                  {currentMatch.feedBack}
                </Typography>
              </Grid>


              <Grid item xs={12} className={cn(classes.points)}>
                <Typography variant={`title`}>
                  Score
                </Typography>
                <Typography variant={`title`}>
                  {score}
                </Typography>
              </Grid>

              

              <Grid item xs={12}>
                <Typography variant={`body2`} className={cn(classes.matchId)}>
                  matchId: {currentMatch.matchId}
                </Typography>
              </Grid>

            </React.Fragment>
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Tennis)
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Tennis.Style';
import cn from 'classnames';
import {
  Button,
  Card,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core/';
import IconPlayer from '@material-ui/icons/PersonAdd';

class Tennis extends Component {

  state ={
    feedback: ``,
    player1Points: 0,
    player2Points: 0,
    player1Games: 0,
    player2Games: 0,
    winner: null,
  }

  pointWon = (winner) => {
    let feedback = `point won.`
    switch (winner) {

      case 'player1':
        const newPlayer1Points = this.state.player1Points + 1;
        feedback = `Player 1 wins point.`
        this.setState ({
          player1Points: newPlayer1Points,
          feedback,
        })
        break;

      case 'player2':
        const newPlayer2Points = this.state.player2Points + 1;
        feedback = `Player 2 wins point.`
        this.setState ({
          player2Points: newPlayer2Points,
          feedback,
        })
        break;

      default: 
        console.log ('pointWon error');
    }


  }

  randomWinner = () => {
    if (Math.random() >= 0.5){
      return 'player1';
    }
    return 'player2';
  }

  getPeculiarScore = (points) => {
    let peculiarScore;
    switch (points) {
      case 0:
        peculiarScore = `Love`;
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
    return (
      <div className={cn(classes.tennis)}>
        <Card className={cn(classes.card)}>
          <Grid container>
            
            

            <Grid item xs={12}>
              <Button
                fullWidth
                variant={`outlined`}
                color={`default`}
                onClick={(e) => {
                  e.preventDefault();
                  this.pointWon(this.randomWinner());
                }}>
                Random Winner
              </Button>
            </Grid>

            <Grid item xs={12} className={cn(classes.feedback)}>
              <Typography
                    variant={`body1`}
                    color="inherit">
                {this.state.feedback}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container className={cn(classes.court)}>
                <Grid item xs={6} style={{ borderRight: '0.1em solid #eee', padding: '0.5em' }}>
  

                    <IconButton
                      color={`primary`}
                      onClick={(e) => {
                        e.preventDefault();
                        this.pointWon('player1');
                      }}
                    >
                      <IconPlayer className={cn(classes.iconBtn)} />
                    </IconButton>

                </Grid>

                <Grid item xs={6}>
                  <Typography
                    variant={`button`}
                    color="inherit"
                    style={{ borderLeft: '0.1em solid #eee', padding: '0.5em' }}>
                    
                    <IconButton
                      color={`secondary`}
                      onClick={(e) => {
                        e.preventDefault();
                        this.pointWon('player2');
                      }}>
                      <IconPlayer className={cn(classes.iconBtn)} />
                    </IconButton>

                  </Typography>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12}>
              {/* <Typography variant={`button`}>
                Points
              </Typography> */}
              <Typography variant={`h3`}>
                {this.getPeculiarScore(this.state.player1Points)} : {this.getPeculiarScore(this.state.player2Points)}
              </Typography>
            </Grid>
            {/* <Grid item xs={12}>
              <Typography variant={`button`}>
                Games
              </Typography>
              <Typography>
                {this.state.player1Games} : {this.state.player2Games}
              </Typography>
            </Grid> */}
          </Grid>

        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Tennis)

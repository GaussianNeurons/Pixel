import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import './App.css';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 700,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    color: '#0A0800',
  }
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div style={{width:'30%',height:'50%', border: '2px solid #0A0800', borderRadius:'10px'}}> 
    <div className={classes.root}>
     <h5> SARAH'S NFT LIBRARY </h5>
      <GridList cellHeight={200}  spacing={20} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto'}}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar style={{border: '2px solid #0A0800' }}
              title={tile.title}

            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  </div>
  );
}
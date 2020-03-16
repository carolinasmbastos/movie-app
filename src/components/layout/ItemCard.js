import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardContent'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { findByLabelText } from '@testing-library/react'
import { makeStyles } from '@material-ui/core/styles'
import {IMG_URL} from '../../config/api-config'


const getStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderBottom: '1px solid #AAAAAA',
      marginTop: '2%'
    },
    textContainer : {
        flexGrow: 1,
        padding: '1%'
    }, 
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
    
  }))

const ItemCard = props => {
    const classes = getStyles()
    return (
        
            <div key={props.id} className={classes.container}>
                
                <img src={props.image ? `${IMG_URL}${props.image}` : ''} width='30%'/>

                <div className={classes.textContainer}>
                    <h1>{props.title} </h1>
                    <div className={classes.info}>
                        <h3>Release Date:{props.date}</h3>
                        <h3>Popularity: {props.popularity}</h3>
                    </div>
                    <p>
                    {props.description}
                    </p>
                    <span>{props.mediaType}</span>
                </div>

                
            </div>
    )
}

export default ItemCard
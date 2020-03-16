import React from 'react'
import Grid from '@material-ui/core/Grid'
import ItemCard from './ItemCard'

export const ItemList = props => {
    console.log("items", props)
    return (
        <div className='container'>
        <Grid container>
            {props.items.map(item => {
            const { id, poster_path, original_title, name, release_date, popularity, overview, media_type } = item
            return (
                <Grid item xs={12}>
                <ItemCard
                    key={id}
                    id={id}
                    image={poster_path}
                    title={original_title ? original_title : name}                
                    date={release_date}
                    popularity={popularity}
                    description={overview}
                    mediaType={media_type}
                />
                </Grid>
            )
            })}
        </Grid>
        </div>
    )
}
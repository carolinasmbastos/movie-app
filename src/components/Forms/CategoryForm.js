import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'


const CategoryForm = props => {
    console.log('catergyform', props)
    return (
            <FormControl variant="outlined" style={{minWidth: 120}}>
            <InputLabel id="categoryLabel">
                Category
            </InputLabel>
            <Select
                name='categories'
                label='categoryLabel' 
                onChange={e => props.onChange(e)} 
                variant="outlined">
                {props.categories.map(category => 
                    <MenuItem value={category}>{category}</MenuItem>
                    
                    )}
            </Select>
            </FormControl>


        
    )
}

export default CategoryForm
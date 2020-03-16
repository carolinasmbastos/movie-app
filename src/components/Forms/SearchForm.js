import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'  
import Button from '@material-ui/core/Button'       
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'


  

class SearchForm extends React.Component {
    

    state = {
        searchParams: {},
      };
    
    handleChange = e => {
        console.log('handle change', e.target.name, e.target.value);
    
        var searchParams = {
          ...this.state.searchParams,
          [e.target.name]: e.target.value
        };
    
        this.setState({
          searchParams
        });
      };

    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchParams);
        this.setState({
            searchParams : {
                query: '',
                type: ''
            }
        });
        
        
    }



      render() {
    return (
        <form onSubmit={this.submit} style={formStyle}> 
            <TextField 
                name='query' 
                label='Search' 
                variant='outlined' 
                style={textFieldStyle}
                value={this.state.searchParams.query}
                onChange={e => this.handleChange(e)}
                onClick={e => this.props.onFocus(e)}
                onFocus={e => this.props.onFocus(e)}
                />
            <FormControl variant="outlined" style={{minWidth: 150}}>
                <InputLabel id="type">
                Search Type
                </InputLabel>
                <Select 
                    name='type'
                    label="type"
                    id="selType"
                    onChange={e => {this.handleChange(e)}} 
                    variant='outlined'
                    value={this.state.searchParams.type}>
                    <MenuItem value='multi'>multi</MenuItem>
                    <MenuItem value='movie'>movie</MenuItem>
                    <MenuItem value='tv'>tv</MenuItem>
                </Select>
            </FormControl>
            <Button variant='outlined' type='submit' style={btnStyle} 
                disabled={!(this.state.searchParams.query && this.state.searchParams.type)}>
                SEARCH
            </Button>
        </form>
        
    )
      }
}

const btnStyle = {        
    marginLeft: '1%',
    backgroundColor: '#000AFF',
    color: '#AAAAAA'}

const formStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5%',
        marginTop: '5%',
      }
const textFieldStyle =  {
        marginRight: '1%',
        minWidth: 300,
      }

export default SearchForm
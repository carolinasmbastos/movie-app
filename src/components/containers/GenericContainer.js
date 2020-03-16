import React from 'react'
import {filter} from '../../services/api'
import { ItemList } from '../layout/ItemList';
import CategoryForm from '../Forms/CategoryForm';

class GenericContainer extends React.Component {

    state = {
        results: []
      };

    handleChange = e => {
        console.log('select changed')
        filter(this.props.mediaType, e.target.value).then(results => {
            console.log("filtered category");
            this.setState({
              results: results.data.results.slice(0, 20)
            });
          })
    }


    render() {
        console.log('genericcontainer', this.props.categories)
        return (
            <div>
                
                <CategoryForm onChange={this.handleChange} categories={this.props.categories}/>
                <ItemList items={this.state.results}/>
            </div>

        )
    }
}

export default GenericContainer
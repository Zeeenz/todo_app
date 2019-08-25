import React,{Component} from 'react';

export default class TodoSearch extends Component{
    handleSearch(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render() {
        return(
            <div className = "search">
                <div>
                    <input type="search" class="form-control" ref="searchText" placeholder="search todos" onChange={this.handleSearch.bind(this)}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" class="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)}/>
                        &nbsp; show completed todos
                    </label>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react';

export default class AddTodo extends Component{
    handleSubmit(e){
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }
        else{
            this.refs.todoText.focus();
        }
    }
    render(){
        return (
            <div className="addtodo">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
                    &nbsp;
                    <button className="btn btn-primary btn-large">Add Todo</button>
                </form>
            </div>
        )
    }
}

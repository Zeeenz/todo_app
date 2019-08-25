import React,{Component} from 'react';
import Todo from './Todo';


export default class TodoList extends Component{
    render(){

        var {todos} = this.props;
        var renderTodos = () => {
            if(todos.length === 0){
                return(
                    <p className="">Nothing to Do</p>
                )
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
                )
            })
        }

        return (
            <div class="todolist">
                {renderTodos()}
            </div>
        )
    }
}

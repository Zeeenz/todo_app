import React,{Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI';
var uuid = require('node-uuid');
var moment = require('moment');

export default class TodoApp extends Component{
    constructor(){
        super();
        this.state = {
            todos: [],
            showCompleted: false,
            searchText: ''
        }
    }
    getInitialState(){
    return{
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    }
    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
    }
    handleAddTodos(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id:uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })

    }
    handleToggle(id){
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
                return todo;
            }
            return todo;
        })
        this.setState({todos: updatedTodos})
    }
    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }
    render(){
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
        return (
            <div>
                <h1 className="h">Todo App</h1>
                <div className="">
                    <div className="">
                        <div className="">
                            <TodoSearch onSearch={this.handleSearch.bind(this)}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)}/>
                            <AddTodo onAddTodo={this.handleAddTodos.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

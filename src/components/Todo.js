import React,{Component} from 'react';
var moment = require('moment');

export default class Todo extends Component{
    render(){
        var {id,text, completed,createdAt,completedAt} = this.props;
        //var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderData = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MM Do YYYY @ h:mm a');
        };

        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" class="checkbox" defaultChecked={completed}></input>
                    &nbsp; Completed
                </div>
                <div>
                    <p>{text}</p>
                    <p>{renderData()}</p>
                </div>
            </div>
        )
    }
}
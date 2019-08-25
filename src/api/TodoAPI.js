var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)){

            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try{
            todos = JSON.parse(stringTodos);
        } catch(e){

        }
        return $.isArray(todos) ? todos : [];
    },
    // filter by show completed
    filterTodos: function(todos, showCompleted, searchText){
        var filterTodos = todos;
        if(!filterTodos){
            todos = [];
            return todos;
        }
        filterTodos = filterTodos.filter((todo)=> {
            return showCompleted || !todo.completed;
        })
        //fileter by search text
        var filteredTodos = filterTodos;
        filteredTodos = filteredTodos.filter((todo)=>{
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) >= 0;
        })
        //console.log(filteredTodos);
        // sort todos with non completed first
        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1;
            }
            else if(a.completed && !b.completed){
                return 1;
            }
            else{
                return 0;
            }
        })
    
       return filteredTodos;
    }
};
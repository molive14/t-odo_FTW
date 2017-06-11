$(document). ready(function(){
    $("add-new-todo-button). click(function()"{
        //Assign the todo description and pomodoro estimate to variables
        var todoBlock = $(this). closest("#new-todo-block")
        var description= todoBlock.find("new-todo-description")
        var pomodoroEstimate = todoBlock.find ("#new-pomodoro-estimate")
        
        
        //Append the new todo to the list of todos
        $("ul").append ("<li> <input type= 'checkbox'/> "+ description.val() + "<span class = 'pomodoro-estimate'>" + pomodoroEstimate.val() + "pomodoros</li>")
        //clearthe input fields for new-todo-description and pomdoro-estimate by entering an empty string as the value
        description.val("")
        pomodoroEstimate.val("")
    })
    })
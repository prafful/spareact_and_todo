import React from 'react';

class ToDoManager extends React.Component {
	
	constructor(props){
		super(props)
		this.state={
			capturetasks:"",
			savetasks:[]
		}
		this.captureTask=this.captureTask.bind(this)
		this.addTask=this.addTask.bind(this)
	}
	
	captureTask=function(event){
		console.log(event.target.value)
		this.setState({capturetasks:event.target.value})
		console.log(this.state.capturetasks)
	}

	addTask= function(){
		this.setState({savetasks:[...this.state.savetasks, this.state.capturetasks]})
		console.log(this.state.savetasks)
		this.state.capturetasks=""
	}

	renderAllTasks=function(){
		return this.state.savetasks.map((task)=>{
			return (
				<li>{task}   <button>-</button></li>
			) 
		})
	}

    render() { 
        return (  
            <div>      
                <div>To DO Manager Application</div>
					<label>Add:</label>
					<input type="text" onChange={this.captureTask} value={this.state.capturetasks}></input>
					<button onClick={this.addTask}>Add Task</button>
					<br></br>
					Task List:
					<br></br>
					<ol>
						{this.renderAllTasks()}
					</ol>
					
            </div>
   
        );
    }
}
 
export default ToDoManager
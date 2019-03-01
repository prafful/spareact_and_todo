import React from 'react';

import FlipMove from "react-flip-move";

class ToDoManager extends React.Component {
	
	constructor(props){
		super(props)
		this.state={
			capturetasks:"",
			savetasks:[]
		}
		this.captureTask=this.captureTask.bind(this)
		this.addTask=this.addTask.bind(this)
		this.deleteTask=this.deleteTask.bind(this)
	}
	
	captureTask=function(event){
		event.preventDefault()
		console.log(event.target.value)
		this.setState({capturetasks:event.target.value})
		console.log(this.state.capturetasks)
	}

	addTask= function(){
		this.setState({savetasks:[...this.state.savetasks, this.state.capturetasks]})
		console.log(this.state.savetasks)
		this.state.capturetasks=""
	}

	deleteTask=function(index){
		console.log("delete... "+ index)
		this.state.savetasks.splice(index, 1)
		this.setState({savetasks: this.state.savetasks})
		console.log(this.state.savetasks)
	}

	renderAllTasks=function(){
		return this.state.savetasks.map((task,index)=>{
			return (
				<li  key={index}> {task}   <button onClick={()=>this.deleteTask(index)}>-</button></li>
			) 
		})
	}

    render() { 
        return (  
            <div  className="todoapp">       
                <div>To DO Manager Application</div>
				<div className="addtask">
					<label>Add:</label>
					<input type="text" onChange={this.captureTask} value={this.state.capturetasks}></input>
					<button onClick={this.addTask}>Add Task</button>
				</div>
					<br></br>
					Task List:
					<br></br>
					<ol className="taskitems">
						<FlipMove  duration={500} easing="ease-in">  
							{this.renderAllTasks()}
						</FlipMove>
					</ol>
					
            </div>
   
        );
    }
}
 
export default ToDoManager
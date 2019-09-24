import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        title: '',
        body: '',
        error: ''
     }
    handleChangeOnTitle = (evt) =>{
        this.setState({
            title: evt.target.value,
            error: ''
        })
     }
    handleChangeOnBody = (evt) =>{
        this.setState({
            body: evt.target.value
        })
     }

     handleSumbmit = () =>{
        if (this.state.title.trim() === ''){
            this.setState({
                error: <li className="text-danger">Please, enter a title!</li>,
                title: ''
            });
        }
        else{
            this.props.onSave(this.state.title, this.state.body)
        }
     }
    render() { 
        return ( 
            <form className="container mt-2">
                <div className="row">
                    <div className="offset-sm-2 col-sm-10">
                         {this.state.error}
                    </div>
                </div>
                      
                <div className="form-group row">
                    <label className="col-sm-2" htmlFor="title">Title</label>
                    <input onChange={this.handleChangeOnTitle} className="form-control col-sm-10" type="text" name="title" id="title" value={this.state.title}/>
                </div>
                
                <div className="form-group row">
                    <label className="col-sm-2" htmlFor="body">Comment</label>
                    <textarea onChange={this.handleChangeOnBody} className="from-control col-sm-10" value={this.state.body} name="body" id="body" cols="30" rows="2"></textarea>
                </div>
                <div className="form-group row">
                    <button onClick={this.handleSumbmit} className="btn btn-success " type="button">Save</button>
                </div>
                
            </form>
         );
    }
}
 
export default AddTodo;
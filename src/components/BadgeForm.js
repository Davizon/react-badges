import React from 'react';

class BadgeForm extends React.Component {

    handleClick = e => {
        e.preventDefault();
        console.log(this.state);
        }
    handleSubmit = e => {
        e.preventDefault();
        }

    render(){
        return (
            <div>
               <h1>New Attendant</h1>
               <form action="" onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label htmlFor="">First Name</label>
                       <input 
                       onChange={this.props.onChange} 
                       type="text" 
                       name="firstName" 
                       className="form-control" 
                       value={this.props.formValues.firstName}
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Last Name</label>
                       <input 
                       onChange={this.props.onChange} 
                       type="text" 
                       name="lastName" 
                       className="form-control" 
                       value={this.props.formValues.lastName}
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Job Title</label>
                       <input 
                       onChange={this.props.onChange} 
                       type="text" 
                       name="jobTitle" 
                       className="form-control" 
                       value={this.props.formValues.jobTitle}
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="">email</label>
                       <input 
                       onChange={this.props.onChange} 
                       type="email" 
                       name="email" 
                       className="form-control" 
                       value={this.props.formValues.email}
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="">twitter</label>
                       <input 
                       onChange={this.props.onChange} 
                       type="text" 
                       name="twitter" 
                       className="form-control" 
                       value={this.props.formValues.twitter}
                       />
                   </div>
                   <button onClick={this.handleClick} type="submit" className="btn btn-primary">Save</button>
               </form>
            </div>
        )
    }
}

export default BadgeForm;
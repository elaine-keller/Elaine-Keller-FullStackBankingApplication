function CreateMsgComponent(props){
    return(
        <div>
            <h5>
                {props.successMsg}
            </h5>
            <br/>
            <div>
            {(<img src="piggy.svg" className="img-fluid" alt="Responsive image"/>)}
            </div>
            <br/>
            <button
                type="submit"
                className="btn btn-light"
                onClick={props.resetForm} //<-------shows the blank create account form
            >{props.resetButtonName}
            </button>
            
        </div>
    );
}

function CreateFormComponent(props){
    return (
        <div>
            {props.nameField && (
            <div>
            <input
                type        ="input"
                className   ="form-control"
                placeholder ="Enter name"
                value       ={props.name}
                onChange    ={e => props.setName(e.currentTarget.value)}
            />
            <br/>
            </div>
            )}
            

            {props.emailField && (
            <div>
            <input
                type        ="input"
                className   ="form-control"
                placeholder ="Enter email"
                value       ={props.email}
                onChange    ={e => props.setEmail(e.currentTarget.value)}
            />
            <br/>
            </div>
            )}
            
            {props.passwordField && (
            <div>
            <input
                type        ="input"
                className   ="form-control"
                placeholder ={"Enter password"}
                value       ={props.password}
                onChange    ={e => props.setPassword(e.currentTarget.value)}
            />
            <br/>
            </div>
            )}
            
            {props.amountField && (
            <div>
            <input
                type        ="input"
                className   ="form-control"
                placeholder ={"Enter amount"}
                value       ={props.amount}
                onChange    ={e => props.setAmount(Number(e.currentTarget.value))}
            />
            <br/>
            </div>
            )}
            <div>
            {(<img src="piggy.svg" className="img-fluid" alt="Responsive image"/>)}
            </div>
            <br/>

            <button
                type        ="submit"
                className   ="btn btn-light"
                onClick     ={props.handleClick}
            >{props.submitButtonName} 
            </button>
        </div>
    );
}
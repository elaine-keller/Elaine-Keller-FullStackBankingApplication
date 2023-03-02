function CreateAccount() {
    const ctx = React.useContext(UserContext);
    
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [authUser,setAuthUser]    = React.useState('');

     //triggered by handleCreate() to validate the input fields. For Create Account, validate name password and email. In this, just check for an empty field.
    function validate(field, label, password){
        
        if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
        }

        if (password.length < 8) {
        setStatus('Error: password requires at least 8 characters');
        setTimeout(() => setStatus(''),3000);
        return false;
        }
        return true;
    }

    //pass arguments to the validate function
    function handleClick(){
        if (!validate(name,     'name', password))     return;
        if (!validate(email,    'email', password))    return;
        if (!validate(password,    'password', password))    return;

        //url hits the index.js Node Express Application route to create() in mongoDB.
        let url =  `/account/create/${name}/${email}/${password}`;
            (async () => {
                var res = await fetch(url);
                //var data = await res.json();
                //console.log(`data response from account/create ${data}`);
            })();
        url =  `/account/login/${email}/${password}`;
            (async () => {
                var res = await fetch(url);
                var data = await res.json();
                console.log(`data response from account/login ${data}`);
                setAuthUser(data[0].name)
                ctx.currentUser = data[0]
                ctx.loggedIn = true
                setShow(false)
            })();
        
        setShow(false);
    }    
    //clear all the values when "Reset Form" button is clicked.
    function resetForm(){
        setName('');
        setEmail('');
        setPassword('');
        setAuthUser('')
        setShow(true);
    }

    return(
        <div>
        <Nav
            authUser = {authUser}
        />
        <Card
            txtcolor="white"
            bgcolor="primary"
            header="Create Account"
            status={status}
            
            body={show ? 
                <CreateFormComponent    
                    setShow         ={setShow} 
                    setStatus       ={setStatus}
                    name            ={name}         
                    setName         ={setName}
                    email           ={email}        
                    setEmail        ={setEmail}
                    password        ={password}     
                    setPassword     ={setPassword}
                    handleClick     ={handleClick}
                    submitButtonName="Submit"
                    emailField      ={true}
                    passwordField   ={true}
                    nameField       ={true}
                /> 
                :
                <CreateMsgComponent     
                    setShow         ={setShow}
                    setStatus       ={setStatus}
                    resetForm       ={resetForm}
                    successMsg ="Account Successfully Created!"
                    resetButtonName ="Add Another Account"
                />
            }
            />
        </div>
    )
}
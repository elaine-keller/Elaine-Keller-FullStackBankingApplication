function Login() {
  const ctx = React.useContext(UserContext);
  
  const [show, setShow]                           = React.useState(!ctx.loggedIn);
  const [status, setStatus]                       = React.useState('');
  const [email, setEmail]                         = React.useState('');
  const [password, setPassword]                   = React.useState('');
  const [authUser,setAuthUser]                    = React.useState(ctx.currentUser.name);
  const [header, setHeader]                       = React.useState(ctx.loginStatus);

  function validateInputs(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function validateReturn(data) {
      if (!data) {
        setStatus('Error: email or password is incorrect');
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      return true;
  }
  
  function handleClick() { 
    if (!validateInputs(email, 'email')) return;
    if (!validateInputs(password, 'password')) return;
  
    //url hits the index.js Node Express Application route to create() in mongoDB.
    const url =  `/account/login/${email}/${password}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
        if (!validateReturn(data.length)) {
          setShow(true)
          return;
        } else {
          setAuthUser(data[0].name)
          ctx.currentUser = data[0]
          ctx.loggedIn = true
          setHeader("Logout")
          ctx.loginStatus = "Logout"
          setShow(false)
        } 
      })();
  }    
  
  //clear all the values when "add another account is clicked"
  function resetForm(){
    setEmail('');
    setPassword('');
    ctx.currentUser = {}
    setAuthUser('')
    ctx.loggedIn = false
    setHeader("Login")
    ctx.loginStatus = "Login"
    setShow(true);
  }

  return(
    <div>
      <Nav
        authUser={authUser}
      />


      <Card
          txtcolor="white"
          bgcolor="primary"
          header={header}
          status={status}
          
          body={show ? 
              <CreateFormComponent    
                  setShow         ={setShow} 
                  setStatus       ={setStatus}
                  email           ={email}        
                  setEmail        ={setEmail}
                  password        ={password}     
                  setPassword     ={setPassword}
                  handleClick     ={handleClick}
                  submitButtonName="Login"
                  emailField      ={true}
                  passwordField   ={true}
                  nameField       ={false}
              /> 
              :
              <CreateMsgComponent     
                  setShow         ={setShow}
                  setStatus       ={setStatus}
                  resetForm       ={resetForm}
                  successMsg      ="Are you sure you want to log out?
                                    Click on the link below"
                  resetButtonName ="Logout"
              />
          }
      />
    </div>
  )
}
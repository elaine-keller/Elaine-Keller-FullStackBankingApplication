function MyBalance() {
    const ctx = React.useContext(UserContext);

    const [show, setShow]                           = React.useState(true);
    const [status, setStatus]                       = React.useState('');
    const [amount, setAmount]                       = React.useState(0);
    const [document, setDocument]                   = React.useState(ctx.currentUser);
    const [authUser,setAuthUser]                    = React.useState(ctx.currentUser.name);
  
    if (ctx.loggedIn === false) return "Login to account"


    return(
        <div>
          <Nav
            authUser={authUser}
          />
            
          <Card
              txtcolor="white"
              bgcolor="primary"
              header="My total saved"
              title= {<Balance/>}
      
              
                
              text="Congrats! Keep on saving"
              status={status}
              
              body= {(<img src="piggy.svg" className="img-fluid" alt="Responsive image"/>)}
              
          />
        </div>
    )
}
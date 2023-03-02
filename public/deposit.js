function Deposit() {
  const ctx = React.useContext(UserContext);

  const [show, setShow]                           = React.useState(true);
  const [status, setStatus]                       = React.useState('');
  const [amount, setAmount]                       = React.useState(0);
  const [document, setDocument]                   = React.useState(ctx.currentUser);
  const [authUser,setAuthUser]                    = React.useState(ctx.currentUser.name);

  if (ctx.loggedIn === false) return "Login to account"

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (isNaN(field) === true) {
        setStatus('Error: enter a number value');
        setTimeout(() => setStatus(''),3000);
        return false;
      };
      if (field < 0) {
        setStatus('Error: deposit amount must be a positive value');
        setTimeout(() => setStatus(''),3000);
        return false;
      };
    return true;
  }
//pass arguments to the validate function
  function handleClick(){
    
    if (!validate(amount,     'amount'))     return;
    
    console.log(`Initial Balance: ${ctx.currentUser.balance}`)
    console.log(`Deposit: ${amount}`);
    const url =  `/account/balance/${ctx.currentUser.email}/${amount}`;
          (async () => {
              var res = await fetch(url);
              var document = await res.json();
              ctx.currentUser = document.value
              console.log(document.value);
              setDocument(document.value);
          })();

    //ctx.users[ctx.currentUserIndex].balance = ctx.users[ctx.currentUserIndex].balance + amount
    //console.log(ctx.users[ctx.currentUserIndex])
  
    setShow(false);
  }    
//clear all the values when "add another account is clicked"
  function resetForm(){
    setAmount(0);
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
        header="Deposit"
        title= {<Balance/>}

        
          
        text=""
        status={status}
        
        body={show ? 
            <CreateFormComponent    
                setShow         ={setShow} 
                setStatus       ={setStatus}
                setAmount       ={setAmount}
                handleClick     ={handleClick}
                submitButtonName="Submit"
                amountField     ={true}

            /> 
            :
            <CreateMsgComponent     
                setShow         ={setShow}
                setStatus       ={setStatus}
                resetForm       ={resetForm}
                successMsg      ="Success"
                resetButtonName ="Another Deposit"
            />
        }
    />
  </div>
)
}
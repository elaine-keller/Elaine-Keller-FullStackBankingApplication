function Balance() {
  const ctx = React.useContext(UserContext);

  
  if (ctx.loggedIn === false) return "Login to account"

  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });



  console.log(`Is this money format working ${formatter.format(ctx.currentUser.balance)}`);
  
return (
    
    <div className="container">
        <div className="row">
            <div className="col-sm text-left">
                Balance
            </div>
            <div className="col-sm text right">
                {formatter.format(ctx.currentUser.balance)}
            </div>
        </div>

    </div>
    


)

}


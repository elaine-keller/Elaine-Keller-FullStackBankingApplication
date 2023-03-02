function AllData(){
  const ctx = React.useContext(UserContext);
  const [documents, setDocuments] = React.useState([]);
  const [authUser,setAuthUser]    = React.useState(ctx.currentUser.name);
  
    React.useEffect(() => {
      // fetch all accounts from API
      fetch('/account/all')
        .then(response => response.json())
       .then(documents => {
  
        setDocuments(documents);
        ctx.users = documents
        console.log(ctx.users)
      });
      
    }, [])

    return (
      <div>
        <Nav
        authUser={authUser}
        />

        <Cardlong 
        txtcolor="text-body"
          bgcolor="bg-light"
          header="All Data"
          body={ 
            <div class="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th> 
                    <th scope="col">Balance</th> 
          
                </tr>
                </thead>
                <tbody>
                  {documents.map((user, key) => {
                    return (
                    <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.balance}</td>
                    </tr>
                    )
                  })}
                </tbody>
            </table>

              
            </div>
          }
        />

      </div>
    );
    
}
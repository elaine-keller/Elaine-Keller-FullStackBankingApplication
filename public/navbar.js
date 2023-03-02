function Nav(props){

   /*
     return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
             <a className="navbar-brand" href="#">BadBank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                         <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#/login/">Login</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#/deposit/">Deposit</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#/withdraw/">Withdraw</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#/balance/">Balance</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#/alldata/">All Data</a>
                    </li>
                 </ul>
                </div>
            </div>
        </nav>

    );
  }
  */

  function LoginNavBar() {
    
     return(
     
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className ="navbar-brand" to ="/">Bad Bank</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto">

                              <li className="nav-item">
                                   <Link className ="nav-link" to ="/mybalance/">My Balance</Link>
                              </li> 
                              
                              <li className="nav-item">
                                   <Link className ="nav-link disabled" to ="/deposit/">Deposit</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className ="nav-link disabled" to ="/withdraw/">Withdraw</Link>
                              </li>
                              
                              <li className="nav-item">
                                   <Link className ="nav-link" to ="/alldata/">All Data</Link>
                              </li>
                         </ul>
                         
                         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li className="nav-item-btn">
                                   <a class="btn btn-outline-primary" href="#/login/" role="button" >Login</a>
                               </li>
                              <li className="nav-item-btn">
                                    <a class="btn btn-primary" href="#/createaccount/" role="button">Create Account</a>

                              </li>
                         </ul>
                    
               </div>          
         </nav>
     );
 }
 function LogoutNavBar() {
     return(
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className ="navbar-brand" to ="/">Bad Bank</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto">

                              <li className="nav-item">
                                   <Link className ="nav-link" to ="/mybalance/">My Balance</Link>
                              </li> 
                              <li className="nav-item">
                                   <Link className ="nav-link" to ="/deposit/">Deposit</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className ="nav-link" to ="/withdraw/">Withdraw</Link>
                              </li>
                              
                              <li className="nav-item">
                                   <Link className ="nav-link" to ="/alldata/">All Data</Link>
                              </li>
                         </ul>
                         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                   <span className="navbar-text">Hi, {props.authUser}</span>
                              </li>
                              <li className="nav-item-btn">
                                   <a class="btn btn-outline-primary" href="#/login/" role="button" >Logout</a>
                               </li>
                            
                         </ul>
                    </div>

          </nav>
     );
 }

 return (
     <div>
     {props.authUser ? 
         <LogoutNavBar
             
             /> 
         :
         <LoginNavBar
             />
     }
 </div>
)
}
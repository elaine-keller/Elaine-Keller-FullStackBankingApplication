function Home() {
    const ctx = React.useContext(UserContext);
    const [authUser,setAuthUser] = React.useState(ctx.currentUser.name);

    
    return (
        <div>
        <Nav
            authUser={authUser}
        />
        <Cardlong
                txtcolor="text-body"
                bgcolor="transparent"
                header="Welcome to Bad Bank"
                title="Your piggy bank in the cloud"
                text="Come join us!"
                body= {(<img src="pig-fly.gif" className="img-fluid" alt="Responsive image"/>)}
            />
        </div>
    );
}
  
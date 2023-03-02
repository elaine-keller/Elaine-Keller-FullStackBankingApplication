

//router components from the library
const Route= ReactRouterDOM.Route;
const Link= ReactRouterDOM.Link;
const HashRouter=ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);



//global Card component - pass properties relevant to that component
/* 
1. Pass options for className={classes()}
2. Pass {props.header} in the "card-header"
3. Pass {props.title}, {props.text}, {props.body}, {props.status} inside the "card-body"

The property values passed in are defined in the component function.

If the props.title exists, then the value will be added to the page.
    //props.title && (<h5 className="card-title">{props.title}</h5>)

Notify and update the UI with props.status. This happens when money is depositied or user logs in.

*/

function Card(props){
    //If the colors are defined by the component, then the component colors. Otherwise, use the default.
    const ctx = React.useContext(UserContext);
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        //return value for className={classes()}
        return ' card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "25rem"}}>
            <h5 className="card-header">{props.header}</h5>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)} 
                {props.text && (<p className="card-text">{props.text}</p>)} 
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
                
            </div>
           
        </div>
    );
}

function Cardlong(props){
    const ctx = React.useContext(UserContext);
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        //return value for className={classes()}
        return ' card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "auto"}}>
            <h5 className="card-header" style={{textAlign: "center"}}>{props.header}</h5>
            <div className="card-body" style={{textAlign: "center"}}>
                {props.title && (<h5 className="card-title" style={{textAlign: "center", fontSize: "48px"}}>{props.title}</h5>)} 
                {props.text && (<p className="card-text" style={{textAlign: "center"}}>{props.text}</p>)} 
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
                
            </div>
           
        </div>
    );
}
  
import "./Error.css"
import ModuleCard from "./ModuleCard"
import Button from "./Button"

const Error =(props) => {
    return <>
    <div className="backdrop" onClick={props.onConfirm} />
     <ModuleCard className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </ModuleCard>
    </>
    
   
}
export default Error
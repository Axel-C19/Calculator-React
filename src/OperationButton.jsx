import { ACTIONS } from "./App.jsx"
export default function OperationButtton({dispatch, operation}) { 
    
    return(
        <button 
        onClick={() => dispatch({ type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}
        
        >
            {operation}
        </button>
    
    )
}
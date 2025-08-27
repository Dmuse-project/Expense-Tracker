
import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"

const ExpenseList = (props) => {
//   const[total, setTotal]= useState([])

//   setTotal((prevState)=>{
//   return{...prevState, items:props.items.totalAmount}
//   })

    if(props.items.length === 0 ){
         return <p className= "expenses-list__fallback">No Content Found. Maybe Find one?</p>
    }

    console.log("From  expenses Component totalAmount", props.totalAmount )

    return <div className="expenses-list">
        {props.items.map((item) => {
            return <ExpenseItem key={item.id} amount={item.amount.toLocaleString("en-NG",{style:"currency",currency:"NGN"})} title={item.title} date={item.date} totalAmount={item.totalAmount} />
        })}
        { <h2 style={{color:"white", textAlign:"center"}}>Total: {props.totalAmount.toLocaleString("en-NG",{style:"currency",currency:"NGN"})}</h2>}
    </div>
}
 export default ExpenseList
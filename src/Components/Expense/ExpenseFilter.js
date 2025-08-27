import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

    const dropDownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value)

    }


      return(
        <div className="expenses-filter"> 
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select  value={props.selected} onChange={dropDownChangeHandler}>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter



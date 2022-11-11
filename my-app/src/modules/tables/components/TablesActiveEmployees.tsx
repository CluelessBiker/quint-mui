import Tables from './Tables'

const TablesActiveEmployees = () => {
    return (
        <Tables
            tablehead="Active Employees"
            columnhead1="Avatar"    
            columnhead2="First Name"
            columnhead3="Last Name"
            columnhead4="Location"
            columnhead5="Age"
        />
    )
}

export default TablesActiveEmployees
import react from 'react'

// List and Keys 
function Table(props){
    const tables = [
        {'abc': 'Admin'},
        {'xyz': 'Dai'},
        {'sad': 'Duong'}
    ]
    // console.log(tables[0])
    const numbers = [1,2,3]
    // Contain <ul> </ul> so don't need class and state declare
    return (
        <ul>
            { tables.map(item => {
                var key = Object.keys(item);
                var value = item[key];
                return <TableItem key={ key } value={ value }/>
            }) }
            {/* {numbers.map( number =>
                 <TableItem key={number.toString()} value={number}/>
            )} */}
        </ul>
    )
}

function TableItem(props){
    return ( 
        <li>{props.value}</li>
    )
}


export default Table
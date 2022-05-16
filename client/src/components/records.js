import Record from "./Record";


const Records = ( {records, onRemove} ) => {

    return (
        <>
            {records.map((record) => (
            <Record key={record.id} record={record} onRemove = {onRemove}/>))}
        </>
    )
};


export default Records;
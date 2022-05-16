const Record = ({ record, onRemove }) => {
    return (
        <div className='record'>
            <h3>{record.title} - {record.artist} <p onClick={() => onRemove(record.id)}>Remove</p></h3>
        </div>
    )
}


export default Record;
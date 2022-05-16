const Record = ({ record }) => {
    return (
        <div className='record'>
            <h3>{record.title} - {record.artist}</h3>
        </div>
    )
}


export default Record;
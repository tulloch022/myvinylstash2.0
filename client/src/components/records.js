import Record from "./Record";


const Records = ( {records} ) => {

    return (
        <>
            {records.map((record) => (
            <Record key={record.id} record={record}/>))}
        </>
    )
};


export default Records;
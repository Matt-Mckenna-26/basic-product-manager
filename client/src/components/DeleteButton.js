import React from 'react'
import axios from 'axios';

const DeleteButton = ({record, records, setRecords}) => {
    const removeFromDom = recordId => {
        setRecords(records.filter(record => record._id !== recordId))
    }
    const deleteRecord = (recordId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${recordId}`)
        .then(res => {
            removeFromDom(recordId)
        })
    }
    return(
        <>
            <button  onClick={(e) => {deleteRecord(record._id)}}>Delete {record.title}</button>
        </>
    )
}

export default DeleteButton
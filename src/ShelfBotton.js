import React from 'react'
const ShelfBotton = (props) => {
    const shelfChangeHandle = e => {
    
        (props.onChange) && props.onChange(props.book,e.target.value)
    }
        return (
            <div className="book-shelf-changer">
                <select onChange={shelfChangeHandle} defaultValue={props.book.shelf ? props.book.shelf : 'none'}>
                    <option value="move" disabled  >Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
}

export default ShelfBotton

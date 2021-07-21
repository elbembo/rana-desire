import React, { Component } from 'react'
import BookCard from './BookCard'
import PropTypes from 'prop-types';

export class BookShelf extends Component {
    render() {
        const books = (this.props.books) && this.props.books.filter(book => book.shelf === this.props.shelf)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">{
                        (this.props.books) && books.map(book =>(
                            <li key={book.id}><BookCard book={book}  onChange={this.props.onChange} /></li>
                        ))
                    }
                    </ol>
                </div>
            </div>

        )
    }
}
BookShelf.propTypes = {
    shelf: PropTypes.string,
    book: PropTypes.array,
    title: PropTypes.string,
    onChange: PropTypes.func
}
export default BookShelf

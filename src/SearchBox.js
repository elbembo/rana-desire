import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import * as BooksAPI from './BooksAPI'
export class SearchBox extends Component {
    state = {
        books: [],
    }
    componentDidMount() {
        (this.props.currentTerm && (this.props.currentTerm !== '')) && BooksAPI.search(this.props.currentTerm).then(books => {
            (books.length > 0) && this.setState({
                books
            })
        })
    }

    handleSearchChange = (e) => {
        (e.target.value !== '') && BooksAPI.search(e.target.value).then(books => {
            (books.length > 0) ? this.setState({
                books
            }) : this.props.noti(`No result for "${e.target.value}" , try some thing else` )
        })
        this.props.sraechTermUpdate(e.target.value)
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author" value={this.props.currentTerm} onChange={this.handleSearchChange} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map(book => (
                                <li key={book.id}><BookCard book={book} onChange={this.props.onChange} /></li>
                            ))

                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBox

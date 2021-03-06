import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce';
export class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.debouncedHandleSearchChange = debounce(this.handleSearchChange, 500);
    }
    state = {
        books: [],
    }
    componentDidMount() {
        
        (this.props.currentTerm && (this.props.currentTerm !== '')) && BooksAPI.search(this.props.currentTerm).then(books => {
            (books.length > 0) && this.setState({
                books
            })
        })
        this.debouncedHandleSearchChange.cancel();
    }
    handleChange(e) {
        this.debouncedHandleSearchChange(e.target.value);
        this.props.sraechTermUpdate(e.target.value)
    }
    handleSearchChange = (value) => {

        (value !== '') ? BooksAPI.search(value).then(books => {
            if (!books.error) {
                this.setState({
                    books
                })
            } else {
                this.setState({ books: [] })
                this.props.noti(`No result for "${value}" , try some thing else`)
            }
        }) : this.setState({ books: [] })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.props.currentTerm} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map(book => {
                                this.props.currentBooks.filter((b) => {
                                    return (b.id === book.id) ? book.shelf = b.shelf : ''
                                })
                                return (
                                    <li key={book.id}>
                                        <BookCard book={book} onChange={this.props.onChange} searchOn={true/* BookCard used by many othe component we pass thi prop only in search component*/} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
SearchBox.propTypes = {
    currentBooks: PropTypes.array,
    noti: PropTypes.func,
    currentTerm: PropTypes.string,
    sraechTermUpdate: PropTypes.func,
    onChange: PropTypes.func
}
export default SearchBox

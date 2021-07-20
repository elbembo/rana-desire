import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ShelfBotton from './ShelfBotton'

export class BookCard extends Component {

    render() {

        if (!this.props.book.imageLinks) {
            return <div className="lds-dual-ring"></div>
        }
        return (

            (this.props.book) &&


            <div className="book">
                <div className="book-top">
                    <Link to={`/info/${this.props.book.id}`} >
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.thumbnail.replace(/^http:\/\//i, 'https://')})` }}></div>
                        <div className="book-cover-overlay" ><span>More&nbsp;info</span></div>
                    </Link>
                    <ShelfBotton onChange={this.props.onChange} book={this.props.book} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {(this.props.book.authors) && this.props.book.authors.map((author, index) =>
                    (
                        <span key={index} style={{ display: "block" }}><i>{author}</i></span>
                    )
                    )}
                </div>
                <a className='read-now' target='_blank' rel="noopener noreferrer" href={`https://www.google.com.eg/books/edition/_/${this.props.book.id}?hl=en&gbpv=1`}>
                    Read now
                    </a>
            </div>



        )
    }
}

export default BookCard

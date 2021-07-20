import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ShelfBotton from './ShelfBotton'

export class BookCard extends Component {
    shelfStylr = {
        currentlyReading: {
            lable: 'Currently Reading',
            color: '#4caf50'
        },
        wantToRead: {
            lable: 'Want To Read',
            color: '#ffeb3b'
        },
        read: {
            lable: 'Read',
            color: '#ef3e3e'
        }
    }

    render() {
        if (!this.props.book.imageLinks) {
            return <div className="lds-dual-ring"></div>
        }
        return (

            (this.props.book) &&
            <div className="book">
                <div className="book-top">
                    

                    <Link to={`/info/${this.props.book.id}`} >
                        <div className="book-cover" style={
                            /*
                            * use replace function to avoid mixed content warnning from the browser 
                            */
                            {
                                width: 128,
                                height: 192,
                                backgroundImage: `url(${this.props.book.imageLinks.thumbnail.replace(/^http:\/\//i, 'https://')})`
                            }}>

                        </div>
                        <div className="book-cover-overlay" ><span>More&nbsp;info</span></div>
                    </Link>
                    {
                        /*
                        * use this.props.searchOn to make the lable only appear in search page
                        */
                        this.props.book.shelf && this.props.searchOn ? 
                        <span className="shelf-lable" style={{
background : this.shelfStylr[this.props.book.shelf].color
                        }}>{
                            this.shelfStylr[this.props.book.shelf].lable
                            }</span> : ''
                    }
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

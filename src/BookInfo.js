import React from 'react'
import * as BooksAPI from './BooksAPI'
class BookInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: []
        }
    }
    componentDidMount() {
        BooksAPI.get(this.props.match.params.id).then(book => {
            this.setState({ book })
        })
    }
    render() {
        return (
            (this.state.book) && (
                <div>
                    <div className="info-books-bar">
                        <button className="close-search" onClick={() => this.props.history.goBack()}>Close</button>

                    </div>
                    <Child book={this.state.book} />
                </div>)
        )
    }
}
function Child(props) {
    if (!props.book.authors) {
        return <div><div className="lds-dual-ring"></div></div>
    }
    /*
    * stars() return with array 
    * array item set depend on averageRating
    * of the book , "on" if <= averageRating
    * "off" if else . then we will call the function
    * to render star element and set class on/off
    */
    const stars = () => {
        let starts = []
        let ret = props.book.averageRating;
        for (let i = 0; i <= 4; i++) {
            if ((i + 1) <= ret) {
                starts[i] = 'on'
            } else {
                starts[i] = 'off'
            }
        }
        return starts 
    }

    return (
        <div>
            <div id="bookinfo">
                <h1 className="booktitle"><span ><span dir="ltr">{props.book.title}</span></span><span className="subtitle"></span></h1>
                <h3 className="booktitle"><span ><span dir="ltr">{props.book.subtitle}</span></span><span className="subtitle"></span></h3>
                <div className="bookcover"><img src={
                    /*
                    * use replace function to avoid mixed content warnning from the browser 
                    */
                    props.book.imageLinks.thumbnail.replace(/^http:\/\//i, 'https://')
                    } alt="Front Cover" title="Front Cover" width="128" border="1" id="summary-frontcover" ></img></div>
                <div className="bookinfo_sectionwrap">
                    <div>
                        {
                            (props.book.categories) && props.book.authors.map((author, index) => (
                                <a key={index} href={`https://www.google.com/search?tbo=p&tbm=bks&q=inauthor:%22${author.split(' ').join('+')}%22`} className="secondary">
                                    <span dir="ltr">{author}</span><br />
                                </a>
                            ))
                        }
                    </div>
                    <div>
                        <span dir="ltr">{props.book.publisher}</span>, <span dir="ltr">{(props.book.publishedDate) && props.book.publishedDate}</span> -
                        {
                            (props.book.categories) && props.book.categories.map((categorie, index) => (
                                <a key={index} className="secondary" href={`https://www.google.com.eg/search?tbo=p&tbm=bks&q=subject:%22${categorie}%22&source=gbs_ge_summary_r&cad=0`}>
                                    <span dir="ltr">{categorie}</span>
                                </a>
                            ))
                        }
                        - <span dir="ltr">{props.book.pageCount} pages</span></div>
                    <div>
                        <a href={`https://books.google.com.eg/books?id=${props.book.id}&dq=rowling&sitesec=reviews`} aria-label="Average user rating - 18820 stars">
                            {
                                stars().map((star, index) => (
                                    (index === 0) ? 
                                    <span key={index} className={`gb-star-${star} goog-inline-block rating`}>
                                        <span className="value-title" title={props.book.averageRating}>
                                        </span>
                                    </span> : <span key={index} className={`gb-star-${star} goog-inline-block`}> </span>

                                ))
                            }
                        </a>
                        <span className="num-ratings">
                            <a href={`https://books.google.com.eg/books?id=${props.book.id}&dq=rowling&sitesec=reviews`} className="sbs-count secondary">
                                <span className="count">{props.book.ratingsCount}</span> Reviews</a>
                        </span>
                    </div>
                </div>
                <div id="synopsis">
                    <div id="synopsis-window" >
                        <div id="synopsistext" dir="ltr" className="sa"><b>{props.book.description}</b></div>
                    </div>
                </div>
                <div className="search_box_wrapper">
                    <a className='read-now' target='_blank' rel="noopener noreferrer" href={`https://www.google.com.eg/books/edition/_/${props.book.id}?hl=en&gbpv=1`}>
                        Read now
                    </a></div>
            </div>
        </div>
    );
}
export default BookInfo

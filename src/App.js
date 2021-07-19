import React from 'react'
import { Route } from 'react-router'
import { Link, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBox from './SearchBox'
import BookShelf from './BookShelf'
import BookInfo from './BookInfo'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: [],
      term: '',
      snackbar: {
        show: false,
        msg: 'd'
      }
    }

  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((myBooks) => {
        this.setState(() => ({
          myBooks
        }))
      })
  }
  showSnackbar = (msg) => {
    this.setState({ snackbar: { show: true, msg } });
    setTimeout(() => {
      this.setState({ snackbar: { show: false, msg: '' } });
    }, 3000);
  }
  searchTerm = (term) => {
    this.setState({ term })
  }
  bookShelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((myBooks) => {
        BooksAPI.getAll()
          .then((myBooks) => {
            this.setState(() => ({
              myBooks
            }))
          })
        this.showSnackbar('Book shelf updated')
      })
  }
  render() {


    return (
      <div className="app">
        <Switch>
          <Route path='/info/:id' component={BookInfo} />
        </Switch>
        <Route path="/search" render={() => (
          <SearchBox onChange={this.bookShelfChanger} sraechTermUpdate={this.searchTerm} currentTerm={this.state.term} noti={this.showSnackbar}/>
        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelf="currentlyReading" books={this.state.myBooks} title="Currently Reading" onChange={this.bookShelfChanger} />
                <BookShelf shelf="wantToRead" books={this.state.myBooks} title="Want to Read" onChange={this.bookShelfChanger} />
                <BookShelf shelf="read" books={this.state.myBooks} title="Read" onChange={this.bookShelfChanger} />
              </div>
            </div>
            <div className="open-search">

              <Link to='/search' ><button>Add a book</button></Link>
            </div>
            
          </div>
        )} />
        {/* https://www.w3schools.com/howto/howto_js_snackbar.asp */}
        <div id="snackbar" className={this.state.snackbar.show ? 'show' : 'hide'}>{this.state.snackbar.msg}</div>
      </div>
    )
  }
}

export default BooksApp

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
      isLoading: false,
      myBooks: [],
      term: '',
      snackbar: {
        show: false,
        msg: 'd'
      }
    }

  }
  /*
  * refreshHome get all user's book to home screen
  */
  refreshHome = () => {
    this.setState({ isLoading: true })
    BooksAPI.getAll()
      .then((myBooks) => {
        this.setState(() => ({
          myBooks
        }))
        this.setState({ isLoading: false })
      }).catch((e) => {
        this.setState({ isLoading: false })
        this.showSnackbar('Somthing wrong , try again')
        console.error('Error:', e)
      })
  }
  /*
  * we do the mounting of the children components into the DOM
  */
  componentDidMount() {
    this.refreshHome()
  }
  /*
  * showSnackbar() is a nice way to tell the
  * user whats happend in action , inspired by Android toast notifaction 
  */
  showSnackbar = (msg) => {
    this.setState({ snackbar: { show: true, msg } });
    setTimeout(() => {
      this.setState({ snackbar: { show: false, msg: '' } });
    }, 3000);
  }
  /*
  * searchTerm() . hold what the user type 
  * in search bar so if he back to search 
  * page see what he was looking before
  */
  searchTerm = (term) => {
    this.setState({ term })
  }
  bookShelfChanger = (book, shelf) => {
    this.setState({ isLoading: true })
    BooksAPI.update(book, shelf)
      .then(() => {
        this.refreshHome()
      }).then(()=>{
        this.showSnackbar('Book shelf updated')
      })
  }
  render() {
    return (
      <div className="app">
        <Switch>
          {/* https://reactrouter.com/web/example/url-params */}
          <Route path='/info/:id' component={BookInfo} />
        </Switch>
        <Route path="/search" render={() => (
          <SearchBox onChange={this.bookShelfChanger} sraechTermUpdate={this.searchTerm} currentTerm={this.state.term} noti={this.showSnackbar} currentBooks={this.state.myBooks} />
        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Rana Desire <span> for the one who i loved and makes me love to read</span></h1>
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
        <div id="snackbar" className={ this.state.snackbar.show ? 'show' : 'hide' }>{ this.state.snackbar.msg }</div>
        <div id="loading" className={ this.state.isLoading ? 'show' : '' } >
          <div className="lds-dual-ring"></div>
        </div>
      </div>
    )
  }
}

export default BooksApp

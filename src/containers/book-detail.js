import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div> select book first </div>;
    }

    return (
      <div>
        <div> {this.props.book.title} </div>
        <div> {this.props.book.pages} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

// function mapStateToProps() {
//
// }

export default connect(mapStateToProps)(BookDetail);

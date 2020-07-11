import React, { Component } from 'react';
import JsonQuery from 'json-query';

class FullPost extends Component {
  state = {
    data: [],
    currentPostName: '',
    attr: [
      "name",
      "year of production",
      "size",
      "color",
      "battery",
      "camera",
      "dual sim",
      "Finger print",
      "NFC",
      "Price",
      "warranty"
    ]
  }
  componentDidMount() {
    this.setState({
      data: this.props.posts
      

    });
    this.buildTable()
  }

  buildTable = () => {

    let postName = localStorage.getItem("postName");

    let index_of_Device = this.props.posts.map(item => {
      return item.name
    }).indexOf(postName);

    console.log(index_of_Device)

    let current_post = this.props.posts[index_of_Device]
    console.log(current_post);

    let tableBody = document.getElementById('tbody');

    for (var i = 0; i < this.state.attr.length; i++) {

      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
        var th = document.createElement('th');
        tr.appendChild(th);
        if (j === 0) {
          th.innerHTML = this.state.attr[i]
        } else {

          th.innerHTML = postName

        }

      }
      tableBody.appendChild(tr);

    }

  }

  render() {

    return (

      <div className="container">
        <table className="table">
          <tbody id="tbody">

          </tbody>
        </table>
      </div>

    )
  }
}
export default FullPost;
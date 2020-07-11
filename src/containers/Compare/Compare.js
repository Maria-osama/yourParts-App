import React, { Component } from 'react';
import classes from './Compare.module.css';

class Compare extends Component {
    state = {
        firstDevice: "",
        secondDevice: "",
        compareValid: false,
        attr: [
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
        ],
        data: []

    }

    componentDidMount() {
        this.setState({ data: this.props.posts })
    }
    searchHandller = (e) => {
        let val = e.target.value.toLowerCase();
        var myList = document.getElementById("myList");
        myList.innerHTML = " ";

        let matches = this.props.posts.filter(v => v.name.toLowerCase().includes(val));

        if (e.target.value.length > 0) {
            for (let i = 0; i < matches.length; i++) {
                var option = document.createElement('option');
                option.innerHTML = matches[i].name;
                myList.appendChild(option)
            }
        }
        matches = []


    }
    optionSelectedHandller = (e) => {
        console.log(e.target)
        const { options, selectedIndex } = e.target;
        console.log(options, selectedIndex)
        let selected = options[selectedIndex].innerHTML;

        document.getElementById('search').value = selected
        if (this.state.firstDevice.length > 0) {
            this.setState({ secondDevice: selected })
        } else {
            this.setState({ firstDevice: selected })
        }
    }
    compareHandller = () => {
        document.getElementById('tbody').innerHTML = "";
        var checkboxes = document.querySelectorAll('input[name=checkbox]:checked');
        var checkboxesChecked = [];
        // loop over them all
        for (var i = 0; i < checkboxes.length; i++) {
            // And stick the checked ones onto an array...
            if (checkboxes[i].checked) {
                checkboxesChecked.push(checkboxes[i]);
            }
        }

        if (checkboxesChecked.length < 5 ||
            this.state.firstDevice.length == 0 ||
            this.state.secondDevice.length == 0) {
            alert("Please select two devices and at least five Feature")
            return
        } else {
            this.setState({
                compareValid: true
            })
        }
        this.buildTable(checkboxesChecked)

    }

    buildTable = (checkboxesChecked) => {

        if (checkboxesChecked) {

            let index_of_firstDevice = this.state.data.map(item => {
                return item.name
            }).indexOf(this.state.firstDevice);

            let index_of_secondDevice = this.state.data.map(item => {
                return item.name
            }).indexOf(this.state.secondDevice);

            let tableBody = document.getElementById('tbody');

            for (var i = 0; i < checkboxesChecked.length; i++) {
                var tr = document.createElement('tr');
                for (var j = 0; j < 3; j++) {
                    var th = document.createElement('th');
                    tr.appendChild(th);
                    if (j === 0) {
                        th.innerHTML = checkboxesChecked[i].value
                    } else if (j === 1) {

                        th.innerHTML = this.state.data[index_of_firstDevice][checkboxesChecked[i].value]

                    } else {

                        th.innerHTML = this.state.data[index_of_secondDevice][checkboxesChecked[i].value]

                    }

                }
                tableBody.appendChild(tr);

            }
        }
    }
    clearFirstDevice = () => {
        this.setState({ firstDevice: "" })
        
    }
    clearSecondDevice = () => {
        this.setState({ secondDevice: "" })
       
    }
    render() {
        let features = this.state.attr.map((attr, index) => {
            return <div>
                <input type="checkbox" id={index} name="checkbox" value={attr} />
                <label for={index}> {attr}</label>

            </div>
        })

        return (
            <section>
                <h3 className={classes.title + " text-center"}>Compare between Two Samsung devices </h3>
                <div className="container" style={{ backgroundColor: '#fbfbfb' }}>

                    <div className="row">
                        <div className={classes.featuresBox + " col-md-3 text-left"} >
                            <h5 className={classes.title}>Choose at least 5 features:</h5>
                            {features}
                        </div>
                        <div className="col-md-9 text-center">

                            <input id="search" className="form-control" onChange={this.searchHandller} type="text" placeholder="Search.." />
                            <select className={classes.myList + " list-group"} id="myList" onChange={this.optionSelectedHandller}></select>

                            <div className={classes.mt20 + " container"}>
                                <div className="row">
                                    <div className="col-md-3" style={{ backgroundColor: "#fff" }}>
                                        <div className={classes.deviceBox} id="firstDevice">{this.state.firstDevice}</div>
                                        <button className={classes.close} onClick={this.clearFirstDevice}>&times;</button>

                                    </div>

                                    <div className="col-md-6">
                                        <button
                                            className="btn btn-primary"
                                            onClick={this.compareHandller}
                                        >COMPARE NOW</button>
                                    </div>
                                    <div className="col-md-3" style={{ backgroundColor: "#fff" }}>
                                        <div className={classes.deviceBox} id="secondDevice">{this.state.secondDevice}</div>
                                        <button className={classes.close} onClick={this.clearSecondDevice}>&times;</button>
                                    </div>
                                </div>
                            </div>

                            <table
                                className="table"
                                style={{ display: this.state.compareValid ? 'table' : 'none', marginTop: "50px" }}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Feature</th>
                                        <th scope="col">{this.state.firstDevice}</th>
                                        <th scope="col">{this.state.secondDevice}</th>

                                    </tr>
                                </thead>
                                <tbody id="tbody"></tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default Compare;
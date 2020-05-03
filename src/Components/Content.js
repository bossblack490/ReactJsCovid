import React from "react";
import Axios from "axios";
import Item from "./Item";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderData("https://covid19.mathdro.id/api");
    }

    renderData = async (fetchData) => {
        try {
            let query = await Axios.get(fetchData);
            let data = query.data;

            if (data.confirmed) {
                this.renderData(data.confirmed.detail);
            }

            this.setState({ data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="content">
                <h1>Covid</h1>
                {Array.isArray(this.state.data) ? this.state.data.map((item, index) => {
                    return <Item country={item.countryRegion} lastUpdate={item.lastUpdate} active={item.active} confirmed={item.confirmed} deaths={item.deaths} recovered={item.recovered} key={index} />
                }) : ""}
            </div>
        );
    }
}
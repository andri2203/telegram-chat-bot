import "./css/table.css";
import "datatables.net-jqui/css/dataTables.jqueryui.min.css";
// import "datatables.net-responsive-jqui/css/responsive.jqueryui.min.css";
import React, { Component } from "react";
import * as $ from "jquery";

$.DataTable = require("datatables.net");

class Tables extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: this.props.columns,
    });
  }

  render() {
    return (
      <div className="responsive">
        <table
          id={this.props.id}
          className="dataTable display tb-style"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}

export default Tables;

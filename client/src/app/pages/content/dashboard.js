import React, { Component } from "react";
import "../App.css";
import Tables from "../../components/Tables";

class Dashboard extends Component {
  columns = [
    { title: "#" },
    { title: "Reference" },
    { title: "Response" },
    { title: "User" },
  ];
  data = [
    [1, "Info", "Tugas Akhir", "Nayeon"],
    [2, "Info", "Tugas Akhir", "Jongyeon"],
    [3, "Info", "Tugas Akhir", "Momo"],
    [4, "Info", "Tugas Akhir", "Sana"],
    [5, "Info", "Tugas Akhir", "Jihyo"],
    [6, "Info", "Tugas Akhir", "Mina"],
    [7, "Info", "Tugas Akhir", "Dahyun"],
    [8, "Info", "Tugas Akhir", "Chaeyoung"],
    [9, "Info", "Tugas Akhir", "Tzuyu"],
  ];
  render() {
    return (
      <div className="page-content">
        <div className="page-box">
          <div className="box-item">
            <i className="fas fa-comments"></i>
          </div>
          <div className="box-item">
            <i className="fas fa-database"></i>
          </div>
        </div>

        <div className="box-content">
          <h3>Data Response Dari User</h3>
          <Tables
            id="dataTable-Dashboard"
            columns={this.columns}
            data={this.data}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;

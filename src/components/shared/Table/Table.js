import React, { useEffect, useState } from "react";
import { StyledTable } from "./Table.styled";

import "jquery/dist/jquery.min.js";
import $ from "jquery";
//Datatable Modules
import "datatables.net-responsive/js/dataTables.responsive";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";

const Table = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const setLoadingFalse = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    //setTimeout(() => {
      $(document).ready(function () {
        setLoadingFalse();
        $("#example").DataTable({
          responsive: true,
          columnDefs: props.tableData.columnDefs,
        });
      });
    //}, 0);
  }, []);

  return isLoading ? (
    <h1 style={{ fontSize: "5em", textAlign: "center" }}>Loading...</h1>
  ) : (
    <div className="table">
      <StyledTable
        id="example"
        className="display nowrap"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            {props.tableData.columns.map((column,index) => {
              return <th key={index}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Table;

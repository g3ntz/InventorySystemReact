import React, { useEffect } from "react";
import { Button } from "../Buttons/Button.styled";
import { Link } from "react-router-dom";
import Table from "../Table/Table";

const TablePage = (props) => {
  return (
    <>
      <div className="actions" style={{ marginTop: "15px" }}>
        <Link to={props.redirectTo}>
          <Button customCss={"width: 120px"}>
            {props.buttonText ? props.buttonText : "Add New"}
          </Button>
        </Link>
      </div>
      <div className="table" style={{ marginTop: "30px" }}>
        <Table tableData={props.tableData}>
          {props.children}
        </Table>
      </div>
    </>
  );
};

export default TablePage;

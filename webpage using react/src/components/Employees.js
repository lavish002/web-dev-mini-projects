import React from "react";
import Employee from "./Employee";

const Employees = () => {
    return(
        //table.table.table-bordered.thead>tr>th*3

        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <Employee id="101" name="Murti" email="murti_43@gmail.com"></Employee>
                <Employee id="102" name="Paras" email="paras_35@gmail.com"></Employee>
                <Employee id="103" name="Wipal" email="wipal_76@gmail.com"></Employee>
            </tbody>
        </table>
    )
}
export default Employees;
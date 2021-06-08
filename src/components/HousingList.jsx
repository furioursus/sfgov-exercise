import React from "react";

const HousingList = (props) => {
  return (
    <table className="w-full font-normal text-base">
      <thead className="bg-slate-blue text-white text-left font-medium">
        <tr>
          <th className="py-4 pl-5">Project Name</th>
          <th className="py-4 pl-5">Address</th>
          <th className="py-4 pl-5">Affordable Units</th>
          <th className="py-4 px-5">Percent</th>
        </tr>
      </thead>
      <tbody>
      {props.listings.filter(list => list.street_name !== "Confidential").map((list, idx) => (
        <tr key={idx} className="odd:bg-white even:bg-grey-l1">
          <td className="py-4 pl-5 max-w-xs break-words">{list.project_name}</td>
          <td className="py-4 pl-5">
            {list.street_number} {list.street_name} {list.street_type}, {list.project_address} ({list.neighborhood})
          </td>
          <td className="py-4 pl-5">
            {props.affordableUnitsEval(list.affordable_units, list.total_units)}
          </td>
          <td className="py-4 px-5">
            {props.unitPercentageEvaluation(list.affordable_units, list.total_units)}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )  
}

export default HousingList;
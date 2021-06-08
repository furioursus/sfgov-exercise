import React from "react";
/*
  Component for listing the housing units in a table. Currently the whole app basically, but
  were I to add on more features, I’d like to think I’d start with the following:
  
  TODO: Add search functionality
  I’d perhaps use Algolia, which would then mean adding the information to their system instead
  which defeats the purpose of importing the JSON file in the first place.

  TODO: Add column filters
  I’d also add filtering to allow for sorting each column. Project Name and Address would be 
  sorted alphabetically and Affordable Units and Percent would besorted numerically.

  TODO: Add visual flags for obviously bad data
  I think that because we are also using the `affordableUnitsEval()` function to determine if 
  a project has more affordable housing than the total, we would add some sort of visual flag
  to indicate that something isn’t right with the current data. It’s hard to tell what sort of 
  tests or sanitizing takes place on the existing API endpoint, but we don’t want our users to
  wonder why Potrero HOPE SF has 71 affordable units and 0 total units.
*/
const HousingList = (props) => {
  return (
    <table className="w-full font-normal text-base">
      <thead className="bg-slate-blue text-white text-left font-medium">
        <tr>
          <th className="py-4 pl-5">Project Name</th>
          <th className="py-4 pl-5">Address</th>
          <th className="py-4 pl-5">Affordable Units</th>
          <th className="py-4 pl-5">Total Units</th>
          <th className="py-4 px-5"><span className="sr-only">Percent Affordable</span><span className="not-sr-only">%</span></th>
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
          <td className="py-4 pl-5">
            {Number(list.total_units)}
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
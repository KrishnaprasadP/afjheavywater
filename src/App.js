import './App.css';

function App() {
  const itemsList = [{
    name:"Iodomethane-D3",
    code: "CD3I",
    casno: "865-50-9",
    weight: "144.96"
  }, {
    name:"Methyll-D3-amine",
    code: "CD3NH2",
    casno: "5581-55-5",
    weight: "34.08"
  }, {
    name:"Methanol-D4",
    code: "CD3OD",
    casno: "811-98-3",
    weight: "36.07"
  }, {
    name:"Methanol-OD",
    code: "CH3OD",
    casno: "1455-13-3",
    weight: "33.05"
  }, {
    name:"Methanol-D3",
    code: "CD3OH",
    casno: "1849-22-2",
    weight: "35.06"
  }, {
    name:"Benzene-D6",
    code: "C6D6",
    casno: "1076-43-33",
    weight: "84.15"
  }, {
    name:"SodiumBorodeuteride-D4",
    code: "",
    casno: "15681-897",
    weight: ""
  }];
  const tableRowElements = itemsList.map((item, index) => (<tr>
    <td>{index+1}</td>
    <td>{item.name}</td>
    <td>{item.code}</td>
    <td>{item.casno}</td>
    <td>{item.weight}</td>
  </tr>));
  return (
    <div>
      <h1>AFJ Pharma Sourcing - buy deuterium (heavy water) for pharmaceutical purpose</h1>
      <h2>We have the following deuterium and allied products available for purchase</h2>
      <table style={{width: "50%"}}>
        <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Code</th>
        <th>CAS No</th>
        <th>Weight</th>
        </tr>
        {tableRowElements}
      </table>
      <h3>For more details, pls contact 9952738846 (AFJ Pharma Sourcing Pvt Ltd..</h3>
    </div>
  );
}

export default App;

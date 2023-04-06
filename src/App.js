import "./App.css";
import Select from "./Components/Buttons/Select";
import Input from "./Components/Input/Input";
import PanelSelect from "./Components/Panel/PanelSelect";
import Cost from "./Components/Cost/Cost";
import { useEffect, useState } from "react";

function App() {

  const [bill, setBill] = useState("0");
  const [people, setPeople] = useState("0");
  const [tip, setTip] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  
  useEffect(() => {
    if((bill!=="0"&&bill!=="")&&(people!=="0"&&people!=="")&&(tip!=="0"&&tip!=="")){
      if(people.indexOf(".")===-1&&people.indexOf(",")===-1){
        let one = ((Number(bill))/(Number(people))).toFixed(2);
        setTipAmount(((one/100)*Number(tip)).toFixed(2));
        setTotal(Number(one)+Number(tipAmount));
      }
    }
  })

  return (
    <div className="App">
      <p className="title">spli<br/>tter</p>
      <div className="board">
        <div className="panelLeft">
          <Input title={"Bill"} style={"bill"} placeholder={"0"} setValue={setBill}/>
          <PanelSelect title={"Select Tip"} setTip={setTip}/>
          <Input
            title={"Number of People"}
            style={"number"}
            placeholder={"0"}
            setValue={setPeople}
          />
        </div>
        <div className="panelRight">
          <div>
            <Cost title={"Tip Amount"} cost={tipAmount} />
            <Cost title={"Total"} cost={total} />
          </div>
          <Select text={"reset"} type={"reset"}/>
        </div>
      </div>
    </div>
  );
}

export default App;

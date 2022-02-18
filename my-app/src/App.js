import './App.css';
import ATM from "./redux/components/atm";
import { useSelector, useDispatch } from "react-redux";
import { showAtm } from "./redux/ducks/atm";

function App() {
  let dispatch = useDispatch();
  const ammount = useSelector((state) => state.Atm.ammount);
  const ShowATM = useSelector((state) => state.Atm.ShowAtm);

  let handleShowAtmBtn = () => {
    dispatch(showAtm());
  };
  return (
    <div className="App">
    <button onClick={handleShowAtmBtn}>
      {" "}
      {ShowATM ? "Stäng av ATM" : "Visa ATM"}
    </button>

    {ShowATM ? (
      <div>
        {" "}
        <h1>Dina Pengar: {ammount}</h1>
        <ATM />
      </div>
    ) : (
      <h1>Starta ATM genom att klicka på knappen ovan</h1>
    )}
  </div>
);
}

export default App;

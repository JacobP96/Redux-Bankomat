import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  drawOwnValue,
  drawone,
  drawtwo,
  drawfive,
  drawthousend,
  depositOwnValue,
  depositOne,
  depositTwo,
  depositFive,
  depositThousend
} from "../ducks/atm";

const ATM = () => {
  const dispatch = useDispatch();
  const withdrawText = useSelector((state) => state.Atm.withdrawText);
  // withdraw

  const handledrawone = () => {
    dispatch(drawone());
  };

  const handledrawtwo = () => {
    dispatch(drawtwo());
  };
  const handledrawfive = () => {
    dispatch(drawfive());
  };
  const handledrawthousend = () => {
    dispatch(drawthousend());
  };
  let handleOwnValue = () => {
    let value = +document.querySelector("#drawOwnValue").value;
    dispatch(drawOwnValue(value));
  };

  // deposit
  const handledepositOne = () => {
    dispatch(depositOne());
  };

  const handledepositTwo = () => {
    dispatch(depositTwo());
  };
  const handledepositFive = () => {
    dispatch(depositFive());
  };
  const handledepositThousend = () => {
    dispatch(depositThousend());
  };
  let handleDepositOwnValue = () => {
    let value = +document.querySelector("#depositOwnValue").value;
    dispatch(depositOwnValue(value));
  };
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "red",
          margin: "10px"
        }}
      >
        <div>
          <h1>Withdraw Money</h1>
          <p>{withdrawText}</p>
          <button onClick={handledrawone}>100</button>
          <button onClick={handledrawtwo}>200</button>
          <button onClick={handledrawfive}>500</button>
          <button onClick={handledrawthousend}>1000</button>
          <br />
          <br />
          <input type="number" id="drawOwnValue" />
          <button onClick={handleOwnValue}>
            Withdraw your own amount
          </button>{" "}
        </div>
      </div>

      <div
        style={{
          border: "1px solid black",
          backgroundColor: "green",
          margin: "10px"
        }}
      >
        <h1>Deposit Money</h1>

        <button onClick={handledepositOne}>100</button>
        <button onClick={handledepositTwo}>200</button>
        <button onClick={handledepositFive}>500</button>
        <button onClick={handledepositThousend}>1000</button>
        <br />
        <br />
        <input type="number" id="depositOwnValue" />
        <button onClick={handleDepositOwnValue}>Deposit your own amount</button>
      </div>
    </div>
  );
};
export default ATM;
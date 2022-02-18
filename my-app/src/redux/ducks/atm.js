// Action withdrawmoney
export const drawone = () => ({
    type: "drawone"
  });
  export const drawtwo = () => ({
    type: "drawtwo"
  });
  export const drawfive = () => ({
    type: "drawfive"
  });
  export const drawthousend = () => ({
    type: "drawthousend"
  });
  export const drawOwnValue = (value) => ({
    type: "drawOwnValue",
    payload: {
      value: value
    }
  });
  // Action Deposit Money
  export const depositOne = () => ({
    type: "depositOne"
  });
  export const depositTwo = () => ({
    type: "depositTwo"
  });
  export const depositFive = () => ({
    type: "depositFive"
  });
  export const depositThousend = () => ({
    type: "depositThousend"
  });
  export const depositOwnValue = (value) => ({
    type: "depositOwnValue",
    payload: {
      value: value
    }
  });
  export const showAtm = () => ({
    type: "showAtm"
  });
  
  const initialState = {
    ammount: 1000,
    ShowAtm: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      // whithdraw
  
      case "drawone":
        if (state.ammount >= 100) {
          return {
            ...state,
            ammount: state.ammount - 100
          };
        } else {
          return {
            ...state,
            ammount: state.ammount,
            withdrawText: alert("You dont have enough money")
          };
        }
      case "drawtwo":
        if (state.ammount >= 200) {
          return {
            ...state,
            ammount: state.ammount - 200
          };
        } else {
          return {
            ...state,
            ammount: state.ammount,
            withdrawText: alert("You dont have enough money")
          };
        }
      case "drawfive":
        if (state.ammount >= 500) {
          return {
            ...state,
            ammount: state.ammount - 500
          };
        } else {
          return {
            ...state,
            ammount: state.ammount,
            withdrawText: alert("You dont have enough money")
          };
        }
      case "drawthousend":
        if (state.ammount >= 1000) {
          return {
            ...state,
            ammount: state.ammount - 1000
          };
        } else {
          return {
            ...state,
            ammount: state.ammount,
            withdrawText: alert("You dont have enough money")
          };
        }
      case "drawOwnValue":
        if (state.ammount >= action.payload.value) {
          return {
            ...state,
            ammount: state.ammount - action.payload.value
          };
        } else {
          return {
            ...state,
            ammount: state.ammount,
            withdrawText: alert("You dont have enough money")
          };
        }
      // deposit
      case "depositOne":
        return { ...state, ammount: state.ammount + 100 };
      case "depositTwo":
        return { ...state, ammount: state.ammount + 200 };
      case "depositFive":
        return { ...state, ammount: state.ammount + 500 };
      case "depositThousend":
        return { ...state, ammount: state.ammount + 1000 };
      case "depositOwnValue":
        return { ...state, ammount: state.ammount + action.payload.value };
      case "showAtm":
        return { ...state, ShowAtm: -!state.ShowAtm };
      default:
        return state;
    }
  };
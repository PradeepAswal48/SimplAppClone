export default function Transactions() {
  return (
    <div>
      <div className="component-head">Recent Transactions</div>
      <div className="component-content">
        {
          //dynamic content below
        }
        <div className="transaction-grid-container ">
          <div className="transaction-grid-item">
            <img
              src={require("../assets/logos/zomato.png")}
              alt="account logo"
            />{" "}
          </div>
          <div className="transaction-grid-item">
            <span className="tansaction-style">Zomato </span>
          </div>
          <div
            className="tansaction-style transaction-grid-item"
            style={{ textAlign: "right" }}
          >
            ₹250
          </div>
          <div className="transaction-grid-item">
            May 26
            <span style={{ color: " #888888" }}>
              , 06:12 PM | Simpl Pay Later
            </span>
          </div>
          <div className="transaction-grid-item" style={{ textAlign: "right" }}>
            <span className="transaction-status">
              <img
                style={{ marginRight: "5px" }}
                src={require("../assets/icons/timer.png")}
                alt="account logo"
              />{" "}
              Processing
            </span>
          </div>
          <div className="transaction-grid-item">Home -9886667991</div>
        </div>
      </div>
      {
        //repeating things as neccesary
      }
      <div className="transaction-grid-container ">
        <div className="transaction-grid-item">
          <img src={require("../assets/logos/bescom.png")} alt="account logo" />{" "}
        </div>
        <div className="transaction-grid-item">
          <span className="tansaction-style">Zomato </span>
          <span className="tansaction-method">
            <img
              style={{ marginRight: "5px" }}
              src={require("../assets/icons/tick.png")}
              alt="account logo"
            />{" "}
            Autopay
          </span>
        </div>
        <div
          className="tansaction-style transaction-grid-item"
          style={{ textAlign: "right" }}
        >
          ₹250
        </div>
        <div className="transaction-grid-item">
          May 26
          <span style={{ color: " #888888" }}>, 06:10 PM</span>
        </div>
        <div className="transaction-grid-item" style={{ textAlign: "right" }}>
          <span className="transaction-status">
            <img
              style={{ marginRight: "5px" }}
              src={require("../assets/icons/timer.png")}
              alt="account logo"
            />{" "}
            Processing
          </span>
        </div>
        <div className="transaction-grid-item">Home -9886667991</div>
      </div>

      <div className="transaction-grid-container ">
        <div className="transaction-grid-item">
          <img
            src={require("../assets/logos/bigbasket.png")}
            alt="account logo"
          />{" "}
        </div>
        <div className="transaction-grid-item">
          <span className="tansaction-style">Zomato </span>
        </div>
        <div
          className="tansaction-style transaction-grid-item"
          style={{ textAlign: "right" }}
        >
          ₹250
        </div>
        <div className="transaction-grid-item">
          May 26
          <span style={{ color: " #888888" }}>, 06:10 PM</span>
        </div>
        <div className="transaction-grid-item" style={{ textAlign: "right" }}>
          <span className="transaction-status">
            <img
              style={{ marginRight: "5px" }}
              src={require("../assets/icons/timer.png")}
              alt="account logo"
            />{" "}
            Processing
          </span>
        </div>
        <div className="transaction-grid-item">
          <span className="higlight">₹100 Cashback!</span> Will be credited
          after repayment
        </div>
      </div>
    </div>
  );
}

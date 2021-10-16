export default function Utilities() {
  return (
    <div>
      <div className="component-head">Recharge and pay bills</div>
      <div className="component-content component-utilities ">
        <div className="item">
          <span className="item-icon">
            <img
              src={require("../assets/icons/postpaid.png")}
              alt="account logo"
            />
          </span>
          <span className="item-text">Prepaid</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img
              src={require("../assets/icons/electricity.png")}
              alt="account logo"
            />
          </span>
          <span className="item-text">Electricity</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img
              src={require("../assets/icons/broadband.png")}
              alt="account logo"
            />
          </span>
          <span className="item-text">Broadband</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img src={require("../assets/icons/dth.png")} alt="account logo" />
          </span>
          <span className="item-text">DTH</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img src={require("../assets/icons/gas.png")} alt="account logo" />
          </span>
          <span className="item-text">Gas</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img
              src={require("../assets/icons/landline.png")}
              alt="account logo"
            />
          </span>
          <span className="item-text">Landline</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img
              src={require("../assets/icons/water.png")}
              alt="account logo"
            />
          </span>
          <span className="item-text">Water</span>
        </div>
        <div className="item">
          <span className="item-icon">
            <img
              src={require("../assets/icons/datacard.png")}
              alt="account logo"
            />
          </span>
          <span className="item-text">Data Card</span>
        </div>
      </div>
    </div>
  );
}

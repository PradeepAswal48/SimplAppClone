export default function Navigator() {
  return (
    <div className="navigator">
      <div className="item selected">
        <span className="item-icon">
          <img src={require("../assets/icons/home.png")} alt="account logo" />
        </span>
        <span className="item-text">Home</span>
      </div>
      <div className="item">
        <span className="item-icon">
          <img
            src={require("../assets/icons/Passbook.png")}
            alt="account logo"
          />
        </span>
        <span className="item-text">Passbook</span>
      </div>
      <div className="item">
        <span className="item-icon">
          <img
            src={require("../assets/icons/Billbox.png")}
            alt="account logo"
          />
        </span>
        <span className="item-text">Billbox</span>
      </div>
      <div className="item">
        <span className="item-icon">
          <img
            src={require("../assets/icons/Profile.png")}
            alt="account logo"
          />
        </span>
        <span className="item-text">Profile</span>
      </div>
      <div className="item">
        <span className="item-icon">
          <img src={require("../assets/icons/Group.png")} alt="account logo" />
        </span>
        <span className="item-text">More</span>
      </div>
    </div>
  );
}

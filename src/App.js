import "./styles.css";
import Accounts from "./components/Accounts";
import Navigator from "./components/Navigator";
import SimplSupportedApps from "./components/SimplSupportedApps";
import Transactions from "./components/Transactions";
import Utilities from "./components/Utilities";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <Accounts />
        <Utilities />
        <SimplSupportedApps />
        <Transactions />
      </div>

      <Navigator />
    </div>
  );
}

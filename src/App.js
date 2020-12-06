import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

// Components
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AmountSummary } from "./components/AmountSummary";
import { History } from "./components/History";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AmountSummary />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

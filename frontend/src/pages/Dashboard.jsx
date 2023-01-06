import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import Decisionimpact from "../components/dashboard/DecisionImpact";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";

export default function Dashboard() {
  return (
    <div>
      <NavBardash />
      <div className="dashboard">
        <ButtonCreateDecision />
        <Decisionimpact />
        <CardsAllDecision />
      </div>
    </div>
  );
}

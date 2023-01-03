import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import Decisionimpact from "../components/dashboard/DecisionImpact";
import AllDecision from "../components/dashboard/AllDecision";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";
import CardsImpactDecision from "../components/dashboard/CardsImpactDecision";

export default function Dashboard() {
  return (
    <div>
      <NavBardash />
      <div className="dashboard">
        <ButtonCreateDecision />
        <Decisionimpact />
        <CardsImpactDecision />
        <AllDecision />
        <CardsAllDecision />
      </div>
    </div>
  );
}

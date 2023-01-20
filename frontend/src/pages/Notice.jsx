import NavBar from "../components/dashboard/NavBardash";
import ProgressBar from "../components/notice/ProgressBar/ProgressBar";
import TextEditor from "../components/Postdecision/TextEditor";
import "./Notice.css";

export default function Notice() {
  return (
    <div>
      <NavBar />
      <ProgressBar />
      <h1 className="avis">Donne ton avis : Make Sense France </h1>
      <TextEditor />
    </div>
  );
}

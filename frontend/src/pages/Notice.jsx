// import NavBarDash from "../components/dashboard/NavBardash";
import ProgressBar from "../components/notice/ProgressBar/ProgressBar";
import TextEditor from "../components/notice/TextEditor/TextEditor";
import "./Notice.css";

export default function Notice() {
  return (
    <div className="Notice">
      {/* <NavBarDash /> */}
      <ProgressBar />
      <TextEditor />
    </div>
  );
}

import NavBar from "../dashboard/NavBardash";
import "./Messages.css";

function Messages() {
  return (
    <div>
      <NavBar />
      <section className="inboxContainer">
        <div className="sideBar" />
        <div className="chat">
          <div className="addChat">
            {" "}
            <img src="/src/assets/img/paper-plane.png" alt="" id="plane" />
            <h1 id="dmTitle">Vos Messages</h1>
            <h3 id="dmDescription">Envoyez des messages à vos collègues</h3>
            <button type="button" id="buttonMessage">
              Envoyer un message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Messages;

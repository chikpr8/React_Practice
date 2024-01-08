import ProfileCard from "./profilecard";
import siri from "./images/siri.png";
import alexa from "./images/alexa.png";
import cortana from "./images/cortana.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                name="Alexa"
                image={alexa}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana32"
                name="cortana"
                image={cortana}
                description="Cortana was made by Microsoft.who know what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@siri09"
                name="Siri"
                image={siri}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;

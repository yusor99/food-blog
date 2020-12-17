import Cards from "../components/cards";
import Desktop from "./../components/desktop";
import Mobile from "./../components/mobile";
const Home = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="Description" content="landing" />
          <title>20-week training schedule for your first marathon</title>
        </head>
        <Desktop />
        <Mobile />
        <section
          className="container"
          style={{
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "#303036", fontWeight: 500 }}>
            A blog for people who like simple food
          </h1>

          <small>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            <br /> nonumy eirmod tempor invidunt ut labore et dolore
          </small>
          <button className="btn-see">See popular recipes</button>
        </section>
        <Cards />
        <section className="sub">
          <div className="container content">
            <div>
              <h3>Subscribe to the best food newsletter</h3>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
                <br /> nonumy eirmod tempor invidunt ut labore et dolore
              </small>
            </div>
            <button>Add my email to the list</button>
          </div>
        </section>
        <section className=" container aside">
          <section>
            <img src="img/About.png" alt="featured"></img>
          </section>
          <section className="head">
            <p className="des">Hi, I’m Laura!</p>
            <small style={{ color: "#9FA1AA", marginBottom: 20 }}>
              Creator of simple food
            </small>
            <small style={{ lineHeight: 2, fontSize: 14 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est. ed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </small>
            <button className="btn-see">Learn more</button>
          </section>
        </section>

        <section className=" container footer">
          <div>Copyright @ Simple Food 2020</div>
          <div>Instagram / Facebook / Pinterest</div>
        </section>
        <Test />
      </html>
    </>
  );
};
export default Home;

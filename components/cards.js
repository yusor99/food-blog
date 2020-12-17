const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="container">
          <div className="cards-container">
            <div className="card">
              <img src="/img/fruits.png" alt="fruits" />
              <small className="small-h">TIPS</small>
              <h4>How To Pick The Perfect Peach</h4>
              <small className="small-card">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore (…)
              </small>
            </div>
            <div className="card">
              <img src="/img/woman.png" alt="woman" />
              <small className="small-h">Lifestyle</small>
              <h4>Minimalist Kitchen</h4>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore (…)
              </small>
            </div>
            <div className="card">
              <img src="/img/wooden.png" alt="wooden" />
              <small className="small-h">TIPS</small>
              <h4>Organise Your Space</h4>
              <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore (…)
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 200 }}>
        <div className="title">
          <span>Popular recipes</span>
          <small>See all &gt; </small>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src="/img/fruits.png" alt="fruits" />
            <small className="small-h">Recipes — SoUP</small>
            <h4>Butternut Squash Soup</h4>
            <small className="small-h">45 min — 6 - 8 portions</small>
          </div>
          <div className="card">
            <img src="/img/woman.png" alt="woman" />
            <small className="small-h">Recipes — DRINKS — Breakfast</small>
            <h4>Berries Smoothie</h4>
            <small className="small-h">15 min — 2 - 4 portions</small>
          </div>
          <div className="card">
            <img src="/img/wooden.png" alt="wooden" />
            <small className="small-h">Recipes — ASIAN</small>
            <h4>Vegetarian Dumplings</h4>
            <small className="small-h">40 min — 4 - 6 portions</small>
          </div>

          <div className="card">
            <img src="/img/fruits.png" alt="fruits" />
            <small className="small-h">Recipes — Breakfast</small>
            <h4>Tropical Smoothie Bowl</h4>
            <small className="small-h">25 min — 1 - 2 portions</small>
          </div>
          <div className="card">
            <img src="/img/wooden.png" alt="wooden" />
            <small className="small-h">Recipes — Asian</small>
            <h4>Spicy Noodles </h4>
            <small className="small-h"> 30 min — 2 - 4 portions</small>
          </div>
          <div className="card">
            <img src="/img/woman.png" alt="woman" />
            <small className="small-h">Recipes — Breakfast — snack</small>
            <h4>Avocado Toast</h4>
            <small className="small-h">10 min — 1 - 2 portions</small>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;

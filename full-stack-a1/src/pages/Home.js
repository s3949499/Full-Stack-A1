function Home() {
  return (
    <>
      <div className="home-container">
        <div className="img-container">
          <img className="cinema-BG" src='cinemaBG2.jpg'></img>
          <div className="overlay">
            <div className="ov-text">
              <h1> Begin your cinema experience today</h1>
            </div>
          </div>

        </div>
        <div className="home-content">
          <div className="home-s1">
            <img className="icon" src='cinema.png'></img>
            <h2> What is Loop Cinemas?</h2>
            <p> Loop Cinemas is local, long running cinema operator with several cinema locations across all of Australia. </p>
          </div>

          <div className="home-s2">
            <img className="icon" src='goals.png'></img>
            <h2> Our Goals: </h2>
            <p> Our goal at Loop Cinemas is to provide Australians with premium unique experiences whilst including the community in our cinema experiences. </p>
          </div>

          <div className="home-s3">
            <img className="icon" src='activity.png'></img>
            <h2> Activities we provide: </h2>
            <p>Loop Cinemas hold a variety of community events, art shows in addition to the lattest and greatest film releases.</p>
          </div>
        </div >
      </div >
    </>
  );
}
export default Home;

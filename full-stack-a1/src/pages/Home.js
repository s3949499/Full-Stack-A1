function Home() {
  return (
    <>
    {/* For image at top of landing page w/overlay */}
      <div className="home-container">
        <div className="img-container">
          <img className="cinema-BG" src='cinemaBG2.jpg' alt="cinema backdrop"></img>
          <div className="overlay">
            <div className="ov-text">
              <h1> Begin your cinema experience today</h1>
            </div>
          </div>

        </div>
        {/* Loop Cinemas information  */}
        <div className="home-content">
          <div className="home-s1">
            <img className="icon" src='cinema.png' alt="cinema icon"></img>
            <h2> What is Loop Cinemas?</h2>
            <p> Loop Cinemas is local, long running cinema operator with several cinema locations across all of Australia. </p>
          </div>

          <div className="home-s2">
            <img className="icon" src='goals.png' alt="goals icon"></img>
            <h2> Our Goals: </h2>
            <p> Our goal at Loop Cinemas is to provide Australians with premium unique experiences whilst including the community in our cinema experiences. </p>
          </div>

          <div className="home-s3">
            <img className="icon" src='activity.png' alt="activities icon"></img>
            <h2> Activities we provide: </h2>
            <p>Loop Cinemas hold a variety of community events, art shows in addition to the latest and greatest film releases.</p>
          </div>
        </div>
         {/* Display information for movie */}
        <div className="movie-section">
          <h1 className="movie-h1"> Featured movies</h1>
          <div className="movies">
            <div className="movie-1">
              <img className="coverArt" src='lucas.jpg' alt="movie cover"></img>
          {/* Movie showing times */}
              <h2>Movie 1: Showing Times</h2>
              <h3>-- 20/07/2023 --</h3>
              <p>12:30-14:30</p>
              <p>17:30-19:30</p>
              <h3>-- 21/07/2023 --</h3>
              <p>11:00-13:00</p>
              <p>16:00-18:00</p>

            </div>
            <div className="movie-2">
              <img className="coverArt" src='tim.jpg' alt="movie cover"></img>
              <h2>Movie 2: Showing Times</h2>
              <h3>-- 20/07/2023 --</h3>
              <p>15:00-17:00</p>
              <p>20:00-22:00</p>
              <h3>-- 21/07/2023 --</h3>
              <p>13:30-15:30</p>
              <p>18:30-20:30</p>

            </div>
            <div className="movie-3">
              <img className="coverArt" src='stormseeker.jpg' alt="movie cover"></img>
              <h2>Movie 3: Showing Times</h2>
              <h3>-- 20/07/2023 --</h3>
              <p>10:00-12:00</p>
              <p>14:00-16:00</p>
              <h3>-- 21/07/2023 --</h3>
              <p>12:00-14:00</p>
              <p>17:00-19:00</p>
            </div>
            <div className="movie-4">
              <img className="coverArt" src='diego.jpg' alt="movie cover"></img>
              <h2>Movie 4: Showing Times</h2>
              <h3>-- 20/07/2023 --</h3>
              <p>16:30-18:30</p>
              <p>19:30-21:30</p>
              <h3>-- 21/07/2023 --</h3>
              <p>14:30-16:30</p>
              <p>19:30-21:30</p>
            </div>
            <div className="movie-5">
              <img className="coverArt" src='laura.jpg' alt="movie cover"></img>
              <h2>Movie 5: Showing Times</h2>
              <h3>-- 20/07/2023 --</h3>
              <p>13:00-15:00</p>
              <p>18:00-20:00</p>
              <h3>-- 21/07/2023 --</h3>
              <p>15:00-17:00</p>
              <p>20:00-22:00</p>
            </div>
          </div>
        </div>
      </div>







    </>
  );
}
export default Home;

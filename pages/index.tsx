import { Header } from "../components/Header";
import { IPostPreview, PostPreview } from "../components/PostPreview";
import { Navbar } from "../components/Navbar";

const sampleDate = new Date();
const posts: IPostPreview[] = [
  {
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: "Problems look mighty small from 150 miles up",
    date: sampleDate,
    poster: "Sample Poster",
    posterURL: "/",
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    date: sampleDate,
    poster: "Sample Poster",
    posterURL: "/",
  },
  {
    title: "Science has not yet mastered prophecy",
    subtitle:
      "We predict too much for the next year and yet far too little for the next ten.",
    date: sampleDate,
    poster: "Sample Poster",
    posterURL: "/",
  },
  {
    title: "Failure is not an option",
    subtitle:
      "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    date: sampleDate,
    poster: "Sample Poster",
    posterURL: "/",
  },
];

const Index = () => {
  return (
    <>
      <Header
        title="Clean Blog"
        subHeading="A Blog Theme by Start Bootstrap"
        headerIMGPath="/img/home-bg.jpg"
      />
      <Navbar />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/*<!-- Post preview-->*/}
            {posts.map((post) => (
              <>
                <PostPreview
                  title={post.title}
                  subtitle={post.subtitle}
                  date={post.date}
                  poster={post.poster}
                  posterURL={post.posterURL}
                  key={`${post.title}-preview`}
                />
                <hr className="my-4" />
              </>
            ))}

            {/*<!-- Pager-->*/}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

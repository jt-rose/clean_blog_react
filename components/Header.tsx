export const Header = (props: { title: string; subHeading: string }) => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: "url('assets/img/about-bg.jpg')",
      }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="page-heading">
              <h1>{props.title}</h1>
              <span className="subheading">{props.subHeading}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
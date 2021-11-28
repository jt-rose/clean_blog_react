import Link from "next/link";

export interface IPostPreview {
  title: string;
  subtitle?: string;
  poster: string;
  posterURL: string;
  date: Date;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const PostPreview = (props: IPostPreview) => {
  const { date } = props;
  const fmtDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div className="post-preview">
      <Link href="/post">
        <a>
          <h2 className="post-title">{props.title}</h2>
          {props.subtitle && (
            <h3 className="post-subtitle">{props.subtitle}</h3>
          )}
        </a>
      </Link>
      <p className="post-meta">
        {"Posted by "}
        <a href={props.posterURL}>{props.poster}</a>
        {" on "}
        {fmtDate}
      </p>
    </div>
  );
};

import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import Repo from "./[id]";

type Props = {};

type RepoDataType = {
  [key: string]: any;
};


const fetchRepos = async (): Promise<RepoDataType[]> => {
  const res = await fetch("https://api.github.com/users/daurham/repos");
  return res.json();
};

export default function StudiesList({}: Props) {
  // const data = fetchRepos();
  const { data, status } = useQuery("repos", fetchRepos);

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <p>Error!</p>;

  if (status === "success") console.log(data);

  return (
    <div>
      <h1>My Studies</h1>
      <h5>Topics I studied and took notes for myself</h5>
      {data &&
        data.map((r) => (
          <ul key={r.id}>
            <Link href={{pathname: `/studies/${r.name}`, query: r}}>
              {r.name}
            </Link>
          </ul>
        ))}
    </div>
  );
}

import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const fetchReadMe = async (url: string) => {
  const res = await fetch(url);
  return res.text();
  // const resu = await res.text()
  // console.log(res);
  // document.getElementById('content').innerHTML = marked(result)
  // return document.getElementById('content').innerHTML;
  // return res.json()
};

export default function Repo() {
  const router = useRouter();
  const repo = router.query;
  const repoName = repo.name;
  // const { data, status } = useQuery('readme', () => fetchReadMe(`https://github.com/daurham/${repoName}#readme.md`));
  console.log('repo:', repo);

  // if (status === "loading") return <p>Loading...</p>;

  // if (status === "error") return <p>Error!</p>;

  // if (status === "success") console.log(data);

  return (
    <div>
      <h1>{`Check Out This Repo:`}</h1>
      <h3>{`https://github.com/daurham/${repoName}`}</h3>
      <Link href="/studies">Go Back</Link>
    </div>
  );
}

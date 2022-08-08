import React from "react";
import { useEffect, useState } from "react";

const Link = () => {
  const [data, setState] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/OccurrenceStatusOverseas.json`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();

      setState(data.itemList);
    })();
  }, []);
  console.log(Array.isArray(data))
  // if (!Array.isArray(data)) {
  //   return;
  // }

  // const list = data.map((item) => {
  //   return <div>{item.dataName}</div>;
  // });
  return <div>213</div>;
};

export default Link;

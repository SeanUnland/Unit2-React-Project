import * as contentful from "contentful";

export const client = contentful.createClient({
  space: `5swixu5p2lln`,
  accessToken: `yh7v_dL6-TYevSpG7K9GED7WEIdmaU0vyCb-QSlCNWI`,
});

// export const client = contentful.createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN,
// });

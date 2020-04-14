import React from "react";
import Article from "../Article/Article";
import { Grid } from "semantic-ui-react";

function News(props) {
  console.log(props.articles);
  return (
    <React.Fragment>
      <h1>BREAKING NEWS</h1>
      <Grid columns={3} divided style={{ margin: "0 25%" }}>
        <Grid.Row>
          {props.articles.map((article) => {
            return <Article article={article} />;
          })}
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default News;

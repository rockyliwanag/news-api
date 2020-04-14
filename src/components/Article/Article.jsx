import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";

function Article(props) {
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Image src={props.article.urlToImage} />
          <Card.Header>{props.article.title}</Card.Header>
          <Card.Description>{props.article.description}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default Article;

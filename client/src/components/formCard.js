import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const FormCard = (props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="" gutterBottom>
          {props.title}
        </Typography>
        <Divider />
        {props.children}
      </CardContent>
    </Card>
  );
};
export default FormCard;

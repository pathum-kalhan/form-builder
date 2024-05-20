import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Unwrapped } from '@jsonforms/material-renderers';
const { MaterialTextControl } = Unwrapped;

function SuperCustomForm(props: ControlProps) {
  return (
    <Card>
      <CardHeader title='Super Custom Form' />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
            <MaterialTextControl {...props} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <MaterialTextControl {...props} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withJsonFormsControlProps(SuperCustomForm);

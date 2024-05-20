import { MaterialLayoutRenderer } from './Layout';
// import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Hidden,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { rankWith, uiTypeIs } from '@jsonforms/core';
const MyGroupRenderer = (props) => {
    const { uischema, schema, path, visible, renderers } = props;

    const layoutProps = {
        elements: uischema.elements,
        schema: schema,
        path: path,
        direction: 'column',
        visible: visible,
        uischema: uischema,
        renderers: renderers,
    };
    return (
        <Hidden xsUp={!visible}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{uischema.label}</Typography>
                    <Button>Just another button</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <MaterialLayoutRenderer {...layoutProps} />
                </AccordionDetails>
            </Accordion>
        </Hidden>
    );
};
export const myGroupTester = rankWith(1000, uiTypeIs('Group'));
export default withJsonFormsLayoutProps(MyGroupRenderer);
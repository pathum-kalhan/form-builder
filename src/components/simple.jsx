import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
// import { materialCells } from '@jsonforms/material-cells';

const SimpleForm = () => {
    const schema = {
        type: 'object',
        properties: {
            companyName: { type: 'string' },
            location: { type: 'string' },
            seoFriendlyUrl: { type: 'string' }
        }
    };

    const uischema = {
        type: 'VerticalLayout',
        elements: [
            {
                type: 'HorizontalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/companyName',
                        options: {
                            label: 'Company Name',
                            grid: { md: 5 }
                        }
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/location',
                        grid: {
                            label: 'Location',
                            layout: { md: 7 }
                        }
                    }
                ]
            },
            {
                type: 'HorizontalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/seoFriendlyUrl',
                        options: {
                            label: 'SEO Friendly URL',
                            gird: { md: 5 },
                            horizontalAlignment: 'center'
                        }
                    }
                ]
            },
            {
                type: 'HorizontalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/',
                        options: {
                            label: 'Generate Button',
                            grid: { md: 6 },
                            horizontalAlignment: 'left'
                        }
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/',
                        options: {
                            label: 'Reset Button',
                            grid: { md: 6 },
                            horizontalAlignment: 'right'
                        }
                    }
                ]
            }
        ]
    };

    const data = {
        companyName: '',
        location: '',
        seoFriendlyUrl: ''
    };

    return (
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
        />
    );
};

export default SimpleForm;
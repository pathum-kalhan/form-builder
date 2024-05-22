import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
// import { initJsonFormsStore } from '@jsonforms/core';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { Button, Card, CardContent } from '@mui/material';
import aiPromptTester from '../components/custom-ai-promt/ai-prompt-tester';
import aiPromptControl from '../components/custom-ai-promt/ai-prompt-control';

const ApiCalls = () => {
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(false);

  const schema = {
    type: 'object',
    properties: {
      aiprompt: {
        type: 'string',
        minLength: 3,
        maxLength: 10,
      },
    },
  };

  const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/aiprompt',
      },
      //   {
      //     type: 'Control',
      //     scope: '#/properties/response',
      //     options: {
      //       readOnly: true,
      //     },
      //   },
      //   {
      //     type: 'Control',
      //     scope: '#/properties/submit',
      //     options: {
      //       disabled: !isValid,
      //     },
      //   },
    ],
  };

  const data = {
    aiPrompt: '',
    response: '',
    submit: '',
  };

  // const store = initJsonFormsStore({
  //     data,
  //     schema,
  //     uischema,
  //     renderers: materialRenderers,
  //     cells: materialCells
  // });

  const handleChange = ({ data, isValid }: any) => {
    setFormData(data);
    setIsValid(isValid);
  };

  const renderers = [
    ...materialRenderers,
    //register custom renderers
    { tester: aiPromptTester, renderer: aiPromptControl },
  ];

  return (
    <Card>
      <CardContent>
        {JSON.stringify(formData)}
        <h1>API</h1>
        Follwing things will be covered in this section:
        <ul>
          <li>Loading status</li>
          <li>Stepper</li>
          <li>Progress ba</li>
          <li>Slots to display custom components</li>
          <li>Tab views (This will be seperate forms)</li>
        </ul>
        <p>
          Type ai prompt and hit the ask button.After a api call (mock)you will
          get the ai response. When their is response styles added conditionaly.
        </p>
        <JsonForms
          data={formData}
          schema={schema}
          uischema={uischema}
          renderers={renderers}
          cells={materialCells}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
};

export default ApiCalls;

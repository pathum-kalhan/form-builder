import { Card, CardContent } from '@mui/material';
import React, { useCallback } from 'react';
import { JsonForms } from '@jsonforms/react';

import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { INIT, UPDATE_CORE, UPDATE_DATA } from '@jsonforms/core';
const ValidationsPage: React.FC = () => {
  const schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 3,
        maxLength: 10,
        default: 'dddd',
      },
      country: {
        type: 'string',
        enum: ['sri lanka', 'india', 'usa', 'uk', 'france'],
      },
      province: {
        type: 'string',
        enum: ['western', 'southern', 'central', 'north', 'eastern'],
      },
    },
    required: ['name', 'country'],
    allOf: [
      {
        if: {
          properties: {
            country: { const: 'sri lanka' },
          },
        },
        then: {
          required: ['province'],
          value: 'western',
        },
      },
    ],
  };

  const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/name',
      },
      {
        type: 'Control',
        scope: '#/properties/country',
      },
      {
        type: 'Control',
        scope: '#/properties/province',
        rule: {
          effect: 'SHOW',
          condition: {
            scope: '#/properties/country',
            schema: { const: 'sri lanka' },
          },
        },
      },
    ],
  };

  const [data, setData] = React.useState({
    name: 'hasthi',
    country: '',
    province: '',
  });
  const middleware = useCallback((state, action, defaultReducer) => {
    const newState = defaultReducer(state, action);
    switch (action.type) {
      case INIT:
      case UPDATE_CORE:
      case UPDATE_DATA: {
        if (newState.data.name === 'durian') {
          newState.data.country = 'france';
        }
        return newState;
      }
      default:
        return newState;
    }
  }, []);
  return (
    <Card>
      <CardContent>
        {JSON.stringify(data)}
        <h1>Validations</h1>
        Follwing things will be covered in this section:
        <ul>
          <li>Validations</li>
          <li>Conditional validations</li>
          <li>Conditional rendering</li>
          <li>Mutations (Middleware)</li>
          <li>Visibility</li>
        </ul>
        <p>
          create form with name and country fields. name text input min length
          should be 3 and max length should be 10. country dropdown and if
          country is sri lanka then only show province dropdown. if country is
          sri lanka then province is required.
        </p>
        <p>
          when the name is durian, country will automatically set to france.
        </p>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ errors, data }) => setData(data)}
          middleware={middleware}
        />
      </CardContent>
    </Card>
  );
};

export default ValidationsPage;

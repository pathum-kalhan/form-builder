import { withJsonFormsControlProps } from '@jsonforms/react';
import AiPrompt from './ai-prompt';

interface RatingControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
}

const RatingControl = ({ data, handleChange, path }: RatingControlProps) => (
  <AiPrompt
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
  />
);

export default withJsonFormsControlProps(RatingControl);

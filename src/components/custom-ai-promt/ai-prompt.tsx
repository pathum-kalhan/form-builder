import React, { useState } from 'react';
import { Button, Skeleton, TextField } from '@mui/material';
import classes from './custom-ai-prompt.module.css';
interface RatingProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
}

const AiPrompt = (props: RatingProps) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePromptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPrompt(event.target.value);
  };

  const handleAskClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setLoading(false);
    setResponse('This is the response from the AI model');
    props.updateValue('This is the response from the AI model');
    // Handle the ask button click event here
    // You can use the 'prompt' state variable to access the entered prompt
    console.log('Prompt:', prompt);
  };

  return (
    <div
      id='#/properties/aiprompt'
      className={props.value ? classes.aiprompt : undefined}
    >
      {loading ? (
        <Skeleton
          //   sx={{ bgcolor: 'grey.900' }}
          variant='rectangular'
          width={210}
          height={118}
        />
      ) : (
        <>
          <TextField
            label='Type your AI prompt'
            multiline
            rows={4}
            value={prompt}
            onChange={handlePromptChange}
          />
          <Button variant='contained' onClick={handleAskClick}>
            Ask
          </Button>
          <h2>AI response was : {props.value}</h2>
        </>
      )}
    </div>
  );
};

export default AiPrompt;

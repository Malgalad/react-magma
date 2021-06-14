import React from 'react';
import { Card, CardBody } from '../Card';
import { magma } from '../../theme/magma';
import { Radio } from '.';
import { RadioGroup } from '../RadioGroup';
import { ArrowRightAltIcon, CheckIcon, CrossIcon } from 'react-magma-icons';
import { Button } from '../Button';

export default {
  component: Radio,
  title: 'Radio',
};

export const Default = () => {
  return (
    <>
      <RadioGroup
        labelText="Basic Usage"
        id="basicGroup"
        name="basic"
        value="selectedOption"
      >
        <Radio id="radio1" labelText="Option one label" value="1" />

        <Radio
          id="radio2"
          color={magma.colors.success}
          labelText="Option two label is really long and can wrap to multiple lines lorem ipsum dolar sit amet is really long and can wrap to multiple lines"
          value="2"
        />
      </RadioGroup>
      <RadioGroup
        labelText="Disabled"
        id="basicGroup"
        name="basic"
        value="selectedOption"
      >
        <Radio id="radio4" disabled labelText="Disabled" value="4" />
        <Radio
          id="radio5"
          disabled
          labelText="Disabled checked"
          value="selectedOption"
        />
      </RadioGroup>
      <RadioGroup
        labelText="Error"
        id="basicGroup"
        name="basic"
        value="selectedOption"
        errorMessage="Error message goes here"
      >
        <Radio id="radio4" labelText="Error" value="4" />
        <Radio id="radio5" labelText="Error checked" value="selectedOption" />
      </RadioGroup>
    </>
  );
};

export const Inverse = () => {
  return (
    <>
      <Card isInverse style={{ marginBottom: magma.spaceScale.spacing04 }}>
        <CardBody>
          <RadioGroup
            labelText="Inverse Radio Buttons"
            id="inverseGroup"
            isInverse
            name="inverse"
            value="selectedOption"
          >
            <Radio id="inverseRadio" labelText="Inverse" value="default" />
            <Radio
              isInverse
              disabled
              id="disabledInverseRadio"
              labelText="Disabled inverse"
              value="selectedOption"
            />
          </RadioGroup>
        </CardBody>
      </Card>
      <Card isInverse>
        <CardBody>
          <RadioGroup
            errorMessage="Error message goes here"
            id="inverseErrorGroup"
            isInverse
            name="inverse"
            labelText="Error Inverse Radio Buttons"
            value="selectedOption"
          >
            <Radio id="errorInverseRadio" labelText="Error inverse" value="3" />
            <Radio
              id="errorInverseErrorGroup"
              isInverse
              labelText="Error inverse checked"
              value="selectedOption"
            />
          </RadioGroup>
        </CardBody>
      </Card>
    </>
  );
};

// interface MultiChoiceProps extends RadioGroupProps {
//   correctAnswer: string;
//   questionLabel: string;
//   questionOptions: Array<RadioProps>;
//   isSubmitted?: boolean;
// }

export const MultiChoice = props => {
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  function handleQuestionSubmit() {
    setIsSubmitted(true);
  }

  const questionOptions = [
    {
      labelText: 'Seed count',
      value: 'seedCount',
    },
    {
      labelText: 'Incubation time',
      value: 'incubationTime',
    },
    {
      labelText: 'Amount of water',
      value: 'amountOfWater',
    },
    {
      labelText: 'Temperature',
      value: 'temperature',
    },
  ];
  const correctAnswer = 'amountOfWater';
  const questionLabel = 'What was the independent variable in the experiment';

  const [chosenAnswer, setChosenAnswer] = React.useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChosenAnswer(event.target.value);
  }

  return (
    <>
      <RadioGroup
        labelText={questionLabel}
        name={name}
        value={chosenAnswer}
        onChange={handleChange}
      >
        {questionOptions.map((option, index) => {
          const isChosenAnswerAfterSubmit =
            isSubmitted && chosenAnswer === option.value;

          const isCorrectAnswer = correctAnswer === option.value;

          const radioPropOverrides = isChosenAnswerAfterSubmit
            ? isCorrectAnswer
              ? { color: 'green', validationIcon: <CheckIcon color="green" /> }
              : { color: 'red', validationIcon: <CrossIcon color="red" /> }
            : isSubmitted && isCorrectAnswer
            ? {
                labelText: (
                  <>
                    {option.labelText}{' '}
                    <span
                      style={{
                        color: 'green',
                        fontSize: '12px',
                        paddingLeft: '10px',
                      }}
                    >
                      Correct Answer
                    </span>
                  </>
                ),
                validationIcon: <ArrowRightAltIcon color="green" />,
              }
            : {};

          return (
            <>
              <Radio key={index} {...option} {...radioPropOverrides} />
            </>
          );
        })}
      </RadioGroup>
      <Button onClick={handleQuestionSubmit}>Submit</Button>
    </>
  );
};

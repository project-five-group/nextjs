import React from 'react';

import { Typography } from './Typography';
import { TTypography, TTypographyType } from './types';

export default {
  component: Typography,
  title: 'ui/Typography',
  argTypes: {
    tag: { control: 'text', defaultValue: 'span' },
  },
};

export const Default = (args: TTypography) => (
  <Typography {...args}>Typography</Typography>
);

export const Variants = (args: TTypography) => (
  <>
    <Typography {...args} tag="h1" variant="h1">
      Heading 1
    </Typography>
    <Typography
      {...args}
      tag="h2"
      variant="h2"
      typographyStyle={{ marginTop: 10 }}
    >
      Heading 2
    </Typography>
    <Typography
      {...args}
      tag="h3"
      variant="h3"
      typographyStyle={{ marginTop: 10 }}
    >
      Heading 3
    </Typography>
    <Typography
      {...args}
      tag="h4"
      variant="h4"
      typographyStyle={{ marginTop: 10 }}
    >
      Heading 4
    </Typography>
    <Typography
      {...args}
      tag="h5"
      variant="h5"
      typographyStyle={{ marginTop: 10 }}
    >
      Heading 5
    </Typography>
    <Typography
      {...args}
      tag="a"
      variant="link"
      typographyStyle={{ display: 'inline-block', marginTop: 10 }}
    >
      Link
    </Typography>
    <Typography
      {...args}
      tag="p"
      variant="paragraph"
      typographyStyle={{ marginTop: 10 }}
    >
      Paragraph
    </Typography>
    <Typography
      {...args}
      tag="p"
      variant="comment"
      typographyStyle={{ marginTop: 10 }}
    >
      Comment
    </Typography>
  </>
);

export const VariantsLorem = (args: TTypography) => {
  const text = 'Съешь же ещё этих мягких французских булок да выпей чаю.';
  const typographyStyle = { display: 'block', marginTop: 20, width: 420 };

  return (
    <>
      <Typography
        {...args}
        tag="h1"
        variant="h1"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="h2"
        variant="h2"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="h3"
        variant="h3"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="h4"
        variant="h4"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="h5"
        variant="h5"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="a"
        variant="link"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="p"
        variant="paragraph"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
      <Typography
        {...args}
        tag="p"
        variant="comment"
        typographyStyle={typographyStyle}
      >
        {text}
      </Typography>
    </>
  );
};

export const Types = (args: TTypography) => {
  const types: TTypographyType[] = ['success', 'warning', 'error', 'inherit'];

  return (
    <>
      {types.map(type => (
        <Typography key={type} {...{ ...args, type }}>
          {type}
        </Typography>
      ))}
      <Typography {...{ ...args }}>default</Typography>
    </>
  );
};
Types.argTypes = {
  tag: {
    defaultValue: 'p',
  },
  type: {
    control: null,
  },
};

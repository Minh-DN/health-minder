import { styled } from "@mui/material";


type TypographyProps = {
  value?: string // TODO: ADD LOGIC FOR THIS WHEN UPDATING VALUE
}

// TODO: REMOVE MUI TYPOGRAPHY HEADINGS
export const Heading1 = styled('h1')<TypographyProps>(({ theme, color, value }) => ({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize[5],
  lineHeight: theme.lineHeight[5],
  minHeight: theme.lineHeight[5],
  color: color ? color : theme.palette.neutral.dark,
  margin: 0,
}));

export const Heading2 = styled('h2')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.normal,
  fontSize: theme.fontSize[4],
  lineHeight: theme.lineHeight[4],
  minHeight: theme.lineHeight[4],
  color: color ? color : theme.palette.neutral.dark,
  margin: 0,
}));

export const Title1 = styled('h3')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.normal,
  fontSize: theme.fontSize[2],
  lineHeight: theme.lineHeight[4],
  minHeight: theme.lineHeight[4],
  color: color ? color : theme.palette.neutral.dark,
  margin: 0,
}));

export const Subheading1 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.bolder,
  fontSize: theme.fontSize[2],
  lineHeight: theme.lineHeight[2],
  minHeight: theme.lineHeight[2],
  color: color ? color : theme.palette.neutral.light,
  fontFamily: 'Avenir-Black',
  margin: 0,
}));

export const Subheading2 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.lighter,
  fontSize: theme.fontSize[2],
  lineHeight: theme.lineHeight[2],
  minHeight: theme.lineHeight[2],
  color: color ? color : theme.palette.neutral.light,
  margin: 0,
}));

export const BodyText1 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.normal,
  fontSize: theme.fontSize[2],
  lineHeight: theme.lineHeight[1],
  minHeight: theme.lineHeight[1],
  color: color ? color : theme.palette.neutral.light,
  fontFamily: 'Avenir-Heavy',
  margin: 0,
}));

export const BodyText2 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.lighter,
  fontSize: theme.fontSize[2],
  lineHeight: theme.lineHeight[1],
  minHeight: theme.lineHeight[1],
  color: color ? color : theme.palette.neutral.light,
  fontFamily: 'Avenir-Light',
  margin: 0,
}));

export const BodyText3 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.bolder,
  fontSize: theme.fontSize[1],
  lineHeight: theme.lineHeight[1],
  minHeight: theme.lineHeight[1],
  color: color ? color : theme.palette.neutral.light,
  fontFamily: 'Avenir-Black',
  margin: 0,
}));

export const BodyText4 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSize[1],
  lineHeight: theme.lineHeight[1],
  minHeight: theme.lineHeight[1],
  color: color ? color : theme.palette.neutral.light,
  margin: 0,
}));

export const BodyText5 = styled('h4')(({ theme, color }) => ({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize[1],
  lineHeight: theme.lineHeight[1],
  minHeight: theme.lineHeight[1],
  color: color ? color : theme.palette.neutral.light,
  fontFamily: 'Avenir-Book',
  margin: 0,
}));
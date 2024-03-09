import { styled, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { WrapperProps } from '@/shared';

import { Heading2 } from './';

// #region data types
type SectionWrapperProps = WrapperProps & {
  noMargin?: boolean;
}

type LayoutSectionProps = {
  children: ReactNode;
  title?: string;
  titleControls?: ReactNode;
  noMargin?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  showDivider?: boolean;
}
// #endregion

const SectionWrapper = styled('div')<SectionWrapperProps>(({ noMargin, style }) => ({
  margin: noMargin ? 0 : '1rem',
  ...style,
}))

const SectionTitleWrapper = styled('div')({
  padding: '0.5rem 0'
})

const SectionTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: theme.spacing(4),
}))

const SectionTitleControls = styled('div')({})

const Divider = styled('div')(({ theme }) => ({
  width: '100%',
  height: theme.spacing(2),
  backgroundColor: theme.palette.divider
}))

const SectionContent = styled('div')({
  display: 'flex',
})

const LayoutSection = ({ children, title, titleControls, noMargin, contentStyle, showDivider, style }: LayoutSectionProps) => {
  const theme = useTheme();

  return (
    <SectionWrapper noMargin={noMargin} style={style}>
      <SectionTitleWrapper className="hello">
        {title && <SectionTitle>
          <Heading2 theme={theme}>{title}</Heading2>
          {titleControls && <SectionTitleControls>{titleControls}</SectionTitleControls>}
        </SectionTitle>}
      </SectionTitleWrapper>
      {(title || showDivider) && <Divider />}
      {children && <SectionContent style={contentStyle}>
        {children}
      </SectionContent>}
    </SectionWrapper>
  )
}

export default LayoutSection
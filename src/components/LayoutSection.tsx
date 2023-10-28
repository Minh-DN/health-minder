import { Grid, styled, useTheme } from "@mui/material"
import { ReactNode } from "react";

import { Heading2 } from ".";

// #region data types
type SectionWrapperProps = {
  noMargin?: boolean;
}
// TODO: REVIEW OPTIONAL TYPES, IF OPTIONAL, IS DEFAULT NEEDED?
type LayoutSectionProps = {
  children: ReactNode;
  title?: string;
  titleControls?: ReactNode;
  noMargin?: boolean;
  contentStyle?: React.CSSProperties;
  showDivider?: boolean;
}
// #endregion

const SectionWrapper = styled('div')<SectionWrapperProps>(({ noMargin }) => ({
  margin: noMargin ? 0 : '1rem',
}))

// TODO: WHY USING GRID INSTEAD OF DIV
const SectionTitleWrapper = styled(Grid)({
  padding: '0.5rem 0'
})

const SectionTitle = styled(Grid)(({ theme }) => ({
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

const SectionContent = styled(Grid)({
  //padding: '0.5rem'
})

const LayoutSection = ({ children, title, titleControls, noMargin, contentStyle, showDivider }: LayoutSectionProps) => {
  const theme = useTheme();

  return (
    <SectionWrapper noMargin={noMargin}>
      <SectionTitleWrapper className="hello">
        {title && <SectionTitle>
          {/* TODO: ADD TITLE OR TYPOGRAPHY COMPONENT */}
          <Heading2 theme={theme}>{title}</Heading2>
          {titleControls && <SectionTitleControls>{titleControls}</SectionTitleControls>}
        </SectionTitle>}
      </SectionTitleWrapper>
      {(title || showDivider) && <Divider />}
      {/* TODO: WHAT IS CONTAINER PROP IN THE BELOW? */}
      {children && <SectionContent container style={contentStyle}>
        {children}
      </SectionContent>}
    </SectionWrapper>
  )
}

export default LayoutSection
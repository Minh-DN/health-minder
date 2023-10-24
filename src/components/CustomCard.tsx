import React from 'react';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material';
import { Subheading2, Title1 } from '.';

// TODO: change padding to theme padding

// #region data types
type CustomCardWrapperProps = {
  transparent?: boolean;
}

type CustomCardTitleWrapperProps = {
  noPadding?: boolean;
}

type CustomCardBodyProps = {
  padding?: string | number;
}

type CustomCardProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  secondaryTitle?: string;
  controls?: React.ReactNode[];
  height?: string | number;
  noPadding?: boolean;
  padding?: string | number;
  transparent?: boolean;
  onClick?: () => void;
}
// #endregion

const CustomCardWrapper = styled('div')<CustomCardWrapperProps>(({ transparent }) => ({
  ...(transparent && {
    background: 'trasparent',
    border: 'none',
    boxShadow: 'none',

    '&:hover': {
      border: 'none',
      boxShadow: 'none',
    },
  })
}))

const CustomCardTitleWrapper = styled('div')<CustomCardTitleWrapperProps>(({ noPadding }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  padding: noPadding ? 0 : '8px',
  paddingBottom: 0,
  color: 'red',
}))

const MainTitle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const SecondaryTitle = styled('div')({});

const CustomCardBody = styled('div')<CustomCardBodyProps>(({ padding }) => ({
  padding: padding ? `${padding} !important` : `1rem !important`,
}))

const CustomCard: React.FC<CustomCardProps> = ({
  style,
  children,
  className,
  title,
  secondaryTitle,
  controls = [],
  height,
  noPadding = false,
  padding,
  transparent = false,
  onClick,
}: CustomCardProps) => {

  return (
    <CustomCardWrapper className={className} style={{ height: height }} transparent={transparent} onClick={onClick}>
      {title && (
        <CustomCardTitleWrapper noPadding={noPadding}>
          <MainTitle>
            <Title1>{title}</Title1>
            {controls && controls.length > 0 && (
              <div>
                {controls.map((c, index) => (
                  <div key={index} style={{ display: 'inline' }}>
                    {c}
                  </div>
                ))}
              </div>
            )}
          </MainTitle>
          {secondaryTitle && (
            <SecondaryTitle>
              <Subheading2>{secondaryTitle}</Subheading2>
            </SecondaryTitle>
          )}
        </CustomCardTitleWrapper>
      )}
      <CustomCardBody style={style} padding={padding} className='hello'>
        {children}
      </CustomCardBody>
    </CustomCardWrapper>
  );
};

export default CustomCard;
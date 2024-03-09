import { styled } from '@mui/material';

type AvatarImgProps = {
  src: string;
  diameter: string;
  borderColor?: string;
  sectionName: string;
}

type AvatarImgWrapperProps = {
  diameter: string;
  borderColor?: string;
}

const AvatarImgWrapper = styled('img')<AvatarImgWrapperProps>(({ diameter, borderColor }) => ({
  width: diameter,
  height: diameter,
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  border: '2px solid',
  borderColor: `${borderColor ? borderColor : 'inherit'}`,
}));


const AvatarImg = ({ src, diameter, borderColor, sectionName }: AvatarImgProps) => {
  return (
    <AvatarImgWrapper
      src={src}
      alt={`${sectionName}-avatar-image`}
      diameter={diameter}
      borderColor={borderColor}
    />
  )
}

export default AvatarImg
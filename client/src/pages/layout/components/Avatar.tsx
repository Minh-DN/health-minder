import '@/styles/scss/pages/layout/sidebar.scss';

import { useSelector } from 'react-redux';

import { RootState } from '@/redux';

// TODO: SWITCH IMG TO USING CORE/AVATAR

type AvatarProps = {
  src: string;
};

const Avatar = ({ src }: AvatarProps) => {
  const { firstName, lastName } = useSelector((state: RootState) => state.auth);

  return (
    <div className='avatar-wrapper'>
      <img src={src} className='avatar-image' />
      <div className='avatar-username'>{`${firstName} ${lastName}`}</div>
    </div>
  );
};

export default Avatar;

import '@/styles/scss/pages/layout/sidebar.scss';

// TODO: SWITCH TO USING CORE/AVATAR

type AvatarProps = {
  src: string
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className='avatar-wrapper'>
      <img
        src={src}
        className='avatar-image'
      />
      <div className='avatar-username'>Jake Dao</div>
    </div>
  )
}

export default Avatar;
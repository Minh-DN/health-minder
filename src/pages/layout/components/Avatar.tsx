import '@/styles/scss/pages/layout/sidebar.scss';

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
      <div className='avatar-username'>Gong Yoo</div>
    </div>
  )
}

export default Avatar;
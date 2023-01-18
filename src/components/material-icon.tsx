// TODO move to a new file
interface Props {
  name: string,
  size: IconSize
}

type IconSize = 'sm' | 'md' | 'lg' | 'xl'

// TODO move to a constants file
const ICON_SIZES = new Map<IconSize, string>()

ICON_SIZES
  .set('sm', 'text-base')
  .set('md', 'text-xl')
  .set('lg', 'text-2xl')
  .set('xl', 'text-3xl')

export default function MaterialIcon(props: Props) {
  const { name = 'circle', size = 'md' } = props

  return (
    <>
      <i className={`material-icons-round text-[#869fb7] ${ICON_SIZES.get(size)}`}>
        { name }
      </i>
    </>
  )
}

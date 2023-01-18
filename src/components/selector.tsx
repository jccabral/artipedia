// TODO move to a new file
interface Props {
  title: string
}

export default function Selector(props: Props) {
  const { title } = props
  
  return (
    <>
      <div className={`h-8 w-4/5 bg-[#c8d3df] p-1 rounded-lg flex justify-center items-center`}>
        <p className="text-[#487593] text-sm">{ title }</p>
      </div>
    </>
  )
}
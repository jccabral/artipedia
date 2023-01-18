import MaterialIcon from "./material-icon";
import Selector from "./selector";

export default function Header() {
  return (
    <header className='py-2 px-4 bg-zinc-50 shadow-md'>
      <div className='flex justify-between mb-6'>
        <div className="flex items-center gap-8">
          <MaterialIcon name='menu' size='xl' />
          <h1 className="tracking-wide text-xl">Pokédex</h1>
        </div>

        <div className="flex items-center gap-3">
          <MaterialIcon name='stars' size='lg' />
          <MaterialIcon name='check_circle' size='lg' />
          <MaterialIcon name='more_vert' size='lg' />
        </div>
      </div>

      <div className="flex flex-row gap-1">
        <Selector title='All games' />
        <span className="w-1 bg-slate-200 mx-2"></span>
        <Selector title='All generations' />
        <span className="w-1 bg-slate-200 mx-2"></span>
        <Selector title='All types' />
      </div>
    </header>
  )
}
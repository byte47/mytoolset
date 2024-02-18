// react functional component for displaying app icon and name similar to iphone home screen

export default function ToolItem({ name, icon }) {

    return <div className="flex flex-col">
        <img className="w-24 rounded-xl" src={icon} />
        <span className="text-center text-sky-400">{name}</span>
    </div>

}
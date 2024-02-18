import ToolItem from "./tool-item"

export default function Catagory({items, name}) {

    return <div className="flex flex-col p-8">
        <div>
            <span className="text-2xl font-bold">{name}</span>
        </div>
        <div className="flex flex-row gap-4">
            {items.map((item) => (<ToolItem name={item.name} icon={item.icon} />))}
        </div>
    </div>


}
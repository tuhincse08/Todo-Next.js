"use client"
type TodoItemProps ={
    id: string
    title : string
    completed: boolean
    toggleTodo:(id: string, completed: boolean) => void
}

export default function TodoItem({id,title,completed, toggleTodo}: TodoItemProps) {
  return ( 
    <li className="flex items-center justify-start gap-2 mb-4">
        <input type="checkbox"  id={id}
        className="cursor-pointer peer"
        defaultChecked = {completed}
        onChange={e => toggleTodo(id,e.target.checked)}
        />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"> {title}</label>
    </li>
  )
}

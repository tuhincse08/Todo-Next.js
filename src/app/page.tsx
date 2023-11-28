import { prisma } from "@/db"
import Link from "next/link"
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";

function getTodos(){
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, completed: boolean){
  "use server"

  await prisma.todo.update({where: {id}, data:{completed} });

}

async function page() {

  //  await prisma.todo.create({data:{title:"New Task 2", completed:false}})
  const todos = await getTodos();
  return (
    <>
    <Header />

    <ul className="pl-4">
      {todos.map((todo)=>(
        <TodoItem key={todo.id} {...todo} toggleTodo= {toggleTodo}  />
      ))}
    </ul>

    </>
    
  )
}

export default page
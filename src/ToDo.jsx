// 1: Conditional rendering option 1
// export default function ToDo({task, isDone}){
//     if(isDone===true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }


// 2: Conditional rendering option 2
// export default function ToDo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }


// 3: Conditional rendering option 3: ternary operator
// export default function ToDo({task, isDone}){
//     return(
//         <li>{isDone? 'Finished':'Work on'}: {task}</li>
//     )
// }

// 4: Conditional rendering option 4: && operator
// export default function ToDo({task, isDone}){
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// 5: Conditional rendering option 5: || operator
// export default function ToDo({task, isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// 6: Conditional rendering option 6
export default function ToDo({task, isDone}){
    let listItem;
    if(isDone){
        listItem=<li>Finished: {task}</li>
    }
    else{
        listItem=<li>Work on: {task}</li>
    }
    return listItem;
}
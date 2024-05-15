
export default function CoreConcept(props){
    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

/*
Alternative to the above code
using destructuring "({image, title, description})" this simply means
that we can target the properties directly without using "props" keyword
*/
// function CoreConcept({image, title, description}){
//     return (
//         <li>
//             <img src={image} alt={title}/>
//             <h3>{title}</h3>
//             <p>{description}</p>
//         </li>
//     );
// }
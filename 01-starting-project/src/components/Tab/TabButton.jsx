
/*
* Children vs Props
* Children
* - The children prop is used to display the content of the component.
* Attributes Props
* - The props are used to pass data to the component.
* */
export default function TabButton({children, onSelect}){


    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}
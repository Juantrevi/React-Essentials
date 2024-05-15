
/*
* Children vs Props
* Children
* - The children prop is used to display the content of the component.
* Attributes Props
* - The props are used to pass data to the component.
* */
export default function TabButton({children, onSelect, isSelected}){


    return (
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    );
}
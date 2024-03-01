export default function TabButton({children, onSelect, isSeleted }) {
    return (
    <li>
        <button className={isSeleted ? 'active': undefined} onClick={onSelect}>{children}</button>
    </li>
    );
}
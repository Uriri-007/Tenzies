export default function Die({ value, isHeld, id, handleClick }) {
    return (
        <button
            className={isHeld ? "held" : ""}
            onClick={() => handleClick(id)}
        >
            {value}
        </button>
    );
}

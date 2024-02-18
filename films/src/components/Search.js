export default function Search({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="Search films..."
            onChange={(event) => onSearch(event.target.value)}
        />
    );
}

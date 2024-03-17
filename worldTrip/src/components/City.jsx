import { useParams } from "react-router-dom";

export default function City() {
    const { id } = useParams();
    return <h1>{id}</h1>;
}



import "../style/filter.scss"
interface FilterProps {
    stateCategory: (category: string) => void;
    selectedCategory: string; // Nouvelle prop
}

const Filter = ({ stateCategory, selectedCategory }: FilterProps) => {
    return (
        <div id="filter">
            <button
                className={selectedCategory === "All" ? "selected" : ""}
                onClick={() => stateCategory("All")}
            >
                All projects
            </button>
            <button
                className={selectedCategory === "Perso" ? "selected" : ""}
                onClick={() => stateCategory("Perso")}
            >
                Personal
            </button>
            <button
                className={selectedCategory === "Pro" ? "selected" : ""}
                onClick={() => stateCategory("Pro")}
            >
                Professional
            </button>
        </div>
    );
};

export default Filter;
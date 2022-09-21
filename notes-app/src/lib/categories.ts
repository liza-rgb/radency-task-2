export const categories = [
    {
        name: "Task",
        iconClass: "fa-solid fa-list-check"
    },
    {
        name: "Random Thought",
        iconClass: "fa-solid fa-brain"
    },
    {
        name: "Idea",
        iconClass: "fa-regular fa-lightbulb"
    }, 
    {
        name: "Quote",
        iconClass: "fa-solid fa-quote-left"
    }
];

export function getCategoryIconClass(category_name: string){
    const category = categories.find((c) => c.name === category_name);
    if (category) {
        return category.iconClass;
    }
}

// export function countNotesByCategory(category, storedNotes) {
//     let activeNotes = 0;
//     let archivedNotes = 0;
//     storedNotes.map((note) => {
//         if (note.category === category) {
//             if (note.isArchived) {
//                 archivedNotes++;
//             } else {
//                 activeNotes++;
//             }
//         }
//     })
//     return { activeNotes, archivedNotes }
// }

// export function formatCategory(category_name: string) {
//     return category_name.toLowerCase().replace(" ", "-");
// }
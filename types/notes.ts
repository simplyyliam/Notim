//This is where all the type systems would go


//Note type
export type note = {
    id: number // Allows for full CRUD, specifically deleting the note.id
    title: string //The name of the note created
    created_at: string //When it was created
    edited_at: string //When it was edited to update the content
}
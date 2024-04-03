export const baseUrl = "https://notes-api.dicoding.dev/v2";

export const addNoteApi = async (title, body) => {
  try {
    const response = await fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    const responseData = await response.json();

    if (response.ok) {
      console.log("Note added successfully:", responseData.data);
      return responseData.data;
    } else {
      throw new Error(responseData.message);
    }
  } catch (error) {
    console.error("Failed to add note:", error.message);
    throw error;
  }
};

export const deleteNoteApi = async (noteId) => {
  try {
    const response = await fetch(`${baseUrl}/notes/${noteId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Failed to delete note:", error.message);
    throw error;
  }
};

export const getArchivedNotesApi = async () => {
  try {
    const response = await fetch(`${baseUrl}/notes/archived`);
    const responseData = await response.json();

    if (response.ok) {
      console.log("Archived notes retrieved successfully:", responseData.data);
      return responseData.data;
    } else {
      throw new Error(responseData.message);
    }
  } catch (error) {
    console.error("Failed to retrieve archived notes:", error.message);
    throw error;
  }
};

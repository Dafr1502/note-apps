import anime from "animejs";
import "./components/index.js";
import "./css/styles.css";
import {
  addNoteApi,
  deleteNoteApi,
  getArchivedNotesApi,
  baseUrl,
} from "./main.js";
import notesData from "./components/note-list.js";

document.addEventListener("DOMContentLoaded", async function () {
  const activeNotesContainer = document.getElementById("activeNotesContainer");
  const archivedNotesContainer = document.getElementById(
    "archivedNotesContainer"
  );
  const addNoteForm = document.getElementById("addNoteForm");
  const timeZone = "Asia/Jakarta";

  if (!activeNotesContainer || !archivedNotesContainer || !addNoteForm) {
    console.error("Containers or form not found.");
    return;
  }

  async function displayNotesData() {
    try {
      document.getElementById("loadingIndicator").style.display = "block";
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const response = await fetch(`${baseUrl}/notes`);
      const data = await response.json();

      document.getElementById("loadingIndicator").style.display = "none";

      if (data.status === "success") {
        const notes = data.data;

        activeNotesContainer.innerHTML = "";
        archivedNotesContainer.innerHTML = "";

        notes.forEach((note) => {
          const noteDiv = document.createElement("div");
          noteDiv.classList.add("note");
          const createdAt = new Date(note.createdAt).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }
          );
          noteDiv.innerHTML = `
                        <h3>${note.title}</h3>
                        <p>${note.body}</p>
                        <p>${createdAt}</p>
                        <button class="delete-button" data-id="${note.id}">Delete</button>
                    `;

          if (note.archived) {
            archivedNotesContainer.appendChild(noteDiv);
          } else {
            activeNotesContainer.appendChild(noteDiv);
          }
        });
      } else {
        console.error("Failed to fetch notes:", data.message);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);

      document.getElementById("loadingIndicator").style.display = "none";
    }
  }

  async function displayArchivedNotes() {
    const archivedNotesFromAPI = await getArchivedNotesApi();

    archivedNotesContainer.innerHTML = "";

    archivedNotesFromAPI.forEach((note) => {
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");
      const createdAt = new Date(note.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.body}</p>
                <p>${createdAt}</p>
                <button class="delete-button" data-id="${note.id}">Delete</button>
            `;
      archivedNotesContainer.appendChild(noteDiv);
    });

    notesData.forEach((note) => {
      if (
        note.archived &&
        !archivedNotesFromAPI.some((apiNote) => apiNote.id === note.id)
      ) {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        const createdAt = new Date(note.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        noteDiv.innerHTML = `
                    <h3>${note.title}</h3>
                    <p>${note.body}</p>
                    <p>${createdAt}</p>
                `;
        archivedNotesContainer.appendChild(noteDiv);
      }
    });
  }

  document.addEventListener("click", async function (event) {
    const noteId = event.target.dataset.id;

    if (event.target.classList.contains("delete-button")) {
      try {
        document.getElementById("loadingIndicator").style.display = "block";

        const response = await deleteNoteApi(noteId);
        console.log(response);

        const deletedNote = notesData.find((note) => note.id === noteId);
        if (deletedNote && deletedNote.archived) {
          displayArchivedNotes();
        } else {
          const deletedNoteElement = event.target.closest(".note");
          anime({
            targets: deletedNoteElement,
            opacity: 0,
            translateY: [0, -50],
            duration: 500,
            easing: "easeOutQuad",
            complete: function (anim) {
              deletedNoteElement.remove();
            },
          });

          setTimeout(() => {
            document.getElementById("loadingIndicator").style.display = "none";
          }, 500);
        }
      } catch (error) {
        console.error("Error deleting note:", error.message);

        const errorContainer = document.getElementById("errorContainer");
        errorContainer.textContent =
          "Failed to delete note. Please try again later.";
        errorContainer.style.display = "block";

        document.getElementById("loadingIndicator").style.display = "none";
      }
    }
  });

  addNoteForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const titleInput = document
      .querySelector("title-input")
      .shadowRoot.querySelector("input").value;
    const bodyInput = document
      .querySelector("description-textarea")
      .shadowRoot.querySelector("textarea").value;
    const myDateInput = document.querySelector("date-input");

    try {
      const addedNote = await addNoteApi(titleInput, bodyInput);
      const selectedDate = myDateInput.getValue();

      const createdAt = new Date(selectedDate);
      const formattedCreatedAt = createdAt.toLocaleString("en-US", {
        timeZone: timeZone,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");
      noteDiv.innerHTML = `
                <h3>${titleInput}</h3>
                <p>${bodyInput}</p>
                <p>${formattedCreatedAt}</p>
                <button class="delete-button" data-id="${addedNote.id}">Delete</button>
            `;

      activeNotesContainer.insertBefore(
        noteDiv,
        activeNotesContainer.firstChild
      );

      anime({
        targets: noteDiv,
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutQuad",
      });

      await displayNotesData();
      await displayArchivedNotes();

      myDateInput.setValue("");
    } catch (error) {
      console.error("Failed to add note:", error.message);
    }
  });

  displayNotesData();
  displayArchivedNotes();
});

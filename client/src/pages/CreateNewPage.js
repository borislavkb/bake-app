import "./CreateNewPage.css";

export default function CreateNewPage() {
  return (
    <div className="Form">
      <div className="Page__heading">
        <h2>Add a recipe</h2>
      </div>

      <form className="form">
        <input type="text" id="name" name="name" />
        <input type="text" id="recipe" name="recipe" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

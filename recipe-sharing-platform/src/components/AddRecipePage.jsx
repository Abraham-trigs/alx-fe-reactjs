import AddRecipeForm from "../components/AddRecipeForm";

function AddRecipePage() {
  return (
    <div className="min-h-screen bg-blue-700 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-100 mb-6">Add a New Recipe</h1>
      <AddRecipeForm />
    </div>
  );
}
export default AddRecipePage;

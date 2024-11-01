export default function ({ store, redirect }) {
  // Check if the user is not authenticated
  if (!store.state.auth.token) {
    return redirect("/login");
  }
}

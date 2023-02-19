import { useHistory} from 'react-router-dom'
import { useAuth } from "../../../../../../contexts/Auth";

export function Dashboard() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    await signOut();
    history.push("/login");
  }

  return (
    <ion-content class="ion-padding">
      <p>Welcome, {user?.id}!</p>
      <ion-button onClick={handleSignOut}>Sign out</ion-button>
    </ion-content>
  );
}

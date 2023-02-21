import { LayoutContent } from "./layout/LayoutContent";
import { LayoutGrid } from "./layout/LayoutGrid";
import { Deporte } from "./page";

function App() {
  return (
    <LayoutContent>
      <LayoutGrid>
        <Deporte />
      </LayoutGrid>
    </LayoutContent>
  );
}

export default App;

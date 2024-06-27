import { MainMenu } from "../components/main-menu/component";
import { Title } from "../components/title/component";

export const HomePage = () => {
  return (
    <div>
      {/* Render Props Pattern */}
      <Title
        renderFirst={() => <h1>Render prop</h1>}
        renderSecond={() => <h2>Second render prop</h2>}
      />

      {/* Compound Pattern */}
      <MainMenu>
        <MainMenu.Group name="Restaurants">
          <MainMenu.Item title="top250" />
          <MainMenu.Item title="top100" />
          <MainMenu.Item title="top50" />
        </MainMenu.Group>
        <MainMenu.Group name="Dishes">
          <MainMenu.Item title="top250" />
          <MainMenu.Item title="top100" />
          <MainMenu.Item title="top50" />
        </MainMenu.Group>
        <MainMenu.Group name="Settings">
          <MainMenu.Item title="1" />
          <MainMenu.Item title="2" />
          <MainMenu.Item title="3" />
        </MainMenu.Group>
      </MainMenu>
    </div>
  );
};

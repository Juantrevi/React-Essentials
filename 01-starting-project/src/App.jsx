import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/Tab/TabButton";


function App() {

    let tabContent = 'Select a tab to display content.';

    function handleSelect(selectedButton){
        //Selected button should be a string if it's a component, jsc, props or state
        tabContent = selectedButton;
    }

  return (
    <div>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>

                    <CoreConcept title={CORE_CONCEPTS[0].title}
                                 description={CORE_CONCEPTS[0].description}
                                 image={CORE_CONCEPTS[0].image} />
                    {/*Alternative to the above code using spread operator*/}
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} />

                </ul>
            </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
                  <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                  <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
                  <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
              </menu>

              <p>{tabContent}</p>

          </section>
      </main>
    </div>
  );
}

export default App;

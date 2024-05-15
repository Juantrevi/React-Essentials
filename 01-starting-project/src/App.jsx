import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/Tab/TabButton";
import {useState} from "react";
import {} from "./data.js";


function App() {
    // !!!! useState() is a hook that allows you to have state variables in functional components
    //only two values are returned by useState() hook
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton){
        //Selected button should be a string if it's a component, jsc, props or state
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);

    }

  return (
    <div>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                {CORE_CONCEPTS.map((conceptItem) =>
                    (
                        <CoreConcept key={conceptItem.title} {...conceptItem} />
                    ))}


                    {/*<CoreConcept title={CORE_CONCEPTS[0].title}*/}
                    {/*             description={CORE_CONCEPTS[0].description}*/}
                    {/*             image={CORE_CONCEPTS[0].image} />*/}
                    {/*/!*Alternative to the above code using spread operator*!/*/}
                    {/*<CoreConcept {...CORE_CONCEPTS[1]} />*/}
                    {/*<CoreConcept {...CORE_CONCEPTS[2]} />*/}
                    {/*<CoreConcept {...CORE_CONCEPTS[3]} />*/}

                </ul>
            </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton
                      isSelected={selectedTopic === 'components'}
                      onSelect={() => handleSelect('components')}>Components</TabButton>
                  <TabButton
                      isSelected={selectedTopic === 'jsx'}
                      onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                  <TabButton
                      isSelected={selectedTopic === 'props'}
                      onSelect={() => handleSelect('props')}>Props</TabButton>
                  <TabButton
                      isSelected={selectedTopic === 'state'}
                      onSelect={() => handleSelect('state')}>State</TabButton>
              </menu>
              {!selectedTopic ?
                  <p>Select a topic to see an example</p> :
              <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>{EXAMPLES[selectedTopic].code}</pre>
              </div>}

          </section>
      </main>
    </div>
  );
}

export default App;

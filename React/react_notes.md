##### Intro to react course

### Section 1: Getting started
- React = A Javascript library for building user interfaces
- Uses Javascript to update webpage on the fly without reload or leaving page
- Declarative approach where you declare how you want the UI to look
- Front-end client side browser based library
- Code gets built + minified before executing somewhere

### Section 2: Javascript
- Javascript can be executed included in any website
- Add to a website using <script> src="Javascript file"</script>
- type="module" treats a javascript file as a module so it can be imported
- Use export form one function to import into another\
- React use a build process that injects script tags for you (Code you write gets transformed in React before executign in the browser)
- react-scripts provide tools to take code and transform it before it's injected into a HTML tag -> browser because React uses jsx (which is not a native JS feature) so it wont execute in the broswer natively
- Javascript variables are declared with the let keyword
- To run a Javascript app - run the path to the html file in your browser
- Use option, CMD, C to open the developer console or use live-server to make sure moduels still work
- Manually reaches out to the DOM (Document Object Model) (What is header, what isn't and what comes under that etc)

### Section 3 React Basics & Components
- React simplifies the process of building complex interfaces
- React is developer-friendly code that gets transformed behind the scenes to run in the browser
- React is all about components
- All user interfaces are made up of components
- Each compoenent has a different focus to keep the codebase managable
- Components combine HTML, CSS and Javscript (CSS less important)
- Declarative approach -> you define the desired end state rather than exact locations of items (React figures out where elements ned to be added, removed or modified)

- React code is just Javascript code
- Index page always executed initially
- JSX = Javascript + XML (Since HTML is a type of XML)
- Developer console -> Source shows you where the code on the page came from
- Considered good practice to put new components into new files so you have 1 component per file
- App is a special component so not in the components file (It is root component rendered in index)
- In React you build a component tree
- File naming convention is camel case (Cap on each new work)
- A component in React is just a Javascript function
- Import custom components into App.js rather than into index
- Custom components need an upper case letter at the start
- Need 1 root component per JSX component (i.e a master set of div tags which any other div tags come under)
- Components are good for both seperation of concerns and 
  also the reusability.
- Props are like attributes. They allow you to pass data through 
  a kindof custom HTML component (properties of the custom compoenents)
- Props can share data between React Components
- Props always passed from component through a component tree to child   components, never straight to the child component

#### Section 4 Tasks
1. In App output the key concepts
2. Identify components that could be created from main blob
3. Create an use the custom components

#### Section 5
- State allows you to react to clicks ad make the website interactive
- onClick adds an event listener to an elemtn such as a button
- All eventhandler props want a function as a value (For onClick etc)
- React moves through the component tree to read functions and load the page
- But React never reloads these again
- Key Concept = State
- State tells React when to redraw the screen when something changes

  // Use state is a React hook (Begin with use)
  // Must be called within component functions
  // NOT nested within
  // Use State creates a special vairable that when changed
  // causes React to re-evaluate the component
  // Argument is initial state
  //useState tells react to manage that variable for us

  Presentational component = just to render some data, not to manage any state.
  Stateful component or "smart" component = actively manages state

#### Key commands 
*npm install* gets the libraries and dependencies needed\
*npx create-react-app "project name"* to cerate a new react app
*npm start* Default to use react-script for starting development server

#### Removed commented code

  //use State returns an array that contains two elements
  // 1. Variable itself
  // 2. func to assigning new value to the variable
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    // This causes react to redraw the screen
    setTitle('Updated!');
  };
  // Add Javascript code to function containing HTML
  // Data is date object so can't be put in as a string
  // Use curly braces for parameters or Javascript expression

  // In React we can use DOM events for any HTML element

        {/* ? Is the Javascript ternary (if) so below is conditional
        rendering. : is the shorthand for else */}
        {/* With && if the condition is met then the part fter the 
        && operator is returned - use two here to check two different
        conditions*/}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

{/* Can add special "key" prop to any item 
        This is why we add ID*/}

        

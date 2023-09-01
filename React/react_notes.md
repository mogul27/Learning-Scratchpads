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
- React is all about components
- All user interfaces are made up of components
- Each compoenent has a different focus to keep the codebase managable
- Components combine HTML, CSS and Javscript (CSS less important)
- Declarative approach -> you define the desired end state rather than exact locations of items (React figures out where elements ned to be added, removed or modified)



#### Key commands 
*npm install* gets the libraries and dependencies needed\
*npx create-react-app "project name"* to cerate a new react app
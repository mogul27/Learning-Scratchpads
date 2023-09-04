import Concept from "./Concept";

export default function ConceptList(props) {
  return (
    <div>
      <ul id="concepts">
        <Concept
          title={props.concepts[0].title}
          image={props.concepts[0].image}
          desc={props.concepts[0].description}
        />
        <Concept
          title={props.concepts[1].title}
          image={props.concepts[1].image}
          desc={props.concepts[1].description}
        />
        <Concept
          title={props.concepts[2].title}
          image={props.concepts[2].image}
          desc={props.concepts[2].description}
        />
      </ul>
    </div>
  );
}

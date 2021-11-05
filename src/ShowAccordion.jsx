import { Accordion } from "./Accordion";
import './styles/accordion.scss'
import '../node_modules_css/flexboxgrid/css/flexboxgrid.css'

export function ShowAccordion(props) {
  return (
    <div>
      <Accordion
        title="Hello there!"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teaed."
      />
      <Accordion
        title="How are you?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teaed."
      />
      <Accordion
        title="I am fine too"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teaed."
      />
    </div>
)
}
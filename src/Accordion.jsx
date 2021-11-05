import { Chevron } from './Chevron'
import './styles/accordion.scss'

export function Accordion(props) {
  return (
    <div className="accordion_section">
      <button className="accordion">
        <p className="accordion_title">{props.title}</p>
        <Chevron className={"accordion_icon"} width={10} fill={"#fff"}/>
      </button>
      <div className="accordion_content">
        <div
          className="accordion_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>  
  )
}
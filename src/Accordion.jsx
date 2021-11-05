import './styles/accordion.scss'

export function Accordion(props) {
  return (
    <div className="accordion_section">
      <button className="accordion">
        <p className="accordion_title">{props.title}</p>
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
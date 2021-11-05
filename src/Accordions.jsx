import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import './styles/accordion.scss'

export function Accordions() {
  return (
    <div stlye={{}}>
      <Accordion style={{ width: 500 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="Accordion"
            style={{
              fontWeight: 15,
            }}
          >
            Demonstração de Accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="Accordion_back">
          <Typography className="Accordion">Tenha um bom dia ;)</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
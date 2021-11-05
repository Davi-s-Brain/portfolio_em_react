/* import '../node_modules css/flexboxgrid/css/flexboxgrid.css' */
import foto from './images/davi.jpg'
import { Content } from './Content'
import { Links } from './Links'

const size = "col-xs-12 col-sm-6 col-md-4 col-lg-2"

export function Main() {
  return (
  <main>
    <article>
      <div class="row center-xs">
        <div class="col-xs-3">
          <h2 id="sobre">Sobre</h2>
          <h3>Quem sou eu?</h3>
        </div>
      </div>
      <div class="space">
        <div class="row center-xs">
          <div class="col-xs-10">
            <div id="sobre">
              <img src={foto} alt="Foto do Davi" />
              <p>{Content.text[0]}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5">
          <h2 id="conhecimentos">Conhecimentos</h2>
          <ul>
            <li>Python intermediário</li>
            <li>HTML e CSS básico</li>
            <li>JavaScript básico</li>
            <li>C básico</li>
            <li>SQL básico</li>
            <li>Lógica de programação e algoritmos</li>
          </ul>
        </div>
      </div>
      <div class="space">
        <div class="row center-xs">
          <div class="col-xs-6">
            <div class="row center-xs">
              <div class={size}><img src={Links.link_icons[0]} alt="Python"/></div>
              <div class={size}><img src={Links.link_icons[1]} alt="HTML5"/></div>
              <div class={size}><img src={Links.link_icons[2]} alt="CSS3"/></div>
              <div class={size}><img src={Links.link_icons[3]} alt="Javascript"/></div>
              <div class={size}><img src={Links.link_icons[4]} alt="C"/></div>
              <div class={size}><img src={Links.link_icons[5]} alt="MySQL"/></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5">
          <h2 id="exp">Experiência profissional</h2>
          <ul>
            <li>6 meses como suporte nível 1 na <a href={Links.link_contact[0]} target="_blank">TDGI</a></li>
          </ul>
        </div>
      </div>

      <div class="space">
        <div class="row center-xs">
          <div class="col-xs-8">
            <h2 id="projetos">Projetos</h2>
            <p>Atualmente meus projetos estão disponíveis em meu <a href={Links.link_contact[2]} target="_blank">GitHub</a></p>
            <p>{Content.text[1]} <a href={Links.link_contact[1]} target="_blank">aqui</a></p>
          </div>
        </div>
      </div>

      <div class="space">
        <div class="row center-xs">
          <h2 id="contato">Contato</h2>
          <div id="contato">
            <a href={Links.link_contact[2]} target="_blank"><img src={Links.link_contact_icons[0]} alt="GitHub" /></a>
            <a href={Links.link_contact[3]} target="_blank"><img src={Links.link_contact_icons[1]} alt="Instagram" /></a>
            <a href={Links.link_contact[4]} target="_blank"><img src={Links.link_contact_icons[2]} alt="Linkedin" /></a>
            <a href={Links.link_contact[5]} target="_blank"><img src={Links.link_contact_icons[3]} alt="E-mail" /></a>
          </div>
        </div>
      </div>
    </article>
  </main>)
}
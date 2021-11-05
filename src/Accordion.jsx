import './styles/accordion.scss'

let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

export function Accordion() {
  return (
    <>
      <button class = "accordion">Exemplo</button>
      <div class = "panel">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis autem aliquam quos earum debitis culpa eaque maiores voluptatibus omnis? Vel dolorum tempore doloremque voluptas in consectetur optio corporis aut.</p>
      </div>
      <button class = "accordion">De</button>
      <div class = "panel">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quidem officiis maiores dolore culpa adipisci iure sed nobis consequuntur, aspernatur sit suscipit fuga veritatis tenetur impedit doloribus, animi voluptatibus tempore!</p>
      </div>
      <button class = "accordion">Accordion</button>
      <div class="panel">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis voluptatibus corporis velit maxime fugit, quasi, enim magni reiciendis nesciunt ex tenetur cumque suscipit dolorum impedit consectetur laboriosam ipsa sapiente?</p>
      </div>
    </>
  )
}
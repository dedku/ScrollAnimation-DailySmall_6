import './style.css'


document.body.innerHTML = `
<h1>Scroll to see the animation</h1>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
<div class="box">
  <h2>Content</h2>
</div>
`
const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerScrollPoint: number = window.innerHeight / 5 * 4

  boxes.forEach(box => {

    const boxTop: number = box.getBoundingClientRect().top

    if (boxTop < triggerScrollPoint) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }

  });
}
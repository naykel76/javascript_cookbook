import './src/scss/app.scss'
import logo from '/logo.svg'
// comment and uncomment the following lines to see the examples
import './src/js/control-structures';
import './src/js/operators';

document.querySelector('#app').innerHTML = `
<div class="flex items-center justify-center h-screen">
    <div class="tac">
        <img src="${logo}" class="mx-auto h-8" alt="Naykel logo" />
        <div class="my"><h1 class="my">Javascript Examples and Playground</h1></div>
        <P class="txt-1.5">Open your console to see examples</P>
    </div>
</div>
`


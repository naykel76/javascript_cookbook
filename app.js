import './src/scss/app.scss';
import logo from '/logo.svg';
// comment and uncomment the following lines to see the examples
// import './src/js/arrays';
// import './src/js/control-structures';
// import './src/js/functions';
// import './src/js/objects';
// import './src/js/operators';
import './src/js/regex';
// import './src/js/string';

document.querySelector('#app').innerHTML = `
<div class="flex items-center justify-center h-screen">
    <div class="tac">
        <img src="${logo}" class="mx-auto h-8" alt="Naykel logo" />
        <div class="my"><h1 class="my">Javascript Examples and Playground</h1></div>
        <P class="txt-1.5">Open your console to see examples</P>
    </div>
</div>
`;



let nums = [1, 2, 3];
nums.forEach((num, index) => {
    nums[index] = num * 2;
});
console.log(nums); // [2, 4, 6]

let nums1 = [1, 2, 3];
nums1 = nums1.map(num => num * 2);
console.log(nums1); // [2, 4, 6]
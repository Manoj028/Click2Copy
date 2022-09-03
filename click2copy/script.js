const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");



const copyText = (e) => {

    e.preventDefault();

    coupon.select();
    coupon.setSelectionRange(0,9999);

    document.execCommand("copy");

    btn.textContent = "Copied...";

    setTimeout(()=>{

        btn.textContent = "copy";

    },3000);


}
btn.addEventListener("click", copyText);
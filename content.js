let removedAds = false;
let randomAd = () => {
    link1 = document.createElement('a');
    link2 = document.createElement('a');
    let textMango = document.createTextNode('The aroma in a home is really important, isnt it? Find the one that best defines yours in the candles of our new home collection')
    let textEvoca = document.createTextNode('Դիմավորեք` Evoca Gift Card')
    link1.appendChild(textMango);
    link2.appendChild(textEvoca);
    link1.classList.add("link")
    link2.classList.add("link")
    link1.href ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmango.com%2Fphotos%2Fa.158897600394%2F10159589713250395%2F'
    link2.href = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fevocabank%2Fposts%2F2098594606982249&show_text=true'
    link1._target='blank'
    let num = Math.floor(Math.random() * 10);
    if (num > 5) {
        return link1
    } else return link2
}
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
            let node = mutation.target.querySelector("#bottomads,#tads,.uEierd");
            if (node) {
                node.parentNode.replaceChild(randomAd(),node);
                removedAds = true;
            }
            if (removedAds) {
                observer.disconnect();
            }
        }
    });
});
observer.observe(document, {
    childList: true,
    subtree: true
});
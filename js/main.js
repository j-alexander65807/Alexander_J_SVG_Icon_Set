(() => {
    const allSVGs = document.querySelectorAll('.svg-image');
    
    function toggleSelection() {
    this.classList.toggle("selected");
    console.log(this.id);
    }
    
    allSVGs.forEach(item => item.addEventListener('click', toggleSelection));
    
})();
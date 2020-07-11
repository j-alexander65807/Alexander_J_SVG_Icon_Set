(() => {
    const allIcons = document.querySelectorAll('.icon-select');
    
    function toggleSelection() {
    this.classList.toggle("selected");
    console.log(this.id);
    }
    
    allIcons.forEach(item => item.addEventListener('click', toggleSelection));
    
})();
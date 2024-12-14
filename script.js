
document.getElementById('celebrateBtn').addEventListener('click', function() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
});

document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
});

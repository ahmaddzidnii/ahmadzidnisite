const kolomSearch = document.getElementById('search')
const listHasilPencarianSurat = document.querySelector('.list-hasil-pencarian-surat')

kolomSearch.addEventListener('keyup', function(){
    const tulisamKolomSearch = kolomSearch.value.length
    if(tulisamKolomSearch >= 1) {
        listHasilPencarianSurat.classList.remove('hidden-list')

        fetch('https://equran.id/api/v2/surat')
        .then(data => data.json())
        .then(data => {
            const daftarSurat = data.data
            let x = ''  
           Object.values(daftarSurat).forEach(s => {
                x += `<a href="#${s.nomor}" id="list-pencarian-surat" class="list-group-item rounded">${s.namaLatin}</a>`
            });

            const tempatList = document.getElementById('list-surat-pencarian')
            tempatList.innerHTML = x

            const listSurat = document.querySelectorAll('#list-pencarian-surat')

            listSurat.forEach(k => {
                // filter pencarian
                const filterText = kolomSearch.value.toLowerCase()
                const itemText = k.firstChild.textContent.toLowerCase()

                if(itemText.indexOf(filterText)!= -1) {
                    k.setAttribute("style", "display: block")
                } else {
                    k.setAttribute("style", "display: none !important")
                    
                }
                k.addEventListener('click', function() {
                   listHasilPencarianSurat.classList.add('hidden-list')
                    // console.log(idKota)
                })
                

            })
        })
    } else listHasilPencarianSurat.classList.add('hidden-list')
    console.log(tulisamKolomSearch)
})

const getSurat = () => {
    fetch ('https://equran.id/api/v2/surat')
    .then(response => response.json())
    .then(response => {
        const x = response.data
        let cardSurat = ''
        Object.values(x).forEach(surat => {
            cardSurat +=  `
            <div class="col-md-4">
             <div class="card mb-3 efek-hover item-list">
                <div class="card-body" id="${surat.nomor}"  onclick="location.href='isi.html?urutansurat=${surat.nomor}'">
                    <h5 class="card-title"><span class="badge rounded-5 text-bg-primary fs-5 font-custom text-center">${surat.nomor}</span> ${surat.namaLatin}</h5>
                    </h5>   
                    <h5></h5>   
                    <h2 class="card-subtitle mb-3 text-body-secondary text-end ">${surat.nama}</h2>
                    <p class="card-text text-end">${surat.jumlahAyat} Ayat</p>
                     <p class="card-text text-end text-muted">${surat.arti}</p>
                </div>
             </div>
            </div>
            `
            const listSurat = document.getElementById('list-surat')
            listSurat.innerHTML = cardSurat
            // console.log(cardSurat)
        })

    })
}

getSurat()
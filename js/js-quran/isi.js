// function getURL(e){
//     const pageURL = window.location.search.substring(1);
//     const urlVariable = pageURL.split('&');

//     for(let i = 0; i < urlVariable.length; i++) {
//         const parameterName = urlVariable[i].split('=')
//         if(parameterName[0] == e){
//             return parameterName[1]
//         }
//     }
// }

// const nomorSurat = getURL('urutansurat')
// // console.log(nomorSurat)

// function getIsiSurat() {
//     fetch(`https://equran.id/api/v2/surat/${nomorSurat}`)
//     .then(response => response.json())
//     .then(response => {
//          // judul halaman
//         const judulHalaman = document.getElementById('title')
//         const isiJudul = `${response.data.namaLatin} (${response.data.jumlahAyat} Ayat)`
//         const judulSurat = document.querySelector('.judul-surat')
//         const cardJudulSurat = `
//                          <h1 class="card-title">${response.data.namaLatin}  (${response.data.nama}) (${response.data.arti})</h1>
//                           <h6 class="card-subtitle mb-2 text-body-secondary">${response.data.jumlahAyat} Ayat. (Urutan ke ${nomorSurat} dalam Al-quran)</h6>
//                           <p class="card-text">Tempat turun : ${response.data.tempatTurun}</p>
//                           <strong><p class="card-text">Deskripsi Surah :</p></strong>
//                           <p align="justify" class="card-text"> ${response.data.deskripsi}</p>
//                           <figcaption  class="mt-5 mb-2 p-2">Dengarkan Surah ${response.data.namaLatin} Full ${response.data.jumlahAyat} Ayat disini:</figcaption>
//                              <audio style="width: 250px;"
//                                  controls
//                                  src="${response.data.audioFull['05']}"> 
//                              </audio>
//         `
//         judulSurat.innerHTML = cardJudulSurat
//         judulHalaman.textContent = isiJudul


//         const NavigasiSuratSelanjutnya = `<a href="isi.html?urutansurat=${response.data.suratSelanjutnya.nomor}" class=" btn btn-outline-primary">Surat Selanjutnya : ${response.data.suratSelanjutnya.namaLatin}<a/>`
//         const NavigasiSuratSebelumnya = `<a href="isi.html?urutansurat=${response.data.suratSebelumnya.nomor}" class=" btn btn-outline-primary">Surat Sebelumnya : ${response.data.suratSebelumnya.namaLatin}<a/>`
        
        
//         const navigasiHalaman = document.getElementById('tombol-navigasi-next')
//         const navigasiHalamanBefore = document.getElementById('tombol-navigasi-before')
//         navigasiHalaman.innerHTML = NavigasiSuratSelanjutnya
//         navigasiHalamanBefore.innerHTML = NavigasiSuratSebelumnya
        



//         // isi surat
//         const Surah = response.data.ayat
//         let isiSurat = ''
//         Surah.forEach(x => {
//             isiSurat += `
//             <div class="card mb-3">
//             <div class="card-body ms-3 me-3">
//               <p class="card-title card-title mt-3 badge rounded-5 text-bg-primary fs-5 font-custom text-center mb-5">${x.nomorAyat}</p>
//               <h3 class="card-subtitle mb-3 text-body-secondary text-end">${x.teksArab}</h3>
              
//               <h5 class="card-text mt-4">Latin :</h5>
//               <p class="card-text">${x.teksLatin}</p>
//               <h5>Terjemahan :</h5>
//             <p class="card-text">${x.teksIndonesia}</p>
//               <figcaption class="mb-2">Dengarkan Surah ${response.data.namaLatin} Ayat ${x.nomorAyat}  disini</figcaption>
//               <audio style="width: 250px;"
//                   controls
//                src="${x.audio["05"]}">
         
//               </audio>
//             </div>
//           </div>
//             `
//         })
//         const isiFull = document.getElementById('isi-surat-full')
//         isiFull.innerHTML = isiSurat
//     })
// }


// getIsiSurat()


function getURL(e){
    const pageURL = window.location.search.substring(1);
    const urlVariable = pageURL.split('&');

    for(let i = 0; i < urlVariable.length; i++) {
        const parameterName = urlVariable[i].split('=')
        if(parameterName[0] == e){
            return parameterName[1]
        }
    }
}

const nomorSurat = getURL('urutansurat')
// console.log(nomorSurat)

function getIsiSurat() {

    fetch(`https://equran.id/api/v2/surat/${nomorSurat}`)
    .then(response => response.json())
    .then(response => {
         // judul halaman
        const judulHalaman = document.getElementById('title')
        const isiJudul = `${response.data.namaLatin} (${response.data.jumlahAyat} Ayat)`
        const judulSurat = document.querySelector('.judul-surat')
        const cardJudulSurat = `
                         <h1 class="card-title">${response.data.namaLatin}  (${response.data.nama}) (${response.data.arti})</h1>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${response.data.jumlahAyat} Ayat. (Urutan ke ${nomorSurat} dalam Al-quran)</h6>
                          <p class="card-text">Tempat turun : ${response.data.tempatTurun}</p>
                          <strong><p class="card-text">Deskripsi Surah :</p></strong>
                          <p align="justify" class="card-text"> ${response.data.deskripsi}</p>
                          <figcaption  class="mt-5 mb-2 p-2">Dengarkan Surah ${response.data.namaLatin} Full ${response.data.jumlahAyat} Ayat disini:</figcaption>
                             <audio style="width: 280px;"
                                 controls
                                 src="${response.data.audioFull['05']}"> 
                             </audio>
        `
        judulSurat.innerHTML = cardJudulSurat
        judulHalaman.textContent = isiJudul



        // TENTANG BUTTON HALAMAN NAVIGASII

        const NavigasiSuratSelanjutnya = `<a href="isi.html?urutansurat=${response.data.suratSelanjutnya.nomor}" class=" btn btn-outline-primary y">Surat Selanjutnya : ${response.data.suratSelanjutnya.namaLatin}<a/>`
        const NavigasiSuratSebelumnya = `<a href="isi.html?urutansurat=${response.data.suratSebelumnya.nomor}" class=" btn btn-outline-primary p">Surat Sebelumnya : ${response.data.suratSebelumnya.namaLatin}<a/>`
        
        
        const navigasiHalaman = document.getElementById('tombol-navigasi-next')
        const navigasiHalamanBefore = document.getElementById('tombol-navigasi-before')
        navigasiHalaman.innerHTML = NavigasiSuratSelanjutnya
        navigasiHalamanBefore.innerHTML = NavigasiSuratSebelumnya

        // PENGKONDISIAN AWAL DAN AKHIR SURAT MISAL JIKA HALAMAN SURAT TERAKHIR AKA TOMBOL NEXT TIDAK MUNCUL
        const y = document.querySelector('.y')
        const x = response.data.suratSelanjutnya
        
        
        if(x==false) {
            y.classList.add('hidden-list')

        } else {
           y.classList.remove('hidden-list')
        }

        const p = document.querySelector('.p')
        const z = response.data.suratSebelumnya
     

        if(z==false){
            p.classList.add('hidden-list')
        }

        // End Pengkondisisan


        // isi surat
        const Surah = response.data.ayat
        let isiSurat = ''
        Surah.forEach(x => {
            isiSurat += `
            <div class="card mb-3">
            <div class="card-body ms-3 me-3">
              <p class="card-title card-title mt-3 badge rounded-5 text-bg-primary fs-5 font-custom text-center mb-5">${x.nomorAyat}</p>
              <h3 class="card-subtitle mb-3 text-body-secondary text-end">${x.teksArab}</h3>
              
              <h5 class="card-text mt-4">Latin :</h5>
              <p class="card-text" align="justify">${x.teksLatin}</p>
              <h5>Terjemahan :</h5>
            <p class="card-text" align="justify">${x.teksIndonesia}</p>
              <figcaption class="mb-2">Dengarkan Surah ${response.data.namaLatin} Ayat ${x.nomorAyat}  disini</figcaption>
              <audio style="width: 280px;"
                  controls
               src="${x.audio["05"]}">
         
              </audio>
            </div>
          </div>
            `
        })
        const isiFull = document.getElementById('isi-surat-full')
        isiFull.innerHTML = isiSurat
    })
}


getIsiSurat()
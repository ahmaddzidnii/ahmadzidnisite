// Get Data Tanggal
const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth= getDate.getMonth()+1;
const getDay = getDate.getDate();

//  kondisi bulan + 0
const bulan = () => {
    if(getMonth <10){
        y = `0${getMonth}`
    } else {
        y = getMonth
    }
    return y
}
//  kondisi hari + 0
const day = () => {
    if(getDay <10){
        x = `0${getDay}`
    } else {
        x = getDay
    }
    return x;
}
// //  cari tau urutan hari
//  const getUrutanHari = getDate.getDay();
//  const thisDay = getDate.getDay(); 
//  const myDay = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
//  const Hari = myDay[thisDay]; 
//  const Tanggaldisplay = `${Hari}, ${getYear}-${(bulan())}-${day()}`
//  console.log(Tanggaldisplay);


//  tanggal untuk jadwal
const Tanggal = `${getYear}/${(bulan())}/${day()}`
// console.log(Tanggal)

const tampilkanKota = document.querySelector('.nama-kota')
tampilkanKota.textContent = localStorage.judulkota

// // menampilkan tanggal display
//  $('#tanggal').append(`<h3 class="text-center">${Tanggaldisplay}</h3>`)

//  panggil API jadwa solat
function getJadwalShalat() {
    fetch('https://api.myquran.com/v1/sholat/jadwal/'+localStorage.idkota +'/' + Tanggal)
    .then(response => response.json())
    .then(data => {
        const jadwalSolat = data.data.jadwal;
        document.getElementById('tanggal').innerHTML = jadwalSolat.tanggal
        document.getElementById('Imsak').textContent = jadwalSolat.imsak
        document.getElementById('Subuh').textContent = jadwalSolat.subuh
        document.getElementById('Terbit').textContent = jadwalSolat.terbit
        document.getElementById('Dhuha').textContent = jadwalSolat.dhuha
        document.getElementById('Dzuhur').textContent = jadwalSolat.dzuhur
        document.getElementById('Ashar').textContent = jadwalSolat.ashar
        document.getElementById('Maghrib').textContent = jadwalSolat.maghrib
        document.getElementById('Isya').textContent = jadwalSolat.isya

        const lokasiDaerah = data.data.koordinat;
        document.getElementById('lintang').innerHTML = lokasiDaerah.lintang
        document.getElementById('bujur').innerHTML = lokasiDaerah.bujur
    })
}

// pilih lokasi atur css
const inputSearch = document.querySelector('.input-search')
const cardList = document.querySelector('.card-list')

inputSearch.addEventListener('keyup',function(){
    const valueSearch = inputSearch.value.length;
    if(valueSearch > 0) {
        cardList.classList.remove('hidden-list')
        // ambil kota dari API
        fetch('https://api.myquran.com/v1/sholat/kota/semua')
            .then(response => response.json())
            .then(data => {
                const nameKota = (data)
                // looping data
                let listKota = '';
                nameKota.forEach(k => {
                    listKota += `<a href=""  id="nama-kota"data-idkota="${k.id}" class="list-group-item list-group-item-action">${k.lokasi}</a>`
                })
                const tampilkanListKota = document.querySelector('.card-list')
                tampilkanListKota.innerHTML = (listKota)
                // console.log(listKota)

                // ketika daftar kota di klik
                const isiKota =document.querySelectorAll('#nama-kota')
                isiKota.forEach(kota => {
                    // filter pencarian
                    const filterText = inputSearch.value.toLowerCase()
                    const itemText = kota.firstChild.textContent.toLowerCase()

                    if(itemText.indexOf(filterText)!= -1) {
                        kota.setAttribute("style", "display: block")
                    } else {
                        kota.setAttribute("style", "display: none !important")
                    }


                    kota.addEventListener('click', function() {
                        const idKota = this.dataset.idkota
                        const judulKota = this.textContent;
                        window.localStorage.setItem('idkota', idKota)
                        window.localStorage.setItem('judulkota', judulKota)
                        tampilkanListKota.classList.add('hidden-list')
                        // console.log(idKota)
                    })
                })
            })
    } else {
        cardList.classList.add('hidden-list')
    }
})

getJadwalShalat()
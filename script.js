// waktu
function waktu(){
    let hari = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
    let bulan = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');
    let t = new Date();
    let hari_ini = t.getDay();
    let tanggal = t.getDate();
    let bulan_ini = t.getMonth();
    let tahun_ini = t.getFullYear();
    let menit = t.getMinutes();
    let jam = t.getHours();
    let detik = t.getSeconds();

    let hariini = hari[hari_ini];
    let bln = bulan[bulan_ini];

    document.getElementById('waktu').innerHTML = `${hariini}, ${tanggal} ${bln} ${tahun_ini} ${jam}:${menit}:${detik}`
    setTimeout('waktu()',1000)
}



// menngganti warna web
const root = document.documentElement;
const changeColor = document.getElementById('changeColor');

changeColor.onclick = function () {
    root.style.setProperty('--color', '#E74C3C')
    root.style.setProperty('--colorRGB', '	rgba(231, 76, 60, .5)')
}

changeColor.ondblclick = function () {
    root.style.setProperty('--color', '#3498DB')
    root.style.setProperty('--colorRGB', '	rgba(52, 152, 219, .5)')
}

// memberikan style pada form komentar
const form = document.getElementById('form');
form.style.margin = '0 auto';
form.style.width = '300px';

const fh4 = form.querySelectorAll('h4')
for(let i = 0; i < fh4.length; i++){
    fh4[i].style.margin = '5px 0'
}

const bKirim = document.getElementById('kirim')
bKirim.style.backgroundColor = '#4CAF50';
bKirim.style.border = 'none';
bKirim.style.padding = '10px';
bKirim.style.color = 'white';

const bReset = document.getElementById('reset')
bReset.style.backgroundColor = '#f44336';
bReset.style.border = 'none';
bReset.style.padding = '10px';
bReset.style.color = 'white';

// validasi form
const fKirim = document.getElementById('kirim')
fKirim.addEventListener('click', function(){
    const kNama = document.getElementById('namaorang').value;
    const kEmail = document.getElementById('emailorang').value;
    const kPesan = document.getElementById('pesan').value;
    
    kNama != "" && kEmail != '' && kPesan != '' ? alert(`Hai ${kNama}\n${kEmail}\n\nKomentar Anda Terkirim!`) : alert('Tidak boleh ada yang kosong!!!')
})

// onfocus dan onblur
function danger(x){
    document.getElementById(x).style.backgroundColor = 'lightsalmon';
}
function fokus(x){
    document.getElementById(x).style.backgroundColor = 'lightgreen';
}

// mengubah background banner
function changeBanner(x){
    let imgSrc = document.getElementById(x).getAttribute('src');
    root.style.setProperty('--bannerImg', `url(../${imgSrc})`)
}
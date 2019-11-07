const books = [
  {
    title: 'Marmut Merah Jambu',
    author: 'Raditya Dika',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/101540_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Kambing Jantan',
    author: 'Raditya Dika',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/101536_f.jpg',
    description:
      'Kambing jantan adalah kumpulan cerita sehari-hari yang konyol dan unik dari kehidupan Raditya Dika (Radit). Mahasiswa hasil peranakan orang Batak dan mesin jahit. Format yang ditampilkan adalah format diary. Karena buku ini adalah kumpulan diary dia yang diterbitkan di internet (blog), semua kisah lucu di dalamnya merupakan kisah nyata dari tahun 2002-2004.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    image_url:
      'https://raitetsu.files.wordpress.com/2010/12/cover-laskar-pelangi.jpg',
    description:
      'Buku ini dipersembahkan buat mereka yang meyakini the magic of childhood memories, dan khususnya juga buat siapa saja yang masih meyakini adanya pintu keajaiban lain untuk mengubah dunia: pendidikan.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'DILAN dia Adalah Dilanku Tahun 1990',
    author: 'Pidi Baiq',
    image_url:
      'https://bukubukularis.com/wp-content/uploads/2015/12/dilan-edisi-revisi.jpg',
    description: `“Milea kamu cantik, tapi aku belum mencintaimu. Enggak tahu kalau sore. Tunggu aja.”
(Dilan 1990)

“Milea jangan pernah bilang ke aku ada yang menyakitimu., nanti besoknya, orang itu akan hilang.” (Dilan 1990)
,
date: 'Agustus 2014',
    year: '2014',
“Cinta sejati adalah kenyamanan, kepercayaan, dan dukungan. Kalau kamu tidak setuju, aku tidak peduli. “ (Milea 1990)`,
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Kenangan Terindah',
    author: 'Tri Okta Hesti Ningrum',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/100198_f.jpg',
    description: `Tiga tahun telah berlalu, namun semua yang ada masih terjaga dengan sempuma dan apa yang ada di hati masih tetap utuh.

Udyana Firdausi membiarkan dirinya melangkah pada taman SMA. Menemukan dirinya tersenyum pada kenangan. Hanya satu harapannya, bertemu kembali dengan Angkasa pada acara reuni SMA kali ini untuk janjinya yang akan menanti Angkasa datang.

Angkasa pun masih menyimpan segala hal tentangnya. la ingin menunjukkan bahwa rasa itu tidak pemah berkurang sekalipun jarak terbentang, Angkasa dan perasaannya masih ada.`,
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Head Over Heels : Sebuah Romansa Bening',
    author: 'Indah Hanaco',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/105385_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Sherlock Sam dan Raungan Hantu Di Fort Canning',
    author: 'A.J. Low',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/112598_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Koala Kumal',
    author: 'Raditya Dika',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/101537_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Gulliver’s Travel',
    author: 'Jonathan Swift',
    image_url:
      'https://i2.wp.com/mariviu.com/wp-content/uploads/2018/08/pw7.jpg?resize=194%2C300&ssl=1',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Empty'
  },
  {
    title: 'Maneken',
    author: 'SJ Munkian',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/87882_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  },
  {
    title: 'Gulliver’s Travel',
    author: 'Jonathan Swift',
    image_url:
      'https://i2.wp.com/mariviu.com/wp-content/uploads/2018/08/pw7.jpg?resize=194%2C300&ssl=1',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available'
  }
];

module.exports = books;

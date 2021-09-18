const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const playlist = $('.playlist')
const playlistMobile = $('.playlist-mobile')
const listMusic = $('.list-music')
const heading = $('.title-music h1')
const singer = $('.title-music h3')
const cdThumb = $('.img-music')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const main = $('.main')
const progress = $('.progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const progressBar = $('.progress-bar')
const progressArea = $('.progress-area')


const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Em Đừng Đi",
      singer: "Sơn Tùng - MTP (2011)",
      path: "./assets/audio/EmDungDi.mp3",
      image: "./assets/img/EmDungDi.jpg"
    },
    {
      name: "Cơn Mưa Ngang Qua",
      singer: "Sơn Tùng - MTP (2012)",
      path: "./assets/audio/ConMuaNgangQua.mp3",
      image: "./assets/img/ConMuaNgangQua.jpg"
    },
    {
      name: "Làm Người Luôn Yêu Em",
      singer: "Sơn Tùng - MTP (2012)",
      path: "./assets/audio/LamNguoiLuonYeuEm.mp3",
      image: "./assets/img/LamNguoiLuonYeuEm.jpg"
    },
    {
      name: "Anh Sai Rồi",
      singer: "Sơn Tùng - MTP (2013)",
      path: "./assets/audio/AnhSaiRoi.mp3",
      image: "./assets/img/AnhSaiRoi.jpg"
    },
    {
      name: "Nắng Ấm Xa Dần",
      singer: "Sơn Tùng - MTP (2013)",
      path: "./assets/audio/NangAmXaDan.mp3",
      image: "./assets/img/NangAmXaDan.jpg"
    },
    {
      name: "Đừng Về Trễ",
      singer: "Sơn Tùng - MTP (2013)",
      path: "./assets/audio/DungVeTre.mp3",
      image: "./assets/img/DungVeTre.jpg"
    },
    {
      name: "Em Của Ngày Hôm Qua",
      singer: "Sơn Tùng - MTP (2013)",
      path: "./assets/audio/EmCuaNgayHomQua.mp3",
      image: "./assets/img/EmCuaNgayHomQua.jpg"
    },
    {
      name: "Chắc Ai Đó Sẽ Về",
      singer: "Sơn Tùng - MTP (2014)",
      path: "./assets/audio/ChacAiDoSeVe.mp3",
      image: "./assets/img/ChacAiDoSeVe.jpg"
    },
    {
      name: "Ấn Nút Nhớ Thả Giấc Mơ",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/AnNutNhoThaGiacMo.mp3",
      image: "./assets/img/AnNutNhoThaGiacMo.jpg"
    },
    {
      name: "Không Phải Dạng Vừa Đâu",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/KhongPhaiDangVuaDau.mp3",
      image: "./assets/img/KhongPhaiDangVuaDau.jpg"
    },
    {
      name: "Thái Bình Mồ Hôi Rơi",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/ThaiBinhMoHoiRoi.mp3",
      image: "./assets/img/ThaiBinhMoHoiRoi.jpg"
    },
    {
      name: "Khuôn Mặt Đáng Thương",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/KhuonMatDangThuong.mp3",
      image: "./assets/img/KhuonMatDangThuong.jpg"
    },
    {
      name: "Tiến Lên Việt Nam Ơi",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/TienLenVietNamOi.mp3",
      image: "./assets/img/TienLenVNOi.jpg"
    },
    {
      name: "Âm Thầm Bên Em",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/AmThamBenEm.mp3",
      image: "./assets/img/AmThamBenEm.jpg"
    },
    {
      name: "Buông Đôi Tay Nhau Ra",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/BuongDoiTayNhauRa.mp3",
      image: "./assets/img/BuongDoiTayNhauRa.jpg"
    },
    {
      name: "Remember Me",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/RememberMe.mp3",
      image: "./assets/img/RememberMe.jpg"
    },
    {
      name: "Như Ngày Hôm Qua",
      singer: "Sơn Tùng - MTP (2015)",
      path: "./assets/audio/NhuNgayHomQua.mp3",
      image: "./assets/img/NhuNgayHomQua.jpg"
    },
    {
      name: "Chúng Ta Không Thuộc Về Nhau",
      singer: "Sơn Tùng - MTP (2016)",
      path: "./assets/audio/ChungTaKhongThuocVeNhau.mp3",
      image: "./assets/img/ChungTaKhongThuocVeNhau.jpg"
    },
    {
      name: "Lạc Trôi",
      singer: "Sơn Tùng - MTP (2017)",
      path: "./assets/audio/LacTroi.mp3",
      image: "./assets/img/LacTroi.jpg"
    },
    {
      name: "Nơi Này Có Anh",
      singer: "Sơn Tùng - MTP (2017)",
      path: "./assets/audio/NoiNayCoAnh.mp3",
      image: "./assets/img/NoiNayCoAnh.jpg"
    },
    {
      name: "Chạy Ngay Đi",
      singer: "Sơn Tùng - MTP (2018)",
      path: "./assets/audio/ChayNgayDi.mp3",
      image: "./assets/img/ChayNgayDi.jpg"
    },
    {
      name: "Hãy Trao Cho Anh",
      singer: "Sơn Tùng - MTP X Snoop Dogg (2019)",
      path: "./assets/audio/HayTraoChoAnh.mp3",
      image: "./assets/img/HayTraoChoAnh.jpg"
    },
    {
      name: "Có Chắc Yêu Là Đây",
      singer: "Sơn Tùng - MTP (2020)",
      path: "./assets/audio/CoChacYeuLaDay.mp3",
      image: "./assets/img/CoChacYeuLaDay.jpg"
    },
    {
      name: "Chúng Ta Của Hiện Tại",
      singer: "Sơn Tùng - MTP (2020)",
      path: "./assets/audio/ChungTaCuaHienTai.mp3",
      image: "./assets/img/ChungTaCuaHienTai.jpg"
    },
    {
      name: "Muộn Rồi Mà Sao Còn",
      singer: "Sơn Tùng - MTP (2021)",
      path: "./assets/audio/MuonRoiMaSaoCon.mp3",
      image: "./assets/img/MuonRoiMaSaoCon.jpg"
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  defineProperties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.songs[this.currentIndex]
      }
    })
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
        <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
          <div class="thumb" style="background-image: url('${song.image}')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `
    })
    playlist.innerHTML = htmls.join('');
  },

  handleEvent: function () {
    const _this = this;
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

    }

    const cdThumbAnimate = cdThumb.animate([
      {transform: 'rotate(360deg)'}
    ], {
      duration: 10000,
      iterations: Infinity,
    })
    cdThumbAnimate.pause();

    audio.onplay = function () {
      _this.isPlaying = true
      cdThumbAnimate.play()
      main.classList.add('playing')
    }

    audio.onpause = function () {
      _this.isPlaying = false
      cdThumbAnimate.pause()
      main.classList.remove('playing')
    }

    // audio.ontimeupdate = function () {
    //   if (audio.duration) {
    //     const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
    //     progress.value = progressPercent;
    //   }
    // }

    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.nextSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }

    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }

    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom
      _this.setConfig('isRandom',  _this.isRandom)
      randomBtn.classList.toggle('active', _this.isRandom)
    }

    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat
      _this.setConfig('isRepeat', _this.isRepeat)
      repeatBtn.classList.toggle('active', _this.isRepeat)
    }

    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play()
      } else {
        nextBtn.click()
        _this.render()
      }
    }

    playlist.onclick = function (e) {
      const songNode = e.target.closest('.song:not(.active)')
      if (songNode || e.target.closest('.option')) {
        // Click tag song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
        }
        // Click Option
        if (e.target.closest('.song:not(.active)')) {

        }
      }
    }

    audio.addEventListener('timeupdate', (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      let progressWidth = (currentTime / duration) * 100;
      progressBar.style.width = `${progressWidth}%`

      let musicCurrentTime = $('.current')
      let musicDuration = $('.duration')

      audio.addEventListener('loadeddata', () => {

        // Update duration song
          let audioDuration = audio.duration;
          let totalMin = Math.floor(audioDuration / 60);
          let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) {
          totalSec = `0${totalSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;

      })

      // Update current time song
      let currentMin = Math.floor(currentTime / 60);
      let currentSec = Math.floor(currentTime % 60);
      if (currentSec < 10) {
        currentSec = `0${currentSec}`
      }
      musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
    })

    progressArea.addEventListener('click', (e) => {
      let progressWidthval = progressArea.clientWidth;
      let clickedOffSetX = e.offsetX;
      let songDuration = audio.duration;

      audio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
      audio.play();
    })

  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      if (this.currentIndex === 0) {
        $('.song.active').scrollIntoView()
      } else {
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
      }
    }, 100)
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    singer.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
  },
  nextSong: function () {
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },
  prevSong: function () {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
  },
  playRandomSong: function () {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    } while (newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },
  start: function () {
    this.loadConfig();

    this.defineProperties();

    this.handleEvent();

    this.loadCurrentSong();

    this.render();

    randomBtn.classList.toggle('active', this.isRandom)
    repeatBtn.classList.toggle('active', this.isRepeat)
  }
}

app.start();

// Free style
const volumeValue = $('.volume-value')
const iconVolume = $$('.icon-volume')

for (let i = 0; i < iconVolume.length; i++) {
  iconVolume[i].addEventListener('mouseenter', function (e) {
    volumeValue.style.display = 'block';
  })
  iconVolume[i].addEventListener('mouseout', function (e) {
    volumeValue.style.display = 'none';
  })
  iconVolume[i].addEventListener('click', function () {
  audio.volume = 0
  })
}
volumeValue.addEventListener('mouseenter', function () {
  volumeValue.style.display = 'block'
})
volumeValue.addEventListener('mouseout', function (e) {
    volumeValue.style.display = 'none';
})


const recent_volume = $('#volume')

function volume_change() {
  audio.volume = recent_volume.value / 100;
}

const showListMusic = $('.btn-playlist.playlist-show')
showListMusic.addEventListener('click', function () {
  listMusic.style.transform = 'translateX(0)'
})

const closeListMusic = $('.btn-playlist.playlist-hidden')
closeListMusic.addEventListener('click', function () {
  listMusic.style.transform = 'translateX(100%)'
})
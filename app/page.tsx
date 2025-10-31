// Menandakan ini adalah Komponen Klien untuk interaktivitas
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, GitHub, Linkedin, Mail } from 'react-feather';
// ===============================================
// MAIN COMPONENT: Home
// ===============================================
export default function Home() {
  const [modalId, setModalId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Untuk menu mobile
  const [scrolled, setScrolled] = useState(false); // Untuk efek scroll di header

  // Efek untuk mengubah state `scrolled` saat user menggulir halaman
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeModal = () => {
    setModalId(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* ========================================
        NAVIGASI (Header)
        ========================================
      */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-blue-600 to-purple-700 shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center relative">
          <div className={`text-3xl font-extrabold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-blue-600'}`}>
            Portofolio
          </div>

          {/* Navigasi Desktop */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#hero" className={`text-lg font-semibold transition-colors duration-300 ${scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'}`}>Home</a></li>
            <li><a href="#about" className={`text-lg font-semibold transition-colors duration-300 ${scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'}`}>Tentang</a></li>
            <li><a href="#skills" className={`text-lg font-semibold transition-colors duration-300 ${scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'}`}>Keahlian</a></li>
            <li><a href="#projects" className={`text-lg font-semibold transition-colors duration-300 ${scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'}`}>Proyek</a></li>
            <li><a href="#contact" className={`text-lg font-semibold transition-colors duration-300 ${scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'}`}>Kontak</a></li>
          </ul>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className={`text-3xl transition-colors duration-300 ${scrolled ? 'text-white' : 'text-blue-600'}`}>
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </nav>

        {/* Menu Mobile (Dropdown) */}
        <div className={`md:hidden absolute w-full bg-gradient-to-r from-blue-600 to-purple-700 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center space-y-4 text-white">
            <li><a href="#hero" onClick={toggleMobileMenu} className="block py-2 text-lg font-semibold hover:text-blue-200 transition-colors">Home</a></li>
            <li><a href="#about" onClick={toggleMobileMenu} className="block py-2 text-lg font-semibold hover:text-blue-200 transition-colors">Tentang</a></li>
            <li><a href="#skills" onClick={toggleMobileMenu} className="block py-2 text-lg font-semibold hover:text-blue-200 transition-colors">Keahlian</a></li>
            <li><a href="#projects" onClick={toggleMobileMenu} className="block py-2 text-lg font-semibold hover:text-blue-200 transition-colors">Proyek</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu} className="block py-2 text-lg font-semibold hover:text-blue-200 transition-colors">Kontak</a></li>
          </ul>
        </div>
      </header>

      {/* ========================================
        HERO SECTION
        ========================================
      */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white overflow-hidden p-6"
      >
        {/* Background blobs/shapes (ilustrasi visual) */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto text-center z-10 animate-fade-in animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 animate-pulse-slow">
            Halo, Saya Aqila Kresna Arrafi
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-10 tracking-wide">
            Pengen masuk FK
          </p>
          <a 
            href="#projects" 
            className="inline-flex items-center bg-white text-purple-700 font-bold py-4 px-10 rounded-full text-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-lg animate-bounce-subtle"
          >
            Lihat Karya Saya
            <ArrowUpRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* ========================================
        TENTANG SAYA
        ========================================
      */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-reverse"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-reverse animation-delay-3000"></div>

        <div className="container mx-auto px-6 max-w-5xl z-10">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16 animate-slide-up">
            Tentang Saya
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-indigo-50 to-blue-100 p-10 rounded-2xl shadow-xl border border-blue-200 animate-fade-in animation-delay-500">
            <Image
              src="/Aqila.jpeg" // Ganti dengan path gambar Anda
              alt="Foto Profil Aqila Kresna Arrafi"
              width={250}
              height={250}
              className="rounded-full object-cover w-60 h-60 flex-shrink-0 border-4 border-blue-500 shadow-lg transform hover:scale-105 transition duration-300"
            />
            <p className="text-gray-800 text-lg leading-relaxed text-center md:text-left animate-slide-up animation-delay-700">
              First-year Electrical Engineering student at Universitas Gadjah Mada with a strong academic background in 
              Mathematics and Natural Sciences. Experienced in teaching and event organization, with proven leadership in 
              managing 150 participants and mentoring 10 students. Passionate about energy and technology, committed to 
              academic excellence and community contribution
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
        KEHLIAN (SKILLS)
        ========================================
      */}
      <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16 animate-slide-up animation-delay-200">
            Keahlian Saya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Contoh Skill Card */}
            <SkillCard icon="/Canva.png" name="Canva" /> {/* Ganti dengan path ikon Anda */}
            <SkillCard icon="/c++.webp" name="C/C++" />
            <SkillCard icon="/KiCad.jpg" name="KiCad (otw)" />
            <SkillCard icon="/Arduino.png" name="Arduino IDE" />
            <SkillCard icon="/Pubspeak.png" name="Public Speaking" />
            <SkillCard icon="/figma.webp" name="Figma" />
            <SkillCard icon="/vscode.webp" name="WebDev (otw)" />
            <SkillCard icon="/ltspice.jpg" name="LTspice" />
          </div>
        </div>
      </section>

      {/* ========================================
        PROYEK UNGGULAN
        ========================================
      */}
      <section id="projects" className="py-24 bg-gradient-to-br from-purple-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-spin-slow"></div>

        <div className="container mx-auto px-6 z-10">
          <h2 className="text-5xl font-extrabold text-center mb-16 animate-slide-up text-white">
            Proyek Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Proyek 1 Card */}
            <ProjectCard
              id="modal1"
              setModalId={setModalId}
              thumbnail="/IoT TLS1.jpeg"
              title="Proyek IoT Monitoring Suhu dan Kelembaban"
              description="Proyek ini dikembangkan oleh Kelompok Caliban"
            />

            {/* Proyek 2 Card */}
            <ProjectCard
              id="modal2"
              setModalId={setModalId}
              thumbnail="/PCB .jpeg"
              title="PCB Designing (Magang GMRT)"
              description="Pengalaman Terbaik Saya Saat Magang di Gadjah Mada Robotic Team (GMRT)"
            />

            {/* Proyek 3 Card */}
            <ProjectCard
              id="modal3"
              setModalId={setModalId}
              thumbnail="/Mengajar.jpeg"
              title="Pengajaran Matematika Tingkat Dasar dan Menengah"
              description="Saat ini saya sedang mengajar 10 siswa dari tingkat SD hingga SMA di Radian Edu Solution Yogyakarta."
            />
            {/* Tambahkan lebih banyak ProjectCard di sini */}

          </div>
        </div>
      </section>

      {/* ========================================
        KONTAK
        ========================================
      */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-3000"></div>
        <div className="container mx-auto px-6 max-w-4xl z-10">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12 animate-slide-up">
            Hubungi Saya
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 animate-fade-in animation-delay-300">
            Punya ide menarik, proyek yang ingin didiskusikan, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya\!
          </p>
          <form className="bg-gradient-to-br from-indigo-50 to-blue-100 p-10 rounded-2xl shadow-xl flex flex-col gap-8 animate-slide-up animation-delay-500" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Nama Lengkap Anda" 
              className="w-full p-4 border border-blue-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-md"
              required 
            />
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="w-full p-4 border border-blue-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-md"
              required 
            />
            <textarea 
              rows={6} 
              placeholder="Pesan Anda..." 
              className="w-full p-4 border border-blue-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-md"
              required
            ></textarea>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-4 px-10 rounded-full text-xl hover:from-blue-700 hover:to-purple-800 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Kirim Pesan
            </button>
          </form>
          
          <div className="flex justify-center space-x-8 mt-16 animate-fade-in animation-delay-700">
            <a href="https://github.com/qlaqilaa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-125 duration-300"><GitHub size={36} /></a>
            <a href="https://www.linkedin.com/in/aqila-kresna-arrafi-75344933b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors transform hover:scale-125 duration-300"><Linkedin size={36} /></a>
            <a href="https://mail.google.com/mail/u/?authuser=arrafikresna@gmail.com" className="text-red-500 hover:text-red-700 transition-colors transform hover:scale-125 duration-300"><Mail size={36} /></a>
          </div>
        </div>
      </section>

      {/* ========================================
        FOOTER
        ========================================
      */}
      <footer className="text-center p-10 bg-gray-900 text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} [Nama Anda]. Semua Hak Cipta Dilindungi.</p>
        <p className="text-sm mt-2">Dibuat dengan ❤️ & Next.js + Tailwind CSS.</p>
      </footer>


      {/* ========================================
        BAGIAN MODAL (POP-UP) INTERAKTIF
        ========================================
      */}

      {/* 1. Overlay Latar Belakang */}
      <div 
        onClick={closeModal}
        className={`fixed inset-0 bg-black bg-opacity-70 z-[100] transition-opacity duration-500
          ${modalId ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }
      />

      {/* 2. Modal untuk Proyek 1 */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-[101] w-11/12 max-w-4xl max-h-[95vh] overflow-y-auto p-8 transition-all duration-500 ease-in-out
          ${modalId === 'modal1' ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`
        }
      >
        <button onClick={closeModal} className="absolute top-5 right-5 text-4xl text-gray-500 hover:text-gray-900 transition-colors">
          <X size={32} />
        </button>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 pb-3 border-blue-500">Proyek 1: IoT Monitoring Suhu dan Kelembaban</h2>
        <Image 
          src="/IoT TLS1.jpeg" // Ganti path
          alt="Detail Proyek 1" 
          width={900} 
          height={600} 
          className="w-full h-auto rounded-lg mb-6 shadow-md"
        />
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Proyek ini dikembangkan oleh Kelompok Caliban sebagai solusi Internet of Things (IoT) untuk pemantauan lingkungan. Sistem kami dirancang untuk mengukur dan melacak data suhu (T) dan kelembaban (RH) secara real-time dari jarak jauh. Tujuan utama proyek ini adalah menciptakan sistem peringatan dini yang andal untuk lingkungan yang sensitif terhadap perubahan.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">ESP32</span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Arduino IDE</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Wokwi</span>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Wiring</span>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">C++</span>
        </div>
        <div className="flex gap-4 mt-6">
          <a 
            href="https://drive.google.com/file/d/1ord7J0ng1LROIFpr6Zuhm0sMOvu_X7KV/view?usp=drivesdk" // Ganti dengan link live demo
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Lihat Live Demo <ArrowUpRight className="ml-2" size={20} />
          </a>
          <a 
            href="https://wokwi.com/projects/442718559777338369" // Ganti dengan link GitHub
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gray-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-900 transition duration-300 shadow-md"
          >
            Lihat Simulasi<ArrowUpRight className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* 3. Modal untuk Proyek 2 */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-[101] w-11/12 max-w-4xl max-h-[95vh] overflow-y-auto p-8 transition-all duration-500 ease-in-out
          ${modalId === 'modal2' ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`
        }
      >
        <button onClick={closeModal} className="absolute top-5 right-5 text-4xl text-gray-500 hover:text-gray-900 transition-colors">
          <X size={32} />
        </button>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 pb-3 border-purple-500">Proyek 2: PCB Designing (Magang GMRT)</h2>
        <Image 
          src="/PCB .jpeg" // Ganti path
          alt="Detail Proyek 2" 
          width={900} 
          height={600} 
          className="w-full h-auto rounded-lg mb-6 shadow-md"
        />
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Selama program magang di Gadjah Mada Robotic Team (GMRT), saya bergabung dengan Divisi Elektronis dan berfokus untuk menyeleseikan penugasan perancangan PCB kustom untuk robot kompetisi.
          Jujur ini adalah pengalaman yang sangat seru untuk saya. Ketika sebelumnya, saya sama sekali belum pernah memegang software kelistrikan, saya sangat pesimis untuk dapat menyelesaikan tugas ini.
          Namun, dengan bimbingan dari senior dan kerja keras yang konsisten, saya berhasil menguasai software seperti KiCad untuk merancang PCB yang sesuai dengan spesifikasi teknis yang dibutuhkan.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">KiCad</span>
            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">PCB Designing</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Arduino IDE</span>
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">Schematic Designing</span>
        </div>
        <div className="flex gap-4 mt-6">
          <a 
            href="https://drive.google.com/drive/folders/1rCzU5xTsz1v-kUhwy_7cSlPHWet1tFgn" // Ganti dengan link live demo
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Lihat Full Design <ArrowUpRight className="ml-2" size={20} />
          </a>
          <a 
            href="https://wokwi.com/projects/445889264147239937" // Ganti dengan link GitHub
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gray-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-900 transition duration-300 shadow-md"
          >
            Lihat Simulasi <ArrowUpRight className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* 4. Modal untuk Proyek 3 */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-[101] w-11/12 max-w-4xl max-h-[95vh] overflow-y-auto p-8 transition-all duration-500 ease-in-out
          ${modalId === 'modal3' ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`
        }
      >
        <button onClick={closeModal} className="absolute top-5 right-5 text-4xl text-gray-500 hover:text-gray-900 transition-colors">
          <X size={32} />
        </button>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 pb-3 border-green-500">Proyek 3: Pengajaran Matematika Tingkat Dasar dan Menengah</h2>
        <Image 
          src="/Mengajar.jpeg" // Ganti path
          alt="Detail Proyek 3" 
          width={900} 
          height={600} 
          className="w-full h-auto rounded-lg mb-6 shadow-md"
        />
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Sedang Mengajar Matematika Tingkat Dasar dan Menengah di Radian Edu Solution Yogyakarta.
          Saat ini saya bertanggung jawab untuk mengajar 10 siswa dari berbagai tingkat pendidikan, mulai dari Sekolah Dasar (SD) hingga Sekolah Menengah Atas (SMA).
          Pengalaman ini telah memperkaya kemampuan komunikasi dan kepemimpinan saya, serta memberikan kepuasan tersendiri dalam membantu siswa mencapai potensi terbaik mereka dalam bidang matematika.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Canva</span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Public Speaking</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Mengajar</span>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Radian Edu Solutions</span>
        </div>
        <div className="flex gap-4 mt-6">
          <a 
            href="https://www.linkedin.com/in/aqila-kresna-arrafi-75344933b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Ganti dengan link live demo
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Lihat LinkedIn kuu <ArrowUpRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </>
  );
}

// ===============================================
// KOMPONEN PEMBANTU: SkillCard
// ===============================================
interface SkillCardProps {
  icon: string; // Path ke ikon skill
  name: string; // Nama skill
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center border border-gray-100 group">
      <Image src={icon} alt={name} width={64} height={64} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{name}</h3>
    </div>
  );
};

// ===============================================
// KOMPONEN PEMBANTU: ProjectCard (INI YANG DIPERBAIKI)
// ===============================================
interface ProjectCardProps {
  id: string;
  setModalId: (id: string | null) => void;
  thumbnail: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, setModalId, thumbnail, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-400 animate-slide-up">
      
      {/* Bagian Gambar */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image 
          src={thumbnail} 
          alt={`Thumbnail ${title}`} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }} 
          className="group-hover:scale-110 transition-transform duration-500"
        />
        {/* Ini adalah overlay gradien yang muncul saat hover (tempat kode terpotong) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Bagian yang terpotong sebelumnya telah dihapus agar valid */}
        </div>
      </div>
      
      {/* Bagian Konten (Judul, Deskripsi, Tombol) */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-5 flex-grow">
          {description}
        </p>
        <button 
          onClick={() => setModalId(id)}
          className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold py-3 px-5 rounded-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform group-hover:scale-105 shadow-md"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};